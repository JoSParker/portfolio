import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// --- CSS STYLES ---
const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap');

  :root, [data-theme="dark"] {
    --bg-primary: #0a0a0a;
    --bg-secondary: #141414;
    --bg-tertiary: #1e1e1e;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --text-muted: #666666;
    --accent-primary: #00d4ff;
    --accent-secondary: #7c3aed;
    --accent-tertiary: #ff006e;
    --glass-bg: rgba(20, 20, 20, 0.4);
    --glass-border: rgba(255, 255, 255, 0.1);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.5);
    --shadow-lg: 0 16px 64px rgba(0, 0, 0, 0.7);
  }

  [data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --bg-tertiary: #e8e8e8;
    --text-primary: #1a1a1a;
    --text-secondary: #4a4a4a;
    --text-muted: #9a9a9a;
    --accent-primary: #0066cc;
    --accent-secondary: #7c3aed;
    --accent-tertiary: #ff006e;
    --glass-bg: rgba(255, 255, 255, 0.6);
    --glass-border: rgba(0, 0, 0, 0.1);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 16px 64px rgba(0, 0, 0, 0.2);
  }

  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
  }

  body {
    background-color: var(--bg-primary);
    font-family: 'Inter', 'Space Grotesk', sans-serif;
    color: var(--text-primary);
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* --- GLASSMORPHISM CARD --- */
  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
  }

  .glass-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
  }

  /* --- FLUID BACKGROUND --- */
  canvas#liquid-canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -1;
    opacity: 0.4;
    transition: opacity 0.3s ease;
  }

  [data-theme="light"] canvas#liquid-canvas {
    opacity: 0.2;
  }

  /* --- LAYOUT UTILS --- */
  .wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    position: relative;
    z-index: 10;
  }

  section {
    padding: 120px 0;
    min-height: 100vh;
  }

  /* --- TYPOGRAPHY --- */
  h1.hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3.5rem, 10vw, 8rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    overflow: visible;
    padding-right: 10px;
  }

  .outline-text {
    -webkit-text-stroke: 1px var(--glass-border);
    color: transparent;
    transition: all 0.5s ease;
  }
  
  .hero-title:hover .outline-text {
    color: white;
    -webkit-text-stroke: 0px;
  }

  h2.section-title {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  h2.section-title::after {
    content: '';
    height: 1px;
    flex-grow: 1;
    background: rgba(255,255,255,0.1);
  }

  p.bio-text {
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    line-height: 1.4;
    max-width: 800px;
    color: #ccc;
  }

  /* --- NAVIGATION --- */
  .nav-fixed {
    position: fixed;
    top: 40px; right: 40px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 10px;
    mix-blend-mode: difference;
  }

  .nav-link {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: right;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  
  .nav-link:hover { opacity: 1; }

  /* --- PROJECT LIST (The "Non-Collage") --- */
  .project-list {
    display: flex;
    flex-direction: column;
  }

  .project-item {
    padding: 40px 0;
    border-top: 1px solid rgba(255,255,255,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .project-item:last-child { border-bottom: 1px solid rgba(255,255,255,0.1); }

  .project-item:hover {
    padding-left: 20px;
    background: linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 100%);
  }

  .project-info { z-index: 2; }

  .project-year {
    font-family: 'Space Grotesk', monospace;
    color: var(--accent-cyan);
    font-size: 14px;
    margin-bottom: 8px;
  }

  .project-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 4vw, 4rem);
    font-weight: 700;
    color: var(--text-main);
  }

  .project-tags {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }
  
  .tag {
    font-size: 12px;
    text-transform: uppercase;
    color: var(--text-muted);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 4px 12px;
    border-radius: 100px;
  }

  .project-arrow {
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.3s ease;
  }

  .project-item:hover .project-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* --- HOVER REVEAL IMAGE --- */
  .hover-reveal {
    position: fixed;
    width: 400px;
    height: 250px;
    background-color: #222;
    border-radius: 8px;
    pointer-events: none;
    z-index: 50;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    transition: opacity 0.3s, transform 0.3s;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    background-size: cover;
    background-position: center;
  }

  .hover-reveal.active {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(-2deg);
  }

  /* --- FOOTER / CONTACT --- */
  .footer {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 80px 0;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    margin-right: 40px;
    color: var(--text-muted);
    transition: color 0.3s;
  }
  
  .social-link:hover { color: var(--accent-cyan); }

  /* --- MOBILE ADAPTATIONS --- */
  @media (max-width: 768px) {
    .hover-reveal { display: none; } /* Disable float image on mobile */
    .wrapper { padding: 0 20px; }
    .hero-title { font-size: 3.5rem; }
    .nav-fixed { top: 20px; right: 20px; }
    .project-item:hover { padding-left: 0; }
  }
`;

// --- MAIN COMPONENT ---
export default function App() {
  return (
    <>
      <style>{cssStyles}</style>
      <ThemeProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}