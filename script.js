const pandals = [
  {
    id: 1, name: "Kalyani ITI More",
    zone: "কল্যাণী", zoneFull: "Kalyani (Nadia)",
    railway: "Kalyani Main Station",
    metro: "মেট্রো নেই",
    famous: "Grand Architecture & Mega Themes",
    desc: "কল্যাণীর জনপ্রিয় পূজাগুলির একটি। স্টেশন থেকে অটো বা টোটো নেওয়া যায়।",
    map: "Kalyani ITI More Durga Puja"
  },
  {
    id: 2, name: "Luminous Park (A9)",
    zone: "কল্যাণী", zoneFull: "Kalyani (Nadia)",
    railway: "Kalyani Main Station",
    metro: "মেট্রো নেই",
    famous: "Lighting & Creative Artwork",
    desc: "আলোকসজ্জা ও সৃজনশীল সাজসজ্জার জন্য পরিচিত।",
    map: "Kalyani A9 Luminous Park"
  },
  {
    id: 3, name: "Kalyani Central Park",
    zone: "কল্যাণী", zoneFull: "Kalyani (Nadia)",
    railway: "Kalyani Main Station",
    metro: "মেট্রো নেই",
    famous: "Theme Pandal & Cultural Events",
    desc: "কল্যাণীর অন্যতম পরিচিত বড় পুজো।",
    map: "Kalyani Central Park Durga Puja"
  },
  {
    id: 4, name: "New Town Sarbojanin (AK Block)",
    zone: "নিউ টাউন", zoneFull: "New Town",
    railway: "নিকটস্থ স্টেশন যাওয়ার আগে রুট যাচাই করুন",
    metro: "নিকটস্থ মেট্রো রুট যাচাই করুন",
    famous: "Modern Eco-themed Pandal",
    desc: "নিউ টাউনের পুজো দেখতে যাওয়ার আগে সঠিক লোকেশন ও যাতায়াতের রুট দেখে নিন।",
    map: "New Town Sarbojanin Durga Puja"
  },
  {
    id: 5, name: "FD Block, Salt Lake",
    zone: "সল্টলেক", zoneFull: "Salt Lake",
    railway: "Bidhannagar Road Station",
    metro: "Karunamoyee / Salt Lake Sector V",
    famous: "Family-friendly Grand Themes",
    desc: "সল্টলেকের পরিচিত পুজোগুলির একটি।",
    map: "FD Block Durga Puja Salt Lake"
  },
  {
    id: 6, name: "BJ Block, Salt Lake",
    zone: "সল্টলেক", zoneFull: "Salt Lake",
    railway: "Bidhannagar Road Station",
    metro: "Salt Lake Sector V",
    famous: "Traditional & Cultural Decor",
    desc: "পরিবার ও বন্ধুদের সঙ্গে পুজো ঘোরার একটি বিকল্প।",
    map: "BJ Block Durga Puja Salt Lake"
  },
  {
    id: 7, name: "Sree Bhumi Sporting Club",
    zone: "উত্তর কলকাতা", zoneFull: "Lake Town",
    railway: "Bidhannagar Road Station",
    metro: "Dum Dum / Belgachia",
    famous: "Grand Lighting & Iconic Replicas",
    desc: "বড় থিম ও আলোকসজ্জার জন্য পরিচিত।",
    map: "Sree Bhumi Sporting Club Lake Town"
  },
  {
    id: 8, name: "Ahiritola Youth Club",
    zone: "উত্তর কলকাতা", zoneFull: "North Kolkata",
    railway: "নিকটস্থ স্টেশন ও রুট যাচাই করুন",
    metro: "Sovabazar Sutanuti",
    famous: "Heritage & Traditional Art",
    desc: "উত্তর কলকাতার ঐতিহ্যবাহী পুজো এলাকার একটি আকর্ষণ।",
    map: "Ahiritola Youth Club Kolkata"
  },
  {
    id: 9, name: "Kumartuli Park",
    zone: "উত্তর কলকাতা", zoneFull: "North Kolkata",
    railway: "নিকটস্থ স্টেশন ও রুট যাচাই করুন",
    metro: "Sovabazar Sutanuti",
    famous: "Artistic Fusion & Clay Art",
    desc: "কুমোরটুলির প্রতিমা শিল্পের ঐতিহ্যের কাছাকাছি।",
    map: "Kumartuli Park Durga Puja"
  },
  {
    id: 10, name: "Bagbazar Sarbojonin",
    zone: "উত্তর কলকাতা", zoneFull: "North Kolkata",
    railway: "Bagbazar Station",
    metro: "Shyambazar",
    famous: "Oldest Traditional Puja",
    desc: "কলকাতার বিখ্যাত সাবেকি দুর্গাপুজোগুলির একটি।",
    map: "Bagbazar Sarbojonin Durga Puja"
  },
  {
    id: 11, name: "College Square",
    zone: "মধ্য কলকাতা", zoneFull: "Central Kolkata",
    railway: "Sealdah Station",
    metro: "Mahatma Gandhi Road",
    famous: "Grand Reflection Lighting on Lake",
    desc: "জলের উপর আলোর প্রতিফলন ও সাজসজ্জার জন্য পরিচিত।",
    map: "College Square Durga Puja Kolkata"
  },
  {
    id: 12, name: "Santosh Mitra Square",
    zone: "মধ্য কলকাতা", zoneFull: "Central Kolkata",
    railway: "Sealdah Station",
    metro: "Central / Chandni Chowk",
    famous: "Unique Architectural Replicas",
    desc: "বড় থিম ও স্থাপত্যের অনুকরণে তৈরি মণ্ডপের জন্য পরিচিত।",
    map: "Santosh Mitra Square Durga Puja"
  },
  {
    id: 13, name: "Chetla Agrani Club",
    zone: "দক্ষিণ কলকাতা", zoneFull: "South Kolkata",
    railway: "Majerhat Station",
    metro: "নিকটস্থ মেট্রো রুট যাচাই করুন",
    famous: "Innovative Concept & Theme Idol",
    desc: "দক্ষিণ কলকাতার পরিচিত থিম পুজোগুলির একটি।",
    map: "Chetla Agrani Club Durga Puja"
  },
  {
    id: 14, name: "Suruchi Sangha",
    zone: "দক্ষিণ কলকাতা", zoneFull: "New Alipore",
    railway: "Majerhat Station",
    metro: "নিকটস্থ মেট্রো রুট যাচাই করুন",
    famous: "State Culture Themes & Art",
    desc: "বিভিন্ন অঞ্চলের সংস্কৃতি ও শিল্পের থিম দেখা যায়।",
    map: "Suruchi Sangha Durga Puja"
  },
  {
    id: 15, name: "Tridhara Sammilani",
    zone: "দক্ষিণ কলকাতা", zoneFull: "South Kolkata",
    railway: "Ballygunge Junction",
    metro: "নিকটস্থ মেট্রো রুট যাচাই করুন",
    famous: "Modern Art & Traditional Fusion",
    desc: "আধুনিক শিল্প ও ঐতিহ্যের মিশ্রণ দেখা যায়।",
    map: "Tridhara Sammilani Durga Puja"
  },
  {
    id: 16, name: "Ekdalia Evergreen Club",
    zone: "দক্ষিণ কলকাতা", zoneFull: "Gariahat",
    railway: "Ballygunge Station",
    metro: "নিকটস্থ মেট্রো রুট যাচাই করুন",
    famous: "Traditional Pratima & Chandeliers",
    desc: "সাবেকি প্রতিমা ও ঐতিহ্যবাহী সাজসজ্জার জন্য পরিচিত।",
    map: "Ekdalia Evergreen Club Durga Puja"
  },
  {
    id: 17, name: "Shobhabazar Rajbari",
    zone: "উত্তর কলকাতা", zoneFull: "Shobhabazar",
    railway: "Shobhabazar Ahiritola Station",
    metro: "Shobhabazar Sutanuti",
    famous: "Heritage & Royal Vibes",
    desc: "কলকাতার ঐতিহ্যবাহী রাজবাড়ির দুর্গাপুজো।",
    map: "Shobhabazar Rajbari Durga Puja"
  },
  {
    id: 18, name: "Rani Rashmoni Bhavan",
    zone: "মধ্য কলকাতা", zoneFull: "Central Kolkata",
    railway: "সঠিক নিকটস্থ স্টেশন যাচাই করুন",
    metro: "সঠিক নিকটস্থ মেট্রো যাচাই করুন",
    famous: "Traditional Heritage",
    desc: "এই নামের নির্দিষ্ট পুজো ও লোকেশন নিশ্চিত করে যাওয়ার পরিকল্পনা করুন।",
    map: "Rani Rashmoni Bhavan Kolkata Durga Puja"
  },
  {
    id: 19, name: "City Centre",
    zone: "সল্টলেক", zoneFull: "Salt Lake",
    railway: "নিকটস্থ স্টেশন যাচাই করুন",
    metro: "নিকটস্থ মেট্রো যাচাই করুন",
    famous: "Shopping & Festive Celebrations",
    desc: "সিটি সেন্টারের নির্দিষ্ট শাখা ও সংলগ্ন পুজোর তথ্য যাচাই করুন।",
    map: "City Centre Salt Lake Durga Puja"
  },
  {
    id: 20, name: "Axis Mall",
    zone: "নিউ টাউন", zoneFull: "New Town",
    railway: "নিকটস্থ স্টেশন যাচাই করুন",
    metro: "নিকটস্থ মেট্রো রুট যাচাই করুন",
    famous: "Modern Mall & Festive Vibes",
    desc: "অ্যাক্সিস মল ও আশপাশের পুজোর নির্দিষ্ট লোকেশন যাচাই করুন।",
    map: "Axis Mall New Town Kolkata Durga Puja"
  }
];

