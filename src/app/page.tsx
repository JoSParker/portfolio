'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'    

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Animated wrapper component
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [nameIndex, setNameIndex] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const names = ['JosParker', 'John Samuel P']

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % 2)
    }, 3000)
    return () => clearInterval(nameInterval)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <div className="grain"></div>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-bg-dark transition-all duration-700 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-full flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="menu-link serif-title text-5xl md:text-7xl text-white/40 hover:text-white transition-all duration-500 hover:tracking-wider">
              Home
            </button>
            <button onClick={() => scrollToSection('experience')} className="menu-link serif-title text-5xl md:text-7xl text-white/40 hover:text-white transition-all duration-500 hover:tracking-wider">
              Experience
            </button>
            <button onClick={() => scrollToSection('works')} className="menu-link serif-title text-5xl md:text-7xl text-white/40 hover:text-white transition-all duration-500 hover:tracking-wider">
              Works
            </button>
            <button onClick={() => scrollToSection('tools')} className="menu-link serif-title text-5xl md:text-7xl text-white/40 hover:text-white transition-all duration-500 hover:tracking-wider">
              Tools
            </button>
            <button onClick={() => scrollToSection('contact')} className="menu-link serif-title text-5xl md:text-7xl text-white/40 hover:text-white transition-all duration-500 hover:tracking-wider">
              Contact
            </button>
          </nav>
          <div className="mt-16 flex gap-8">
            <a className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest" href="https://www.linkedin.com/in/john-samuel-p-22b6a629b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest" href="https://github.com/JoSParker" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest" href="https://twitter.com/josparker" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      {/* Side Text */}
      <aside className="fixed left-0 top-0 h-full w-12 border-r border-white/5 z-40 hidden lg:flex items-center justify-center overflow-hidden">
        <div className="vertical-text flex gap-12 whitespace-nowrap scroll-text-anim text-[10px] uppercase tracking-[0.3em] text-white/20">
          <span>ML Enthusiast — Full Stack Developer — Creative Problem Solver —</span>
          <span>ML Enthusiast — Full Stack Developer — Creative Problem Solver —</span>
        </div>
      </aside>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[110] flex justify-between items-center px-10 py-8 pointer-events-none">
        <div className="pointer-events-auto">
          <button onClick={() => scrollToSection('hero')} className="text-xs uppercase tracking-[0.5em] font-light hover:text-white/60 transition-colors">JSP</button>
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="pointer-events-auto group flex items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {menuOpen ? 'Close' : 'Menu'}
          </span>
          <div className={`w-8 h-[1px] bg-white relative transition-all duration-300 ${menuOpen ? 'rotate-45' : ''}`}>
            <div className={`absolute h-[1px] bg-white transition-all duration-300 ${menuOpen ? 'w-8 top-0 left-0 -rotate-90' : 'w-4 -top-1 right-0'}`}></div>
          </div>
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-7xl items-center gap-12">
          <AnimatedSection className="lg:col-span-4 z-10">
            <h1 className="serif-title leading-[1] text-white relative h-[80px] md:h-[90px] lg:h-[100px]">
              <span 
                className="absolute inset-0 flex items-center text-4xl md:text-5xl lg:text-6xl font-mono hover-text-glow transition-all duration-700 hover:tracking-wide cursor-default hover:text-white/80"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  opacity: nameIndex === 0 ? 1 : 0,
                  transform: nameIndex === 0 ? 'translateY(0)' : 'translateY(-100%)',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                @JosParker
              </span>
              <span 
                className="absolute inset-0 flex items-center text-4xl md:text-5xl lg:text-6xl italic hover-text-glow transition-all duration-700 hover:tracking-wide cursor-default hover:text-white/80 whitespace-nowrap"
                style={{
                  opacity: nameIndex === 1 ? 1 : 0,
                  transform: nameIndex === 1 ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                John Samuel P
              </span>
            </h1>
            <p className="mt-8 text-sm text-white/40 max-w-[220px] leading-relaxed uppercase tracking-widest hover:text-white/60 transition-all duration-300 hover:tracking-wider cursor-default">
              Based in Bangalore. Building projects that combine technology with passion.
            </p>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4 relative group" delay={200}>
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                alt="JosParker Profile"
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:opacity-0"
                src="/profile.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Image
                alt="JosParker Profile Coloured"
                className="w-full h-full object-cover object-top transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                src="/profile-coloured.png"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 left-0 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-widest text-white/30">Ref. 001/24</span>
              <div className="w-12 h-[1px] bg-white/10"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center text-left lg:text-right" delay={400}>
            <h2 className="sans-role text-sm md:text-lg text-white font-light uppercase mb-4 hover-text-glow transition-all duration-500 hover:tracking-widest hover:scale-105 cursor-default">
              Full Stack Developer
            </h2>
            <div className="h-[1px] w-24 bg-white/20 mb-8 hover:w-32 hover:bg-white/40 transition-all duration-500"></div>
            <div className="space-y-6 text-xs text-white/50 tracking-wide font-light max-w-[240px]">
              <p className="hover:text-white/80 hover:tracking-wider transition-all duration-300 cursor-default">SPECIALIZING IN WEB DEVELOPMENT, MACHINE LEARNING, AND CREATIVE PROBLEM-SOLVING.</p>
              <p className="hover:text-white/80 hover:tracking-wider transition-all duration-300 cursor-default">PASSIONATE ABOUT FOOTBALL, CRICKET, AND BUILDING SOLUTIONS THAT MATTER.</p>
            </div>
            <div className="mt-12 hidden lg:block">
              <button onClick={() => scrollToSection('experience')} className="flex items-center gap-6 group">
                <div className="text-[10px] text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">View Experience</div>
                <span className="material-symbols-outlined text-sm font-thin group-hover:translate-y-1 transition-transform">south</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen pt-40 pb-32 px-6 lg:px-24 border-t border-white/5 bg-[#141414]">
        <div className="max-w-7xl mx-auto w-full">
          <AnimatedSection>
            <header className="mb-24">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Career</span>
                <div className="w-12 h-[1px] bg-white/10"></div>
              </div>
              <h2 className="serif-title text-6xl md:text-8xl lg:text-9xl leading-none hover-text-glow">
                <span className="hover:tracking-wider transition-all duration-500 inline-block">Experience</span>
              </h2>
            </header>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-sm uppercase tracking-[0.4em] text-white/30 mb-16">Selected Experience</h3>
                <div className="space-y-12 relative pl-8">
                  <div className="timeline-line"></div>

                  {[
                    { period: 'Jul 2025 — Aug 2025', role: 'Web Dev Intern', company: 'JSW Steels' },
                  ].map((exp, i) => (
                    <div key={i} className="relative group">
                      <div className="timeline-dot group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm text-white/40 uppercase tracking-widest block mb-2 group-hover:text-white/60 group-hover:tracking-wider transition-all duration-300">{exp.period}</span>
                      <h4 className="sans-bold text-3xl md:text-4xl text-white uppercase tracking-tight hover-text-glow transition-all duration-500 group-hover:tracking-wide">{exp.role}</h4>
                      <p className="text-base text-white/50 mt-3 uppercase tracking-wide group-hover:text-white/70 group-hover:tracking-wider transition-all duration-300">{exp.company}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex flex-col justify-center">
                <div className="space-y-10">
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-white/20 uppercase tracking-widest">Availability</span>
                      <span className="text-sm text-white/60 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> Available for opportunities
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-white/20 uppercase tracking-widest">Based In</span>
                    <span className="text-sm text-white/60 uppercase tracking-widest">Bangalore</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-white/20 uppercase tracking-widest">Work Preference</span>
                    <span className="text-sm text-white/60 uppercase tracking-widest">Remote / On-site</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="min-h-screen pt-32 pb-48 px-6 lg:pl-32 lg:pr-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <header className="mb-24">
              <h2 className="serif-title text-5xl md:text-7xl font-bold tracking-tight text-white/90 hover-text-glow transition-all duration-500">
                <span className="hover:tracking-wider transition-all duration-500 inline-block">SELECTED</span> <br />
                <span className="italic font-light hover:tracking-wider transition-all duration-500 inline-block">WORKS</span>
              </h2>
              <div className="w-24 h-[1px] bg-white/20 mt-12 hover:w-32 hover:bg-white/40 transition-all duration-500"></div>
            </header>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 flex flex-col">
              {[
                { num: '01', title: 'Chronica', category: 'Time Tracking / 2024', italic: false, link: 'https://github.com/JoSParker/Chronica', desc: 'A productivity tool for tracking time spent on projects with beautiful analytics and insights.', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80' },
                { num: '02', title: 'API-Sentinel', category: 'API Monitoring / 2024', italic: true, link: 'https://github.com/JoSParker/API-SENTINEL', desc: 'Real-time API monitoring and alerting system with customizable dashboards and notifications.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80' },
                { num: '03', title: 'Dog Threat Detector', category: 'ML / Computer Vision / 2024', italic: false, link: 'https://github.com/JoSParker/dog-threat-detector', desc: 'ML-powered dog aggression detection using computer vision for public safety applications.', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80' },
                { num: '04', title: 'EmberEye', category: 'Real-time Data / 2024', italic: true, link: 'https://github.com/JoSParker/EmberEye', desc: 'Real-time data visualization platform with Firebase integration for live updates.', image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800&q=80' },
                { num: '05', title: 'Movie Tracker', category: 'Web App / 2023', italic: false, link: 'https://github.com/JoSParker/Movie-Tracker', desc: 'Track and rate your favorite movies with personalized recommendations and watchlists.', image: 'https://images.unsplash.com/photo-1574267432644-f410f8ec8f8e?w=800&q=80' },
              ].map((project, index) => (
                <AnimatedSection key={project.num} delay={index * 100}>
                  <div 
                    className="group relative border-b border-white/5 py-8 md:py-12"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <a className="project-link flex flex-col gap-4" href={project.link} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-baseline gap-6">
                        <span className="sans-role text-[10px] text-white/30 group-hover:text-white/60 transition-all duration-300">{project.num}</span>
                        <h3 className={`project-text serif-title text-4xl md:text-5xl lg:text-6xl text-white/40 group-hover:text-white group-hover:tracking-wider transition-all duration-500 ${project.italic ? 'italic' : ''}`}>
                          {project.title}
                        </h3>
                      </div>
                      <div className="overflow-hidden">
                        <p className={`text-xs text-white/30 uppercase tracking-widest max-w-md transition-all duration-500 ${hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                          {project.desc}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 group-hover:text-white/60 transition-colors">{project.category}</span>
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Project Preview Image */}
            <div className="hidden lg:block lg:col-span-5 sticky top-32 h-fit">
              <div className={`relative aspect-video overflow-hidden transition-all duration-700 ${hoveredProject !== null ? 'bg-zinc-900 border border-white/5' : 'bg-transparent border border-transparent'}`}>
                {[
                  { image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80' },
                  { image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80' },
                  { image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80' },
                  { image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800&q=80' },
                  { image: 'https://images.unsplash.com/photo-1574267432644-f410f8ec8f8e?w=800&q=80' },
                ].map((proj, i) => (
                  <Image
                    key={i}
                    src={proj.image}
                    alt="Project preview"
                    fill
                    className={`object-cover transition-all duration-700 ${hoveredProject === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative pt-32 pb-32 px-6 lg:px-32 border-t border-white/5 bg-[#141414]">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <AnimatedSection>
            <header className="mb-16">
              <div className="flex items-center gap-4 mb- 4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Stack</span>
                <div className="w-12 h-[1px] bg-white/10 hover:w-20 hover:bg-white/30 transition-all duration-500"></div>
              </div>
              <h2 className="serif-title text-5xl md:text-6xl lg:text-7xl leading-none hover-text-glow">
                <span className="hover:tracking-wider transition-all duration-500 inline-block cursor-default">Tools</span>
              </h2>
            </header>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Frontend */}
            <AnimatedSection delay={100}>
              <div className="group relative p-8 border border-white/5 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/10 transition-all duration-500">
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/10 group-hover:border-white/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/10 group-hover:border-white/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 block">01</span>
                <h3 className="text-lg uppercase tracking-[0.2em] text-white/70 mb-6 group-hover:text-white group-hover:tracking-wider transition-all duration-300 cursor-default">Frontend</h3>
                <div className="space-y-3">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular'].map((skill, idx) => (
                    <div key={skill} className="group/item flex items-center gap-4 cursor-default py-1 border-b border-white/5 last:border-0">
                      <span className="text-[10px] text-white/20 w-4">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-sm text-white/40 group-hover/item:text-white group-hover/item:translate-x-2 transition-all duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Backend */}
            <AnimatedSection delay={200}>
              <div className="group relative p-8 border border-white/5 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/10 transition-all duration-500">
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/10 group-hover:border-white/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/10 group-hover:border-white/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 block">02</span>
                <h3 className="text-lg uppercase tracking-[0.2em] text-white/70 mb-6 group-hover:text-white group-hover:tracking-wider transition-all duration-300 cursor-default">Backend</h3>
                <div className="space-y-3">
                  {['Node.js', 'Python', 'REST APIs', 'MongoDB', 'PostgreSQL'].map((skill, idx) => (
                    <div key={skill} className="group/item flex items-center gap-4 cursor-default py-1 border-b border-white/5 last:border-0">
                      <span className="text-[10px] text-white/20 w-4">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-sm text-white/40 group-hover/item:text-white group-hover/item:translate-x-2 transition-all duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Tools & ML */}
            <AnimatedSection delay={300}>
              <div className="group relative p-8 border border-white/5 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/10 transition-all duration-500">
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/10 group-hover:border-white/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/10 group-hover:border-white/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 block">03</span>
                <h3 className="text-lg uppercase tracking-[0.2em] text-white/70 mb-6 group-hover:text-white group-hover:tracking-wider transition-all duration-300 cursor-default">Tools & ML</h3>
                <div className="space-y-3">
                  {['Git', 'GitHub', 'TensorFlow', 'Postman', 'Docker'].map((skill, idx) => (
                    <div key={skill} className="group/item flex items-center gap-4 cursor-default py-1 border-b border-white/5 last:border-0">
                      <span className="text-[10px] text-white/20 w-4">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-sm text-white/40 group-hover/item:text-white group-hover/item:translate-x-2 transition-all duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-40 pb-32 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col justify-center items-center text-center">
            <AnimatedSection>
              <h2 className="serif-title text-7xl md:text-9xl lg:text-[12rem] leading-[0.8] text-white mb-12 hover-text-glow">
                <span className="block hover:tracking-wider hover:text-white/80 transition-all duration-500 cursor-default">Get In</span>
                <span className="italic block hover:tracking-wider hover:text-white/80 transition-all duration-500 cursor-default">Touch</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex flex-col gap-6 items-center">
                <a className="contact-link text-3xl md:text-5xl lg:text-6xl font-light text-white/40 serif-title italic" href="mailto:jsamuelp181@gmail.com">
                  jsamuelp181@gmail.com
                </a>
                <div className="flex gap-8 mt-8">
                  <a className="contact-link text-sm uppercase tracking-[0.3em] text-white/40" href="https://www.linkedin.com/in/john-samuel-p-22b6a629b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="contact-link text-sm uppercase tracking-[0.3em] text-white/40" href="https://github.com/JoSParker" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a className="contact-link text-sm uppercase tracking-[0.3em] text-white/40" href="https://twitter.com/josparker" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-24">
                <a href="mailto:jsamuelp181@gmail.com?subject=Hello%20from%20your%20Portfolio" className="floating-cta group relative flex items-center justify-center px-10 py-5 bg-white text-black rounded-full transition-all duration-500 hover:scale-105 hover:pr-14">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Send a Message</span>
                  <span className="material-symbols-outlined absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">chat_bubble</span>
                  <div className="absolute inset-0 rounded-full bg-white blur-md opacity-20 animate-pulse"></div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-[8px] text-white/20 uppercase tracking-widest">Status</span>
              <span className="text-[9px] text-white/60 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span> Open for collaboration
              </span>
            </div>
            <div className="flex flex-col gap-1 border-l border-white/5 pl-8">
              <span className="text-[8px] text-white/20 uppercase tracking-widest">Time</span>
              <span className="text-[9px] text-white/60 uppercase tracking-widest">{currentTime}</span>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <a className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest" href="https://www.linkedin.com/in/john-samuel-p-22b6a629b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest" href="https://github.com/JoSParker" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest" href="https://twitter.com/josparker" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 JosParker. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        onClick={() => scrollToSection('hero')} 
        className="fixed bottom-8 right-10 z-40 flex items-center gap-4 group"
      >
        <span className="text-[8px] text-white/20 uppercase tracking-[0.5em] group-hover:text-white/60 transition-colors">Top</span>
        <span className="material-symbols-outlined text-white/20 group-hover:text-white/60 transition-colors text-sm">north</span>
      </button>
    </>
  )
}
