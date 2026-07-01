import { Anchor, Drill, Flame, GitBranch, HardHat } from 'lucide-react';
import styles from '../styles/Markets.module.css';

const markets = [
  {
    icon: Drill,
    name: 'Upstream Oil & Gas',
    description:
      'Wellpad, drill site, and production facility communications across Alberta, BC, and Saskatchewan.',
  },
  {
    icon: GitBranch,
    name: 'Midstream & Pipeline',
    description: 'SCADA radio, RTU telemetry, and microwave backbone for pipeline corridor communications.',
  },
  {
    icon: Anchor,
    name: 'Offshore & Marine',
    description:
      'FPSO, drillship, jack-up, and offshore platform telecom integration with GMDSS-compliant systems.',
  },
  {
    icon: Flame,
    name: 'LNG & Petrochemical',
    description:
      'Zone 1/2 rated systems for gas plants, liquefaction facilities, and processing terminals.',
  },
  {
    icon: HardHat,
    name: 'Mining & Resources',
    description:
      "Pit, underground, and surface communications for Canada's resource extraction sector.",
  },
];

/**
 * Markets section showing industries served by TRC.
 * @param {{ sectionRef: React.RefObject<HTMLElement> }} props
 */
export default function Markets({ sectionRef }) {
  return (
    <section id="markets" ref={sectionRef} className={`${styles.markets} deferred-section`}>
      <div className="section-container">
        <div className={styles.layout}>
          <header className={styles.header}>
            <div className="signal-divider" aria-hidden="true" />
            <h2>MARKETS WE SERVE</h2>
            <p>
              Decades of domain expertise across Canada's energy sector and global markets.
            </p>
          </header>

          <div className={styles.grid}>
            {markets.map((market, idx) => {
              const Icon = market.icon;
              return (
                <article key={market.name} className={styles.card}>
                  <span className={styles.bgNum}>{String(idx + 1).padStart(2, '0')}</span>
                  <Icon size={22} />
                  <h3>{market.name}</h3>
                  <p>{market.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
