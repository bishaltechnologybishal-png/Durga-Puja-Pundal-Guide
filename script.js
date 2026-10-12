const pandals = [
  { id: 1, name: "Kalyani ITI More", zone: "Kalyani", railway: "Kalyani Station", metro: "প্রযোজ্য নয়", famous: "প্যান্ডেল ও প্রতিমা দর্শন" },
  { id: 2, name: "Kalyani Central Park", zone: "Kalyani", railway: "Kalyani Station", metro: "প্রযোজ্য নয়", famous: "থিম প্যান্ডেল" },
  { id: 3, name: "Salt Lake FD Block", zone: "Salt Lake", railway: "Bidhan Nagar Road Station", metro: "সেক্টর V / সল্টলেক এলাকার নিকটবর্তী স্টেশন যাচাই করুন", famous: "থিম প্যান্ডেল" },
  { id: 4, name: "Salt Lake AK Block", zone: "Salt Lake", railway: "Bidhan Nagar Road Station", metro: "সল্টলেক এলাকার নিকটবর্তী স্টেশন যাচাই করুন", famous: "প্রতিমা দর্শন" },
  { id: 5, name: "Salt Lake BJ Block", zone: "Salt Lake", railway: "Bidhan Nagar Road Station", metro: "সল্টলেক এলাকার নিকটবর্তী স্টেশন যাচাই করুন", famous: "থিম প্যান্ডেল" },
  { id: 6, name: "New Town Sarbojanin", zone: "New Town", railway: "নিকটবর্তী রেলস্টেশন যাচাই করুন", metro: "চালু পরিষেবা ও নিকটবর্তী স্টেশন যাচাই করুন", famous: "থিম প্যান্ডেল" },
  { id: 7, name: "Sree Bhumi Sporting Club", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "Belgachia Metro / নিকটবর্তী স্টেশন যাচাই করুন", famous: "বৃহৎ থিম প্যান্ডেল" },
  { id: 8, name: "Tala Prattoy", zone: "North Kolkata", railway: "Bagbazar / শিয়ালদহ এলাকার রেল পরিষেবা যাচাই করুন", metro: "শ্যামবাজার মেট্রো", famous: "শৈল্পিক থিম" },
  { id: 9, name: "Tala Barowari", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শ্যামবাজার মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 10, name: "Dum Dum Park Tarun Dal", zone: "North Kolkata", railway: "Dum Dum Junction", metro: "দমদম মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 11, name: "Dum Dum Park Bharat Chakra", zone: "North Kolkata", railway: "Dum Dum Junction", metro: "দমদম মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 12, name: "Dum Dum Park Tarun Sangha", zone: "North Kolkata", railway: "Dum Dum Junction", metro: "দমদম মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 13, name: "Telengabagan", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "শ্যামবাজার মেট্রো", famous: "শৈল্পিক প্রতিমা" },
  { id: 14, name: "Manicktala Chaltabagan", zone: "North Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 15, name: "Shimla Byam Samity", zone: "North Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 16, name: "Hatibagan Sarbojonin", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "শ্যামবাজার মেট্রো", famous: "প্রতিমা দর্শন" },
  { id: 17, name: "Hatibagan Nabin Pally", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "শ্যামবাজার মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 18, name: "Sikdar Bagan Sadharan", zone: "North Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "প্যান্ডেল ও প্রতিমা দর্শন" },
  { id: 19, name: "Nalin Sarkar Street", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "শ্যামবাজার মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 20, name: "Kashi Bose Lane", zone: "Central Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 21, name: "Shobhabazar Rajbari", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "ঐতিহাসিক রাজবাড়ির পুজো" },
  { id: 22, name: "Beniatola Sarbojanin", zone: "North Kolkata", railway: "Bagbazar Station", metro: "গিরিশ পার্ক মেট্রো", famous: "প্রতিমা দর্শন" },
  { id: 23, name: "Ahiritola Sarbojanin", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 24, name: "Kumartuli Sarbojanin", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "কুমোরটুলির প্রতিমা" },
  { id: 25, name: "Kumartuli Park", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 26, name: "Jagat Mukherjee Park", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 27, name: "Bagbazar Sarbojonin", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 28, name: "Santosh Mitra Square", zone: "Central Kolkata", railway: "Sealdah Station", metro: "চাঁদনি চক / সেন্ট্রাল মেট্রো", famous: "বৃহৎ থিম প্যান্ডেল" },
  { id: 29, name: "College Square", zone: "Central Kolkata", railway: "Sealdah Station", metro: "Central Metro", famous: "জলাশয়ের প্রতিফলনে আলোকসজ্জা" },
  { id: 30, name: "Mohammad Ali Park", zone: "Central Kolkata", railway: "Sealdah Station", metro: "Central Metro", famous: "থিম প্যান্ডেল" },
  { id: 31, name: "Chorbagan Sarbojanin", zone: "North Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 32, name: "Millennium Park", zone: "Central Kolkata", railway: "BBD Bag Station", metro: "BBD Bag মেট্রো", famous: "নদীর ধারের দর্শনীয় স্থান" },
  { id: 33, name: "Naktala Udayan Sangha", zone: "South Kolkata", railway: "New Garia / Baghajatin এলাকার রেল পরিষেবা যাচাই করুন", metro: "নাকতলা মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 34, name: "Jodhpur Park", zone: "South Kolkata", railway: "Lake Gardens Station", metro: "Rabindra Sarobar মেট্রো", famous: "থিম প্যান্ডেল" }
];

// ===== ছবির ব্যবস্থা =====
// images ফোল্ডারে durga1.jpg, durga2.jpg, durga3.jpg থাকতে হবে।
// তিনটা ছবি পালা করে সব প্যান্ডেলে বসবে।
// কোনো প্যান্ডেলের আলাদা ছবি দিতে চাইলে ডেটায় img: "images/নাম.jpg" যোগ করো।
const pandalImages = [
  "images/durga1.jpg",
  "images/durga2.jpg",
  "images/durga3.jpg"
];

// ছবি লোড না হলে এই দুর্গা ঠাকুরের নকশা দেখাবে
const placeholderSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347"/><stop offset="1" stop-color="#c0392b"/></linearGradient></defs>
<rect width="400" height="300" fill="url(#g)"/>
<circle cx="200" cy="120" r="90" fill="#ffe29a" opacity="0.7"/>
<circle cx="200" cy="85" r="26" fill="#f5c9a0"/>
<path d="M165 120 L235 120 L255 285 L145 285 Z" fill="#b71c1c"/>
</svg>`;
const placeholderImage = "data:image/svg+xml;utf8," + encodeURIComponent(placeholderSVG);

function getImage(pandal) {
  return pandal.img || pandalImages[(pandal.id - 1) % pandalImages.length];
}

let selectedZone = "all";
let searchText = "";

const container = document.getElementById("pandalContainer");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("pandalModal");

function getMapUrl(pandal) {
  return "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(pandal.name + ", Kolkata, West Bengal");
}

function getZoneLabel(zone) {
  const labels = {
    "Kalyani": "কল্যাণী",
    "Salt Lake": "সল্টলেক",
    "New Town": "নিউ টাউন",
    "North Kolkata": "উত্তর কলকাতা",
    "Central Kolkata": "মধ্য কলকাতা",
    "South Kolkata": "দক্ষিণ কলকাতা",
    "Behala": "বেহালা"
  };
  return labels[zone] || zone;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderPandals() {
  const query = searchText.toLowerCase();

  const filtered = pandals.filter(pandal => {
    const matchesZone = selectedZone === "all" || pandal.zone === selectedZone;

    const searchableText = [
      pandal.name,
      pandal.zone,
      getZoneLabel(pandal.zone),
      pandal.railway,
      pandal.metro,
      pandal.famous
    ].join(" ").toLowerCase();

    const matchesSearch = query === "" || searchableText.includes(query);
    return matchesZone && matchesSearch;
  });

  container.innerHTML = "";

  filtered.forEach(pandal => {
    const card = document.createElement("article");
    card.className = "pandal-card";

    card.innerHTML = `
      <img class="card-art" src="${escapeHTML(getImage(pandal))}" alt="${escapeHTML(pandal.name)}" loading="lazy">
      <div class="card-content">
        <span class="zone-tag">${escapeHTML(getZoneLabel(pandal.zone))}</span>
        <h3>${escapeHTML(pandal.name)}</h3>
        <p><strong>🚆 রেলস্টেশন:</strong> ${escapeHTML(pandal.railway)}</p>
        <p><strong>🚇 মেট্রো:</strong> ${escapeHTML(pandal.metro)}</p>
        <div class="card-actions">
          <button type="button" class="details-button">বিস্তারিত</button>
          <a class="small-map-link" href="${getMapUrl(pandal)}" target="_blank" rel="noopener noreferrer">ম্যাপ ↗</a>
        </div>
      </div>
    `;

    const cardImg = card.querySelector(".card-art");
    cardImg.onerror = () => {
      cardImg.onerror = null;
      cardImg.src = placeholderImage;
    };

    card.querySelector(".details-button").addEventListener("click", () => openModal(pandal));
    container.appendChild(card);
  });

  if (resultCount) {
    resultCount.textContent = `মোট ${filtered.length}টি প্যান্ডেল`;
  }
  if (noResults) {
    noResults.hidden = filtered.length !== 0;
  }
}

function searchPandals() {
  if (searchInput) {
    searchText = searchInput.value.trim();
    renderPandals();
  }
}

function filterByZone(zone, button) {
  selectedZone = zone;
  document.querySelectorAll(".zone-btn").forEach(item => item.classList.remove("active"));
  if (button) button.classList.add("active");
  renderPandals();
}

function openModal(pandal) {
  const modalImg = document.getElementById("modalImg");
  if (modalImg) {
    modalImg.onerror = () => {
      modalImg.onerror = null;
      modalImg.src = placeholderImage;
    };
    modalImg.src = getImage(pandal);
  }

  const title = document.getElementById("modalTitle");
  if (title) title.textContent = pandal.name;

  const zone = document.getElementById("modalZone");
  if (zone) zone.textContent = getZoneLabel(pandal.zone);

  const railway = document.getElementById("modalRailway");
  if (railway) railway.textContent = pandal.railway;

  const metro = document.getElementById("modalMetro");
  if (metro) metro.textContent = pandal.metro;

  const famous = document.getElementById("modalFamous");
  if (famous) famous.textContent = pandal.famous;

  const desc = document.getElementById("modalDesc");
  if (desc) {
    desc.textContent = "যাত্রার আগে নিকটবর্তী স্টেশন, ট্রেন ও মেট্রোর পরিষেবা এবং পুজোর সময়সূচি যাচাই করে নাও।";
  }

  const mapBtn = document.getElementById("modalMap");
  if (mapBtn) mapBtn.href = getMapUrl(pandal);

  if (modal) {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }
  document.body.classList.add("modal-open");
}

function closeModal() {
  if (modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

renderPandals();
