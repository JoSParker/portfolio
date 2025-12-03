import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

// --- CANVAS ANIMATION COMPONENT ---
const LiquidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;

    let time = 0;
    
    // Configuration for the blobs
    const orbs = [
      { x: 0.2, y: 0.2, r: 0.3, color: 'rgba(0, 240, 255, 0.15)', speed: 0.002 }, // Cyan
      { x: 0.8, y: 0.8, r: 0.4, color: 'rgba(255, 0, 60, 0.12)', speed: 0.003 },  // Pink
      { x: 0.5, y: 0.5, r: 0.5, color: 'rgba(100, 50, 255, 0.1)', speed: 0.001 }, // Violet
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      time += 1;
      ctx.fillStyle = '#030303'; // Clear with dark bg
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Orbs
      orbs.forEach(orb => {
        const moveX = Math.sin(time * orb.speed) * 100;
        const moveY = Math.cos(time * orb.speed) * 100;
        const x = (orb.x * canvas.width) + moveX;
        const y = (orb.y * canvas.height) + moveY;
        const radius = orb.r * Math.min(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="liquid-canvas" ref={canvasRef} />;
};

// Navigation component
function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 24px',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '50px',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <Link 
        to="/"
        style={{
          padding: '8px 16px',
          borderRadius: '50px',
          textDecoration: 'none',
          color: isActive('/') ? 'var(--bg-primary)' : 'var(--text-secondary)',
          background: isActive('/') ? 'var(--accent-primary)' : 'transparent',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!isActive('/')) {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.color = 'var(--accent-primary)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive('/')) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }
        }}
      >
        Home
      </Link>
      <Link 
        to="/experience"
        style={{
          padding: '8px 16px',
          borderRadius: '50px',
          textDecoration: 'none',
          color: isActive('/experience') ? 'var(--bg-primary)' : 'var(--text-secondary)',
          background: isActive('/experience') ? 'var(--accent-primary)' : 'transparent',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!isActive('/experience')) {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.color = 'var(--accent-primary)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive('/experience')) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }
        }}
      >
        Experience
      </Link>
      <Link 
        to="/work"
        style={{
          padding: '8px 16px',
          borderRadius: '50px',
          textDecoration: 'none',
          color: isActive('/work') ? 'var(--bg-primary)' : 'var(--text-secondary)',
          background: isActive('/work') ? 'var(--accent-primary)' : 'transparent',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!isActive('/work')) {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.color = 'var(--accent-primary)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive('/work')) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }
        }}
      >
        Work
      </Link>
      <Link 
        to="/about"
        style={{
          padding: '8px 16px',
          borderRadius: '50px',
          textDecoration: 'none',
          color: isActive('/about') ? 'var(--bg-primary)' : 'var(--text-secondary)',
          background: isActive('/about') ? 'var(--accent-primary)' : 'transparent',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!isActive('/about')) {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.color = 'var(--accent-primary)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive('/about')) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }
        }}
      >
        About
      </Link>
      <Link 
        to="/contact"
        style={{
          padding: '8px 16px',
          borderRadius: '50px',
          textDecoration: 'none',
          color: isActive('/contact') ? 'var(--bg-primary)' : 'var(--text-secondary)',
          background: isActive('/contact') ? 'var(--accent-primary)' : 'transparent',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!isActive('/contact')) {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.color = 'var(--accent-primary)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive('/contact')) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }
        }}
      >
        Contact
      </Link>
      <a 
        href="https://drive.google.com/file/d/14_kEUQzcbaIGYExlmEFFAM-KDkg7h__9/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '8px 16px',
          borderRadius: '50px',
          textDecoration: 'none',
          color: 'var(--text-secondary)',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
      >
        Resume
      </a>
      <div style={{ width: '1px', height: '24px', background: 'var(--glass-border)', margin: '0 4px' }} />
      <button
        onClick={toggleTheme}
        style={{
          padding: '8px',
          background: 'transparent',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--glass-bg)';
          e.currentTarget.style.color = 'var(--accent-primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--text-secondary)';
        }}
      >
        {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
      </button>
    </motion.nav>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <LiquidBackground />
      <Navigation />
      
      <div className="wrapper">
        {children}
      </div>
    </>
  );
}
