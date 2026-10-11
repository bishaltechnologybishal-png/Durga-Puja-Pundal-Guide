/* script.js — pandals-data.js আগে লোড হতে হবে */

const PAGE_SIZE = 20;
const FALLBACK_IMG = wiki("Durga%20Puja%20pandal%20decorations%20in%20Kolkata.jpg");

/* ---------- সার্চ নর্মালাইজার ---------- */
function normalise(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[\u200c\u200d]/g, "")
    .replace(/[’'`]/g, "")
    .replace(/[.,/#!$%^&*;:{}=\-_~()|—–+?"“”]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ইংরেজি বানানের পার্থক্য মেলানো: baghbazar = bagbazar, shobha = sovha ইত্যাদি */
function phon(value) {
  return normalise(value)
    .replace(/sh/g, "s")
    .replace(/ph/g, "f")
    .replace(/([bcdgjkpt])h/g, "$1")
    .replace(/ee/g, "i")
    .replace(/oo/g, "u")
    .replace(/w/g, "v")
    .replace(/z/g, "j")
    .replace(/([a-z])\1+/g, "$1");
}

/* শেষ ভরসা: স্বরবর্ণ বাদ দিয়ে মেলানো (bhowanipore ~ bhawanipur) */
function skeleton(value) {
  return phon(value).replace(/[aeiouy]/g, "");
}

/* ---------- ডেটা তৈরি ---------- */
const pandals = RAW_PANDALS.map((row, index) => {
  const [name, areaKey, famous, extra = {}] = row;
  const area = AREAS[areaKey];
  const [areaLabel, zone, metro, rail, alias] = area;

  const item = {
    id: index + 1,
    name,
    zone,
    zoneLabel: areaLabel,
    railway: rail,
    metro,
    famous: famous || "এলাকার জনপ্রিয় পূজা",
    desc: extra.desc ||
      "প্যান্ডেলের সঠিক প্রবেশপথ, রাস্তা বন্ধের তথ্য ও যাতায়াত রুট যাত্রার আগে Google Maps-এ দেখে নাও।",
    map: extra.map || name + " Durga Puja Kolkata",
    image: extra.image || IMAGE_POOL[index % IMAGE_POOL.length]
  };

  const text = [
    name, areaLabel, zone, ZONE_EN[zone], metro, rail, alias,
    item.famous, item.map, extra.keywords, "metro station railway durga puja pandal"
  ].join(" ");

  item._t = phon(text);
  item._c = item._t.replace(/ /g, "");
  item._s = skeleton(text);
  return item;
});

/* ---------- এলিমেন্ট ---------- */
const container = document.getElementById("pandalContainer");
const input = document.getElementById("searchInput");
const searchWrap = document.getElementById("searchForm");
const resultsLine = document.getElementById("resultsLine");
const noResults = document.getElementById("noResults");
const modal = document.getElementById("pandalModal");
const loadMoreBtn = document.getElementById("loadMore");
const favToggle = document.getElementById("favToggle");

let selectedZone = null;   // null = সব এলাকা
let showFavs = false;
let visibleCount = PAGE_SIZE;

/* ---------- পছন্দের তালিকা ---------- */
let favs = new Set();
try {
  favs = new Set(JSON.parse(localStorage.getItem("pandalFavs") || "[]"));
} catch (e) { /* storage বন্ধ থাকলে চলবে */ }

function saveFavs() {
  try { localStorage.setItem("pandalFavs", JSON.stringify([...favs])); } catch (e) {}
}

/* ---------- ফিল্টার ---------- */
function matchQuery(item, query) {
  const tokens = phon(query).split(" ").filter(Boolean);
  return tokens.every(t => item._t.includes(t) || item._c.includes(t));
}

function matchSkeleton(item, query) {
  const tokens = skeleton(query).split(" ").filter(t => t.length >= 2);
  return tokens.length > 0 && tokens.every(t => item._s.includes(t));
}

function zoneMatches(item) {
  if (!selectedZone) return true;
  if (selectedZone === "কলকাতা") {
    return !["কল্যাণী", "নিউ টাউন", "সল্টলেক"].includes(item.zone);
  }
  return item.zone === selectedZone;
}

function getFiltered() {
  const query = input.value.trim();
  let list = pandals;

  if (showFavs) list = list.filter(i => favs.has(i.id));

  if (query) {
    // সার্চ করলে এলাকা-চিপের বাধা থাকে না
    let found = list.filter(i => matchQuery(i, query));
    if (!found.length) found = list.filter(i => matchSkeleton(i, query));
    return found;
  }
  return list.filter(zoneMatches);
}

/* ---------- কার্ড ---------- */
function createCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  const imgWrap = document.createElement("div");
  imgWrap.className = "card-img-wrap";

  const image = document.createElement("img");
  image.className = "card-image";
  image.src = item.image;
  image.alt = item.name + " প্যান্ডেলের ছবি";
  image.loading = "lazy";
  image.onerror = () => {
    image.onerror = null;
    image.src = FALLBACK_IMG;
  };

  const heart = document.createElement("button");
  heart.type = "button";
  heart.className = "fav-btn";
  const paintHeart = () => {
    const on = favs.has(item.id);
    heart.textContent = on ? "♥" : "♡";
    heart.classList.toggle("on", on);
    heart.setAttribute("aria-pressed", on);
    heart.setAttribute("aria-label", on ? "পছন্দের তালিকা থেকে সরাও" : "পছন্দের তালিকায় যোগ করো");
  };
  paintHeart();
  heart.addEventListener("click", () => {
    favs.has(item.id) ? favs.delete(item.id) : favs.add(item.id);
    saveFavs();
    if (showFavs) displayPandals(); else paintHeart();
  });

  imgWrap.append(image, heart);

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h3");
  title.textContent = item.name;

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = "📍 " + item.zoneLabel;

  const famous = document.createElement("p");
  famous.className = "famous";
  famous.textContent = "✨ " + item.famous;

  const button = document.createElement("button");
  button.className = "card-btn";
  button.type = "button";
  button.textContent = "বিস্তারিত দেখুন →";
  button.addEventListener("click", () => openModal(item));

  content.append(title, tag, famous, button);
  card.append(imgWrap, content);
  return card;
}

function displayPandals() {
  const query = input.value.trim();
  const filtered = getFiltered();
  const shown = filtered.slice(0, visibleCount);

  container.replaceChildren(...shown.map(createCard));

  noResults.hidden = filtered.length !== 0;
  noResults.textContent = showFavs && !query
    ? "পছন্দের তালিকা এখনো খালি। কার্ডের ♡ চিহ্নে চাপ দিয়ে প্যান্ডেল যোগ করো।"
    : "দুঃখিত, এই নামে কোনো প্যান্ডেল পাওয়া যায়নি। অন্য নাম, এলাকা, মেট্রো বা রেল স্টেশনের নাম দিয়ে সার্চ করো।";

  const remaining = filtered.length - shown.length;
  loadMoreBtn.hidden = remaining <= 0;
  loadMoreBtn.textContent = `আরও ${Math.min(remaining, PAGE_SIZE)}টি দেখুন (বাকি ${remaining}টি)`;

  searchWrap.classList.toggle("has-text", input.value.length > 0);
  favToggle.classList.toggle("active", showFavs);

  if (showFavs) {
    resultsLine.textContent = `♥ পছন্দের তালিকা — ${filtered.length}টি প্যান্ডেল`;
  } else if (query) {
    resultsLine.textContent = `${filtered.length}টি প্যান্ডেল পাওয়া গেছে: “${query}”`;
  } else if (selectedZone) {
    resultsLine.textContent = `${selectedZone} — ${filtered.length}টি প্যান্ডেল`;
  } else {
    resultsLine.textContent = `মোট ${filtered.length}টি প্যান্ডেল — নাম, এলাকা বা স্টেশন লিখে খুঁজে নাও`;
  }
}

function resetAndShow() {
  visibleCount = PAGE_SIZE;
  displayPandals();
}

/* ---------- মডাল ---------- */
function openModal(item) {
  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalZone").textContent = "📍 " + item.zoneLabel;
  document.getElementById("modalRailway").textContent = item.railway;
  document.getElementById("modalMetro").textContent = item.metro;
  document.getElementById("modalFamous").textContent = item.famous;
  document.getElementById("modalDesc").textContent = item.desc;

  const modalImage = document.getElementById("modalImage");
  modalImage.src = item.image;
  modalImage.alt = item.name + " প্যান্ডেলের ছবি";
  modalImage.onerror = () => {
    modalImage.onerror = null;
    modalImage.src = FALLBACK_IMG;
  };

  document.getElementById("modalMap").href =
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(item.map);

  modal.showModal();
}

document.getElementById("closeModal").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

/* ---------- ইভেন্ট ---------- */
function scrollToList() {
  document.getElementById("pandals").scrollIntoView({ behavior: "smooth", block: "start" });
}

searchWrap.addEventListener("submit", e => {
  e.preventDefault();
  resetAndShow();
  scrollToList();
});

input.addEventListener("input", resetAndShow);

document.getElementById("clearSearch").addEventListener("click", () => {
  input.value = "";
  resetAndShow();
  input.focus();
});

loadMoreBtn.addEventListener("click", () => {
  visibleCount += PAGE_SIZE;
  displayPandals();
});

favToggle.addEventListener("click", () => {
  showFavs = !showFavs;
  resetAndShow();
  scrollToList();
});

document.querySelectorAll(".zone-chip").forEach(button => {
  button.addEventListener("click", () => {
    const zone = button.dataset.zone;
    selectedZone = selectedZone === zone ? null : zone;   // আবার চাপলে সব এলাকা
    input.value = "";

    document.querySelectorAll(".zone-chip").forEach(chip => {
      chip.classList.toggle("active", chip.dataset.zone === selectedZone);
    });

    resetAndShow();
    scrollToList();
  });
});

displayPandals();
