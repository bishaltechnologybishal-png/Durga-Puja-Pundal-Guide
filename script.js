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

header {
    text-align: center;
    margin-bottom: 35px;
    padding: 30px 20px;
    background: linear-gradient(135deg, #800000 0%, #4a0000 100%);
    border-radius: 16px;
    border: 2px solid #ffcc00;
}

header::before {
    content: "🔱 🪔 🥁 🪔 🔱";
    display: block;
    font-size: 22px;
    margin-bottom: 8px;
}

h1 {
    font-size: 2.2rem;
    color: #ffd700;
    margin-bottom: 8px;
}

header p {
    color: #ffe680;
    margin-bottom: 20px;
}

#searchInput {
    width: 100%;
    max-width: 550px;
    padding: 14px 22px;
    font-size: 15px;
    border: 2px solid #ffd700;
    border-radius: 30px;
    outline: none;
    background: #ffffff;
    color: #000;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

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
    box-shadow: 0 8px 20px rgba(255, 215, 0, 0.2);
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

/* Modal Popup Overlay */
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
    max-width: 500px;
    width: 100%;
    position: relative;
    color: #fff;
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
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
