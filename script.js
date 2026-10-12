const pandals = [
  { id: 1, name: "Kalyani ITI More", zone: "Kalyani" },
  { id: 2, name: "Kalyani Central Park", zone: "Kalyani" },
  { id: 3, name: "Salt Lake FD Block", zone: "Salt Lake" },
  { id: 4, name: "Salt Lake AK Block", zone: "Salt Lake" },
  { id: 5, name: "Salt Lake BJ Block", zone: "Salt Lake" },
  { id: 6, name: "New Town Sarbojanin", zone: "New Town" },
  { id: 7, name: "Sree Bhumi Sporting Club", zone: "North Kolkata" },
  { id: 8, name: "Tala Prattoy", zone: "North Kolkata" },
  { id: 9, name: "Tala Barowari", zone: "North Kolkata" },
  { id: 10, name: "Dum Dum Park Tarun Dal", zone: "North Kolkata" },
  { id: 11, name: "Dum Dum Park Bharat Chakra", zone: "North Kolkata" },
  { id: 12, name: "Dum Dum Park Tarun Sangha", zone: "North Kolkata" },
  { id: 13, name: "Telengabagan", zone: "North Kolkata" },
  { id: 14, name: "Manicktala Chaltabagan", zone: "North Kolkata" },
  { id: 15, name: "Shimla Byam Samity", zone: "North Kolkata" },
  { id: 16, name: "Hatibagan Sarbojonin", zone: "North Kolkata" },
  { id: 17, name: "Hatibagan Nabin Pally", zone: "North Kolkata" },
  { id: 18, name: "Sikdar Bagan Sadharan", zone: "North Kolkata" },
  { id: 19, name: "Nalin Sarkar Street", zone: "North Kolkata" },
  { id: 20, name: "Kashi Bose Lane", zone: "Central Kolkata" },
  { id: 21, name: "Shobhabazar Rajbari", zone: "North Kolkata" },
  { id: 22, name: "Beniatola Sarbojanin", zone: "North Kolkata" },
  { id: 23, name: "Ahiritola Sarbojanin", zone: "North Kolkata" },
  { id: 24, name: "Kumartuli Sarbojanin", zone: "North Kolkata" },
  { id: 25, name: "Kumartuli Park", zone: "North Kolkata" },
  { id: 26, name: "Jagat Mukherjee Park", zone: "North Kolkata" },
  { id: 27, name: "Bagbazar Sarbojonin", zone: "North Kolkata" },
  { id: 28, name: "Santosh Mitra Square", zone: "Central Kolkata" },
  { id: 29, name: "College Square", zone: "Central Kolkata" },
  { id: 30, name: "Mohammad Ali Park", zone: "Central Kolkata" },
  { id: 31, name: "Chorbagan Sarbojanin", zone: "North Kolkata" },
  { id: 32, name: "Millennium Park", zone: "Central Kolkata" },
  { id: 33, name: "Naktala Udayan Sangha", zone: "South Kolkata" },
  { id: 34, name: "Jodhpur Park", zone: "South Kolkata" }
];

let selectedZone = "all";
let searchText = "";

const container = document.getElementById("pandalContainer");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("pandalModal");

function getMapUrl(pandal) {
  const query = `${pandal.name}, Kolkata, West Bengal`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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

function renderPandals() {
  const filteredPandals = pandals.filter((pandal) => {
    const matchesZone =
      selectedZone === "all" || pandal.zone === selectedZone;

    const searchableText =
      `${pandal.name} ${pandal.zone} ${getZoneLabel(pandal.zone)}`.toLowerCase();

    const matchesSearch = searchableText.includes(searchText.toLowerCase());

    return matchesZone && matchesSearch;
  });

  container.innerHTML = "";

  filteredPandals.forEach((pandal) => {
    const card = document.createElement("article");
    card.className = "pandal-card";

    card.innerHTML = `
      <div class="card-art" aria-hidden="true">🪔</div>
      <div class="card-content">
        <span class="zone-tag">${getZoneLabel(pandal.zone)}</span>
        <h3>${escapeHTML(pandal.name)}</h3>
        <p>প্যান্ডেল ও প্রতিমা দর্শনের জন্য বিস্তারিত দেখো।</p>
        <div class="card-actions">
          <button type="button" class="details-button">বিস্তারিত</button>
          <a class="small-map-link"
             href="${getMapUrl(pandal)}"
             target="_blank"
             rel="noopener noreferrer">ম্যাপ ↗</a>
        </div>
      </div>
    `;

    card.querySelector(".details-button").addEventListener("click", () => {
      openModal(pandal);
    });

    container.appendChild(card);
  });

  resultCount.textContent = `মোট ${filteredPandals.length}টি প্যান্ডেল`;
  noResults.hidden = filteredPandals.length !== 0;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function searchPandals() {
  searchText = searchInput.value.trim();
  renderPandals();
}

function filterByZone(zone, button) {
  selectedZone = zone;

  document.querySelectorAll(".zone-btn").forEach((item) => {
    item.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  renderPandals();
}

function openModal(pandal) {
  document.getElementById("modalImg").textContent = "🪔";
  document.getElementById("modalTitle").textContent = pandal.name;
  document.getElementById("modalZone").textContent = getZoneLabel(pandal.zone);
  document.getElementById("modalRailway").textContent =
    "যাত্রার আগে Google Maps-এ যাচাই করুন";
  document.getElementById("modalMetro").textContent =
    "নিকটবর্তী স্টেশন ও পরিষেবা যাচাই করুন";
  document.getElementById("modalFamous").textContent =
    "প্যান্ডেল ও প্রতিমা দর্শন";
  document.getElementById("modalDesc").textContent =
    "এটি প্যান্ডেল গাইডের তালিকাভুক্ত একটি পুজো। ২০২৬ সালের পুজোর সময়সূচি, ভিড় এবং যাতায়াতের সর্বশেষ তথ্য যাওয়ার আগে যাচাই করে নাও।";

  const mapLink = document.getElementById("modalMap");
  mapLink.href = getMapUrl(pandal);

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  document.querySelector(".close-modal").focus();
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

renderPandals();
