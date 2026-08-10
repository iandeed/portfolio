import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from '@site/src/pages/index.module.css';

type PortfolioPageProps = {
  title: string;
  description: string;
  intro: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function PortfolioPage({
  title,
  description,
  intro,
  eyebrow = 'IAN DEED',
  children,
}: PortfolioPageProps): ReactNode {
  return (
    <Layout title={title} description={description}>
      <main className={styles.page}>
        <div className={clsx('container', styles.pageShell)}>
          <header className={styles.pageHeader}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.pageTitle}>{title}</h1>
            <p className={styles.pageIntro}>{intro}</p>
          </header>
          {children}
        </div>
      </main>
    </Layout>
  );
}
