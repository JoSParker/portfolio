import { Briefcase, User, Mail, FileText, Star, GitFork, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    { icon: <Code2 size={24} />, label: 'Projects', value: '15+' },
    { icon: <Star size={24} />, label: 'Hackathons', value: '5+' },
    { icon: <GitFork size={24} />, label: 'Contributions', value: '200+' },
  ];

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '100px',
      position: 'relative',
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.2fr', 
        gap: '80px', 
        maxWidth: '1400px', 
        width: '100%',
        alignItems: 'center',
        padding: '0 40px',
      }}>
        
        {/* Left Side - Content */}
        <div style={{ textAlign: 'left', position: 'relative' }}>

          {/* Status Badge */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}
            transition={{ duration: 0.2 }}
            style={{ 
              display: 'inline-block',
              padding: '8px 20px',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50px',
              marginBottom: '40px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--accent-primary)',
              cursor: 'default',
            }}
          >
            ✨ Available for opportunities
          </motion.div>

          {/* Hero Title with TypeAnimation - ISOLATED */}
          <div style={{ 
            position: 'relative',
            height: 'clamp(100px, 15vw, 180px)',
            marginBottom: '30px',
            overflow: 'visible',
          }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                willChange: 'transform, opacity',
              }}
            >
              <TypeAnimation
                sequence={[
                  'JosParker',
                  2000,
                  'ML Enthusiast',
                  2000,
                  'Full Stack Dev',
                  2000,
                ]}
                wrapper="h1"
                speed={50}
                repeat={Infinity}
                className="hero-title"
                style={{ 
                  display: 'block',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                }}
              />
            </motion.div>
          </div>

          {/* Description */}
          <p 
            style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8', 
              marginBottom: '50px', 
              fontSize: '1.15rem',
              textAlign: 'left',
            }}
          >
            Hi! I'm John Samuel, a 3rd year undergrad and a full stack developer and ML enthusiast building innovative solutions at the intersection of technology, sports, and music, driven by my passion for both fields.
          </p>
          {/* Stats Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '16px', 
              marginBottom: '40px',
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 16px 64px rgba(0, 0, 0, 0.7)',
                }}
                transition={{ duration: 0.2 }}
                className="glass-card"
                style={{
                  padding: '24px',
                  textAlign: 'center',
                  cursor: 'default',
                }}
              >
                <div style={{ 
                  color: 'var(--accent-primary)', 
                  marginBottom: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: '28px', 
                  fontWeight: '700', 
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: '13px', 
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '16px', 
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="/experience"
                style={{ 
                  background: '#000000',
                  border: '1px solid var(--glass-border)',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  color: 'white',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'box-shadow 0.3s ease',
                  textDecoration: 'none',
                  fontSize: '15px',
                  boxShadow: 'var(--shadow-md)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 70px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <Briefcase size={18} />
                Experience
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="/work"
                style={{ 
                  background: '#000000',
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'box-shadow 0.3s ease',
                  textDecoration: 'none',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 70px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Briefcase size={18} />
                View My Work
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="/about"
                style={{ 
                  background: '#000000',
                  border: '1px solid var(--glass-border)',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  color: 'white',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'box-shadow 0.3s ease',
                  textDecoration: 'none',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 70px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <User size={18} />
                About Me
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="/contact"
                style={{ 
                  background: '#000000',
                  border: '1px solid var(--glass-border)',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  color: 'white',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'box-shadow 0.3s ease',
                  textDecoration: 'none',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 70px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Mail size={18} />
                Contact
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <a 
                href="https://drive.google.com/file/d/14_kEUQzcbaIGYExlmEFFAM-KDkg7h__9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  background: '#000000',
                  border: '1px solid var(--glass-border)',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  color: 'white',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'box-shadow 0.3s ease',
                  textDecoration: 'none',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 70px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <FileText size={18} />
                Resume
              </a>
            </motion.div>

          </div>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: '150px',
            paddingRight: '10px',
            marginBottom: '0px',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            style={{
              position: 'relative',
              width: '400px',
              height: '400px',
            }}
          >
            {/* Gradient Border */}
            <div style={{
              position: 'absolute',
              inset: '-4px',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary))',
              borderRadius: '50%',
              animation: 'rotate 8s linear infinite',
            }} />
            
            {/* Glass Frame */}
            <div style={{
              position: 'absolute',
              inset: '0',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              borderRadius: '50%',
              border: '2px solid var(--glass-border)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <motion.img 
                src="/John.jpeg" 
                alt="John Samuel Parker"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)' }}
              transition={{ delay: 1, duration: 0.5 }}
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '-20px',
                padding: '12px 24px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '14px',
                color: 'var(--accent-primary)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'default',
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                animation: 'pulse 2s infinite',
              }} />
              Available
            </motion.div>
          </motion.div>
        </motion.div>

      </div>

      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 1024px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          
          section > div > div:nth-child(2) {
            order: -1;
            padding-right: 0 !important;
            justify-content: center !important;
          }
          
          section > div > div:nth-child(2) > div {
            width: 300px !important;
            height: 300px !important;
          }
        }

        @media (max-width: 768px) {
          section > div {
            padding: 0 20px !important;
          }
          
          section > div > div:nth-child(2) > div {
            width: 250px !important;
            height: 250px !important;
          }
          
          .hero-title {
            font-size: clamp(2.5rem, 8vw, 5rem) !important;
          }
        }

        @media (max-width: 480px) {
          section > div > div:nth-child(1) > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
          
          section > div > div:nth-child(1) > div:nth-child(5) {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          section > div > div:nth-child(1) > div:nth-child(5) > div {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
