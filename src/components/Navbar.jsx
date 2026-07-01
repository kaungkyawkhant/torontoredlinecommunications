import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'markets', label: 'Markets' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
];

/**
 * Fixed top navigation with active-section highlighting and mobile drawer.
 * @param {{ activeSection: string, onNavigate: (key: string) => void, scrolled: boolean }} props
 */
export default function Navbar({ activeSection, onNavigate, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavigate = (key) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.logo}
          onClick={() => handleNavigate('home')}
          aria-label="Go to home section"
        >
          <span className={styles.logoTop}>TORONTO</span>
          <span className={styles.logoMiddle}>REDLINE</span>
          <span className={styles.logoBottom}>COMMUNICATIONS</span>
        </button>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`${styles.navLink} ${activeSection === item.key ? styles.active : ''}`}
              onClick={() => handleNavigate(item.key)}
              aria-label={`Go to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className={styles.cta}
            onClick={() => handleNavigate('contact')}
            aria-label="Go to contact section"
          >
            Get in Touch
          </button>
        </nav>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.mobileDrawer} ${menuOpen ? styles.mobileOpen : ''}`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`${styles.mobileLink} ${activeSection === item.key ? styles.active : ''}`}
            onClick={() => handleNavigate(item.key)}
            aria-label={`Go to ${item.label}`}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          className={styles.mobileCta}
          onClick={() => handleNavigate('contact')}
          aria-label="Go to contact section"
        >
          Get in Touch
        </button>
      </nav>
    </header>
  );
}
