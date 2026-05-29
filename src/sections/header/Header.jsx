import { site } from '../../data/site.js';

export function Header() {
  return (
    <header className="site-header">
      <a className="header-mark" href="#top" aria-label="Home">AS</a>
      <nav className="header-nav" aria-label="Primary navigation">
        {site.nav.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
    </header>
  );
}
