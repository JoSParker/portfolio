import { Github, Linkedin, Mail, Calendar, MapPin, Coffee, Music, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTensorflow } from 'react-icons/si';

export default function About() {
  const skills = [
    { name: 'Python', icon: <FaPython size={32} />, level: 90, color: '#3776ab' },
    { name: 'JavaScript/TS', icon: <SiTypescript size={32} />, level: 85, color: '#3178c6' },
    { name: 'React/Next.js', icon: <FaReact size={32} />, level: 88, color: '#61dafb' },
    { name: 'Machine Learning', icon: <SiTensorflow size={32} />, level: 75, color: '#ff6f00' },
    { name: 'Node.js', icon: <FaNodeJs size={32} />, level: 80, color: '#339933' },
    { name: 'Git', icon: <FaGitAlt size={32} />, level: 85, color: '#f05032' },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Machine Learning Focus',
      description: 'Deep diving into ML algorithms and building prediction models',
      icon: <Trophy size={20} />,
    },
    {
      year: '2024',
      title: 'Premier League Predictor',
      description: 'Working on advanced sports analytics and prediction systems',
      icon: <Coffee size={20} />,
    },
    {
      year: '2023-2024',
      title: 'Full-Stack Development',
      description: 'Building web applications with React, Next.js, and modern tech stack',
      icon: <FaReact size={20} />,
    },
  ];

  const currentlyLearning = [
    { tech: 'TensorFlow', progress: 65 },
    { tech: 'PyTorch', progress: 55 },
    { tech: 'Advanced Algorithms', progress: 70 },
    { tech: 'System Design', progress: 50 },
  ];

  const funFacts = [
    { icon: <Music size={24} />, text: "I make music (though I admit, it's pretty bad!)" },
    { icon: <Trophy size={24} />, text: "Passionate about Football and Cricket analytics" },
    { icon: <Coffee size={24} />, text: "Coffee enthusiast - fueling late-night coding sessions" },
    { icon: <MapPin size={24} />, text: "Based in India, working on global projects" },
  ];

  return (
    <section style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ 
          fontFamily: 'Syne', 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          marginBottom: '16px',
          fontWeight: '800',
          background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          About Me
        </h2>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem', 
          marginBottom: '60px',
          maxWidth: '600px',
        }}>
          "Writing bad code or worse music" - but always learning and improving.
        </p>

        {/* Bio Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px',
          marginBottom: '80px',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card"
            style={{ padding: '32px' }}
          >
            <h3 style={{ 
              fontFamily: 'Syne', 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '20px',
              color: 'var(--text-primary)',
            }}>
              The Journey
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8',
              fontSize: '15px',
            }}>
              Currently diving deep into Machine Learning, working on predictive models, and passionate about Football, Cricket, and Music. I build projects that combine technology with my interests, creating solutions that matter.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>
                <Calendar size={16} />
                <span>Available for opportunities</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card"
            style={{ padding: '32px' }}
          >
            <h3 style={{ 
              fontFamily: 'Syne', 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '20px',
              color: 'var(--text-primary)',
            }}>
              Let's Connect
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a 
                href="https://github.com/JoSParker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <Github size={20} style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '15px' }}>GitHub</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>@JoSParker</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/john-samuel-p-22b6a629b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0077b5';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <Linkedin size={20} style={{ color: '#0077b5' }} />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '15px' }}>LinkedIn</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>John Samuel P</div>
                </div>
              </a>

              <a 
                href="mailto:jsamuelp181@gmail.com"
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-tertiary)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <Mail size={20} style={{ color: 'var(--accent-tertiary)' }} />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '15px' }}>Email</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>jsamuelp181@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h3 style={{ 
            fontFamily: 'Syne', 
            fontSize: '2rem', 
            fontWeight: '700',
            marginBottom: '32px',
            color: 'var(--text-primary)',
          }}>
            Tech Stack
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px',
          }}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card"
                style={{ padding: '24px' }}
              >
                <div style={{ 
                  color: skill.color, 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  {skill.icon}
                </div>
                <div style={{ 
                  fontWeight: '600', 
                  fontSize: '15px', 
                  marginBottom: '12px',
                  textAlign: 'center',
                  color: 'var(--text-primary)',
                }}>
                  {skill.name}
                </div>
                <div style={{ 
                  height: '6px', 
                  background: 'var(--bg-tertiary)', 
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: 'easeOut' }}
                    style={{ 
                      height: '100%', 
                      background: `linear-gradient(90deg, ${skill.color}, var(--accent-primary))`,
                      borderRadius: '10px',
                    }}
                  />
                </div>
                <div style={{ 
                  textAlign: 'right', 
                  fontSize: '12px', 
                  marginTop: '8px',
                  color: 'var(--text-muted)',
                }}>
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline & Currently Learning */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px',
          marginBottom: '80px',
        }}>
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 style={{ 
              fontFamily: 'Syne', 
              fontSize: '2rem', 
              fontWeight: '700',
              marginBottom: '32px',
              color: 'var(--text-primary)',
            }}>
              Journey Timeline
            </h3>
            <div style={{ position: 'relative', paddingLeft: '32px' }}>
              <div style={{
                position: 'absolute',
                left: '0',
                top: '8px',
                bottom: '8px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))',
              }} />
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  style={{ 
                    marginBottom: '32px',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    left: '-38px',
                    top: '4px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                    border: '3px solid var(--bg-primary)',
                  }} />
                  <div className="glass-card" style={{ padding: '20px' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      marginBottom: '8px',
                    }}>
                      <span style={{ color: 'var(--accent-primary)' }}>{item.icon}</span>
                      <span style={{ 
                        fontSize: '12px', 
                        fontWeight: '600',
                        color: 'var(--accent-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}>
                        {item.year}
                      </span>
                    </div>
                    <h4 style={{ 
                      fontSize: '16px', 
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: 'var(--text-primary)',
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ 
                      fontSize: '14px', 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                    }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 style={{ 
              fontFamily: 'Syne', 
              fontSize: '2rem', 
              fontWeight: '700',
              marginBottom: '32px',
              color: 'var(--text-primary)',
            }}>
              Currently Learning
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {currentlyLearning.map((item, index) => (
                <motion.div
                  key={item.tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="glass-card"
                  style={{ padding: '20px' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}>
                    <span style={{ 
                      fontWeight: '600', 
                      fontSize: '15px',
                      color: 'var(--text-primary)',
                    }}>
                      {item.tech}
                    </span>
                    <span style={{ 
                      fontSize: '13px',
                      color: 'var(--accent-primary)',
                      fontWeight: '600',
                    }}>
                      {item.progress}%
                    </span>
                  </div>
                  <div style={{ 
                    height: '8px', 
                    background: 'var(--bg-tertiary)', 
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 1, ease: 'easeOut' }}
                      style={{ 
                        height: '100%', 
                        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 style={{ 
            fontFamily: 'Syne', 
            fontSize: '2rem', 
            fontWeight: '700',
            marginBottom: '32px',
            color: 'var(--text-primary)',
          }}>
            Fun Facts
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px',
          }}>
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass-card"
                style={{ 
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ color: 'var(--accent-primary)' }}>
                  {fact.icon}
                </div>
                <p style={{ 
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}>
                  {fact.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
