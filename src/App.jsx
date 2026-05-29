import { Header } from './sections/header/Header.jsx';
import { Hero } from './sections/hero/Hero.jsx';
import { Projects } from './sections/projects/Projects.jsx';
import { Services } from './sections/services/Services.jsx';
import { Contact } from './sections/contact/Contact.jsx';
import { Footer } from './sections/footer/Footer.jsx';
import { Loader } from './ui/Loader.jsx';
import { CursorGlow } from './ui/CursorGlow.jsx';

export default function App() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
