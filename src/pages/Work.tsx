import { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Work() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Chronica",
      year: "2024",
      tags: ["TypeScript", "Time Tracking", "Productivity"],
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2670&auto=format&fit=crop",
      link: "https://github.com/JoSParker/Chronica",
      description: "Time tracking and productivity tool",
      stars: 12
    },
    {
      id: 2,
      title: "API-SENTINEL",
      year: "2024",
      tags: ["JavaScript", "API", "Monitoring"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2534&auto=format&fit=crop",
      link: "https://github.com/JoSParker/API-SENTINEL",
      description: "API monitoring and alerting system",
      stars: 8
    },
    {
      id: 3,
      title: "Dog Threat Detector",
      year: "2024",
      tags: ["Python", "ML", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2670&auto=format&fit=crop",
      link: "https://github.com/JoSParker/dog-threat-detector",
      description: "ML-powered dog aggression detection",
      stars: 15
    },
    {
      id: 4,
      title: "EmberEye",
      year: "2024",
      tags: ["JavaScript", "Firebase", "Real-time"],
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2574&auto=format&fit=crop",
      link: "https://github.com/JoSParker/EmberEye",
      description: "Real-time data visualization platform",
      stars: 6
    },
    {
      id: 5,
      title: "Movie Tracker",
      year: "2023",
      tags: ["JavaScript", "Web App", "UI"],
      image: "https://images.unsplash.com/photo-1574267432644-f410f8ec8f8e?q=80&w=2631&auto=format&fit=crop",
      link: "https://github.com/JoSParker/Movie-Tracker",
      description: "Track and rate your favorite movies",
      stars: 10
    }
  ];

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

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
          Selected Work
        </h2>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem', 
          marginBottom: '40px',
          maxWidth: '600px',
        }}>
          A collection of projects showcasing my skills in web development, ML, and creative problem-solving.
        </p>

        {/* Filter Tags */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {allTags.map(tag => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(tag)}
              style={{
                padding: '8px 20px',
                borderRadius: '50px',
                border: '1px solid var(--glass-border)',
                background: filter === tag ? 'var(--accent-primary)' : 'var(--glass-bg)',
                color: filter === tag ? 'var(--bg-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
              }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '32px',
        }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-card"
              style={{
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              {/* Project Image */}
              <div style={{ 
                height: '200px', 
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  color: 'white',
                }}>
                  <Star size={14} fill="gold" stroke="gold" />
                  {project.stars}
                </div>
              </div>

              {/* Project Info */}
              <div style={{ padding: '24px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}>
                  <div>
                    <h3 style={{ 
                      fontFamily: 'Syne', 
                      fontSize: '1.5rem', 
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}>
                      {project.title}
                    </h3>
                    <span style={{ 
                      fontSize: '13px', 
                      color: 'var(--accent-primary)',
                      fontWeight: '500',
                    }}>
                      {project.year}
                    </span>
                  </div>
                </div>

                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  flexWrap: 'wrap',
                  marginBottom: '16px',
                }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '12px',
                        padding: '4px 12px',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '10px',
                      background: 'var(--accent-primary)',
                      color: 'var(--bg-primary)',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '10px',
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-primary)';
                      e.currentTarget.style.color = 'var(--bg-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--glass-bg)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
