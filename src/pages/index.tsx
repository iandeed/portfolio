import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const interestPoints = [
  'Software engineering and developer-facing documentation',
  'Data products, geospatial platforms and technical workflows',
  'Docs-as-code, accessibility and information architecture',
  'Customer-facing content for technical and non-technical audiences',
];

const featureCards = [
  {
    title: 'About me',
    description: 'Learn more about my background, experience and approach to technical writing.',
    to: '/about',
  },
  {
    title: 'CV',
    description: 'View my professional experience, education and skills.',
    to: '/cv',
  },
  {
    title: 'Showcase',
    description: 'Browse a selection of my work, including technical documentation and tech-focused blog posts.',
    to: '/showcase',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Ian Deed is a technical writer experienced in software engineering, data products and customer-facing documentation."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className={styles.eyebrow}>TECHNICAL WRITER</p>
          <Heading as="h1" className={styles.heroTitle}>
            Ian Deed
          </Heading>
          <p className={styles.heroSubtitle}>
            I turn information about complex software and data products into clear,
            usable documentation and content to enable customers to do more.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/about">
              About me
            </Link>
            <Link className={clsx('button button--secondary button--lg', styles.secondaryButton)} to="/cv">
              View CV
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.contentSection}>
          <div className="container">
            <div className="row">
              <div className="col col--7">
                <h2 className={styles.sectionTitle}>Who I am</h2>
                <p>
                  I’m a technical writer with a rich background in software engineering
                  and more than 15 years of experience working with technology, data and
                  technical communications.
                </p>
                <p>
                  I create customer-focused documentation that makes complex topics easier
                  to understand. Whether this lives in technical specifications, user guides, or online blogs, I focus on clarity, usability and accessibility to help customers get the most out of the products they use.
                </p>
              </div>
              <div className="col col--5">
                <div className={styles.infoCard}>
                  <h3>Areas of interest</h3>
                  <ul className={styles.sectionList}>
                    {interestPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <div className="row">
              {featureCards.map((card) => (
                <div className="col col--4" key={card.title}>
                  <div className={styles.infoCard}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Link to={card.to}>Open page →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
