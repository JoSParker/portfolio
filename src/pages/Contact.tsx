import { useState } from 'react';
import { Mail, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <FaGithub size={24} />, 
      url: 'https://github.com/JoSParker',
      color: '#333',
      description: '@JoSParker',
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin size={24} />, 
      url: 'https://www.linkedin.com/in/john-samuel-p-22b6a629b/',
      color: '#0077b5',
      description: 'John Samuel P',
    },
    { 
      name: 'Twitter', 
      icon: <FaTwitter size={24} />, 
      url: '#',
      color: '#1da1f2',
      description: '@josparker',
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
          Let's Connect
        </h2>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem', 
          marginBottom: '60px',
          maxWidth: '600px',
        }}>
          Have a project in mind? Want to collaborate? Or just want to say hi? Feel free to reach out!
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card"
            style={{ padding: '40px', gridColumn: 'span 2' }}
          >
            <h3 style={{ 
              fontFamily: 'Syne', 
              fontSize: '1.8rem', 
              fontWeight: '700',
              marginBottom: '24px',
              color: 'var(--text-primary)',
            }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '20px',
                marginBottom: '20px',
              }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--glass-bg)',
                      border: `1px solid ${errors.name ? 'var(--accent-tertiary)' : 'var(--glass-border)'}`,
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontFamily: 'Inter',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = errors.name ? 'var(--accent-tertiary)' : 'var(--glass-border)'}
                  />
                  {errors.name && (
                    <span style={{ 
                      fontSize: '12px', 
                      color: 'var(--accent-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '4px',
                    }}>
                      <AlertCircle size={12} />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--glass-bg)',
                      border: `1px solid ${errors.email ? 'var(--accent-tertiary)' : 'var(--glass-border)'}`,
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontFamily: 'Inter',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = errors.email ? 'var(--accent-tertiary)' : 'var(--glass-border)'}
                  />
                  {errors.email && (
                    <span style={{ 
                      fontSize: '12px', 
                      color: 'var(--accent-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '4px',
                    }}>
                      <AlertCircle size={12} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--glass-bg)',
                    border: `1px solid ${errors.subject ? 'var(--accent-tertiary)' : 'var(--glass-border)'}`,
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = errors.subject ? 'var(--accent-tertiary)' : 'var(--glass-border)'}
                />
                {errors.subject && (
                  <span style={{ 
                    fontSize: '12px', 
                    color: 'var(--accent-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '4px',
                  }}>
                    <AlertCircle size={12} />
                    {errors.subject}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                }}>
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--glass-bg)',
                    border: `1px solid ${errors.message ? 'var(--accent-tertiary)' : 'var(--glass-border)'}`,
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = errors.message ? 'var(--accent-tertiary)' : 'var(--glass-border)'}
                />
                {errors.message && (
                  <span style={{ 
                    fontSize: '12px', 
                    color: 'var(--accent-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '4px',
                  }}>
                    <AlertCircle size={12} />
                    {errors.message}
                  </span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'success'}
                style={{
                  width: '100%',
                  padding: '14px 32px',
                  background: status === 'success' 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: status === 'success' ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                }}
              >
                {status === 'success' ? (
                  <>
                    <Check size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {/* Direct Contact */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <h3 style={{ 
                fontFamily: 'Syne', 
                fontSize: '1.5rem', 
                fontWeight: '700',
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}>
                Direct Contact
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a 
                  href="mailto:jsamuelp181@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div style={{
                    padding: '12px',
                    background: 'var(--glass-bg)',
                    borderRadius: '12px',
                    color: 'var(--accent-primary)',
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      Email
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '500' }}>
                      jsamuelp181@gmail.com
                    </div>
                  </div>
                </a>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    padding: '12px',
                    background: 'var(--glass-bg)',
                    borderRadius: '12px',
                    color: 'var(--accent-secondary)',
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      Location
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '500' }}>
                      India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <h3 style={{ 
                fontFamily: 'Syne', 
                fontSize: '1.5rem', 
                fontWeight: '700',
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}>
                Find Me Online
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={{
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ color: social.color }}>
                      {social.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '2px' }}>
                        {social.name}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                        {social.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="glass-card"
              style={{
                padding: '24px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{ 
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#10b981',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Available
                </span>
              </div>
              <p style={{ 
                fontSize: '13px', 
                color: 'var(--text-muted)',
                lineHeight: '1.6',
              }}>
                Open to new opportunities and collaborations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
