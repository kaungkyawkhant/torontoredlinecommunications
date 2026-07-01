import styles from '../styles/Solutions.module.css';

const solutions = [
  {
    badge: 'IP NETWORKS',
    title: 'IP-Based Network Infrastructure',
    tech: ['Industrial Ethernet', 'SD-WAN', 'MPLS', 'Layer 2/3 switching', 'Fibre backbone'],
  },
  {
    badge: 'WIRELESS',
    title: 'Radio Communication Systems',
    tech: ['VHF/UHF DMR', 'P25', 'LTE/4G private', 'Microwave point-to-point', 'Trunked radio'],
  },
  {
    badge: 'SATELLITE',
    title: 'VSAT & Satellite Comms',
    tech: ['C/Ku/Ka-band VSAT', 'Starlink Enterprise', 'BGAN', 'Hybrid WAN failover'],
  },
  {
    badge: 'SAFETY',
    title: 'PAGA & Emergency Comms',
    tech: ['Public Address & General Alarm', 'Talk-back', 'Zone control', 'IEC 61892'],
  },
  {
    badge: 'SECURITY',
    title: 'Physical Security Systems',
    tech: ['IP CCTV', 'Explosion-proof cameras', 'Access control', 'Perimeter detection'],
  },
  {
    badge: 'SCADA',
    title: 'SCADA Communication Networks',
    tech: ['Serial/IP SCADA radio', 'DNP3', 'Modbus TCP', 'RTU telemetry', 'OPC-UA'],
  },
  {
    badge: 'CABLING',
    title: 'Structured Cabling & Fibre',
    tech: ['Ex-rated fibre', 'Armoured cabling', 'Cable tray design', 'Zone-distribution frames'],
  },
  {
    badge: 'CYBER',
    title: 'Cybersecurity & Network Monitoring',
    tech: ['Industrial firewall', 'Purdue model zoning', 'SIEM/SOC', 'IEC 62443'],
  },
  {
    badge: 'VOIP',
    title: 'VoIP & UC Systems',
    tech: ['IP PABX', 'Teams/Cisco integration', 'Intrinsically safe handsets', 'Paging'],
  },
];

/**
 * Solutions section presenting key telecom technology domains.
 * @param {{ sectionRef: React.RefObject<HTMLElement> }} props
 */
export default function Solutions({ sectionRef }) {
  return (
    <section id="solutions" ref={sectionRef} className={`${styles.solutions} deferred-section`}>
      <div className="section-container">
        <header className={styles.header}>
          <div className="signal-divider" aria-hidden="true" />
          <h2>TECHNICAL SOLUTIONS</h2>
          <p>
            Vendor-independent solutions engineered to international standards for hazardous and
            mission-critical environments.
          </p>
        </header>

        <div className={styles.layout}>
          <aside className={styles.stickyLabel}>ENGINEERING STACK</aside>
          <div className={styles.grid}>
            {solutions.map((item) => (
              <article key={item.title} className={styles.card}>
                <span className={styles.badge}>{item.badge}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
