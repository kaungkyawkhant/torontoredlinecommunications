import { Linkedin } from 'lucide-react';
import styles from '../styles/Footer.module.css';

const links = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'markets', label: 'Markets' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
];

/**
 * Footer with brand summary, quick navigation, and certifications.
 * @param {{ onNavigate: (key: string) => void }} props
 */
export default function Footer({ onNavigate }) {
  return (
    <footer className={styles.footer}>
      <div className={`section-container ${styles.top}`}>
        <section>
          <h3 className={styles.brand}>TORONTO <span>REDLINE</span> COMMUNICATIONS</h3>
          <p className={styles.tagline}>
            Mission-critical telecom integration engineered for oil, gas, offshore, and industrial energy operations.
          </p>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="TRC on LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </section>

        <section>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.key}>
                <button type="button" onClick={() => onNavigate(link.key)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4>Certifications</h4>
          <ul className={styles.badges}>
            <li>ISO 9001</li>
            <li>IEC 60079</li>
            <li>PMI</li>
            <li>CISSP</li>
          </ul>
        </section>
      </div>

      <div className={styles.bottom}>
        <p>
          © 2025 Toronto Redline Communications Inc. All rights reserved. | Privacy Policy | Terms
        </p>
      </div>
    </footer>
  );
}
