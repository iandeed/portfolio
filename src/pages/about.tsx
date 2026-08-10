import type {ReactNode} from 'react';
import PortfolioPage from '@site/src/components/PortfolioPage';
import styles from './index.module.css';

const interests = [
  'Software engineering and developer-focused documentation',
  'Data products, geospatial platforms and complex technical workflows',
  'Docs-as-code, accessibility and information architecture',
  'Customer-facing content for technical and non-technical audiences',
];

export default function AboutPage(): ReactNode {
  return (
    <PortfolioPage
      title="About me"
      description="About Ian Deed, a technical writer with experience in software engineering, data products and customer-centric documentation."
      intro="I help teams make complex products understandable through clear documentation, practical workflows and thoughtful information design."
    >
      <section className={styles.contentSection}>
        <div className="row">
          <div className="col col--7">
            <h2 className={styles.sectionTitle}>Intro</h2>
            <p>
              I’m Ian Deed, a technical writer with a strong background in software
              engineering and a combined 15+ years’ experience working at the
              intersection of technology, data and communications.
            </p>
            <p>
              My work focuses on making complex products approachable for both
              technical and non-technical audiences. I often work closely with
              subject matter experts to understand the product deeply and then turn
              that knowledge into documentation that is concise, accurate and useful.
            </p>
          </div>
          <div className="col col--5">
            <div className={styles.infoCard}>
              <h3>Areas of interest</h3>
              <ul className={styles.sectionList}>
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.infoCard}>
          <h2 className={styles.sectionTitle}>A bit about my approach</h2>
          <p>
            I bring a practical, customer-first mindset to documentation. That means
            shaping content around user needs, improving information architecture and
            implementing robust processes that make documentation easier to maintain.
          </p>
          <p>
            In recent roles, I have built docs-as-code workflows with GitHub and
            automation, improved accessibility to WCAG 2.2 AA expectations and made
            documentation more reliable through systematic review and quality checks.
          </p>
        </div>
      </section>
    </PortfolioPage>
  );
}