const container = document.getElementById("pandalContainer");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const modal = document.getElementById("pandalModal");

let activeZone = "all";

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function getSearchText(item) {
  return normalize([
    item.name,
    item.zone,
    item.zoneFull,
    item.railway,
    item.metro,
    item.famous,
    item.desc
  ].join(" "));
}

function displayPandals(data) {
  container.innerHTML = "";
  resultCount.textContent = `মোট ${data.length}টি প্যান্ডেল`;

  if (!data.length) {
    container.innerHTML =
      '<p class="no-results">দুঃখিত! কোনো প্যান্ডেল পাওয়া যায়নি। অন্য নাম লিখে চেষ্টা করো।</p>';
    return;
  }

  data.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";

    const art = document.createElement("div");
    art.className = "card-art";

    const fallback = document.createElement("div");
    fallback.className = "art-fallback";
    fallback.textContent = "🪔";
    art.appendChild(fallback);

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = `📍 ${item.zoneFull}`;

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = `✨ ${item.famous}`;

    const button = document.createElement("button");
    button.className = "view-btn";
    button.type = "button";
    button.textContent = "বিস্তারিত দেখুন →";
    button.addEventListener("click", () => openModal(item.id));

    body.append(title, tag, description, button);
    card.append(art, body);
    container.appendChild(card);
  });
}

