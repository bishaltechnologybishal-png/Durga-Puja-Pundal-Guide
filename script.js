const pandalData = [
  // উত্তর কলকাতা (North)
  {
    name: "টালা প্রত্যয়",
    zone: "North",
    metro: "বেলগাছিয়া / শ্যামবাজার",
    train: "কলকাতা (চিতপুর) / টালা স্টেশন",
    walk: "বেলগাছিয়া মেট্রো থেকে ৭-১০ মিনিট হাঁটা পথ (৮০০ মি)",
    map: "https://maps.google.com/?cid=11726144247438210038"
  },
  {
    name: "বাগবাজার সর্বজনীন",
    zone: "North",
    metro: "শ্যামবাজার মেট্রো",
    train: "বাগবাজার চক্ররেল স্টেশন",
    walk: "শ্যামবাজার ১ নং গেট থেকে ৮ মিনিট হাঁটা পথ (৬৫০ মি)",
    map: "https://maps.google.com/?cid=3135137856474226898"
  },
  {
    name: "কুমোরটুলি সর্বজনীন ও পার্ক",
    zone: "North",
    metro: "শোভাবাজার সুতানুটি",
    train: "শোভাবাজার বাজার চক্ররেল",
    walk: "মেট্রো থেকে ৫-৭ মিনিট হাঁটা পথ (৫০০ মি)",
    map: "https://maps.google.com/?cid=10306922731007759124"
  },
  {
    name: "শোভাবাজার রাজবাড়ী",
    zone: "North",
    metro: "শোভাবাজার সুতানুটি",
    train: "শোভাবাজার চক্ররেল",
    walk: "মেট্রো থেকে রাজা নবকৃষ্ণ স্ট্রিট ধরে মাত্র ৩ মিনিট (২৫০ মি)",
    map: "https://maps.google.com/?cid=10504149912207972374"
  },
  {
    name: "হাতিবাগান সর্বজনীন ও নবীনপল্লী",
    zone: "North",
    metro: "শ্যামবাজার / গিরিশ পার্ক",
    train: "বিধাননগর রোড স্টেশন",
    walk: "হাতিবাগান মোড় থেকে ২ মিনিট হাঁটা পথ",
    map: "https://maps.google.com/?cid=8683911336487123911"
  },
  {
    name: "কাশী বোস লেন ও নলিন সরকার",
    zone: "North",
    metro: "গিরিশ পার্ক / শোভাবাজার",
    train: "কলকাতা রেল স্টেশন",
    walk: "বিধান সরণি কর্নওয়ালিস মোড় থেকে ৪ মিনিট",
    map: "https://maps.google.com/?cid=15378221803207001415"
  },
  {
    name: "দমদম পার্ক তরুণ দল ও ভারত চক্র",
    zone: "North",
    metro: "দমদম মেট্রো স্টেশন",
    train: "দমদম জংশন",
    walk: "ভিআইপি রোড দমদম পার্ক স্টপেজ থেকে ৪-৫ মিনিট",
    map: "https://maps.google.com/?cid=7679506939318791663"
  },

  // সেন্ট্রাল কলকাতা (Central)
  {
    name: "কলেজ স্কোয়ার সর্বজনীন",
    zone: "Central",
    metro: "সেন্ট্রাল / এমজি রোড",
    train: "শিয়ালদহ রেল স্টেশন",
    walk: "সেন্ট্রাল মেট্রো থেকে ৫-৬ মিনিট হাঁটা পথ",
    map: "https://maps.google.com/?cid=12681855571301219231"
  },
  {
    name: "মহম্মদ আলী পার্ক",
    zone: "Central",
    metro: "মহাত্মা গান্ধী রোড (MG Road)",
    train: "শিয়ালদহ স্টেশন",
    walk: "এমজি রোড মেট্রো গেট থেকে মাত্র ৩ মিনিট (২০০ মি)",
    map: "https://maps.google.com/?cid=7260356945061295625"
  },
  {
    name: "সন্তোষ মিত্র স্কোয়ার (লেবুতলা পার্ক)",
    zone: "Central",
    metro: "সেন্ট্রাল / শিয়ালদহ মেট্রো",
    train: "শিয়ালদহ রেল স্টেশন",
    walk: "শিয়ালদহ ফ্লাইওভার বা সেন্ট্রাল মেট্রো থেকে ৭-৮ মিনিট",
    map: "https://maps.google.com/?cid=12140411649988225573"
  },
  {
    name: "চোরবাগান সর্বজনীন",
    zone: "Central",
    metro: "গিরিশ পার্ক",
    train: "শিয়ালদহ স্টেশন",
    walk: "গিরিশ পার্ক থেকে মুক্তারাম বাবু স্ট্রিট ধরে ৩ মিনিট",
    map: "https://maps.google.com/?cid=11840521458753992955"
  },

  // দক্ষিণ কলকাতা (South)
  {
    name: "একডালিয়া এভারগ্রীন ও সিংহী পার্ক",
    zone: "South",
    metro: "কালীঘাট মেট্রো",
    train: "বালিগঞ্জ জংশন",
    walk: "গড়িয়াহাট মোড় থেকে ২-৩ মিনিট হাঁটা পথ",
    map: "https://maps.google.com/?cid=2453400002576213274"
  },
  {
    name: "বালিগঞ্জ কালচারাল ও হিন্দুস্তান পার্ক",
    zone: "South",
    metro: "কালীঘাট / যতীন দাস পার্ক",
    train: "বালিগঞ্জ জংশন",
    walk: "গড়িয়াহাট থেকে লেক ভিউ রোড ধরে ৫ মিনিট",
    map: "https://maps.google.com/?cid=7714142424994848867"
  },
  {
    name: "দেশপ্রিয় পার্ক ও ত্রিধারা সম্মিলনী",
    zone: "South",
    metro: "কালীঘাট মেট্রো",
    train: "বালিগঞ্জ জংশন",
    walk: "কালীঘাট মেট্রো থেকে রাসবিহারী ধরে ৬-৮ মিনিট",
    map: "https://maps.google.com/?cid=15849733765660152345"
  },
  {
    name: "মুদিয়ালী ক্লাব ও শিব মন্দির",
    zone: "South",
    metro: "রবীন্দ্র সরোবর / কালীঘাট",
    train: "টালিগঞ্জ লোকাল স্টেশন",
    walk: "রবীন্দ্র সরোবর মেট্রো থেকে সাদার্ন অ্যাভিনিউ ধরে ৬ মিনিট",
    map: "https://maps.google.com/?cid=6131863925669705200"
  },
  {
    name: "বাদামতলা আষাঢ় সংঘ ও ৬৬ পল্লী",
    zone: "South",
    metro: "কালীঘাট মেট্রো",
    train: "টালিগঞ্জ স্টেশন",
    walk: "কালীঘাট নেপাল ভট্টাচার্য স্ট্রিট এক্সিট থেকে মাত্র ২ মিনিট",
    map: "https://maps.google.com/?cid=16800617733808211335"
  },
  {
    name: "চেতলা অগ্রণী ক্লাব",
    zone: "South",
    metro: "কালীঘাট মেট্রো",
    train: "মাঝেরহাট রেল স্টেশন",
    walk: "কালীঘাট ট্রাম ডিপো ও চেতলা ব্রিজ পেরিয়ে ৫-৬ মিনিট",
    map: "https://maps.google.com/?cid=17397391353249272919"
  },
  {
    name: "সুরুচি সংঘ (নিউ আলিপুর)",
    zone: "South",
    metro: "কালীঘাট / রবীন্দ্র সরোবর",
    train: "নিউ আলিপুর স্টেশন / মাঝেরহাট",
    walk: "নিউ আলিপুর স্টেশন রোড থেকে মাত্র ৪ মিনিট",
    map: "https://maps.google.com/?cid=2414811456230413570"
  },
  {
    name: "নাকতলা উদয়ন সংঘ",
    zone: "South",
    metro: "গীতাঞ্জলি (নাকতলা মেট্রো)",
    train: "গড়িয়া রেল স্টেশন",
    walk: "গীতাঞ্জলি মেট্রো থেকে মাত্র ৪ মিনিট (৩৫০ মি)",
    map: "https://maps.google.com/?cid=11068095488902765199"
  },
  {
    name: "বাবুবাগান ও যোধপুর পার্ক",
    zone: "South",
    metro: "রবীন্দ্র সরোবর",
    train: "ঢাকুরিয়া রেল স্টেশন",
    walk: "ঢাকুরিয়া ওভারব্রিজ সংলগ্ন, স্টেশন থেকে ২ মিনিট",
    map: "https://maps.google.com/?cid=12280677332198589211"
  },

  // বেহালা ক্লাস্টার (Behala)
  {
    name: "বেহালা নতুন দল",
    zone: "Behala",
    metro: "তারাতলা / বেহালা বাজার",
    train: "মাঝেরহাট রেল স্টেশন",
    walk: "বেহালা ট্রাম ডিপো থেকে ডায়মন্ড হারবার রোড ধরে ৪ মিনিট",
    map: "https://maps.google.com/?cid=17124898636201060852"
  },
  {
    name: "বড়িশা ক্লাব দুর্গাপূজা",
    zone: "Behala",
    metro: "বেহালা চৌরাস্তা / সখেরবাজার",
    train: "মাঝেরহাট স্টেশন",
    walk: "সখেরবাজার মোড় থেকে জেমস লং সরণি ধরে ৫ মিনিট",
    map: "https://maps.google.com/?cid=16236335024405066801"
  },
  {
    name: "বেহালা ক্লাব ও অজেয় সংহতি",
    zone: "Behala",
    metro: "তারাতলা মেট্রো",
    train: "মাঝেরহাট স্টেশন",
    walk: "তারাতলা পর্ণশ্রী মোড় থেকে ৫ মিনিট",
    map: "https://maps.google.com/maps?q=Behala+Club+Durgapuja"
  },
  {
    name: "হরিদেবপুর ৪১ পল্লী",
    zone: "Behala",
    metro: "মহানায়ক উত্তম কুমার (টালিগঞ্জ)",
    train: "টালিগঞ্জ লোকাল",
    walk: "করুণাময়ী হরিদেবপুর স্ট্যান্ড থেকে ৪ মিনিট",
    map: "https://maps.google.com/maps?q=Haridebpur+41+Pally+Durga+Puja"
  },

  // সল্টলেক ও শ্রীভূমি (Salt Lake)
  {
    name: "শ্রীভূমি স্পোর্টিং ক্লাব",
    zone: "Salt Lake",
    metro: "সল্টলেক স্টেডিয়াম / বেলগাছিয়া",
    train: "বিধাননগর রোড স্টেশন",
    walk: "ভিআইপি রোড লেকটাউন ফুটওভার ব্রিজ থেকে ৩ মিনিট",
    map: "https://maps.google.com/?cid=13498846934416172605"
  },
  {
    name: "সল্টলেক এফডি ব্লক",
    zone: "Salt Lake",
    metro: "করুণাময়ী / সেন্ট্রাল পার্ক",
    train: "বিধাননগর রোড",
    walk: "করুণাময়ী বাস টার্মিনাস থেকে ৬-৭ মিনিট",
    map: "https://maps.google.com/?cid=5590044104116974140"
  },
  {
    name: "সল্টলেক বিজে ব্লক ও একে ব্লক",
    zone: "Salt Lake",
    metro: "সিটি সেন্টার মেট্রো",
    train: "বিধাননগর রোড",
    walk: "সিটি সেন্টার ১ থেকে মাত্র ৫ মিনিট হাঁটা পথ",
    map: "https://maps.google.com/?cid=5898045514729557278"
  },
  {
    name: "নিউটাউন সর্বজনীন",
    zone: "Salt Lake",
    metro: "বিমানবন্দর মেট্রো (অ্যাপ্রোচ)",
    train: "বিধাননগর রোড",
    walk: "নিউটাউন মেলা গ্রাউন্ড বাস স্টপ থেকে ২ মিনিট",
    map: "https://maps.google.com/?cid=15780927754519669568"
  },

  // কল্যাণী (Kalyani)
  {
    name: "কল্যাণী আইটিআই মোড় (লুমিনাস ক্লাব)",
    zone: "Kalyani",
    metro: "মেট্রো নেই (লোকাল ট্রেন প্রধান মাধ্যম)",
    train: "কল্যাণী ঘোষপাড়া / কল্যাণী জংশন",
    walk: "ঘোষপাড়া বা কল্যাণী স্টেশন থেকে টোটোয় ৫-৭ মিনিট (আইটিআই মোড়)",
    map: "https://maps.google.com/maps?q=Kalyani+ITI+More+Durga+Puja"
  },
  {
    name: "কল্যাণী সেন্ট্রাল পার্ক সর্বজনীন",
    zone: "Kalyani",
    metro: "মেট্রো নেই",
    train: "কল্যাণী রেল স্টেশন",
    walk: "কল্যাণী মেইন স্টেশন থেকে টোটোয় সেন্ট্রাল পার্ক (৫ মিনিট)",
    map: "https://maps.google.com/maps?q=Kalyani+Central+Park+Durga+Puja"
  },
  {
    name: "কল্যাণী এ-৯ স্কয়ার ক্লাব",
    zone: "Kalyani",
    metro: "মেট্রো নেই",
    train: "কল্যাণী রেল স্টেশন",
    walk: "এ ব্লক বাজার থেকে ৩ মিনিট হাঁটা পথ",
    map: "https://maps.google.com/maps?q=Kalyani+A9+Durga+Puja"
  }
];

