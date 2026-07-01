import styles from '../styles/Projects.module.css';

const projects = [
  {
    sector: 'UPSTREAM',
    title: 'Wellpad Telecom Package — Phase 4 Expansion',
    location: 'Montney Basin, BC',
    scope: 'SD-WAN, LTE private, CCTV, PAGA for 12 new wellpads',
    year: '2024',
  },
  {
    sector: 'PIPELINE',
    title: 'SCADA Radio Backbone Upgrade',
    location: 'Alberta Crude Corridor',
    scope: 'P25 trunked radio + microwave replacement, 340 km',
    year: '2023',
  },
  {
    sector: 'OFFSHORE',
    title: 'FPSO Vessel Telecom Refit',
    location: 'East Coast Canada',
    scope: 'IP PABX, GMDSS, VSAT, CCTV, PA system overhaul',
    year: '2023',
  },
  {
    sector: 'LNG',
    title: 'Terminal Communication Infrastructure',
    location: 'Kitimat, BC',
    scope: 'Zone 1 rated fibre, PAGA, IP network, access control',
    year: '2022',
  },
  {
    sector: 'MINING',
    title: 'Pit & Surface Radio Upgrade',
    location: 'Northern Ontario',
    scope: 'DMR Tier 3 trunked radio, repeater network, dispatch',
    year: '2022',
  },
  {
    sector: 'PIPELINE',
    title: 'Remote RTU Connectivity',
    location: 'Saskatchewan',
    scope: 'VSAT + LTE hybrid WAN for 80 remote RTU sites',
    year: '2021',
  },
];

/**
 * Projects section with representative references and project metadata.
 * @param {{ sectionRef: React.RefObject<HTMLElement> }} props
 */
export default function Projects({ sectionRef }) {
  return (
    <section id="projects" ref={sectionRef} className={`${styles.projects} deferred-section`}>
      <div className="section-container">
        <header className={styles.header}>
          <div className="signal-divider" aria-hidden="true" />
          <h2>PROJECT REFERENCES</h2>
          <p>
            A track record built on complex, high-stakes communication projects delivered safely and on
            schedule.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={`${project.title}-${project.year}`} className={styles.card}>
              <span className={styles.sector}>{project.sector}</span>
              <h3>{project.title}</h3>
              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>{project.location}</dd>
                </div>
                <div>
                  <dt>Scope</dt>
                  <dd>{project.scope}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{project.year}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          * Project names are representative. Specific client details subject to confidentiality.
        </p>
      </div>
    </section>
  );
}
