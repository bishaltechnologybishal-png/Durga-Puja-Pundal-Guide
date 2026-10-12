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

const durgaImage = "https://images.unsplash.com/photo-1604608672516-8f7b2f7f3b4a?auto=format&fit=crop&w=900&q=80";

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
  const filtered = pandals.filter(pandal => {
    const matchesZone = selectedZone === "all" || pandal.zone === selectedZone;
    const text = `${pandal.name} ${pandal.zone} ${getZoneLabel(pandal.zone)}`.toLowerCase();
    return matchesZone && text.includes(searchText.toLowerCase());
  });

  container.innerHTML = "";

  filtered.forEach(pandal => {
    const card = document.createElement("article");
    card.className = "pandal-card";

    card.innerHTML = `
      <img class="card-art" src="${durgaImage}" alt="দুর্গাপূজার প্রতিমা" loading="lazy">
      <div class="card-content">
        <span class="zone-tag">${escapeHTML(getZoneLabel(pandal.zone))}</span>
        <h3>${escapeHTML(pandal.name)}</h3>
        <p>নিকটবর্তী রেলস্টেশন: ${escapeHTML(pandal.railway)}</p>
        <p>নিকটবর্তী মেট্রো: ${escapeHTML(pandal.metro)}</p>
        <div class="card-actions">
          <button type="button" class="details-button">বিস্তারিত</button>
          <a class="small-map-link" href="${getMapUrl(pandal)}" target="_blank" rel="noopener noreferrer">ম্যাপ ↗</a>
        </div>
      </div>
    `;

    card.querySelector(".details-button").addEventListener("click", () => openModal(pandal));
    container.appendChild(card);
  });

  resultCount.textContent = `মোট ${filtered.length}টি প্যান্ডেল`;
  noResults.hidden = filtered.length !== 0;
}

function searchPandals() {
  searchText = searchInput.value.trim();
  renderPandals();
}

function filterByZone(zone, button) {
  selectedZone = zone;
  document.querySelectorAll(".zone-btn").forEach(item => item.classList.remove("active"));
  if (button) button.classList.add("active");
  renderPandals();
}

function openModal(pandal) {
  document.getElementById("modalImg").src = durgaImage;
  document.getElementById("modalTitle").textContent = pandal.name;
  document.getElementById("modalZone").textContent = getZoneLabel(pandal.zone);
  document.getElementById("modalRailway").textContent = pandal.railway;
  document.getElementById("modalMetro").textContent = pandal.metro;
  document.getElementById("modalFamous").textContent = pandal.famous;
  document.getElementById("modalDesc").textContent =
    "যাত্রার আগে নিকটবর্তী স্টেশন, ট্রেন ও মেট্রোর পরিষেবা এবং পুজোর সময়সূচি যাচাই করে নাও।";
  document.getElementById("modalMap").href = getMapUrl(pandal);

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

renderPandals();
