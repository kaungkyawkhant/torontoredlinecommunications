import { Award, Globe, Shield, Users } from 'lucide-react';
import styles from '../styles/About.module.css';

const highlights = [
  { icon: Shield, text: 'IEC 60079 Hazardous Area Certified' },
  { icon: Award, text: 'ISO 9001:2015 Quality Management' },
  { icon: Globe, text: 'Projects in 12+ Countries' },
  { icon: Users, text: '80+ Certified Engineers' },
];

const pillars = [
  {
    title: 'VISION',
    body: "To be Canada's most trusted telecom system integrator for critical energy infrastructure, setting the standard for safety, reliability, and innovation.",
  },
  {
    title: 'MISSION',
    body: 'To engineer and deliver communication systems that protect lives, secure assets, and connect operations in the world\'s most demanding environments.',
  },
  {
    title: 'VALUES',
    body: 'Safety First. Engineering Excellence. Client Partnership. Accountability. Environmental Stewardship.',
  },
];

/**
 * About section with company profile, certifications, and core principles.
 * @param {{ sectionRef: React.RefObject<HTMLElement> }} props
 */
export default function About({ sectionRef }) {
  return (
    <section id="about" ref={sectionRef} className={`${styles.about} deferred-section`}>
      <div className="section-container">
        <div className={styles.topGrid}>
          <div>
            <div className="signal-divider" aria-hidden="true" />
            <h2>WHO WE ARE</h2>
            <p>
              Toronto Redline Communications is a Canadian-owned telecom engineering and systems
              integration firm with over two decades of experience delivering mission-critical
              communication infrastructure to the oil & gas sector. From upstream wellpads to offshore
              platforms and midstream pipeline corridors, we engineer, procure, integrate, and support
              the networks that keep operations safe, connected, and productive.
            </p>
            <p>
              Headquartered in Toronto, Ontario, with field operations across Western Canada and
              international project reach, TRC combines deep domain expertise in industrial telecom with
              the precision engineering discipline demanded by hazardous-area environments.
            </p>
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map(({ icon: Icon, text }) => (
              <article key={text} className={styles.highlightCard}>
                <Icon size={20} />
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <article key={pillar.title} className={styles.pillarCard}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
