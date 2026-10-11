// Search is case-insensitive and supports English/Bengali aliases.
const pandals = [
  {
    id: 1,
    name: "Kalyani ITI More",
    zone: "কল্যাণী",
    zoneLabel: "কল্যাণী (নদীয়া)",
    railway: "কল্যাণী মেইন স্টেশন / ঘোষপাড়া",
    metro: "মেট্রো নেই; ট্রেন ও টোটো",
    famous: "বড় আয়োজন ও থিম",
    desc: "কল্যাণী মেইন স্টেশন থেকে অটো বা টোটো নিয়ে যাওয়া যায়।",
    map: "Kalyani ITI More Durga Puja",
    keywords: "kalyani nadia কল্যাণী আইটিআই মোড়",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20pandal%20decorations%20in%20Kolkata.jpg?width=900"
  },
  {
    id: 2,
    name: "Luminous Park (A9)",
    zone: "কল্যাণী",
    zoneLabel: "কল্যাণী (নদীয়া)",
    railway: "কল্যাণী মেইন স্টেশন",
    metro: "মেট্রো নেই",
    famous: "আলোকসজ্জা ও সৃজনশীল শিল্পকর্ম",
    desc: "কল্যাণীর A9 এলাকার পূজার লোকেশন আগে যাচাই করে নাও।",
    map: "Kalyani A9 Luminous Park Durga Puja",
    keywords: "kalyani a9 luminous park কল্যাণী",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vibrant%20decorations%20at%20a%20Durga%20Puja%20pandal%20in%20Kolkata.jpg?width=900"
  },
  {
    id: 3,
    name: "Kalyani Central Park",
    zone: "কল্যাণী",
    zoneLabel: "কল্যাণী (নদীয়া)",
    railway: "কল্যাণী মেইন স্টেশন",
    metro: "মেট্রো নেই",
    famous: "থিম প্যান্ডেল ও সাংস্কৃতিক অনুষ্ঠান",
    desc: "কল্যাণীর কেন্দ্রীয় এলাকার প্যান্ডেল; যাওয়ার আগে লোকেশন যাচাই করো।",
    map: "Kalyani Central Park Durga Puja",
    keywords: "kalyani central park কল্যাণী",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colorful%20Durga%20Puja%20pandal%20decorations%20from%20Kolkata.jpg?width=900"
  },
  {
    id: 4,
    name: "New Town Sarbojanin (AK Block)",
    zone: "নিউ টাউন",
    zoneLabel: "নিউ টাউন",
    railway: "নিকটবর্তী রেল সংযোগ রুট যাচাই করুন",
    metro: "নিকটবর্তী মেট্রো/বাস সংযোগ যাচাই করুন",
    famous: "আধুনিক থিম ও সাজ",
    desc: "নিউ টাউনের নির্দিষ্ট প্যান্ডেল ও প্রবেশপথ ম্যাপে দেখে নাও।",
    map: "New Town Sarbojanin Durga Puja AK Block",
    keywords: "new town ak block নিউ টাউন",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20wide%20variety%20of%20decorations%20are%20used%20at%20Durga%20Puja%20pandals%20in%20Kolkata.jpg?width=900"
  },
  {
    id: 5,
    name: "FD Block, Salt Lake",
    zone: "সল্টলেক",
    zoneLabel: "সল্টলেক",
    railway: "বিধাননগর রোড",
    metro: "করুণাময়ী / সল্টলেক সেক্টর V—রুট যাচাই করুন",
    famous: "পরিবার-বান্ধব বড় থিম",
    desc: "সল্টলেকের FD ব্লকের বর্তমান ট্রাফিক ও রুট দেখে নাও।",
    map: "FD Block Durga Puja Salt Lake",
    keywords: "fd block salt lake সল্টলেক ফেডি ব্লক",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2014%20Durga%20Puja%20Bagbazar%20Pandal%2C%20Kolkata.jpg?width=900"
  },
  {
    id: 6,
    name: "BJ Block, Salt Lake",
    zone: "সল্টলেক",
    zoneLabel: "সল্টলেক",
    railway: "বিধাননগর রোড",
    metro: "করুণাময়ী—রুট যাচাই করুন",
    famous: "সাবেকি সাজ ও সাংস্কৃতিক পরিবেশ",
    desc: "পরিবার ও বন্ধুদের নিয়ে ঘোরার আগে রুট দেখে নাও।",
    map: "BJ Block Durga Puja Salt Lake",
    keywords: "bj block salt lake সল্টলেক",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Artistic%20decorations%20at%20a%20Durga%20Puja%20pandal%20in%20Kolkata.jpg?width=900"
  },
  {
    id: 7,
    name: "Sree Bhumi Sporting Club",
    zone: "উত্তর কলকাতা",
    zoneLabel: "লেক টাউন",
    railway: "বিধাননগর রোড",
    metro: "দমদম / বেলগাছিয়া—রুট যাচাই করুন",
    famous: "বড় থিম ও আলোকসজ্জা",
    desc: "লেক টাউন এলাকার জনপ্রিয় আয়োজন; উৎসবের সময় ভিড় হতে পারে।",
    map: "Sree Bhumi Sporting Club Lake Town",
    keywords: "sree bhumi lake town শ্রীভূমি",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Durga%20Puja%20pandal%20designed%20like%20the%20head%20of%20the%20Buffalo%20demon%20Mahishasura.jpg?width=900"
  },
  {
    id: 8,
    name: "Ahiritola Youth Club",
    zone: "উত্তর কলকাতা",
    zoneLabel: "উত্তর কলকাতা",
    railway: "নিকটবর্তী রেল/ফেরি সংযোগ ম্যাপে যাচাই করুন",
    metro: "শোভাবাজার সুতানুটি",
    famous: "ঐতিহ্য ও বাংলার শিল্পকলা",
    desc: "উত্তর কলকাতার পুরনো পাড়ার পূজার আবহ উপভোগ করতে পারো।",
    map: "Ahiritola Youth Club Durga Puja",
    keywords: "ahiritola youth club ahiritola আহিরীটোলা",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/5459g%20ahiritolla%20traffic-jam-crowds-at-0418AM.jpg?width=900"
  },
  {
    id: 9,
    name: "Kumartuli Park",
    zone: "উত্তর কলকাতা",
    zoneLabel: "কুমোরটুলি",
    railway: "শোভাবাজার আহিরীটোলা—রুট যাচাই করুন",
    metro: "শোভাবাজার সুতানুটি",
    famous: "প্রতিমা শিল্প ও থিমের মেলবন্ধন",
    desc: "কুমোরটুলি শিল্পাঞ্চলের কাছে; সরু রাস্তা ও ভিড়ের জন্য প্রস্তুত থাকো।",
    map: "Kumartuli Park Durga Puja",
    keywords: "kumartuli park kumartuly কুমোরটুলি",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/DurgaPuja2019%20-%20Durga%20Puja%20pandal%20of%20Kumartoli%20Park%20in%20Kolkata%2003.jpg?width=900"
  },
  {
    id: 10,
    name: "Bagbazar Sarbojonin",
    zone: "উত্তর কলকাতা",
    zoneLabel: "বাগবাজার",
    railway: "বাগবাজার স্টেশন",
    metro: "শ্যামবাজার—রুট যাচাই করুন",
    famous: "ঐতিহ্যবাহী সাবেকি দুর্গাপূজা",
    desc: "বাগবাজারের ঐতিহ্যবাহী পূজা; যাত্রার আগে লোকেশন নিশ্চিত করো।",
    map: "Bagbazar Sarbojanin Durga Puja",
    keywords: "bagbazar baghbazar sarbojonin বাগবাজার",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20Pandal%20-%20Baghbazar%20Sarbojanin%20Durgotsav%20-%20Nivedita%20Park%20-%20Kolkata%202013-10-13%2001809.jpg?width=900"
  },
  {
    id: 11,
    name: "College Square",
    zone: "মধ্য কলকাতা",
    zoneLabel: "মধ্য কলকাতা",
    railway: "শিয়ালদহ / কেন্দ্রীয় রেল সংযোগ",
    metro: "মহাত্মা গান্ধী রোড—রুট যাচাই করুন",
    famous: "জলের উপর আলোর প্রতিফলন",
    desc: "কলেজ স্কোয়ারের জলাশয় ও আলোকসজ্জা দেখতে ভিড়ের সময় আগে পৌঁছনো ভালো।",
    map: "College Square Durga Puja Kolkata",
    keywords: "college square কলেজ স্কোয়ার",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/P0121g%20college-square-puja.jpg?width=900"
  },
  {
    id: 12,
    name: "Santosh Mitra Square",
    zone: "মধ্য কলকাতা",
    zoneLabel: "মধ্য কলকাতা",
    railway: "শিয়ালদহ",
    metro: "চাঁদনি চক / সেন্ট্রাল—রুট যাচাই করুন",
    famous: "বড় স্থাপত্য-অনুপ্রাণিত থিম",
    desc: "মধ্য কলকাতার জনপ্রিয় প্যান্ডেল; ভিড় ও রাস্তার বিধিনিষেধ দেখে নাও।",
    map: "Santosh Mitra Square Durga Puja",
    keywords: "santosh mitra square সন্তোষ মিত্র স্কোয়ার",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Artisitic%20decorations%20at%20a%20pandal%20during%20Kolkata%27s%20Durga%20Puja.jpg?width=900"
  },
  {
    id: 13,
    name: "Chetla Agrani Club",
    zone: "দক্ষিণ কলকাতা",
    zoneLabel: "চেতলা",
    railway: "মাঝেরহাট—রুট যাচাই করুন",
    metro: "নিকটবর্তী মেট্রো রুট যাচাই করুন",
    famous: "নতুন ভাবনা ও থিম প্রতিমা",
    desc: "চেতলা এলাকার পরিচিত থিম পূজা।",
    map: "Chetla Agrani Club Durga Puja",
    keywords: "chetla agrani চেতলা অগ্রণী",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/5429g%20suruchi-pratima.jpg?width=900"
  },
  {
    id: 14,
    name: "Suruchi Sangha",
    zone: "দক্ষিণ কলকাতা",
    zoneLabel: "নিউ আলিপুর",
    railway: "মাঝেরহাট",
    metro: "নিকটবর্তী মেট্রো রুট যাচাই করুন",
    famous: "বিভিন্ন অঞ্চলের সংস্কৃতি ও শিল্প",
    desc: "নিউ আলিপুর অঞ্চলের জনপ্রিয় পূজা; নির্দিষ্ট প্রবেশপথ ম্যাপে দেখে নাও।",
    map: "Suruchi Sangha Durga Puja",
    keywords: "suruchi sangha new alipore নিউ আলিপুর",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20Pandal%20-%20New%20Alipore%20Suruchi%20Sangha%20-%20Kolkata%202011-10-23%20030330.JPG?width=900"
  },
  {
    id: 15,
    name: "Tridhara Sammilani",
    zone: "দক্ষিণ কলকাতা",
    zoneLabel: "দক্ষিণ কলকাতা",
    railway: "বালিগঞ্জ জংশন",
    metro: "নিকটবর্তী মেট্রো রুট যাচাই করুন",
    famous: "আধুনিক শিল্প ও ঐতিহ্যের মেলবন্ধন",
    desc: "দক্ষিণ কলকাতার ব্যস্ত পূজা এলাকা; চলাচলের আপডেট দেখে নাও।",
    map: "Tridhara Sammilani Durga Puja",
    keywords: "tridhara sammilani ত্রিধারা",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20pandal%20image%20from%20Kolkata.jpg?width=900"
  },
  {
    id: 16,
    name: "Ekdalia Evergreen Club",
    zone: "দক্ষিণ কলকাতা",
    zoneLabel: "গড়িয়াহাট",
    railway: "বালিগঞ্জ স্টেশন",
    metro: "নিকটবর্তী মেট্রো রুট যাচাই করুন",
    famous: "সাবেকি প্রতিমা ও ঝাড়বাতির সাজ",
    desc: "গড়িয়াহাট এলাকার ঐতিহ্যবাহী পূজাগুলোর একটি।",
    map: "Ekdalia Evergreen Club Durga Puja",
    keywords: "ekdalia evergreen gariahat একডালিয়া",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20Pandal%20-%20Ekdalia%20Evergreen%20-%20Ekdalia%20Road%20-%20Kolkata%202013-10-11%203312.JPG?width=900"
  },
  {
    id: 17,
    name: "Shobhabazar Rajbari",
    zone: "উত্তর কলকাতা",
    zoneLabel: "শোভাবাজার",
    railway: "নিকটবর্তী রেল সংযোগ ম্যাপে যাচাই করুন",
    metro: "শোভাবাজার সুতানুটি",
    famous: "রাজবাড়ির ঐতিহ্য ও সাবেকি দুর্গাপূজা",
    desc: "ঐতিহাসিক পূজা দেখতে যাওয়ার আগে প্রবেশের নিয়ম ও সময় যাচাই করো।",
    map: "Shobhabazar Rajbari Durga Puja Kolkata",
    keywords: "shobhabazar sobhabazar rajbari শোভাবাজার রাজবাড়ি",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2014%20Durga%20Puja%20Bagbazar%20Pandal%2C%20Kolkata.jpg?width=900"
  },
  {
    id: 18,
    name: "Rani Rashmoni Bhavan",
    zone: "মধ্য কলকাতা",
    zoneLabel: "মধ্য কলকাতা",
    railway: "লোকেশন অনুযায়ী যাচাই করুন",
    metro: "লোকেশন অনুযায়ী যাচাই করুন",
    famous: "ঐতিহাসিক স্থাপত্য ও ঐতিহ্যের আবহ",
    desc: "এই নামে নির্দিষ্ট পূজা/অনুষ্ঠানস্থল যাওয়ার আগে ম্যাপে নিশ্চিত করো।",
    map: "Rani Rashmoni Bhavan Kolkata",
    keywords: "rani rashmoni bhavan রানী রাসমণি ভবন",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Mata%20Images%20-%20A%20Durga%20Puja%20pandal%20in%20Kolkata.jpg?width=900"
  },
  {
    id: 19,
    name: "City Centre Durga Puja",
    zone: "সল্টলেক",
    zoneLabel: "সল্টলেক / সিটি সেন্টার",
    railway: "বিধাননগর রোড—রুট যাচাই করুন",
    metro: "করুণাময়ী—রুট যাচাই করুন",
    famous: "শপিং এলাকার আশেপাশের পূজার আয়োজন",
    desc: "কোন শাখা ও কোন প্যান্ডেল বোঝানো হয়েছে, যাওয়ার আগে ম্যাপে নিশ্চিত করো।",
    map: "City Centre Salt Lake Durga Puja pandal",
    keywords: "city centre city center salt lake সিটি সেন্টার",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Colorful%20Durga%20Puja%20pandal%20decorations%20from%20Kolkata.jpg?width=900"
  },
  {
    id: 20,
    name: "Axis Mall Durga Puja",
    zone: "নিউ টাউন",
    zoneLabel: "নিউ টাউন",
    railway: "নিকটবর্তী রেল সংযোগ যাচাই করুন",
    metro: "নিকটবর্তী মেট্রো/বাস সংযোগ যাচাই করুন",
    famous: "মল এলাকার উৎসব ও আশেপাশের পূজা",
    desc: "অ্যাক্সিস মলের সংলগ্ন নির্দিষ্ট পূজার নাম ও আয়োজন যাচাই করে নাও।",
    map: "Axis Mall New Town Durga Puja pandal",
    keywords: "axis mall new town অ্যাক্সিস মল",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20wide%20variety%20of%20decorations%20are%20used%20at%20Durga%20Puja%20pandals%20in%20Kolkata.jpg?width=900"
  },
  {
    id: 21,
    name: "Kalighat 66 Pally",
    zone: "দক্ষিণ কলকাতা",
    zoneLabel: "কালীঘাট",
    railway: "নিকটবর্তী রেল সংযোগ ম্যাপে যাচাই করুন",
    metro: "কালীঘাট / জতীন দাস পার্ক—রুট যাচাই করুন",
    famous: "কালীঘাট এলাকার দুর্গাপূজা",
    desc: "কালীঘাট এলাকার নির্দিষ্ট প্যান্ডেল ও প্রবেশপথ ম্যাপে দেখে নাও।",
    map: "Kalighat 66 Pally Durga Puja Kolkata",
    keywords: "kalighat kali ghat কালীঘাট 66 pally ৬৬ পল্লী",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Deshpriyo%20Park%20Pandal%20Arnab%20Dutta%202010.JPG?width=900"
  },
  {
    id: 22,
    name: "Debi Priya Das (নাম যাচাই প্রয়োজন)",
    zone: "কলকাতা",
    zoneLabel: "কলকাতা — তথ্য যাচাই প্রয়োজন",
    railway: "সঠিক নাম/ঠিকানা নিশ্চিত করা বাকি",
    metro: "সঠিক নাম/ঠিকানা নিশ্চিত করা বাকি",
    famous: "প্যান্ডেলের পরিচয় নিশ্চিত করা বাকি",
    desc: "এই নামটি আগের বার্তায় যেমন এসেছিল তেমনই রাখা হয়েছে; সঠিক বানান/এলাকা নিশ্চিত হলে তথ্য আপডেট করা যাবে।",
    map: "Debi Priya Das Durga Puja Kolkata",
    keywords: "debi priya das debipriya das দেব প্রিয়া দাশ",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20pandal%20decorations%20in%20Kolkata.jpg?width=900"
  }
];

