import {
  ClipboardList,
  HeadphonesIcon,
  Network,
  PackageSearch,
  Ruler,
  Satellite,
  Wrench,
} from 'lucide-react';
import styles from '../styles/Services.module.css';

const services = [
  {
    icon: Ruler,
    title: 'Detailed Engineering Design',
    description:
      'FEED, BASIC, and DETAIL engineering for telecom and communications systems. IEC, API, and client-standard compliant documentation packages.',
  },
  {
    icon: Network,
    title: 'Systems Integration',
    description:
      'End-to-end integration of multi-vendor telecom platforms: IP networks, radio, PAGA, SCADA comms, CCTV, and access control into unified, tested systems.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description:
      'PMI-certified project managers delivering on-time, on-budget execution with rigorous change management, schedule control, and risk mitigation.',
  },
  {
    icon: PackageSearch,
    title: 'Procurement & Vendor Management',
    description:
      'Vendor-independent procurement of certified, hazardous-area qualified equipment from tier-1 global suppliers with full factory acceptance testing.',
  },
  {
    icon: Wrench,
    title: 'Site Installation & Commissioning',
    description:
      'Field engineering crews trained for offshore, wellpad, and pipeline environments. CSTS, H2S Alive, and confined-space certified. Full SAT/FAT support.',
  },
  {
    icon: Satellite,
    title: 'Satellite & Remote Connectivity',
    description:
      'VSAT, LEO satellite (Starlink/OneWeb), and hybrid WAN solutions for remote wellpads, drill sites, and offshore vessels with carrier-agnostic design.',
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support & O&M',
    description:
      '24/7 remote NOC monitoring, preventative maintenance schedules, spare-parts management, and on-call field service across Western Canada.',
  },
];

/**
 * Services section describing TRC lifecycle delivery capabilities.
 * @param {{ sectionRef: React.RefObject<HTMLElement> }} props
 */
export default function Services({ sectionRef }) {
  return (
    <section id="services" ref={sectionRef} className={`${styles.services} deferred-section`}>
      <div className="section-container">
        <header className={styles.header}>
          <div className="signal-divider" aria-hidden="true" />
          <h2>OUR SERVICES</h2>
          <p>
            From concept to commissioning — we deliver the full engineering lifecycle for telecom and
            communications infrastructure in critical environments.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className={styles.card}>
                <Icon size={22} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
