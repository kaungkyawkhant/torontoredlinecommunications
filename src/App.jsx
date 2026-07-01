import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Solutions = lazy(() => import('./components/Solutions'));
const Markets = lazy(() => import('./components/Markets'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

/**
 * Main SPA composition with section refs and intersection-based active state.
 * @returns {JSX.Element}
 */
export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);
  const marketsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    solutions: solutionsRef,
    markets: marketsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  useEffect(() => {
    const observers = [];
    const options = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };

    // Track the section nearest the viewport center to highlight active nav state.
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(key);
        }
      }, options);

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} scrolled={scrolled} />
      <Hero sectionRef={homeRef} onNavigate={scrollToSection} />

      <Suspense fallback={<div className="section-container">Loading section...</div>}>
        <About sectionRef={aboutRef} />
        <Services sectionRef={servicesRef} />
        <Solutions sectionRef={solutionsRef} />
        <Markets sectionRef={marketsRef} />
        <Projects sectionRef={projectsRef} />
        <Contact sectionRef={contactRef} />
      </Suspense>

      <Footer onNavigate={scrollToSection} />
    </>
  );
}