const grid = document.getElementById("grid");
const searchInput = document.getElementById("pandalSearch");
const chips = document.querySelectorAll(".chip");
const counterText = document.getElementById("counterText");

let activeZone = "all";

function displayPandals(items) {
  grid.innerHTML = "";
  counterText.innerText = `মোট ${items.length}টি পুজো প্রদর্শিত হচ্ছে`;

  if (items.length === 0) {
    grid.innerHTML = `<div class="empty-view"><i class="fa-solid fa-bell-slash" style="font-size:2rem;margin-bottom:10px;display:block;"></i>কোনো প্যান্ডেল খুঁজে পাওয়া গেল না! সঠিক নাম বা এলাকা লিখুন।</div>`;
    return;
  }

  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "p-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="zone-tag">${p.zone}</span>
        <h3>${p.name}</h3>
      </div>
      <div class="card-info">
        <div class="info-item">
          <i class="fa-solid fa-train-subway"></i>
          <div><strong>নিকটবর্তী মেট্রো:</strong> ${p.metro}</div>
        </div>
        <div class="info-item">
          <i class="fa-solid fa-train"></i>
          <div><strong>নিকটবর্তী ট্রেন:</strong> ${p.train}</div>
        </div>
        <div class="info-item">
          <i class="fa-solid fa-person-walking"></i>
          <div><strong>হাঁটার দূরত্ব:</strong> ${p.walk}</div>
        </div>
      </div>
      <div class="card-action">
        <a href="${p.map}" target="_blank" class="map-link">
          <i class="fa-solid fa-location-dot"></i> Google Maps লোকেশন
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function handleFilter() {
  const query = searchInput.value.toLowerCase().trim();
  const res = pandalData.filter(d => {
    const matchZone = (activeZone === "all") || (d.zone.toLowerCase() === activeZone.toLowerCase());
    const matchSearch = d.name.toLowerCase().includes(query) ||
                        d.metro.toLowerCase().includes(query) ||
                        d.train.toLowerCase().includes(query) ||
                        d.zone.toLowerCase().includes(query) ||
                        d.walk.toLowerCase().includes(query);
    return matchZone && matchSearch;
  });
  displayPandals(res);
}

searchInput.addEventListener("input", handleFilter);

chips.forEach(btn => {
  btn.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    activeZone = btn.dataset.zone;
    handleFilter();
  });
});

// প্রথম লোডে সম্পূর্ণ তালিকা
displayPandals(pandalData);
