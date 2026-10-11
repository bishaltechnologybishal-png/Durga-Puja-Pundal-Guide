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
/* =====================================================
   pandals-data.js
   - AREAS : প্রতিটি এলাকার মেট্রো / রেল স্টেশন + ইংরেজি-বাংলা সার্চ নাম
   - RAW_PANDALS : প্যান্ডেলের তালিকা
   নতুন প্যান্ডেল যোগ করতে RAW_PANDALS-এ একটি লাইন লিখলেই হবে:
   ["নাম", "areaKey", "বিশেষত্ব (ঐচ্ছিক)"]
   ===================================================== */

const wiki = file =>
  "https://commons.wikimedia.org/wiki/Special:FilePath/" + file + "?width=900";

const IMAGE_POOL = [
  "Durga%20Puja%20pandal%20decorations%20in%20Kolkata.jpg",
  "Vibrant%20decorations%20at%20a%20Durga%20Puja%20pandal%20in%20Kolkata.jpg",
  "Colorful%20Durga%20Puja%20pandal%20decorations%20from%20Kolkata.jpg",
  "A%20wide%20variety%20of%20decorations%20are%20used%20at%20Durga%20Puja%20pandals%20in%20Kolkata.jpg",
  "Artistic%20decorations%20at%20a%20Durga%20Puja%20pandal%20in%20Kolkata.jpg",
  "Artisitic%20decorations%20at%20a%20pandal%20during%20Kolkata%27s%20Durga%20Puja.jpg",
  "Durga%20Puja%20pandal%20image%20from%20Kolkata.jpg",
  "Durga%20Mata%20Images%20-%20A%20Durga%20Puja%20pandal%20in%20Kolkata.jpg",
  "2014%20Durga%20Puja%20Bagbazar%20Pandal%2C%20Kolkata.jpg"
].map(wiki);

const METRO_NONE = "কাছাকাছি সরাসরি মেট্রো নেই; বাস / অটো / ক্যাব সুবিধাজনক";
const RAIL_NONE = "কাছাকাছি সরাসরি রেল স্টেশন নেই; বাস / অটো / ক্যাব সুবিধাজনক";
const BLUE = " (ব্লু লাইন)";
const GREEN = " (গ্রিন লাইন)";

