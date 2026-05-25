export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-bg" aria-hidden="true"><span /><span /><span /></div>
      <div className="hero-content reveal-block">
        <p className="eyebrow">Web Designer & Full Stack Developer in India</p>
        <h1>Premium websites for brands that want to look serious online.</h1>
        <p className="hero-text">I design and build mobile-first websites, full stack web apps, and digital experiences for businesses, coaching institutes, startups, and modern brands.</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn ghost" href="https://wa.me/919631192011" target="_blank" rel="noreferrer">Contact on WhatsApp</a>
        </div>
        <div className="proof-row"><span>Fast delivery</span><span>Mobile-first design</span><span>Live project preview</span><span>Branding & SEO</span></div>
      </div>
      <div className="hero-card reveal-block">
        <div className="screen-top"><i /><i /><i /><span>abhii.online</span></div>
        <div className="orbit"><b>React</b><b>SEO</b><b>UX</b></div>
        <h3>Creative systems for real businesses.</h3>
        <p>Premium interface, clean code, responsive layouts, and client-focused conversion flow.</p>
      </div>
    </section>
  );
}
