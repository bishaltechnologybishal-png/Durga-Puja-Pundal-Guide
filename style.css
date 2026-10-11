/* ============ বেস ============ */
:root {
  --bg: #0a0404;
  --card: #130a08;
  --gold: #ffd23f;
  --gold-deep: #f5a900;
  --border: #7b4a1d;
  --border-soft: #5a3716;
  --text: #fff4dc;
  --muted: #c7b5a1;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; scroll-padding-top: 8px; }

body {
  margin: 0;
  font-family: "Hind Siliguri", system-ui, sans-serif;
  background: radial-gradient(circle at 50% 0, #1b0a08 0, var(--bg) 55%) fixed;
  color: var(--text);
  line-height: 1.5;
}

button { font-family: inherit; }

/* ============ হিরো ============ */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 520px;
  padding: 16px 28px 28px;
  overflow: hidden;
  isolation: isolate;
  background-color: #1a0505;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  /* নিজের ছবি চাইলে hero.jpg নামে ফাইল রাখো; না থাকলে নিচের ছবি দেখাবে */
  background:
    linear-gradient(90deg, rgba(10,3,3,.96) 0%, rgba(20,5,5,.78) 36%, rgba(20,5,5,.15) 68%, rgba(10,3,3,.5) 100%),
    linear-gradient(180deg, rgba(10,3,3,.35) 0%, rgba(10,3,3,0) 40%, var(--bg) 100%),
    url("hero.jpg") right center / cover no-repeat,
    url("https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Mata%20Images%20-%20A%20Durga%20Puja%20pandal%20in%20Kolkata.jpg?width=1400") right center / cover no-repeat,
    #1a0505;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--gold);
  text-decoration: none;
}

.brand-icon { font-size: 34px; filter: drop-shadow(0 0 8px rgba(255,190,40,.6)); }

.brand-text {
  font-size: clamp(24px, 3.4vw, 38px);
  font-weight: 700;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(0,0,0,.7);
}

.nav-links { display: flex; align-items: center; gap: 22px; }

.nav-links a,
.nav-btn {
  padding: 4px 0;
  border: 0;
  background: none;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}

.nav-links a:hover,
.nav-btn:hover,
.nav-btn.active { color: var(--gold); }

.hero-subtitle {
  margin: 10px 0 0;
  max-width: 380px;
  font-size: 17px;
  line-height: 1.45;
  text-shadow: 0 2px 8px #000;
}

.hero-copy {
  width: max-content;
  max-width: 100%;
  margin: 18px 0 26px 56px;
  text-align: center;
}

.shubho {
  margin: 0 0 -26px 28px;
  color: #fff;
  font-size: 34px;
  font-weight: 700;
  text-align: left;
  text-shadow: 0 2px 8px #000;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(64px, 11vw, 104px);
  font-weight: 700;
  line-height: 1.15;
  background: linear-gradient(180deg, #ffe681 0%, #ffc21a 55%, #e68a00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,.7));
}

.year { margin: -4px 0 0; font-size: 34px; font-weight: 500; }

.year span {
  position: relative;
  display: inline-block;
  padding: 0 14px;
}

.year span::before,
.year span::after {
  content: "";
  position: absolute;
  top: 54%;
  width: 46px;
  height: 2px;
  background: var(--gold);
}

.year span::before { right: 100%; }
.year span::after { left: 100%; }

.lotus { margin: 4px 0 0; font-size: 28px; filter: drop-shadow(0 0 8px rgba(255,190,40,.6)); }

/* ============ সার্চ ============ */
.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: min(900px, 100%);
  margin: auto auto 0;
  padding: 6px 6px 6px 18px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(255, 210, 63, .55), 0 10px 30px rgba(0,0,0,.5);
}

.search-icon { color: #666; font-size: 24px; }

.search-wrap input {
  flex: 1;
  min-width: 0;
  padding: 12px 10px;
  border: 0;
  outline: 0;
  background: transparent;
  color: #222;
  font: inherit;
  font-size: 16px;
}

.search-wrap input::-webkit-search-cancel-button { display: none; }

#searchButton {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 11px 26px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffe45b, #f5a900);
  color: #2b1300;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
}

.clear-search {
  display: none;
  width: 32px;
  height: 32px;
  margin-right: 6px;
  border: 0;
  border-radius: 50%;
  background: #eee;
  color: #444;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}

.search-wrap.has-text .clear-search { display: block; }

/* ============ এলাকা বার ============ */
.zone-bar {
  display: flex;
  width: min(1000px, calc(100% - 32px));
  margin: 8px auto 0;
  padding: 14px 6px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(20, 8, 6, .85);
  scrollbar-width: none;
}

.zone-bar::-webkit-scrollbar { display: none; }

.zone-chip {
  position: relative;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 112px;
  padding: 4px 12px;
  border: 0;
  background: none;
  color: var(--text);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}

.zone-chip + .zone-chip::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10%;
  height: 80%;
  width: 1px;
  background: var(--border-soft);
}

.zone-chip i {
  font-style: normal;
  font-size: 30px;
  line-height: 1;
  /* আইকনে সোনালি আভা */
  filter: grayscale(1) sepia(1) saturate(6) hue-rotate(-8deg) brightness(1.15);
}

.zone-chip:hover,
.zone-chip.active { color: var(--gold); }

.zone-chip.active { text-shadow: 0 0 10px rgba(255, 210, 63, .5); }

/* ============ প্যান্ডেল সেকশন ============ */
.pandal-section {
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 26px 16px 10px;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.section-heading h2 {
  margin: 0;
  color: var(--gold);
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0,0,0,.7);
}

.section-heading .line {
  flex: 1;
  max-width: 230px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-deep));
}