/* key: [এলাকার নাম, জোন, মেট্রো, রেল, সার্চ-অ্যালিয়াস (ইংরেজি/বাংলা স্টেশন ও জায়গার নাম)] */
const AREAS = {
  /* ---------- কল্যাণী ---------- */
  kalyani: ["কল্যাণী (নদীয়া)", "কল্যাণী", "মেট্রো নেই; ট্রেন, অটো ও টোটো", "কল্যাণী মেইন স্টেশন / ঘোষপাড়া",
    "kalyani nadia kalyani main kalyani station ghoshpara কল্যাণী নদীয়া ঘোষপাড়া"],

  /* ---------- উত্তর কলকাতা ---------- */
  bagbazar: ["বাগবাজার", "উত্তর কলকাতা", "শ্যামবাজার" + BLUE, "বাগবাজার (সার্কুলার রেল)",
    "bagbazar baghbazar bag bazar bagbazar station shyambazar nivedita park বাগবাজার শ্যামবাজার"],
  shyambazar: ["শ্যামবাজার", "উত্তর কলকাতা", "শ্যামবাজার" + BLUE, "বাগবাজার (সার্কুলার রেল)",
    "shyambazar shyam bazar five point crossing bagbazar শ্যামবাজার পাঁচমাথা"],
  sovabazar: ["শোভাবাজার", "উত্তর কলকাতা", "শোভাবাজার সুতানুটি" + BLUE, "বাগবাজার (সার্কুলার রেল)",
    "shobhabazar sovabazar sobhabazar shobha bazar sutanuti benitola hatkhola শোভাবাজার সুতানুটি বেনিটোলা হাটখোলা"],
  ahiritola: ["আহিরীটোলা", "উত্তর কলকাতা", "শোভাবাজার সুতানুটি" + BLUE, "বাগবাজার / আহিরীটোলা ঘাট (ফেরি)",
    "ahiritola ahiritolla ahiritola ghat sobhabazar sutanuti bagbazar আহিরীটোলা"],
  kumartuli: ["কুমোরটুলি", "উত্তর কলকাতা", "শোভাবাজার সুতানুটি" + BLUE, "বাগবাজার (সার্কুলার রেল)",
    "kumartuli kumortuli kumartoli kumortully sobhabazar sutanuti bagbazar কুমোরটুলি কুমারটুলি"],
  hatibagan: ["হাতিবাগান", "উত্তর কলকাতা", "শ্যামবাজার / গিরিশ পার্ক" + BLUE, RAIL_NONE,
    "hatibagan hati bagan cornwallis street bidhan sarani shyambazar girish park nalin sarkar street kashi bose lane simla হাতিবাগান"],
  girishpark: ["গিরিশ পার্ক", "উত্তর কলকাতা", "গিরিশ পার্ক" + BLUE, RAIL_NONE,
    "girish park girishpark beadon street chitpur গিরিশ পার্ক বিডন স্ট্রিট চিৎপুর"],
  jorasanko: ["জোড়াসাঁকো", "উত্তর কলকাতা", "গিরিশ পার্ক / মহাত্মা গান্ধী রোড" + BLUE, RAIL_NONE,
    "jorasanko jorabagan pathuriaghata thakur bari rabindra sarani girish park mahatma gandhi road জোড়াসাঁকো ঠাকুরবাড়ি"],
  maniktala: ["মানিকতলা", "উত্তর কলকাতা", "ফুলবাগান" + GREEN, "শিয়ালদহ",
    "maniktala manicktala chaltabagan lohapatty phoolbagan sealdah মানিকতলা চালতাবাগান"],
  phoolbagan: ["ফুলবাগান / নারকেলডাঙা", "উত্তর কলকাতা", "ফুলবাগান" + GREEN, "শিয়ালদহ",
    "phoolbagan phulbagan narkeldanga narkel danga sealdah ফুলবাগান নারকেলডাঙা"],
  kankurgachi: ["কাঁকুড়গাছি", "উত্তর কলকাতা", "ফুলবাগান" + GREEN, "বিধাননগর রোড / শিয়ালদহ",
    "kankurgachi kankurgacchi phoolbagan bidhannagar road কাঁকুড়গাছি"],
  ultadanga: ["উল্টোডাঙা / তেলেঙ্গাবাগান", "উত্তর কলকাতা", "ফুলবাগান" + GREEN, "শিয়ালদহ / বিধাননগর রোড",
    "ultadanga ultodanga telengabagan telenga bagan vip road phoolbagan উল্টোডাঙা তেলেঙ্গাবাগান"],
  paikpara: ["পাইকপাড়া", "উত্তর কলকাতা", "বেলগাছিয়া" + BLUE, RAIL_NONE,
    "paikpara paikpara indra sangha belgachia belgachhia পাইকপাড়া বেলগাছিয়া"],
  sinthee: ["সিঁথি", "উত্তর কলকাতা", "নোয়াপাড়া / বরানগর" + BLUE, "বরানগর রোড",
    "sinthee sinthi sinthee more noapara baranagar baranagar road সিঁথি নোয়াপাড়া"],
  belgachia: ["বেলগাছিয়া", "উত্তর কলকাতা", "বেলগাছিয়া" + BLUE, RAIL_NONE,
    "belgachia belgachhia belgachiya belgachia metro বেলগাছিয়া"],
  tala: ["টালা", "উত্তর কলকাতা", "বেলগাছিয়া / শ্যামবাজার" + BLUE, RAIL_NONE,
    "tala tala park tala barowari tala prattoy belgachia shyambazar টালা টালা পার্ক"],
  dumdum: ["দমদম", "উত্তর কলকাতা", "দমদম" + BLUE, "দমদম জংশন",
    "dum dum dumdum dum dum junction dum dum metro nagerbazar nager bazar দমদম নাগেরবাজার"],
  dumdumpark: ["দমদম পার্ক", "উত্তর কলকাতা", "দমদম ক্যান্টনমেন্ট (ইয়েলো লাইন) / দমদম" + BLUE, "দমদম জংশন / দমদম ক্যান্টনমেন্ট",
    "dum dum park dumdum park dum dum cantonment jessore road airport yellow line দমদম পার্ক"],
  laketown: ["লেক টাউন", "উত্তর কলকাতা", "দমদম" + BLUE, "বিধাননগর রোড",
    "lake town laketown bangur avenue bangur vip road dum dum belgachia লেক টাউন বাঙ্গুর"],
  baguiati: ["বাগুইআটি", "উত্তর কলকাতা", METRO_NONE, "বিধাননগর রোড (বাস/অটো সংযোগ)",
    "baguiati baguihati vip road kaikhali বাগুইআটি কৈখালি"],
  kestopur: ["কেষ্টপুর", "উত্তর কলকাতা", METRO_NONE, "বিধাননগর রোড (বাস/অটো সংযোগ)",
    "kestopur keshtopur prafullakanan vip road কেষ্টপুর প্রফুল্লকানন"],
  baranagar: ["বরানগর", "উত্তর কলকাতা", "বরানগর" + BLUE, "বরানগর রোড",
    "baranagar baranagore baranagar metro baranagar road বরানগর"],
  dakshineswar: ["দক্ষিণেশ্বর", "উত্তর কলকাতা", "দক্ষিণেশ্বর" + BLUE, "দক্ষিণেশ্বর",
    "dakshineswar dakshineshwar dakshineswar metro dakshineswar station দক্ষিণেশ্বর"],

  /* ---------- মধ্য কলকাতা ---------- */
  collegest: ["কলেজ স্ট্রিট / কলেজ স্কোয়ার", "মধ্য কলকাতা", "মহাত্মা গান্ধী রোড" + BLUE, "শিয়ালদহ",
    "college square college street boi para mahatma gandhi road mg road sealdah কলেজ স্কোয়ার কলেজ স্ট্রিট"],
  sealdah: ["শিয়ালদহ", "মধ্য কলকাতা", "শিয়ালদহ" + GREEN, "শিয়ালদহ",
    "sealdah sealdaha santosh mitra square sealdah station sealdah metro শিয়ালদহ সন্তোষ মিত্র"],
  mgroad: ["বড়বাজার / এমজি রোড", "মধ্য কলকাতা", "মহাত্মা গান্ধী রোড / সেন্ট্রাল" + BLUE, "হাওড়া / শিয়ালদহ",
    "burrabazar barabazar bara bazar mahatma gandhi road mg road mohammad ali park central posta howrah বড়বাজার"],
  chandnichowk: ["চাঁদনি চক / ওয়েলিংটন", "মধ্য কলকাতা", "চাঁদনি চক / সেন্ট্রাল" + BLUE, RAIL_NONE,
    "chandni chowk chandnichowk wellington wellington square central metro esplanade চাঁদনি চক ওয়েলিংটন"],
  bowbazar: ["বউবাজার", "মধ্য কলকাতা", "সেন্ট্রাল" + BLUE + " / শিয়ালদহ" + GREEN, "শিয়ালদহ",
    "bowbazar bow bazar bubazar central sealdah বউবাজার বৌবাজার"],
  entally: ["এন্টালি", "মধ্য কলকাতা", "শিয়ালদহ" + GREEN + " (হেঁটে/অটো)", "শিয়ালদহ",
    "entally sealdah picnic garden entaly এন্টালি"],
  parkcircus: ["পার্ক সার্কাস", "মধ্য কলকাতা", METRO_NONE, "পার্ক সার্কাস",
    "park circus park circus station parkcircus ballygunge পার্ক সার্কাস"],
  esplanade: ["এসপ্ল্যানেড / ধর্মতলা", "মধ্য কলকাতা", "এসপ্ল্যানেড" + BLUE + " / " + GREEN, RAIL_NONE,
    "esplanade dharmatala dharamtala esplanade metro park street maidan এসপ্ল্যানেড ধর্মতলা"],
  beleghata: ["বেলেঘাটা", "মধ্য কলকাতা", "ফুলবাগান" + GREEN + " (বাস/অটো সংযোগ)", "শিয়ালদহ",
    "beleghata beliaghata beliaghata 33 pally phoolbagan sealdah বেলেঘাটা"],

  /* ---------- দক্ষিণ কলকাতা ---------- */
  kalighat: ["কালীঘাট", "দক্ষিণ কলকাতা", "কালীঘাট / জতীন দাস পার্ক" + BLUE, "কালীঘাট (রেল) / মাঝেরহাট",
    "kalighat kali ghat kalighat metro jatin das park kalighat temple mudiali badamtala কালীঘাট জতীন দাস পার্ক"],
  hazra: ["হাজরা", "দক্ষিণ কলকাতা", "জতীন দাস পার্ক / কালীঘাট" + BLUE, "বালিগঞ্জ জংশন (বাস/অটো সংযোগ)",
    "hazra hazra more hazra park jatin das park kalighat হাজরা"],
  chetla: ["চেতলা", "দক্ষিণ কলকাতা", "কালীঘাট" + BLUE + " (বাস/অটো সংযোগ)", "মাঝেরহাট",
    "chetla chetla agrani majerhat kalighat চেতলা অগ্রণী মাঝেরহাট"],
  newalipore: ["নিউ আলিপুর", "দক্ষিণ কলকাতা", "জতীন দাস পার্ক / কালীঘাট" + BLUE + " (বাস/অটো সংযোগ)", "মাঝেরহাট",
    "new alipore alipore newalipore suruchi sangha majerhat নিউ আলিপুর মাঝেরহাট"],
  alipore: ["আলিপুর", "দক্ষিণ কলকাতা", "জতীন দাস পার্ক" + BLUE, "মাঝেরহাট",
    "alipore alipur zoo alipore road jatin das park majerhat আলিপুর"],
  bhowanipore: ["ভবানীপুর", "দক্ষিণ কলকাতা", "নেতাজি ভবন / জতীন দাস পার্ক" + BLUE, RAIL_NONE,
    "bhowanipore bhawanipur bhowanipur 75 pally netaji bhawan netaji bhavan jatin das park ভবানীপুর নেতাজি ভবন"],
  deshapriyapark: ["দেশপ্রিয় পার্ক", "দক্ষিণ কলকাতা", "কালীঘাট / রবীন্দ্র সরোবর" + BLUE + " — রুট যাচাই করুন", "বালিগঞ্জ জংশন",
    "deshapriya park deshapriyo park deshopriyo rashbehari avenue kalighat rabindra sarobar দেশপ্রিয় পার্ক রাসবিহারী"],
  ballygunge: ["বালিগঞ্জ", "দক্ষিণ কলকাতা", "রবীন্দ্র সরোবর / কালীঘাট" + BLUE + " — রুট যাচাই করুন", "বালিগঞ্জ জংশন",
    "ballygunge bally gunge ballygunge junction maddox square singhi park hindustan park tridhara ballygunje বালিগঞ্জ ম্যাডক্স স্কোয়ার"],
  gariahat: ["গড়িয়াহাট", "দক্ষিণ কলকাতা", "রবীন্দ্র সরোবর / কালীঘাট" + BLUE + " — রুট যাচাই করুন", "বালিগঞ্জ জংশন / ঢাকুরিয়া",
    "gariahat gariahaat ekdalia lake market rashbehari ballygunge gariahat more গড়িয়াহাট একডালিয়া লেক মার্কেট"],
  dhakuria: ["ঢাকুরিয়া", "দক্ষিণ কলকাতা", "রবীন্দ্র সরোবর" + BLUE, "ঢাকুরিয়া",
    "dhakuria dhakurya dhakuria station rabindra sarobar lake ঢাকুরিয়া রবীন্দ্র সরোবর"],
  lakegardens: ["লেক গার্ডেন্স", "দক্ষিণ কলকাতা", "রবীন্দ্র সরোবর" + BLUE + " — রুট যাচাই করুন", "লেক গার্ডেন্স / ঢাকুরিয়া",
    "lake gardens lakegardens lake garden rabindra sarobar dhakuria লেক গার্ডেন্স"],
  jodhpurpark: ["যোধপুর পার্ক", "দক্ষিণ কলকাতা", METRO_NONE, "ঢাকুরিয়া / যাদবপুর",
    "jodhpur park jodhpurpark jodhpore dhakuria jadavpur যোধপুর পার্ক"],
  selimpur: ["সেলিমপুর", "দক্ষিণ কলকাতা", METRO_NONE, "ঢাকুরিয়া",
    "selimpur selimpore dhakuria সেলিমপুর"],
  jadavpur: ["যাদবপুর", "দক্ষিণ কলকাতা", METRO_NONE, "যাদবপুর",
    "jadavpur jadavpore 8b bus stand bijoygarh vijaygarh jadavpur station যাদবপুর ৮বি বিজয়গড়"],
  bagha: ["বাঘাযতীন", "দক্ষিণ কলকাতা", METRO_NONE, "বাঘাযতীন",
    "baghajatin bagha jatin baghajatin station baghajatin pally বাঘাযতীন"],
  santoshpur: ["সন্তোষপুর", "দক্ষিণ কলকাতা", METRO_NONE, "যাদবপুর / বাঘাযতীন (অটো সংযোগ)",
    "santoshpur santoshpore lake pally jadavpur baghajatin সন্তোষপুর"],
  tollygunge: ["টালিগঞ্জ", "দক্ষিণ কলকাতা", "মহানায়ক উত্তম কুমার (টালিগঞ্জ)" + BLUE, "টালিগঞ্জ",
    "tollygunge tollygunj tolly gunge mahanayak uttam kumar tollygunge metro tollygunge station টালিগঞ্জ মহানায়ক উত্তম কুমার"],
  naktala: ["নাকতলা / নেতাজি নগর", "দক্ষিণ কলকাতা", "নেতাজি / মাস্টারদা সূর্য সেন" + BLUE + " — রুট যাচাই করুন", "যাদবপুর (অটো সংযোগ)",
    "naktala naktola netaji nagar udayan sangha netaji masterda surya sen নাকতলা নেতাজি নগর"],
  kasba: ["কসবা", "দক্ষিণ কলকাতা", METRO_NONE, "কসবা / ঢাকুরিয়া (বাস/অটো সংযোগ)",
    "kasba kasbah bosepukur bose pukur talbagan sitala mandir ruby কসবা বোসপুকুর"],
  garia: ["গড়িয়া", "দক্ষিণ কলকাতা", "কবি সুভাষ (নিউ গড়িয়া)" + BLUE, "গড়িয়া",
    "garia garia station new garia kavi subhash kavi nazrul shahid khudiram গড়িয়া নিউ গড়িয়া কবি সুভাষ"],
  behala: ["বেহালা", "দক্ষিণ কলকাতা", "বেহালা চৌরাস্তা / সখেরবাজার (পার্পল লাইন)", RAIL_NONE,
    "behala behala chowrasta chowrasta barisha sakher bazar sakherbazar thakurpukur taratala purple line বেহালা বড়িশা সখেরবাজার"],

  /* ---------- সল্টলেক / নিউ টাউন ---------- */
  saltlake: ["সল্টলেক", "সল্টলেক", "সল্টলেক স্টেডিয়াম / সেক্টর V" + GREEN + "; করুণাময়ী বাস টার্মিনাস", "বিধাননগর রোড",
    "salt lake saltlake bidhannagar bidhan nagar karunamoyee karunamayee salt lake stadium sector v sector 5 sector five city centre সল্টলেক বিধাননগর করুণাময়ী"],
  newtown: ["নিউ টাউন", "নিউ টাউন", "নিকটবর্তী মেট্রো: সল্টলেক সেক্টর V" + GREEN + " (বাস/ক্যাব সংযোগ)", "নিকটবর্তী রেল সংযোগ ম্যাপে যাচাই করুন",
    "new town newtown rajarhat action area eco park chinar park axis mall biswa bangla gate sector v নিউ টাউন রাজারহাট ইকো পার্ক"]
};

