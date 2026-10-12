const pandals = [
  { id: 1, name: "Kalyani ITI More", zone: "Kalyani", railway: "Kalyani Station", metro: "প্রযোজ্য নয়", famous: "প্যান্ডেল ও প্রতিমা দর্শন" },
  { id: 2, name: "Kalyani Central Park", zone: "Kalyani", railway: "Kalyani Station", metro: "প্রযোজ্য নয়", famous: "থিম প্যান্ডেল" },
  { id: 3, name: "Salt Lake FD Block", zone: "Salt Lake", railway: "Bidhan Nagar Road Station", metro: "City Centre / করুণাময়ী মেট্রো", famous: "থিম প্যান্ডেল ও সিটি সেন্টার ১ সংলগ্ন" },
  { id: 4, name: "Salt Lake AK Block", zone: "Salt Lake", railway: "Bidhan Nagar Road Station", metro: "City Centre মেট্রো", famous: "প্রতিমা দর্শন ও সিটি সেন্টার সংলগ্ন" },
  { id: 5, name: "Salt Lake BJ Block", zone: "Salt Lake", railway: "Bidhan Nagar Road Station", metro: "City Centre মেট্রো", famous: "থিম প্যান্ডেল ও সিটি সেন্টার ১ সংলগ্ন" },
  { id: 6, name: "New Town Sarbojanin", zone: "New Town", railway: "Bidhan Nagar Road Station", metro: "Sector V / New Town", famous: "অ্যাক্সিস মল (Axis Mall) ও সিটি সেন্টার ২ সংলগ্ন মেগা থিম" },
  { id: 7, name: "Sree Bhumi Sporting Club", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "Belgachia / Dum Dum Metro", famous: "বৃহৎ থিম প্যান্ডেল ও আলোকসজ্জা" },
  { id: 8, name: "Tala Prattoy", zone: "North Kolkata", railway: "Kolkata Station (Chitpur)", metro: "শ্যামবাজার মেট্রো", famous: "শৈল্পিক থিম" },
  { id: 9, name: "Tala Barowari", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শ্যামবাজার মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 10, name: "Dum Dum Park Tarun Dal", zone: "North Kolkata", railway: "Dum Dum Junction", metro: "দমদম মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 11, name: "Dum Dum Park Bharat Chakra", zone: "North Kolkata", railway: "Dum Dum Junction", metro: "দমদম মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 12, name: "Dum Dum Park Tarun Sangha", zone: "North Kolkata", railway: "Dum Dum Junction", metro: "দমদম মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 13, name: "Telengabagan", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "শ্যামবাজার মেট্রো", famous: "শৈল্পিক প্রতিমা" },
  { id: 14, name: "Manicktala Chaltabagan", zone: "North Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "ঐতিহ্যবাহী পুজো ও মানিকতলা মোড়" },
  { id: 15, name: "Shimla Byam Samity", zone: "North Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "ঐতিহ্যবাহী বীররস পুজো" },
  { id: 16, name: "Hatibagan Sarbojonin", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "শ্যামবাজার মেট্রো", famous: "প্রতিমা দর্শন" },
  { id: 17, name: "Hatibagan Nabin Pally", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "শ্যামবাজার মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 18, name: "Sikdar Bagan Sadharan", zone: "North Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "প্যান্ডেল ও প্রতিমা দর্শন" },
  { id: 19, name: "Nalin Sarkar Street", zone: "North Kolkata", railway: "Bidhan Nagar Road Station", metro: "শ্যামবাজার মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 20, name: "Kashi Bose Lane", zone: "Central Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 21, name: "Shobhabazar Rajbari", zone: "North Kolkata", railway: "Bagbazar / Sutanuti Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "ঐতিহাসিক বনেদি রাজবাড়ির পুজো ও নাটমন্দির" },
  { id: 22, name: "Beniatola Sarbojanin", zone: "North Kolkata", railway: "Bagbazar Station", metro: "গিরিশ পার্ক মেট্রো", famous: "প্রতিমা দর্শন" },
  { id: 23, name: "Ahiritola Sarbojanin", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "ঐতিহ্যবাহী পুজো ও গঙ্গার ঘাট" },
  { id: 24, name: "Kumartuli Sarbojanin", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "কুমোরটুলির প্রতিমা" },
  { id: 25, name: "Kumartuli Park", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "থিম প্যান্ডেল ও মাটির কাজ" },
  { id: 26, name: "Jagat Mukherjee Park", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "থিম প্যান্ডেল" },
  { id: 27, name: "Bagbazar Sarbojonin", zone: "North Kolkata", railway: "Bagbazar Station", metro: "শোভাবাজার-সুতানুটি মেট্রো", famous: "শতবর্ষের ঐতিহ্যবাহী সাবেকি একচালা পুজো" },
  { id: 28, name: "Santosh Mitra Square", zone: "Central Kolkata", railway: "Sealdah Station", metro: "চাঁদনি চক / সেন্ট্রাল / শিয়ালদহ মেট্রো", famous: "বৃহৎ থিম প্যান্ডেল ও লেজার শো" },
  { id: 29, name: "College Square", zone: "Central Kolkata", railway: "Sealdah Station", metro: "Central / MG Road Metro", famous: "জলাশয়ের প্রতিফলনে চোখ ধাঁধানো আলোকসজ্জা" },
  { id: 30, name: "Mohammad Ali Park", zone: "Central Kolkata", railway: "Sealdah Station", metro: "Central / MG Road Metro", famous: "ঐতিহাসিক মন্দিরের থিম প্যান্ডেল" },
  { id: 31, name: "Chorbagan Sarbojanin", zone: "North Kolkata", railway: "Sealdah Station", metro: "গিরিশ পার্ক মেট্রো", famous: "ঐতিহ্যবাহী পুজো" },
  { id: 32, name: "Millennium Park", zone: "Central Kolkata", railway: "BBD Bag / Howrah Station", metro: "BBD Bag / Esplanade মেট্রো", famous: "নদীর ধারের দর্শনীয় স্থান ও আড্ডার স্পট" },
  { id: 33, name: "Naktala Udayan Sangha", zone: "South Kolkata", railway: "Garia Railway Station", metro: "গীতাঞ্জলি (নাকতলা) মেট্রো", famous: "বিশাল মেগা স্কেল থিম প্যান্ডেল" },
  { id: 34, name: "Jodhpur Park", zone: "South Kolkata", railway: "Dhakuria / Lake Gardens Station", metro: "Rabindra Sarobar মেট্রো", famous: "থিম প্যান্ডেল ও সাংস্কৃতিক পরিবেশ" },
  { id: 35, name: "Deshapriya Park", zone: "South Kolkata", railway: "Ballygunge Junction", metro: "Kalighat / Jatin Das Park Metro", famous: "বিশালাকার মেগা থিম, রাসবিহারী ও লেক মলের কাছে" },
  { id: 36, name: "Rani Rashmoni Bhavan", zone: "South Kolkata", railway: "Sealdah Railway Station", metro: "Jatin Das Park / Kalighat Metro", famous: "ঐতিহাসিক রানী রাসমণি ভবনের সুপ্রাচীন বনেদি সাবেকি পুজো" },
  { id: 37, name: "City Centre Salt Lake", zone: "Salt Lake", railway: "Bidhan Nagar Road Station", metro: "City Centre Metro", famous: "সিটি সেন্টার ১ ও সল্টলেকের ব্লক পূজার প্রাণকেন্দ্র" },
  { id: 38, name: "Axis Mall New Town", zone: "New Town", railway: "Bidhan Nagar Road Station", metro: "Sector V / New Town", famous: "অ্যাক্সিস মল ও নিউ টাউন মেলা প্রাঙ্গণ মেগা পুজো" }
];

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
    const searchableText = `${pandal.name} ${pandal.zone} ${getZoneLabel(pandal.zone)} ${pandal.railway} ${pandal.metro} ${pandal.famous}`.toLowerCase();
    return matchesZone && (query === "" || searchableText.includes(query));
  });

  if (!container) return;
  container.innerHTML = "";

  filtered.forEach(pandal => {
    const card = document.createElement("article");
    card.className = "pandal-card";

    card.innerHTML = `
      <div style="background: linear-gradient(135deg, #421608 0%, #1a0f0b 100%); padding: 22px 15px; text-align: center; border-bottom: 1px solid var(--border);">
        <div style="font-size: 28px; margin-bottom: 4px;">🔱 🪔 🔱</div>
        <span class="zone-tag">📍 ${escapeHTML(getZoneLabel(pandal.zone))}</span>
      </div>
      <div class="card-content">
        <h3>${escapeHTML(pandal.name)}</h3>
        <p style="color: var(--gold-light); margin-bottom: 6px;"><strong>✨ বিশেষত্ব:</strong> ${escapeHTML(pandal.famous)}</p>
        <p><strong>🚆 নিকটবর্তী রেলস্টেশন:</strong> ${escapeHTML(pandal.railway)}</p>
        <p><strong>🚇 নিকটবর্তী মেট্রো:</strong> ${escapeHTML(pandal.metro)}</p>
        <div class="card-actions">
          <button type="button" class="details-button">বিস্তারিত</button>
          <a class="small-map-link" href="${getMapUrl(pandal)}" target="_blank" rel="noopener noreferrer">ম্যাপ ↗</a>
        </div>
      </div>
    `;

    const btn = card.querySelector(".details-button");
    if (btn) {
      btn.addEventListener("click", () => openModal(pandal));
    }
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
  if (modalImg) modalImg.style.display = "none";

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
    modal.style.display = "flex";
  }
  document.body.classList.add("modal-open");
}

function closeModal() {
  if (modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
  }
  document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

renderPandals();
