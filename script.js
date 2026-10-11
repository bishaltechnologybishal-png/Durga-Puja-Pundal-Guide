const pandals = [
    // --- কল্যাণী ও নদীয়া ---
    { id: 1, name: "Kalyani ITI More", zone: "Kalyani (Nadia)", railway: "Kalyani Main Station / Ghoshpara Halt", metro: "নাই (ট্রেন ও টোটো প্রধান)", famous: "Grand Architecture & Mega Themes", desc: "কল্যাণীর এক নম্বর আকর্ষণ। কল্যাণী মেইন স্টেশন থেকে অটো বা টোটো নিয়ে সরাসরি যাওয়া যায়।", map: "https://maps.google.com/?q=Kalyani+ITI+More+Durga+Puja" },
    { id: 2, name: "Luminous Park (A9)", zone: "Kalyani (Nadia)", railway: "Kalyani Main Station", metro: "নাই", famous: "Lighting & Creative Artwork", desc: "চমৎকার আলোকসজ্জা এবং মনোরম খোলা পরিবেশের জন্য পরিচিত।", map: "https://maps.google.com/?q=Kalyani+A9+Luminous+Park" },
    { id: 3, name: "Kalyani Central Park", zone: "Kalyani (Nadia)", railway: "Kalyani Main / Ghoshpara Halt", metro: "নাই", famous: "Theme Pandal & Cultural Events", desc: "কল্যাণীর অন্যতম বড় ও ঐতিহ্যবাহী পূজা প্যান্ডেল।", map: "https://maps.google.com/?q=Kalyani+Central+Park+Durga+Puja" },

    // --- নিউ টাউন & সল্টলেক ---
    { id: 4, name: "New Town Sarbojanin (AK Block)", zone: "New Town", railway: "Bidhannagar Road Station", metro: "Salt Lake Sector V Metro", famous: "Modern Eco-themed Pandal", desc: "বিশাল খোলা জায়গায় নিউ টাউনের মেগা আয়োজন। ট্রান্সপোর্ট সংযোগ খুব ভালো।", map: "https://maps.google.com/?q=New+Town+Sarbojanin+Durga+Puja" },
    { id: 5, name: "FD Block, Salt Lake", zone: "Salt Lake", railway: "Bidhannagar Road Station", metro: "Karunamoyee / Sector V Metro", famous: "Family-friendly Grand Themes", desc: "সল্টলেকের সবচেয়ে ফেমাস ও সুশৃঙ্খল প্যান্ডেলগুলোর একটি।", map: "https://maps.google.com/?q=FD+Block+Durga+Puja+Salt+Lake" },
    { id: 6, name: "BJ Block, Salt Lake", zone: "Salt Lake", railway: "Bidhannagar Road Station", metro: "Karunamoyee Metro", famous: "Traditional & Cultural Decor", desc: "পরিবার ও বন্ধুদের নিয়ে ঘোরার দারুণ জায়গা।", map: "https://maps.google.com/?q=BJ+Block+Durga+Puja+Salt+Lake" },

    // --- উত্তর কলকাতা ---
    { id: 7, name: "Sree Bhumi Sporting Club", zone: "Lake Town", railway: "Bidhannagar Road Station (2 km)", metro: "Dum Dum / Belgachia Metro", famous: "Grand Lighting & Iconic Replicas", desc: "প্রতি বছর বুর্জ খালিফা বা গ্র্যান্ড মণ্ডপের রেপ্লিকা তৈরি করে সারা দেশে বিখ্যাত।", map: "https://maps.google.com/?q=Sree+Bhumi+Sporting+Club+Lake+Town" },
    { id: 8, name: "Ahiritola Youth Club", zone: "North Kolkata", railway: "Ahiritola Ghat / Howrah Station", metro: "Sovabazar Sutanuti Metro", famous: "Heritage & Traditional Art", desc: "উত্তর কলকাতার ঐতিহ্য ও শিল্পকলার অনবদ্য মিশ্রণ।", map: "https://maps.google.com/?q=Ahiritola+Youth+Club" },
    { id: 9, name: "Kumartuli Park", zone: "North Kolkata", railway: "Sovabazar Ahiritola Station", metro: "Sovabazar Sutanuti Metro", famous: "Artistic Fusion & Clay Art", desc: "প্রতিমা বানানোর কারিগরদের এলাকা সংলগ্ন অসাধারণ থিম প্যান্ডেল।", map: "https://maps.google.com/?q=Kumartuli+Park" },
    { id: 10, name: "Bagbazar Sarbojonin", zone: "North Kolkata", railway: "Bagbazar Stn / Kolkata Terminal", metro: "Shyambazar Metro", famous: "Oldest Traditional Puja", desc: "শতবর্ষের ঐতিহ্যবাহী সাবেকি দুর্গাপূজার সেরা ঠিকানা।", map: "https://maps.google.com/?q=Bagbazar+Sarbojonin" },

    // --- মধ্য কলকাতা ---
    { id: 11, name: "College Square", zone: "Central Kolkata", railway: "Howrah / Sealdah Station", metro: "Mahatma Gandhi Road Metro", famous: "Grand Reflection Lighting on Lake", desc: "দিঘির জলে আলোর প্রতিফলনের অনবদ্য সৌন্দর্য দেখা যায় এখানে।", map: "https://maps.google.com/?q=College+Square+Kolkata" },
    { id: 12, name: "Santosh Mitra Square", zone: "Central Kolkata", railway: "Sealdah Station (হাঁটা পথ)", metro: "Chandni Chowk / Central Metro", famous: "Unique Architectural Replicas", desc: "শিয়ালদহ স্টেশনের একদম কাছে নিখুঁত আর্কিটেকচার থিমের জন্য জনপ্রিয়।", map: "https://maps.google.com/?q=Santosh+Mitra+Square" },

    // --- দক্ষিণ কলকাতা ---
    { id: 13, name: "Chetla Agrani Club", zone: "South Kolkata", railway: "Majerhat Railway Station", metro: "Kalighat Metro Station", famous: "Innovative Concept & Theme Idol", desc: "দক্ষিণ কলকাতার শীর্ষ থিম পূজার অন্যতম কেন্দ্রবিন্দু।", map: "https://maps.google.com/?q=Chetla+Agrani+Club" },
    { id: 14, name: "Suruchi Sangha", zone: "New Alipore", railway: "Majerhat Railway Station", metro: "Kalighat / Rabindra Sarobar Metro", famous: "State Culture Themes & Art", desc: "ভারতের বিভিন্ন রাজ্যের সংস্কৃতি ও শিল্প থিম হিসেবে তুলে ধরে।", map: "https://maps.google.com/?q=Suruchi+Sangha" },
    { id: 15, name: "Tridhara Sammilani", zone: "South Kolkata", railway: "Ballygunge Junction", metro: "Kalighat Metro Station", famous: "Modern Art & Traditional Fusion", desc: "দক্ষিণ কলকাতার প্রাণকেন্দ্রে অন্যতম জমজমাট পূজা মণ্ডপ।", map: "https://maps.google.com/?q=Tridhara+Sammilani" },
    { id: 16, name: "Ekdalia Evergreen Club", zone: "Gariahat", railway: "Ballygunge Railway Station", metro: "Kalighat Metro Station", famous: "Traditional Pratima & Chandeliers", desc: "বিশাল ঝাড়বাতি এবং খাঁটি সাবেকি প্রতিমার জন্য বিখ্যাত।", map: "https://maps.google.com/?q=Ekdalia+Evergreen+Club" }
];

