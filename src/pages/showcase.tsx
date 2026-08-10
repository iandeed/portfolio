import type {ReactNode} from 'react';
import PortfolioPage from '@site/src/components/PortfolioPage';
import styles from './index.module.css';

const projects = [
  {
    title: 'Ordnance Survey product documentation',
    summary:
      'Created documentation for geospatial data products and software solutions with a strong focus on customer clarity and accessibility.',
    details: [
      'Built content-led documentation for new products and services.',
      'Improved release notes, product guides and customer communications.',
    ],
    link: 'https://www.linkedin.com/in/ian-deed/',
    linkLabel: 'View LinkedIn profile',
  },
  {
    title: 'Veracity documentation',
    summary:
      'Shaped user guidance and testing documentation for software and technology projects by translating detailed technical topics into user-focused content.',
    details: [
      'Helped the team communicate complex tools in a concise, accurate way.',
      'Balanced engineering detail with a usable end-user perspective.',
    ],
    link: 'https://www.linkedin.com/in/ian-deed/',
    linkLabel: 'See more on LinkedIn',
  },
  {
    title: 'Seven Technologies apps',
    summary:
      'Documented native mobile applications for local mapping and resource tracking across Android and iOS.',
    details: [
      'Wrote content for complex device communication and networking workflows.',
      'Addressed the challenge of explaining two very different native experiences clearly.',
    ],
    link: 'https://www.linkedin.com/in/ian-deed/',
    linkLabel: 'Explore my background',
  },
  {
    title: 'Swarm Online manufacturing controls',
    summary:
      'Delivered documentation for a kiosk-based Android application used to control manufacturing equipment locally or centrally.',
    details: [
      'Supported implementation across a long development cycle with clear product guidance.',
      'Turned a technical system into understandable user documentation.',
    ],
    link: 'https://www.linkedin.com/in/ian-deed/',
    linkLabel: 'Connect with me',
  },
];

export default function ShowcasePage(): ReactNode {
  return (
    <PortfolioPage
      title="Showcase"
      description="Selected technical writing and documentation projects from Ian Deed's portfolio."
      intro="A snapshot of recent projects and documentation work, with placeholder details for case studies that will be expanded over time."
    >
      <section className={styles.contentSection}>
        <div className="row">
          {projects.map((project) => (
            <div className="col col--6" key={project.title}>
              <div className={styles.projectCard}>
                <div className={styles.projectScreenshot}>
                  <span>Screenshot placeholder</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className={styles.sectionList}>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <a className={styles.linkButton} href={project.link}>
                  {project.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PortfolioPage>
  );
}