/* জোন অনুযায়ী ইংরেজি সার্চ শব্দ */
const ZONE_EN = {
  "কল্যাণী": "kalyani nadia",
  "উত্তর কলকাতা": "north kolkata calcutta",
  "মধ্য কলকাতা": "central kolkata calcutta",
  "দক্ষিণ কলকাতা": "south kolkata calcutta",
  "সল্টলেক": "salt lake bidhannagar",
  "নিউ টাউন": "new town rajarhat"
};

/* ["নাম", areaKey, বিশেষত্ব, {ঐচ্ছিক: image, map, keywords, desc}] */
const RAW_PANDALS = [
  /* ===== বিখ্যাত ২২টি (আগের তালিকা) ===== */
  ["Kalyani ITI More", "kalyani", "বড় আয়োজন ও থিম", { map: "Kalyani ITI More Durga Puja", keywords: "আইটিআই মোড় iti more", image: IMAGE_POOL[0] }],
  ["Luminous Park (A9)", "kalyani", "আলোকসজ্জা ও সৃজনশীল শিল্পকর্ম", { map: "Kalyani A9 Luminous Park Durga Puja", keywords: "a9 luminous", image: IMAGE_POOL[1] }],
  ["Kalyani Central Park", "kalyani", "থিম প্যান্ডেল ও সাংস্কৃতিক অনুষ্ঠান", { map: "Kalyani Central Park Durga Puja", image: IMAGE_POOL[2] }],
  ["New Town Sarbojanin (AK Block)", "newtown", "আধুনিক থিম ও সাজ", { map: "New Town Sarbojanin Durga Puja AK Block", keywords: "ak block", image: IMAGE_POOL[3] }],
  ["FD Block, Salt Lake", "saltlake", "পরিবার-বান্ধব বড় থিম", { map: "FD Block Durga Puja Salt Lake", keywords: "fd block ফেডি ব্লক", image: IMAGE_POOL[8] }],
  ["BJ Block, Salt Lake", "saltlake", "সাবেকি সাজ ও সাংস্কৃতিক পরিবেশ", { map: "BJ Block Durga Puja Salt Lake", keywords: "bj block", image: IMAGE_POOL[4] }],
  ["Sree Bhumi Sporting Club", "laketown", "বড় থিম ও আলোকসজ্জা", { map: "Sree Bhumi Sporting Club Lake Town", keywords: "sree bhumi sribhumi শ্রীভূমি", image: wiki("A%20Durga%20Puja%20pandal%20designed%20like%20the%20head%20of%20the%20Buffalo%20demon%20Mahishasura.jpg") }],
  ["Ahiritola Youth Club", "ahiritola", "ঐতিহ্য ও বাংলার শিল্পকলা", { map: "Ahiritola Youth Club Durga Puja", image: wiki("5459g%20ahiritolla%20traffic-jam-crowds-at-0418AM.jpg") }],
  ["Kumartuli Park", "kumartuli", "প্রতিমা শিল্প ও থিমের মেলবন্ধন", { map: "Kumartuli Park Durga Puja", image: wiki("DurgaPuja2019%20-%20Durga%20Puja%20pandal%20of%20Kumartoli%20Park%20in%20Kolkata%2003.jpg") }],
  ["Bagbazar Sarbojonin", "bagbazar", "ঐতিহ্যবাহী সাবেকি দুর্গাপূজা", { map: "Bagbazar Sarbojanin Durga Puja", keywords: "sarbojanin sarbojonin", image: wiki("Durga%20Puja%20Pandal%20-%20Baghbazar%20Sarbojanin%20Durgotsav%20-%20Nivedita%20Park%20-%20Kolkata%202013-10-13%2001809.jpg") }],
  ["College Square", "collegest", "জলের উপর আলোর প্রতিফলন", { map: "College Square Durga Puja Kolkata", image: wiki("P0121g%20college-square-puja.jpg") }],
  ["Santosh Mitra Square", "sealdah", "বড় স্থাপত্য-অনুপ্রাণিত থিম", { map: "Santosh Mitra Square Durga Puja", image: IMAGE_POOL[5] }],
  ["Chetla Agrani Club", "chetla", "নতুন ভাবনা ও থিম প্রতিমা", { map: "Chetla Agrani Club Durga Puja", image: wiki("5429g%20suruchi-pratima.jpg") }],
  ["Suruchi Sangha", "newalipore", "বিভিন্ন অঞ্চলের সংস্কৃতি ও শিল্প", { map: "Suruchi Sangha Durga Puja", image: wiki("Durga%20Puja%20Pandal%20-%20New%20Alipore%20Suruchi%20Sangha%20-%20Kolkata%202011-10-23%20030330.JPG") }],
  ["Tridhara Sammilani", "ballygunge", "আধুনিক শিল্প ও ঐতিহ্যের মেলবন্ধন", { map: "Tridhara Sammilani Durga Puja", image: IMAGE_POOL[6] }],
  ["Ekdalia Evergreen Club", "gariahat", "সাবেকি প্রতিমা ও ঝাড়বাতির সাজ", { map: "Ekdalia Evergreen Club Durga Puja", image: wiki("Durga%20Puja%20Pandal%20-%20Ekdalia%20Evergreen%20-%20Ekdalia%20Road%20-%20Kolkata%202013-10-11%203312.JPG") }],
  ["Shobhabazar Rajbari", "sovabazar", "রাজবাড়ির ঐতিহ্য ও সাবেকি দুর্গাপূজা", { map: "Shobhabazar Rajbari Durga Puja Kolkata", keywords: "rajbari raj bari রাজবাড়ি", image: IMAGE_POOL[8] }],
  ["Rani Rashmoni Bhavan", "esplanade", "ঐতিহাসিক স্থাপত্য ও ঐতিহ্যের আবহ", { map: "Rani Rashmoni Bhavan Kolkata", keywords: "রানী রাসমণি ভবন", image: IMAGE_POOL[7] }],
  ["City Centre Durga Puja", "saltlake", "শপিং এলাকার আশেপাশের পূজার আয়োজন", { map: "City Centre Salt Lake Durga Puja pandal", keywords: "city centre city center সিটি সেন্টার", image: IMAGE_POOL[2] }],
  ["Axis Mall Durga Puja", "newtown", "মল এলাকার উৎসব ও আশেপাশের পূজা", { map: "Axis Mall New Town Durga Puja pandal", keywords: "axis mall অ্যাক্সিস মল", image: IMAGE_POOL[3] }],
  ["Kalighat 66 Pally", "kalighat", "কালীঘাট এলাকার দুর্গাপূজা", { map: "Kalighat 66 Pally Durga Puja Kolkata", keywords: "66 pally ৬৬ পল্লী", image: wiki("Deshpriyo%20Park%20Pandal%20Arnab%20Dutta%202010.JPG") }],

  /* ===== উত্তর কলকাতা ===== */
  ["Kumartuli Sarbojanin", "kumartuli", "প্রতিমা শিল্পীদের পাড়ার পূজা"],
  ["Ahiritola Sarbojanin", "ahiritola", "উত্তর কলকাতার পুরনো পাড়ার আবহ"],
  ["Shobhabazar Benitola Sarbojanin", "sovabazar", "বেনিটোলার সাবেকি পূজা"],
  ["Hatkhola Dutta Bari", "sovabazar", "বনেদি বাড়ির পূজা"],
  ["Hatibagan Nabin Pally", "hatibagan", "হাতিবাগানের জনপ্রিয় থিম পূজা"],
  ["Hatibagan Sarbojanin", "hatibagan", "বিধান সরণি এলাকার পূজা"],
  ["Simla Byayam Samity", "hatibagan", "ঐতিহ্যবাহী ক্লাব পূজা"],
  ["Nalin Sarkar Street Sarbojanin", "hatibagan", "সাবেকি ঘরানার পূজা"],
  ["Kashi Bose Lane Sarbojanin", "hatibagan", "পাড়ার ঐতিহ্যের পূজা"],
  ["Girish Park Sarbojanin", "girishpark", "গিরিশ পার্ক এলাকার জনপ্রিয় পূজা"],
  ["Chhatubabu Latubabu Bari, Beadon Street", "girishpark", "বনেদি বাড়ির পূজা"],
  ["Jorasanko Thakur Bari", "jorasanko", "ঠাকুরবাড়ির ঐতিহ্যের পূজা"],
  ["Jorasanko Daw Bari", "jorasanko", "বনেদি বাড়ির পূজা"],
  ["Mohammad Ali Park", "mgroad", "থিম ও বিশাল প্যান্ডেল"],
  ["Maniktala Chaltabagan Lohapatty", "maniktala", "বিখ্যাত থিম পূজা"],
  ["Telengabagan Sarbojanin", "ultadanga", "বড় থিম ও আলোকসজ্জা"],
  ["Kankurgachi Yuvak Brindo", "kankurgachi", "থিম ও প্রতিমা শিল্প"],
  ["Phoolbagan Sarbojanin", "phoolbagan", "থিম ও আলোকসজ্জা"],
  ["Narkeldanga Sarbojanin", "phoolbagan", "পাড়ার জনপ্রিয় পূজা"],
  ["Ultadanga Sarbojanin", "ultadanga", "এলাকার সর্বজনীন পূজা"],
  ["Paikpara Indra Sangha", "paikpara", "জমজমাট পাড়ার পূজা"],
  ["Sinthee Sarbojanin", "sinthee", "সিঁথি এলাকার সর্বজনীন পূজা"],
  ["Belgachia Sarbojanin", "belgachia", "এলাকার সর্বজনীন পূজা"],
  ["Shyambazar Pally Sarbojanin", "shyambazar", "শ্যামবাজার এলাকার পূজা"],
  ["Shyampukur Sarbojanin", "shyambazar", "শ্যামপুকুর এলাকার পূজা"],
  ["Tala Prattoy", "tala", "থিম ও শিল্পকর্ম"],
  ["Tala Barowari", "tala", "বারোয়ারি ঐতিহ্যের পূজা"],
  ["Tala Park Sarbojanin", "tala", "টালা পার্ক এলাকার পূজা"],
  ["Dum Dum Park Bharat Chakra", "dumdumpark", "থিম ও বিশাল প্যান্ডেল"],
  ["Dum Dum Park Tarun Sangha", "dumdumpark", "থিম ও আলোকসজ্জা"],
  ["Dum Dum Tarun Dal", "dumdum", "দমদমের জনপ্রিয় পূজা"],
  ["Nagerbazar Sarbojanin", "dumdum", "নাগেরবাজার এলাকার পূজা"],
  ["Lake Town Adhibasi Brinda", "laketown", "লেক টাউনের থিম পূজা"],
  ["Bangur Avenue Sarbojanin", "laketown", "বাঙ্গুর অ্যাভিনিউ এলাকার পূজা"],
  ["Kestopur Prafullakanan Pallimangal Samity", "kestopur", "বড় থিম ও আলোকসজ্জা"],
  ["Baguiati Sarbojanin", "baguiati", "ভিআইপি রোড এলাকার পূজা"],
  ["Baranagar Sarbojanin", "baranagar", "এলাকার সর্বজনীন পূজা"],
  ["Dakshineswar Sarbojanin", "dakshineswar", "মন্দির এলাকার পূজার আবহ"],

  /* ===== মধ্য কলকাতা ===== */
  ["Wellington Square Sarbojanin", "chandnichowk", "মধ্য কলকাতার জনপ্রিয় পূজা"],
  ["Bowbazar Sarbojanin", "bowbazar", "পুরনো কলকাতার আবহ"],
  ["Burrabazar Sarbojanin", "mgroad", "বড়বাজার এলাকার পূজা"],
  ["Entally Sarbojanin", "entally", "এন্টালি এলাকার পূজা"],
  ["Park Circus Sarbojanin", "parkcircus", "পার্ক সার্কাস এলাকার পূজা"],
  ["Beleghata 33 Pally", "beleghata", "বেলেঘাটার জনপ্রিয় পূজা"],

  /* ===== দক্ষিণ কলকাতা ===== */
  ["Deshapriya Park", "deshapriyapark", "কলকাতার অন্যতম বড় ও বিখ্যাত পূজা"],
  ["Singhi Park", "ballygunge", "থিম ও প্রতিমা শিল্প"],
  ["Ballygunge Cultural Association", "ballygunge", "সাংস্কৃতিক পরিবেশ ও থিম"],
  ["Maddox Square", "ballygunge", "ঐতিহ্যবাহী ক্লাব পূজা"],
  ["Hindustan Park Sarbojanin", "ballygunge", "দক্ষিণ কলকাতার পাড়া
