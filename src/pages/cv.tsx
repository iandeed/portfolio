import type {ReactNode} from 'react';
import PortfolioPage from '@site/src/components/PortfolioPage';
import styles from './index.module.css';

const experience = [
  {
    company: 'Ordnance Survey',
    location: 'Edinburgh',
    role: 'Technical Writer',
    dates: 'April 2024 – Present',
    blurb: 'I work as part of a small team of technical writers to create and maintain documentation for Ordnance Survey’s broad array of geospatial data products. This role has been intensly rewarding as it has introduced me to working with geospatial data. Within this role I have had the opportunity to develop a new technical writing platform to serve documentation for more than 50 distinct data products. ',
    points: [
      'Implemented a new documentation platform to serve documentation for more than 50 geospatial data products',
      'Worked closely with subject matter experts across product and data teams to update existing documentation and create new content for upcoming products.',
      'Worked with product teams to create release notes, customer communications and reference material to support product releases.',
      'Implemented docs-as-code workflows using GitHub automation, Vale and markdown linting tools to improve documentation quality and reliability.',
      'Implemented tools and processes to enable direct user feedback on documentation, allowing for continuous improvement of content and structure.',
      'Supported accessibility improvements and content auditing to align documentation with WCAG 2.2 AA requirements.',
    ],
  },
  {
    company: 'Freelance',
    location: 'Edinburgh',
    role: 'Technical Writer',
    dates: 'September 2018 – March 2024',
    blurb: 'In this role I was able to design, create, and maintain documentation for a diverse array of clients worldwide in the software and technology industry. I had the opportunity to work on projects spanning developer tools, mobile apps, industrial controls and cybersecurity APIs.',
    points: [
      'Built documentation and tools to support develoment teams in reaching an audience with high-quality content that can inform, engage, and educate.',
      'Delivered documentation for clients in a wide range of technology-focused domains by quickly and efficiently learning their products and technologies.',
      'Worked with subject matter experts to understand customer pain points and create documentation to address them.',
      'Helped teams communicate complex technical topics with clarity for both technical and non-technical audiences.',
    ],
  },
  {
    company: 'Veracity',
    location: 'Prestwick, Glasgow',
    role: 'Software Engineer / Technical Documentation',
    dates: 'September 2016 – October 2018',
    blurb: 'I worked as a software engineer and took on the role of technical writer within the team to create documentation that would support the adoption and use of the product.',
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
    blurb: 'I worked as a software engineer, gaining experience in developing and maintaining applications for embedded systems.',
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
    blurb: 'I worked as a junior test engineer, gaining experience in writing and executing tests for systems used in clinical trials.',
    points: [
      'Wrote manual and automated tests for systems used in clinical trials.',
      'Developed practical experience working closely with clients to shape requirements and improve business practices.',
    ],
  },
];

const docs = [
  'Markdown',
  'GitBook',
  'Docusaurus',
  'Confluence',
  'GitHub',
  'Inkscape',
  'OBS Studio',
  'Obsidian',
  'Vale',
  'Markdownlint',
];

const dev = [
  'Kotlin / Java',
  'Python',
  'Objective-C',
  'JavaScript',
  'Docker',
  'Linux',
  'Android and iOS',
];

export default function CVPage(): ReactNode {
  return (
    <PortfolioPage
      title="CV"
      description="Ian Deed's CV, covering technical writing experience, software engineering background and key strengths."
      intro="An overview of my professional background, experience and technical writing skills."
    >
      <section className={styles.contentSection}>
        <div className={styles.infoCard}>
          <h2 className={styles.sectionTitle}>Profile</h2>
                <p>I'm a technical writer who has been able to take advantage of experience and expertise gained in developing software applications to help organisations better communicate complex technical topics clearly to their audience.
                  Much of my work today focuses on convincing stakeholders that quality documentation is as valuable to customers as the underlying product, particularly in the early stages of evaluation, adoption and onboarding.
                </p>
                <p>To create high-quality product documentation, I work closely with subject matter experts to create content and guides that deliver proven outcomes, such as: faster onboarding, fewer support tickets and increased adoption.
                  To achieve these goals, I focus on practical content structure, plain-language writing, and constant itteration based on user feedback and analytics.
                </p>
          <h3 className={styles.sectionTitle}>Key strengths</h3>
            <ul className={styles.sectionList}>
              <li>Technical fluency — I am comfortable working directly with an unfamiliar codebase, learning new technologies, and understanding complex systems to create new documentation.</li>
              <li>Outcome driven — I prioritise measuring results through analytics and user insights to create proven documentation that works.</li>
              <li>User focused — my goal is to keep the end user in mind when designing or updating documentation. In practice, this means creating content that is broadly accessible, well-written, and meets specific goals.</li>
              <li>Docs-as-code — I am passionate about using softwaredevelopment processes and tools to enhance the creation, testing, and maintenance of documentation.</li>
              <li>Collaborative — I work effectively with cross-functional teams to ensure documentation communicates the necessary technical detail while aligning with broader business objectives and user needs.</li>
            </ul>
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
                <p className={styles.cardBlurb}>{item.blurb}</p>
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
        <div className={styles.infoCard}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <h3>Heriot-Watt University</h3>
          <p className={styles.cardMeta}>BSc in Computer Science — First Class Honours</p>
          <p className={styles.cardMeta}>September 2011 – June 2015</p>
          <p>During my time at university, I developed the software engineering skillset that has helped to shape my ability to learn and apply knowledge of technical subjects since. I highly appreciated the opportunity to learn a broad range of languages, tools, and paradigms in a relatively short period of time. The skills I gained in being able to learn and apply new technologies have been fundimental to my career as a technical writer.
          </p>
          <p>For my final year dissertation, I designed and built an Android platform to use peer-to-peer networking to distribute computation effort between connected mobile devices. The system discovered peers over Wi-Fi, split computation into packaged tasks, and shared them with unused nodes available on the network. I was able to demonstrate a working proof-of-concept that used ten networked devices to perform a parallelised computation task with a continuous increase in performance for every device added to the network. 
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
      <h2 className={styles.sectionTitle}>Technologies and tools</h2>
        <div className="row">
          <div className="col col--6">
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>Documentation and publishing</h2>
              <ul className={styles.sectionList}>
                {docs.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>Development</h2>
              <ul className={styles.sectionList}>
                {dev.map((devs) => (
                  <li key={devs}>{devs}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PortfolioPage>
  );
}
