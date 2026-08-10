import type {ReactNode} from 'react';
import PortfolioPage from '@site/src/components/PortfolioPage';
import styles from './index.module.css';

export default function ContactPage(): ReactNode {
  return (
    <PortfolioPage
      title="Contact"
      description="Get in touch with me via email, LinkedIn or by visiting the contact details below."
      intro="I’m based in Edinburgh and currently interested in technical writing roles that value clear communication, strong collaboration and practical product understanding."
    >
      <section className={styles.contentSection}>
        <div className="row">
          <div className="col col--6">
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>Get in touch</h2>
              <p>
                I’m always happy to discuss documentation projects, freelance work or
                full-time opportunities.
              </p>
              <ul className={styles.sectionList}>
                <li>
                  Email:{' '}
                  <a href="mailto:i.deed9@gmail.com">i.deed9@gmail.com</a>
                </li>
                <li>
                  LinkedIn:{' '}
                  <a href="https://www.linkedin.com/in/ian-deed/" target="_blank" rel="noreferrer">
                    linkedin.com/in/ian-deed
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>What I’m looking for</h2>
              <p>
                I’m particularly interested in opportunities where strong documentation
                helps customers, engineers and product teams work more effectively.
              </p>
              <p>
                If you need help shaping documentation for a product, service or platform,
                I’d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PortfolioPage>
  );
}
