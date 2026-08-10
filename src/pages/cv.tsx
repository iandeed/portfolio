import type {ReactNode} from 'react';
import PortfolioPage from '@site/src/components/PortfolioPage';
import styles from './index.module.css';

const experience = [
  {
    company: 'Ordnance Survey',
    location: 'Edinburgh',
    role: 'Technical Writer',
    dates: 'April 2024 – Present',
    points: [
      'Create content-led documentation for geospatial data products and software solutions, working closely with subject matter experts and product teams.',
      'Build and maintain product guides, release notes, customer communications and reference material.',
      'Implement docs-as-code workflows using GitHub automation, link checks and markdown linting to improve quality and reliability.',
      'Support accessibility improvements aligned to WCAG 2.2 AA expectations.',
    ],
  },
  {
    company: 'Freelance',
    location: 'Edinburgh',
    role: 'Technical Writer',
    dates: 'September 2018 – Present',
    points: [
      'Create, design and maintain documentation for clients across the software and technology sectors.',
      'Delivered documentation for Veracity, Seven Technologies, Swarm Online and Crowdstrike on projects spanning developer tools, mobile apps, industrial controls and cybersecurity APIs.',
      'Helped teams communicate complex technical topics with clarity for both technical and non-technical audiences.',
    ],
  },
  {
    company: 'Veracity',
    location: 'Prestwick, Glasgow',
    role: 'Software Engineer / Technical Documentation',
    dates: 'September 2016 – October 2018',
    points: [
      'Built internal diagnostic and mobile application tools for monitoring, diagnostics and repair workflows.',
      'Overhauled existing documentation to reflect changes in technology and implementation.',
      'Gained early experience in technical communication while working in a software engineering environment.',
    ],
  },
  {
    company: 'Bitwise',
    location: 'Dunfermline, Fife',
    role: 'Software Engineer',
    dates: 'July 2015 – August 2016',
    points: [
      'Brought mobile application development experience to an organisation focused on safety-critical embedded systems.',
      'Took on project management and technical leadership responsibilities as the only full-time engineer on mobile development work.',
    ],
  },
  {
    company: 'HMD Clinical',
    location: 'Edinburgh',
    role: 'Junior Test Engineer',
    dates: 'March 2013 – June 2015 (P/T & F/T)',
    points: [
      'Wrote manual and automated tests for systems used in clinical trials.',
      'Developed practical experience working closely with clients to shape requirements and improve business practices.',
    ],
  },
];

const strengths = [
  'Effective technical communicator who can translate complex ideas into clear language.',
  'Strong attention to detail and a high standard of quality in documentation and process.',
  'Creative problem solver, with a track record of improving the quality and consistency of content.',
  'Collaborative team player with a personable, professional working style.',
];

const skills = [
  'Soft skills: time management, accountability, collaboration and creativity',
  'Writing: product documentation, blog posts, internal communications and promotional content',
  'Languages and technologies: Java, Kotlin, Objective-C, Python, JavaScript, Markdown, Jira, Docker, Git, GitBook',
  'Methodologies: Agile and Scrum',
];

export default function CVPage(): ReactNode {
  return (
    <PortfolioPage
      title="Curriculum vitae"
      description="Ian Deed's CV, covering technical writing experience, software engineering background and key strengths."
      intro="A concise overview of my professional background, experience and core technical writing skills."
    >
      <section className={styles.contentSection}>
        <div className={styles.infoCard}>
          <h2 className={styles.sectionTitle}>Profile</h2>
          <p>
            Technical writer with a rich background in software engineering and more
            than 15 years’ experience working with technology, data and technical
            communications. I specialise in creating customer-centric documentation
            that turns complex topics into clear, concise and usable content for both
            technical and non-technical audiences.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className="row">
          {experience.map((item) => (
            <div className="col col--6" key={item.company}>
              <div className={styles.infoCard}>
                <h3>{item.company}</h3>
                <p className={styles.cardMeta}>{item.role}</p>
                <p className={styles.cardMeta}>{item.location}</p>
                <p className={styles.cardMeta}>{item.dates}</p>
                <ul className={styles.sectionList}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="row">
          <div className="col col--6">
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>Strengths</h2>
              <ul className={styles.sectionList}>
                {strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <ul className={styles.sectionList}>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.infoCard}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <h3>Heriot-Watt University</h3>
          <p className={styles.cardMeta}>BSc in Computer Science — First Class Honours</p>
          <p className={styles.cardMeta}>September 2011 – June 2015</p>
          <p>
            My studies helped me build the software engineering skillset that later
            shaped my understanding of technical subjects and informed my approach to
            technical documentation.
          </p>
        </div>
      </section>
    </PortfolioPage>
  );
}
