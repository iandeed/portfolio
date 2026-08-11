import type {ReactNode} from 'react';
import PortfolioPage from '@site/src/components/PortfolioPage';
import styles from './index.module.css';
import downloadsScreenshot from '../assets/downloadsScreenshot.png';

const projects = [
  {
    title: 'Ordnance Survey product documentation',
    summary:
      'Designed and implemented a web-based platform to replace existing PDF documentation for 45 Ordnance Survey downloadable data products. This project was essential to enabling the future growth of the organisation’s documentation by enabling detailed analytics and user insights to be collected on how users access, read, and interact with product documentation.',
    details: [
      'Migrated product documentation from a legacy PDF-based documentation to a web-based platform.',
      'Created a new information architecture to improve discoverability of product documentation.',
      'Developed processes and tools to gather and act on user inights enabled by mving documentation to the new platform.',
      'Improved the processses for creating release notes, product guides and customer communications.',
      'Decreased time required to update existing documentation from days down to minutes through better tooling and processes.',
      'Enabled broader ownership of product documentation by creating a platform that provided product teams with the ability to update and maintain documentation in collaboration with the technical writers.',
    ],
    link: 'https://docs.os.uk/os-downloads',
    linkLabel: 'View Docs.os.uk/os-downloads',
  },
];

export default function ShowcasePage(): ReactNode {
  return (
    <PortfolioPage
      title="Showcase"
      description="Selected technical writing and documentation projects from Ian Deed's portfolio."
      intro="A snapshot of recent interesting projects and documentation work."
    >
      <section className={styles.contentSection}>
        <div className="row">
          {projects.map((project) => (
            <div className="col col--6" key={project.title}>
              <div className={styles.projectCard}>
                <div className={styles.projectScreenshot}>
                  <img
                    src={downloadsScreenshot}
                    alt={`Screenshot showing the Ordnance Survey downloads documentation site homepage with navigation menu, product list, and search bar; headline text reads OS Downloads; tone professional and informative.`}
                  />
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