function openModal(id) {
  const item = pandals.find(p => p.id === id);
  if (!item) return;

  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalZone").textContent =
    `📍 ${item.zoneFull}`;
  document.getElementById("modalRailway").textContent = item.railway;
  document.getElementById("modalMetro").textContent = item.metro;
  document.getElementById("modalFamous").textContent = item.famous;
  document.getElementById("modalDesc").textContent = item.desc;

  document.getElementById("modalMap").href =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(item.map);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("closeModal").focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function searchPandals() {
  const query = normalize(searchInput.value);

  const filtered = pandals.filter(item => {
    const matchesZone =
      activeZone === "all" ||
      normalize(item.zone).includes(normalize(activeZone)) ||
      normalize(item.zoneFull).includes(normalize(activeZone));

    const matchesSearch =
      !query || getSearchText(item).includes(query);

    return matchesZone && matchesSearch;
  });

  displayPandals(filtered);
}

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  searchPandals();
});

searchInput.addEventListener("input", searchPandals);

document.querySelectorAll(".zone-btn").forEach(button => {
  button.addEventListener("click", () => {
    activeZone = button.dataset.zone;

    document.querySelectorAll(".zone-btn").forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });

    searchPandals();
  });
});

document.getElementById("closeModal")
  .addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

displayPandals(pandals);
