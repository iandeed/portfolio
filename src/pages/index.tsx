import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const interestPoints = [
  'Docs-as-code — ensuring content always remains accurate, reliable and up to date.',
  'Information architecture — making it easy for users to find what they need.',
  'Web accessibility — ensuring all users have access to crucial documentation.',
  'Web analytics — identifying content gaps, and finding areas for architectural improvement using metrics.',
  'SEO and AEO — enabling customers to connect to relevant and informative content.',
];

const featureCards = [
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
      description="Ian Deed is a technical writer experienced in software engineering, technical content creation, and customer-facing documentation."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className={styles.eyebrow}>TECHNICAL WRITER</p>
          <Heading as="h1" className={styles.heroTitle}>
            Ian Deed
          </Heading>
          <p className={styles.heroSubtitle}>
            I turn information about complex software and data products into clear,
            usable documentation to enable customers to do more.
          </p>
          <div className={styles.buttons}>
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
                <p>I’m a technical writer with a software development background and over 15 years’ experience in software engineering, data documentation, and technical communications.
                   I turn complex systems into clear and usable documentation that helps customers do more.
                </p>
                <p>
                  By partnering with product, engineering, and support teams I aim to take ownership of the documentation process from requirements gathering through to delivery. 
                  My focus is on creating a clear information architecture with accessible and user-focused plain English content that meets the needs of both technical and non-technical audiences.
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