const container = document.getElementById("pandalContainer");
const input = document.getElementById("searchInput");
const resultsLine = document.getElementById("resultsLine");
const noResults = document.getElementById("noResults");
const modal = document.getElementById("pandalModal");

let selectedZone = "সব এলাকা";

function normalise(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLocaleLowerCase()
    .trim()
    .replace(/[’'`]/g, "")
    .replace(/[.,/#!$%^&*;:{}=\-_~()]/g, " ")
    .replace(/\s+/g, " ");
}

function searchableText(item) {
  return normalise([
    item.name,
    item.zone,
    item.zoneLabel,
    item.railway,
    item.metro,
    item.famous,
    item.desc,
    item.keywords,
    item.map
  ].join(" "));
}

function displayPandals() {
  const query = normalise(input.value);

  const filtered = pandals.filter(item => {
    // Search করলে আগের নির্বাচিত এলাকার বাধা থাকবে না।
    const zoneMatches =
      query ||
      selectedZone === "সব এলাকা" ||
      item.zone === selectedZone ||
      (
        selectedZone === "কলকাতা" &&
        item.zone !== "কল্যাণী" &&
        item.zone !== "নিউ টাউন" &&
        item.zone !== "সল্টলেক"
      );

    return zoneMatches &&
      (!query || searchableText(item).includes(query));
  });

  container.innerHTML = "";

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";

    const image = document.createElement("img");
    image.className = "card-image";
    image.src = item.image;
    image.alt = item.name + " প্যান্ডেলের ছবি";
    image.loading = "lazy";

    image.onerror = () => {
      image.onerror = null;
      image.src =
        "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20pandal%20decorations%20in%20Kolkata.jpg?width=900";
      image.alt = item.name +
        " — সাধারণ দুর্গাপূজা প্যান্ডেলের রেফারেন্স ছবি";
    };

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
    card.append(image, content);
    container.append(card);
  });

  noResults.hidden = filtered.length !== 0;

  resultsLine.textContent = query
    ? `${filtered.length}টি প্যান্ডেল পাওয়া গেছে: “${input.value.trim()}”`
    : selectedZone !== "সব এলাকা"
      ? `${filtered.length}টি প্যান্ডেল পাওয়া গেছে`
      : `মোট ${filtered.length}টি প্যান্ডেল — সার্চ করে নিজের পছন্দেরটি খুঁজে নাও`;
}

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
    modalImage.src =
      "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20pandal%20decorations%20in%20Kolkata.jpg?width=900";
  };

  document.getElementById("modalMap").href =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(item.map);

  modal.showModal();
}

document.getElementById("closeModal").addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.close();
  }
});

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  displayPandals();

  document.getElementById("pandals").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

input.addEventListener("input", displayPandals);

document.getElementById("clearSearch").addEventListener("click", () => {
  input.value = "";
  selectedZone = "সব এলাকা";

  document.querySelectorAll(".zone-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.zone === selectedZone);
  });

  displayPandals();
  input.focus();
});

document.querySelectorAll(".zone-chip").forEach(button => {
  button.addEventListener("click", () => {
    selectedZone = button.dataset.zone;

    document.querySelectorAll(".zone-chip").forEach(chip => {
      chip.classList.toggle("active", chip === button);
    });

    displayPandals();

    document.getElementById("pandals").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

displayPandals();
