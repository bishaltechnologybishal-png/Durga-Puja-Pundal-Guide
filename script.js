const pandals = [
    // --- কল্যাণী ও নদীয়া ---
    { id: 1, name: "Kalyani ITI More", zone: "Kalyani", landmark: "Kalyani ITI More, Nadia", railway: "Kalyani Main / Ghoshpara Halt", metro: "নাই (ট্রেন ও টোটো প্রধান)", image: "https://images.unsplash.com/photo-1548625361-195fe21b6d0e?auto=format&fit=crop&w=700&q=80", famous: "Grand Architecture & Mega Themes", desc: "কল্যাণীর এক নম্বর আকর্ষণ। কল্যাণী মেইন স্টেশন বা এ ব্লক থেকে সরাসরি টোটো বা অটো নিয়ে যাওয়া যায়।", map: "https://maps.google.com/?q=Kalyani+ITI+More+Durga+Puja" },
    { id: 2, name: "Luminous Park (A9)", zone: "Kalyani", landmark: "A Block, Kalyani (Nadia)", railway: "Kalyani Main Station", metro: "নাই", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80", famous: "Lighting & Creative Artwork", desc: "এ ব্লক বাজার সংলগ্ন লুমিনাস পার্ক। চমৎকার আলোকসজ্জা এবং মনোরম পরিবেশের জন্য পরিচিত।", map: "https://maps.google.com/?q=Kalyani+A9+Luminous+Park" },
    { id: 3, name: "Kalyani Central Park", zone: "Kalyani", landmark: "Central Park, Kalyani", railway: "Kalyani Main / Ghoshpara Halt", metro: "নাই", image: "https://images.unsplash.com/photo-1576487247299-e244b7d56637?auto=format&fit=crop&w=700&q=80", famous: "Theme Pandal & Cultural Events", desc: "কল্যাণীর অন্যতম ঐতিহ্যবাহী পূজা। কল্যাণীয় মেইন স্টেশন থেকে টোটোয় ৫ মিনিট।", map: "https://maps.google.com/?q=Kalyani+Central+Park+Durga+Puja" },

    // --- নিউ টাউন & সল্টলেক ---
    { id: 4, name: "New Town Sarbojanin", zone: "New Town", landmark: "AK Block, Axis Mall, New Town", railway: "Bidhannagar Road Station", metro: "Salt Lake Sector V / Air Port Link", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80", famous: "Modern Eco-themed Pandal", desc: "বিশাল খোলা জায়গায় নিউ টাউনের মেগা আয়োজন। অ্যাক্সিস মল এবং সিটি সেন্টার ২ থেকে কাছেই অবস্থিত।", map: "https://maps.google.com/?q=New+Town+Sarbojanin+Durga+Puja" },
    { id: 5, name: "FD Block, Salt Lake", zone: "Salt Lake", landmark: "FD Block Play Ground, Salt Lake", railway: "Bidhannagar Road Station", metro: "Karunamoyee / Sector V Metro", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80", famous: "Family-friendly Grand Themes", desc: "সল্টলেকের সবচেয়ে ফেমাস ও সুশৃঙ্খল প্যান্ডেলগুলোর একটি। সল্টলেক সিটি সেন্টার ১ থেকে সহজে টোটোয় পৌঁছানো যায়।", map: "https://maps.google.com/?q=FD+Block+Durga+Puja+Salt+Lake" },
    { id: 6, name: "BJ Block, Salt Lake", zone: "Salt Lake", landmark: "BJ Block Close to City Centre", railway: "Bidhannagar Road Station", metro: "Karunamoyee / City Centre Metro", image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=700&q=80", famous: "Traditional & Cultural Decor", desc: "পরিবার ও বন্ধুদের নিয়ে ঘোরার দারুণ জায়গা। সিটি সেন্টার ১ মেট্রো স্টেশন থেকে কাছেই।", map: "https://maps.google.com/?q=BJ+Block+Durga+Puja+Salt+Lake" },

    // --- উত্তর কলকাতা ---
    { id: 7, name: "Sree Bhumi Sporting Club", zone: "North Kolkata", landmark: "VIP Road / Lake Town", railway: "Bidhannagar Road Station (2 km)", metro: "Dum Dum / Belgachia Metro", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=700&q=80", famous: "Grand Lighting & Iconic Replicas", desc: "ভিআইপি রোডে লেকটাউন ঢোকার মুখে। প্রতি বছর বুর্জ খালিফা বা গ্র্যান্ড মণ্ডপের রেপ্লিকা তৈরি করে দেশজুড়ে আলোড়ন ফেলে।", map: "https://maps.google.com/?q=Sree+Bhumi+Sporting+Club+Lake+Town" },
    { id: 8, name: "Ahiritola Youth Club", zone: "North Kolkata", landmark: "Ahiritola Ghat / Sovabazar", railway: "Ahiritola Ghat / Howrah Station", metro: "Sovabazar Sutanuti Metro", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=700&q=80", famous: "Heritage & Traditional Art", desc: "গঙ্গার ঘাট ও ঐতিহ্যবাহী শোভাবাজার রাজবাড়ি চত্বরের কাছে। উত্তর কলকাতার কৃষ্টি-সংস্কৃতির দারুণ নিদর্শন।", map: "https://maps.google.com/?q=Ahiritola+Youth+Club" },
    { id: 9, name: "Kumartuli Park", zone: "North Kolkata", landmark: "Sovabazar / Kumartuli Artisans Area", railway: "Sovabazar Ahiritola Station", metro: "Sovabazar Sutanuti Metro", image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=700&q=80", famous: "Artistic Fusion & Clay Art", desc: "শোভাবাজার রাজবাড়ির কাছে। মাটির প্রতিমা তৈরির কারিগরদের এলাকা সংলগ্ন অসাধারণ থিম প্যান্ডেল।", map: "https://maps.google.com/?q=Kumartuli+Park" },
    { id: 10, name: "Bagbazar Sarbojonin", zone: "North Kolkata", landmark: "Shyambazar / Bagbazar Ghat", railway: "Bagbazar Stn / Kolkata Terminal", metro: "Shyambazar Metro", image: "https://images.unsplash.com/photo-1602488285514-f9efd19c362a?auto=format&fit=crop&w=700&q=80", famous: "Oldest Traditional Puja", desc: "শতবর্ষের ঐতিহ্যবাহী সাবেকি দুর্গাপূজার সেরা ঠিকানা। শ্যামবাজার মোড় থেকে হেঁটে সরাসরি পৌঁছানো যায়।", map: "https://maps.google.com/?q=Bagbazar+Sarbojonin" },
    { id: 15, name: "Shobhabazar Rajbari", zone: "North Kolkata", landmark: "Sovabazar, Near Sutanuti Metro", railway: "Sutanuti Railway Halt", metro: "Sovabazar Sutanuti Metro", image: "https://images.unsplash.com/photo-1602488285514-f9efd19c362a?auto=format&fit=crop&w=700&q=80", famous: "ঐতিহাসিক বনেদি বাড়ির ঐতিহ্যবাহী পূজা", desc: "ঐতিহাসিক শোভাবাজার রাজবাড়ির অত্যন্ত গৌরবময় বনেদি বাড়ির দুর্গাপূজা। রাজবাড়ির নাটমন্দিরে ঐতিহ্যবাহী প্রতিমা দর্শনের মেগা আয়োজন।", map: "https://maps.google.com/?q=Shobhabazar+Rajbari" },

    // --- মধ্য কলকাতা ---
    { id: 11, name: "College Square", zone: "Central Kolkata", landmark: "College Street / Sealdah", railway: "Howrah / Sealdah Station", metro: "Mahatma Gandhi Road / Central Metro", image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=700&q=80", famous: "Grand Reflection Lighting on Lake", desc: "দিঘির জলে আলোর প্রতিফলন ও সাবেকী মণ্ডপ। শিয়ালদহ বা মহাত্মা গান্ধী রোড মেট্রো থেকে অতি নিকটে।", map: "https://maps.google.com/?q=College+Square+Kolkata" },
    { id: 12, name: "Santosh Mitra Square", zone: "Central Kolkata", landmark: "Lebutala Park, Sealdah", railway: "Sealdah Station (হাঁটা পথ)", metro: "Chandni Chowk / Central Metro", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80", famous: "Unique Architectural Replicas", desc: "শিয়ালদহ স্টেশন ও লেবুতলা পার্কের একদম কাছে। চোখ ধাঁধানো মেগা থিম আর্টের জন্য বিখ্যাত।", map: "https://maps.google.com/?q=Santosh+Mitra+Square" },

    // --- দক্ষিণ কলকাতা ---
    { id: 13, name: "Chetla Agrani Club", zone: "South Kolkata", landmark: "Chetla, Kalighat Metro", railway: "Majerhat Railway Station", metro: "Kalighat Metro Station", image: "https://images.unsplash.com/photo-1602488285514-f9efd19c362a?auto=format&fit=crop&w=700&q=80", famous: "Innovative Concept & Theme Idol", desc: "দক্ষিণ কলকাতার শীর্ষ থিম পূজার অন্যতম কেন্দ্রবিন্দু। কালীঘাট মেট্রো স্টেশন বা চেতলা রোড থেকে সহজেই যাওয়া যায়।", map: "https://maps.google.com/?q=Chetla+Agrani+Club" },
    { id: 14, name: "Suruchi Sangha", zone: "South Kolkata", landmark: "New Alipore, Taratala", railway: "Majerhat Railway Station", metro: "Kalighat / Rabindra Sarobar Metro", image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=700&q=80", famous: "State Culture Themes & Art", desc: "ভারতের বিভিন্ন রাজ্যের বৈচিত্র্যময় সংস্কৃতি তুলে ধরে। নিউ আলিপুর রেল স্টেশন ও তারাতলার নিকটবর্তী।", map: "https://maps.google.com/?q=Suruchi+Sangha" },
    { id: 16, name: "Tridhara Sammilani", zone: "South Kolkata", landmark: "Rashbehari Avenue, Kalighat", railway: "Ballygunge Junction", metro: "Kalighat Metro Station", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=700&q=80", famous: "Modern Art & Traditional Fusion", desc: "রাসবিহারী ও লেক মল-এর মাঝামাঝি জমজমাট চত্বর। কালীঘাট মেট্রো থেকে খুব কাছের পথ।", map: "https://maps.google.com/?q=Tridhara+Sammilani" },
    { id: 17, name: "Ekdalia Evergreen Club", zone: "South Kolkata", landmark: "Gariahat, Ballygunge", railway: "Ballygunge Railway Station", metro: "Kalighat Metro Station", image: "https://images.unsplash.com/photo-1548625361-195fe21b6d0e?auto=format&fit=crop&w=700&q=80", famous: "Traditional Pratima & Chandeliers", desc: "গড়িয়াহাট মোড়ের কাছে। সুবিশাল ঝাড়বাতি এবং খাঁটি সাবেকি প্রতিমার জন্য বিখ্যাত। বালিগঞ্জ স্টেশন থেকে খুব কাছে।", map: "https://maps.google.com/?q=Ekdalia+Evergreen+Club" },
    { id: 18, name: "Rani Rashmoni Bhavan", zone: "South Kolkata", landmark: "Bhawanipur, Jatin Das Park", railway: "Sealdah Railway Station", metro: "Jatin Das Park Metro", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80", famous: "ঐতিহাসিক ও সাংস্কৃতিক মিলনমেলা", desc: "ভবানীপুরের অত্যন্ত বিখ্যাত প্রাচীন ঐতিহাসিক রানী রাসমণি ভবনের সাবেকি দুর্গাপূজা। যতীন দাস পার্ক মেট্রো স্টেশন বা হাজরা মোড় থেকে কাছেই।", map: "https://maps.google.com/?q=Rani+Rashmoni+Bhavan" }
];

let activeZone = "all";

function displayPandals(data) {
    const container = document.getElementById('pandalContainer');
    if (!container) return;
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #ffd700; font-size: 18px; padding: 30px;">কোনো প্যান্ডেল পাওয়া যায়নি!</p>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(item.id);
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.image}" alt="${item.name}" class="card-img">
                <span class="zone-badge">${item.zone}</span>
            </div>
            <div class="card-content">
                <h3>🎪 ${item.name}</h3>
                <span class="landmark-tag">📍 ${item.landmark}</span>
                <p class="specialty-text"><strong>✨ বিশেষত্ব:</strong> ${item.famous}</p>
                <div class="view-btn">বিস্তারিত দেখুন ➔</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterByZone(zone) {
    activeZone = zone;
    
    // সমস্ত বাটন থেকে Active ক্লাস রিমুভ ও সিলেক্টেড বাটনে অ্যাড
    const chips = document.querySelectorAll('.cat-chip');
    chips.forEach(chip => chip.classList.remove('active'));
    
    // ইভেন্ট ট্রিগার করা বাটনটিকে Active করা
    const clickedBtn = Array.from(chips).find(btn => btn.innerText.includes(zone === 'all' ? 'অল' : zone));
    if (clickedBtn) clickedBtn.classList.add('active');

    searchPandals();
}

function openModal(id) {
    const item = pandals.find(p => p.id === id);
    if (!item) return;

    document.getElementById('modalImg').src = item.image;
    document.getElementById('modalTitle').innerText = '🎪 ' + item.name;
    document.getElementById('modalZone').innerText = '📍 ' + item.landmark;
    document.getElementById('modalRailway').innerText = item.railway;
    document.getElementById('modalMetro').innerText = item.metro;
    document.getElementById('modalFamous').innerText = item.famous;
    document.getElementById('modalDesc').innerText = item.desc;
    document.getElementById('modalMap').href = item.map;

    const modal = document.getElementById('pandalModal');
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('pandalModal');
    if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('pandalModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function searchPandals() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    const filtered = pandals.filter(item => {
        const matchesZone = (activeZone === "all") || (item.zone.toLowerCase() === activeZone.toLowerCase());
        
        const matchesSearch = 
            item.name.toLowerCase().includes(query) ||
            item.zone.toLowerCase().includes(query) ||
            item.landmark.toLowerCase().includes(query) ||
            item.railway.toLowerCase().includes(query) ||
            item.metro.toLowerCase().includes(query) ||
            item.famous.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query);
            
        return matchesZone && matchesSearch;
    });

    displayPandals(filtered);
}

// প্রথমবার পেজ লোডে সবগুলো শো করবে
document.addEventListener('DOMContentLoaded', () => {
    displayPandals(pandals);
});

displayPandals(pandals);
