:root {
  --primary: #9e1b1b;
  --primary-dark: #630808;
  --gold: #f5b041;
  --gold-light: #fef5e7;
  --card-bg: #ffffff;
  --text-dark: #2c3e50;
  --text-muted: #566573;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Anek Bangla', sans-serif;
}

body {
  background-color: #fbf8f3;
  color: var(--text-dark);
  background-image: radial-gradient(#e0d7c7 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3.5rem 1.5rem 4.5rem;
  color: #fff;
  background: linear-gradient(180deg, rgba(99, 8, 8, 0.88) 0%, rgba(158, 27, 27, 0.78) 65%, rgba(251, 248, 243, 1) 100%),
              url('https://images.unsplash.com/photo-1602488285514-f9efd19c362a?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
}

.hero-badge {
  display: inline-block;
  background: rgba(245, 176, 65, 0.25);
  border: 1px solid var(--gold);
  color: var(--gold-light);
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  font-size: 1rem;
  margin-bottom: 1rem;
  backdrop-filter: blur(5px);
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.6rem;
}

.hero p {
  font-size: 1.15rem;
  max-width: 650px;
  color: #fceadc;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Search Input */
.search-wrapper {
  position: relative;
  width: 100%;
  max-width: 680px;
  margin-bottom: 1.5rem;
  z-index: 10;
}

.search-input {
  width: 100%;
  padding: 1.2rem 1.5rem 1.2rem 3.5rem;
  border-radius: 50px;
  border: 2px solid var(--gold);
  background: #ffffff;
  font-size: 1.05rem;
  color: #333;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  outline: none;
  transition: all 0.3s;
}

.search-input:focus {
  box-shadow: 0 12px 35px rgba(245, 176, 65, 0.45);
  border-color: #d48b17;
}

.search-icon {
  position: absolute;
  left: 1.3rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 1.3rem;
}

/* Category Filters */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
  max-width: 800px;
  z-index: 10;
}

.filter-btn {
  padding: 0.5rem 1.2rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #ddd;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary-dark);
  transition: all 0.25s;
}

.filter-btn:hover, .filter-btn.active {
  background: var(--gold);
  color: #000;
  border-color: var(--gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Main Grid & Cards */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title h2 {
  font-size: 2.2rem;
  color: var(--primary-dark);
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--gold);
  border-radius: 2px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1.8rem;
}

.card {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e9ecef;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(158, 27, 27, 0.15);
  border-color: var(--gold);
}

.card-header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 1.2rem 1.4rem;
  position: relative;
}

.card-zone {
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
  background: var(--gold);
  color: #000;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  text-transform: uppercase;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 0.2rem;
  padding-right: 55px;
}

.card-body {
  padding: 1.4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 0.95rem;
  color: var(--text-dark);
}

.info-row i {
  font-size: 1.1rem;
  margin-top: 0.2rem;
  color: var(--primary);
  width: 20px;
  text-align: center;
}

.info-text strong {
  color: var(--primary-dark);
  font-weight: 600;
}

.card-footer {
  padding: 1rem 1.4rem 1.3rem;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
}

.map-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: #ffffff;
  color: var(--primary);
  border: 1.5px solid var(--primary);
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s;
}

.map-btn:hover {
  background: var(--primary);
  color: #ffffff;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-muted);
  font-size: 1.2rem;
}

footer {
  text-align: center;
  padding: 2.5rem 1rem;
  background: var(--primary-dark);
  color: var(--gold-light);
  margin-top: 3rem;
  font-size: 0.95rem;
}

@media (max-width: 600px) {
  .hero h1 { font-size: 2rem; }
  .grid { grid-template-columns: 1fr; }
}