const container = document.getElementById('pandalContainer');

function displayPandals(data) {
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #ffd700; font-size: 18px; padding: 20px;">কোনো প্যান্ডেল পাওয়া যায়নি!</p>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.onclick = () => openModal(item.id);
        card.innerHTML = `
            <div>
                <h3>🎪 ${item.name}</h3>
                <span class="tag">📍 ${item.zone}</span>
                <p style="font-size: 14px; color: #ccc;"><strong>✨ বিশেষত্ব:</strong> ${item.famous}</p>
            </div>
            <div class="view-btn">🔍 বিস্তারিত ও লোকেশন দেখুন</div>
        `;
        container.appendChild(card);
    });
}

function openModal(id) {
    const item = pandals.find(p => p.id === id);
    if (!item) return;

    document.getElementById('modalTitle').innerText = '🎪 ' + item.name;
    document.getElementById('modalZone').innerText = '📍 ' + item.zone;
    document.getElementById('modalRailway').innerText = item.railway;
    document.getElementById('modalMetro').innerText = item.metro;
    document.getElementById('modalFamous').innerText = item.famous;
    document.getElementById('modalDesc').innerText = item.desc;
    document.getElementById('modalMap').href = item.map;

    document.getElementById('pandalModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('pandalModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('pandalModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// যে নাম বা এলাকা লিখে সার্চ করবে, সেটা তালিকার সবার উপরে চলে আসবে
function searchPandals() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (input === "") {
        displayPandals(pandals);
        return;
    }

    const filtered = [...pandals].sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        const aZone = a.zone.toLowerCase();
        const bZone = b.zone.toLowerCase();

        const aMatch = aName.includes(input) || aZone.includes(input) ? 0 : 1;
        const bMatch = bName.includes(input) || bZone.includes(input) ? 0 : 1;
        return aMatch - bMatch;
    }).filter(item => 
        item.name.toLowerCase().includes(input) ||
        item.zone.toLowerCase().includes(input) ||
        item.railway.toLowerCase().includes(input) ||
        item.metro.toLowerCase().includes(input) ||
        item.famous.toLowerCase().includes(input)
    );

    displayPandals(filtered);
}

displayPandals(pandals);
