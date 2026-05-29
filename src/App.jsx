import { useEffect, useMemo, useState } from 'react';
import './corridor.css';
import './gameworld.css';

const projects = [
  { id: '01', title: 'Bliptwit', type: 'Secure Chat Concept', description: 'Privacy-first chat concept with clean UI and modern product-style interactions.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', link: 'https://bliptwit.vercel.app' },
  { id: '02', title: 'Herbivya', type: 'Brand Website', description: 'Nature-inspired premium website direction built around trust and mobile-first storytelling.', image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop', link: '#contact' },
  { id: '03', title: 'The Root Institution', type: 'Coaching Website', description: 'Professional education website for students and parents with clear responsive execution.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop', link: 'https://theroot-institution.vercel.app' },
  { id: '04', title: 'Visit Kerala', type: 'Travel Experience', description: 'Visual tourism website showing destinations with smooth browsing and strong imagery.', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop', link: 'https://kerala-beauty.vercel.app' },
];

const services = ['Website Design', 'Full Stack Development', 'App UI Design', 'Branding & SEO'];
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const smooth = (value) => value * value * (3 - 2 * value);
const projectStops = projects.map((_, index) => (index + 0.5) / projects.length);

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = document.querySelector('.corridor-section');
    if (!section) return undefined;
    let frameId = 0;
    const updateScene = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const total = section.offsetHeight - window.innerHeight;
        setProgress(total > 0 ? clamp(-rect.top / total, 0, 1) : 0);
      });
    };
    updateScene();
    window.addEventListener('scroll', updateScene, { passive: true });
    window.addEventListener('resize', updateScene);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateScene);
      window.removeEventListener('resize', updateScene);
    };
  }, []);

  const activeIndex = useMemo(() => projectStops.reduce((closest, stop, index) => (
    Math.abs(progress - stop) < Math.abs(progress - projectStops[closest]) ? index : closest
  ), 0), [progress]);
  const activeProject = projects[activeIndex];

  return (
    <div className="portfolio-page exact-portfolio">
      <header className="topbar">
        <a href="#home" className="brand">Abhii Designs</a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      </header>
      <main>
        <section className="hero-section" id="home">
          <p className="eyebrow">Interactive One Page Portfolio</p>
          <h1>A running character inside a project room.</h1>
          <p>Scroll karo. Character center mein run karega, room peeche move karega, aur wall photos pass aate hi zoom hoke details dikhayengi.</p>
          <div className="hero-actions"><a href="#work" className="primary-btn">Enter Room</a><a href="#contact" className="ghost-btn">Start Project</a></div>
        </section>

        <section className="corridor-section exact-corridor" id="work" aria-label="Running character project corridor">
          <div className="exact-stage" style={{ '--scroll': progress }}>
            <div className="tunnel-light" />
            <div className="room-backdrop" />
            <div className="room-wall room-wall-left" />
            <div className="room-wall room-wall-right" />
            <div className="room-floor" />
            <div className="room-depth-lines" />
            <div className="runner" aria-hidden="true"><span className="runner-shadow" /><span className="runner-head" /><span className="runner-body" /><span className="runner-arm runner-arm-left" /><span className="runner-arm runner-arm-right" /><span className="runner-leg runner-leg-left" /><span className="runner-leg runner-leg-right" /></div>
            {projects.map((project, index) => {
              const stop = projectStops[index];
              const distance = Math.abs(progress - stop);
              const focus = smooth(clamp(1 - distance * projects.length * 2.05, 0, 1));
              const side = index % 2 === 0 ? 'left' : 'right';
              const farYOffset = (stop - progress) * 290;
              const wallX = side === 'left' ? 18 : 82;
              const x = wallX + (50 - wallX) * focus;
              const y = 36 + farYOffset - focus * 5;
              const scale = clamp(0.38 + focus * 0.76, 0.22, 1.14);
              const rotate = side === 'left' ? -18 + focus * 18 : 18 - focus * 18;
              const fade = clamp(1 - Math.abs(farYOffset) / 135, 0.08, 1);
              return (
                <article key={project.id} className={`wall-photo wall-photo-${side} ${focus > 0.48 ? 'is-focused' : ''}`} style={{ '--focus': focus, left: `${x}%`, top: `${y}%`, opacity: Math.max(fade, focus), transform: `translate(-50%, -50%) scale(${scale}) rotateY(${rotate}deg)`, zIndex: focus > 0.48 ? 60 : 12 + index }}>
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  <div className="photo-details"><span>{project.id} / {project.type}</span><h2>{project.title}</h2><p>{project.description}</p><a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Live Preview</a></div>
                </article>
              );
            })}
            <div className="room-caption"><span>Now viewing</span><strong>{activeProject.title}</strong></div>
            <div className="room-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
          </div>
        </section>

        <section className="services-section" id="services"><p className="eyebrow">Services</p><h2>Complete website partner for serious businesses.</h2><div className="services-grid">{services.map((service, index) => <div className="service-card" key={service}><span>0{index + 1}</span><h3>{service}</h3><p>Clean strategy, mobile-first design, fast execution, and professional launch-ready structure.</p></div>)}</div></section>
        <section className="contact-section" id="contact"><p className="eyebrow">Start a Project</p><h2>Need a premium website that converts visitors into clients?</h2><p>Send your business type, goal, timeline, and reference websites.</p><div className="hero-actions centered"><a href="#home" className="primary-btn">Back to Top</a><a href="#work" className="ghost-btn">View Work</a></div></section>
      </main>
    </div>
  );
}
