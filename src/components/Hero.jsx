import { ChevronDown } from 'lucide-react';
import styles from '../styles/Hero.module.css';

/**
 * Hero section introducing TRC capabilities and key metrics.
 * @param {{ sectionRef: React.RefObject<HTMLElement>, onNavigate: (key: string) => void }} props
 */
export default function Hero({ sectionRef, onNavigate }) {
  return (
    <section id="home" ref={sectionRef} className={styles.hero} aria-label="Hero section">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`${styles.content} section-container`}>
        <p className={styles.eyebrow}>MISSION-CRITICAL COMMUNICATIONS</p>
        <h1 className={styles.title}>
          ENGINEERED FOR
          <span className={styles.emphasis}>THE EDGE OF ENERGY</span>
        </h1>
        <p className={styles.subtitle}>
          Toronto Redline Communications delivers end-to-end telecom systems integration for oil & gas,
          offshore, and pipeline operations across Canada and globally. Built for reliability where
          failure is not an option.
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.primaryBtn} onClick={() => onNavigate('services')}>
            Explore Our Services →
          </button>
          <button type="button" className={styles.secondaryBtn} onClick={() => onNavigate('projects')}>
            View Projects
          </button>
        </div>

        <div className={styles.stats}>
          <div>
            <strong>25+</strong>
            <span>Years Experience</span>
          </div>
          <span className={styles.sep} aria-hidden="true">|</span>
          <div>
            <strong>150+</strong>
            <span>Projects Delivered</span>
          </div>
          <span className={styles.sep} aria-hidden="true">|</span>
          <div>
            <strong>12</strong>
            <span>Countries Served</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={styles.scrollHint}
        onClick={() => onNavigate('about')}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
