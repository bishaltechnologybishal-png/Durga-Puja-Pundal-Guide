@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Hind Siliguri', 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #1a0808 0%, #0d0d1a 100%);
    color: #ffffff;
    padding: 20px;
    min-height: 100vh;
}

/* হেডার সেকশন: দুর্গা ঠাকুর ও কাশফুলের ভাইব সহ সুন্দর ব্যানার */
header {
    position: relative;
    text-align: center;
    margin-bottom: 35px;
    padding: 45px 20px;
    border-radius: 16px;
    border: 2px solid #ffcc00;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(128, 0, 0, 0.88) 0%, rgba(60, 0, 0, 0.92) 100%),
                url('https://images.unsplash.com/photo-1602488285514-f9efd19c362a?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.header-content {
    position: relative;
    z-index: 2;
}

.durga-art {
    font-size: 26px;
    margin-bottom: 12px;
    text-shadow: 0 0 12px rgba(255, 215, 0, 0.8);
}

h1 {
    font-size: 2.4rem;
    color: #ffd700;
    margin-bottom: 8px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

header p {
    color: #ffe680;
    margin-bottom: 24px;
    font-size: 1.1rem;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
}

#searchInput {
    width: 100%;
    max-width: 580px;
    padding: 14px 24px;
    font-size: 15.5px;
    border: 2px solid #ffd700;
    border-radius: 30px;
    outline: none;
    background: #ffffff;
    color: #111;
    box-shadow: 0 6px 20px rgba(0,0,0,0.5);
    transition: all 0.3s ease;
}

#searchInput:focus {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
    border-color: #ffffff;
}

/* প্যান্ডেল কন্টেইনার */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    max-width: 1150px;
    margin: 0 auto;
}

.card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 20px;
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-top: 4px solid #ffd700;
    cursor: pointer;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card:hover {
    transform: translateY(-5px);
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 20px rgba(255, 215, 0, 0.25);
}

.card h3 {
    color: #ffd700;
    font-size: 1.25rem;
    margin-bottom: 10px;
}

.tag {
    display: inline-block;
    background: rgba(255, 215, 0, 0.15);
    color: #ffeb3b;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 12px;
    width: fit-content;
    border: 1px solid rgba(255, 215, 0, 0.3);
}

.view-btn {
    margin-top: 15px;
    padding: 10px;
    background: #ffcc00;
    color: #000;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: 0.2s;
}

.view-btn:hover {
    background: #ffe680;
}

/* Modal Popup */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
}

.modal-content {
    background: #1a0a0a;
    border: 2px solid #ffd700;
    border-radius: 16px;
    padding: 25px;
    max-width: 520px;
    width: 100%;
    position: relative;
    color: #fff;
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
    max-height: 90vh;
    overflow-y: auto;
}

.close-btn {
    position: absolute;
    right: 18px;
    top: 12px;
    font-size: 28px;
    color: #ffd700;
    cursor: pointer;
}

.modal-details {
    margin: 20px 0;
    line-height: 1.8;
}

.modal-details p {
    font-size: 14.5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 8px;
    margin-bottom: 8px;
    color: #dddddd;
}

.map-btn {
    display: block;
    padding: 12px;
    background: linear-gradient(135deg, #d32f2f 0%, #990000 100%);
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    border: 1px solid #ff6666;
}

.map-btn:hover {
    background: linear-gradient(135deg, #ff1a1a 0%, #cc0000 100%);
}
