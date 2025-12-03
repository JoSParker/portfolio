import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Web Dev Intern',
      company: 'JSW Steels',
      location: 'India',
      period: 'Jul 2025 – Aug 2025',
      description: 'Developed and maintained web applications using modern technologies.',
      responsibilities: [
        'Built responsive web applications',
        'Collaborated with cross-functional teams',
        'Implemented best practices in web development',
      ],
    },
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
          Experience
        </h2>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem', 
          marginBottom: '60px',
          maxWidth: '600px',
        }}>
          My professional journey and work experience
        </p>

        {/* Timeline Container */}
        <div style={{ 
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
        }}>
          {/* Vertical Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '30px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))',
          }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{
                position: 'relative',
                paddingLeft: '80px',
                marginBottom: '60px',
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '10px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                border: '4px solid var(--bg-primary)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
              }} />

              {/* Content Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 20px 80px rgba(0, 0, 0, 0.8)',
                }}
                transition={{ duration: 0.2 }}
                className="glass-card"
                style={{
                  padding: '32px',
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}>
                  <div>
                    <h3 style={{ 
                      fontFamily: 'Syne', 
                      fontSize: '1.5rem', 
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                    }}>
                      {exp.title}
                    </h3>
                    <div style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: 'var(--accent-primary)',
                      marginBottom: '12px',
                    }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    alignItems: 'flex-end',
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      color: 'var(--text-secondary)',
                      fontSize: '14px',
                    }}>
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      color: 'var(--text-secondary)',
                      fontSize: '14px',
                    }}>
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p style={{ 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.8',
                  marginBottom: '20px',
                }}>
                  {exp.description}
                </p>

                <div>
                  <h4 style={{ 
                    fontSize: '14px', 
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    Key Responsibilities
                  </h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0,
                    margin: 0,
                  }}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ 
                        color: 'var(--text-secondary)',
                        marginBottom: '8px',
                        paddingLeft: '24px',
                        position: 'relative',
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '8px',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'var(--accent-primary)',
                        }} />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
