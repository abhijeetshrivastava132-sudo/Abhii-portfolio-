import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { contact, navLinks, services, projects, skills, process } from './data/portfolio.js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 1.55, duration: 0.5, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <div className="loader-card">
        <motion.span
          className="loader-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.h1 initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Abhii Designs
        </motion.h1>
        <p>Creative Developer Portfolio</p>
      </div>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = navLinks.map((item) => ({ label: item, href: `#${item.toLowerCase().replaceAll(' ', '-')}` }));

  return (
    <header className="site-nav">
      <a className="brand" href="#home" aria-label="Abhii Designs home">
        <span>Abhii</span> Designs
      </a>
      <nav className="desktop-links" aria-label="Primary navigation">
        {links.slice(0, 6).map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <a className="nav-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">Start</a>
      <button className="menu-btn" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
      </button>
      <div className={open ? 'mobile-panel open' : 'mobile-panel'}>
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
      </div>
    </header>
  );
}

function VisualStage() {
  const stage = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);

  useEffect(() => {
    if (!stage.current) return undefined;
    const ctx = gsap.context(() => {
      gsap.to('.orb-one', { y: -18, x: 12, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.orb-two', { y: 16, x: -10, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.orbit-ring', { rotate: 360, duration: 18, repeat: -1, ease: 'none' });
    }, stage);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div className="visual-stage" style={{ y }} ref={stage} aria-hidden="true">
      <div className="mesh-glow" />
      <div className="orbit-ring" />
      <div className="glass-device orb-one">
        <div className="device-top" />
        <div className="device-line wide" />
        <div className="device-line" />
        <div className="device-grid"><span /><span /><span /><span /></div>
      </div>
      <div className="floating-card orb-two">
        <strong>01</strong>
        <span>Design</span>
      </div>
      <div className="code-chip">React · Motion · SEO</div>
    </motion.div>
  );
}

function SectionHeader({ kicker, title, text }) {
  return (
    <motion.div className="section-header" variants={fadeUp}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="show">
        <motion.p className="kicker" variants={fadeUp}>Web Designer & Full Stack Developer</motion.p>
        <motion.h1 variants={fadeUp}>Premium websites that make brands look impossible to ignore.</motion.h1>
        <motion.p className="hero-text" variants={fadeUp}>
          I design and build fast, mobile-first websites for businesses, coaching institutes, brands, and startups.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn ghost" href={contact.whatsapp} target="_blank" rel="noreferrer">Contact on WhatsApp</a>
        </motion.div>
        <motion.div className="proof-row" variants={fadeUp}>
          <span>Mobile-first</span>
          <span>Premium UI</span>
          <span>SEO-ready</span>
        </motion.div>
      </motion.div>
      <VisualStage />
    </section>
  );
}

function About() {
  return (
    <motion.section id="about" className="section-shell about" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <SectionHeader kicker="About" title="A creative portfolio built for trust, speed, and client conversion." text="Abhii Designs focuses on clean structure, cinematic presentation, and practical business goals." />
      <motion.div className="about-grid" variants={stagger}>
        {['Premium dark visual system', 'Smooth but lightweight motion', 'Clear business-first copy'].map((item) => (
          <motion.article className="glass-card" variants={fadeUp} key={item}><span>{item}</span></motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Services() {
  return (
    <motion.section id="services" className="section-shell" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>
      <SectionHeader kicker="Services" title="Web experiences for businesses that need attention and action." />
      <div className="cards-grid services-grid">
        {services.map(([title, text], index) => (
          <motion.article className="glass-card service-card" variants={fadeUp} key={title}>
            <span className="card-index">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Projects() {
  return (
    <motion.section id="projects" className="section-shell" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
      <SectionHeader kicker="Featured Projects" title="Live work with a clean, premium, mobile-first direction." />
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article className="project-card" variants={fadeUp} key={project.title}>
            <div className="project-meta"><span>0{index + 1}</span><small>{project.type}</small></div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="btn project-btn" href={project.href} target="_blank" rel="noreferrer">Live Preview</a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Skills() {
  return (
    <motion.section id="skills" className="section-shell" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>
      <SectionHeader kicker="Tech Stack" title="Modern stack. Practical execution. Optimized for launch." />
      <div className="skills-wrap">
        {skills.map(([group, items]) => (
          <motion.div className="skill-group glass-card" variants={fadeUp} key={group}>
            <h3>{group}</h3>
            <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Process() {
  return (
    <motion.section id="process" className="section-shell" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>
      <SectionHeader kicker="Process" title="Simple workflow. No confusion. No random design decisions." />
      <div className="process-line">
        {process.map(([title, text], index) => (
          <motion.article className="process-card" variants={fadeUp} key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section id="contact" className="section-shell contact" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <div className="contact-panel">
        <p className="kicker">Start a Project</p>
        <h2>Need a premium website that makes your business look serious?</h2>
        <p>Send the project idea. I will help shape it into a clean, fast, conversion-focused website.</p>
        <div className="hero-actions">
          <a className="btn primary" href={contact.whatsapp} target="_blank" rel="noreferrer">Contact on WhatsApp</a>
          <a className="btn ghost" href={`mailto:${contact.email}`}>Send Email</a>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Abhii Designs. Premium websites for modern businesses.</p>
      <div>
        <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