.section-heading .line:last-child { background: linear-gradient(270deg, transparent, var(--gold-deep)); }

.results-line {
  margin: 8px 0 18px;
  color: var(--muted);
  font-size: 14px;
  text-align: center;
}

.pandal-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

/* ============ কার্ড ============ */
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--card);
}

.card-img-wrap { position: relative; }

.card-image {
  display: block;
  width: 100%;
  height: 112px;
  object-fit: cover;
  background: #2a1510;
}

.fav-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 210, 63, .6);
  border-radius: 50%;
  background: rgba(10, 4, 4, .7);
  color: #fff;
  font-size: 17px;
  line-height: 1;
  cursor: pointer;
}

.fav-btn.on { color: #ff5a6e; border-color: #ff5a6e; }

.card-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  padding: 10px 10px 12px;
}

.card h3 {
  margin: 0;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
}

.tag {
  padding: 1px 10px;
  border: 1px solid var(--gold-deep);
  border-radius: 999px;
  color: #ffe9a8;
  font-size: 12px;
}

.famous {
  flex: 1;
  margin: 0;
  color: #e8d9c2;
  font-size: 12px;
  line-height: 1.45;
}

.card-btn {
  width: 100%;
  padding: 6px 8px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffe45b, #f5a900);
  color: #2b1300;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}

.no-results {
  padding: 30px 12px;
  color: var(--muted);
  text-align: center;
}

.load-more-wrap { margin: 22px 0 6px; text-align: center; }

.load-more {
  padding: 11px 26px;
  border: 1px solid var(--gold-deep);
  border-radius: 999px;
  background: rgba(245, 169, 0, .12);
  color: var(--gold);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.load-more:hover { background: rgba(245, 169, 0, .25); }

/* ============ আমাদের সম্পর্কে + ফুটার ============ */
.about {
  width: min(760px, calc(100% - 32px));
  margin: 30px auto 20px;
  padding: 20px;
  border: 1px solid var(--border-soft);
  border-radius: 12px;
  text-align: center;
}

.about h2 { margin: 0 0 6px; color: var(--gold); font-size: 22px; }
.about p { margin: 0; color: var(--muted); }

footer {
  margin-top: 20px;
  padding: 18px 16px 22px;
  border-top: 1px solid var(--border-soft);
  text-align: center;
}

.footer-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: var(--gold);
  font-size: 17px;
}

.footer-line p { margin: 0; }
footer small { display: block; margin-top: 6px; color: var(--muted); font-size: 12px; }

/* ============ রেসপন্সিভ ============ */
@media (max-width: 1100px) {
  .pandal-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

@media (max-width: 860px) {
  .pandal-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .nav-links { gap: 14px; }
  .nav-links a, .nav-btn { font-size: 13px; }
}

@media (max-width: 640px) {
  .hero { min-height: 0; padding: 14px 14px 20px; }
  .hero::before {
    background:
      linear-gradient(180deg, rgba(10,3,3,.8) 0%, rgba(20,5,5,.55) 50%, var(--bg) 100%),
      url("hero.jpg") 70% center / cover no-repeat,
      url("https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Mata%20Images%20-%20A%20Durga%20Puja%20pandal%20in%20Kolkata.jpg?width=1000") 70% center / cover no-repeat,
      #1a0505;
  }
  .top-nav { flex-direction: column; align-items: flex-start; gap: 8px; }
  .nav-links { width: 100%; justify-content: space-between; }
  .hero-copy { margin: 14px auto 20px; }
  .shubho { font-size: 26px; margin-bottom: -18px; }
  .year { font-size: 26px; }
  .search-wrap { padding-left: 12px; }
  .search-wrap input { font-size: 14px; padding: 10px 6px; }
  #searchButton { padding: 10px 16px; font-size: 15px; }
  .btn-i
