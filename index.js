// pages/index.js

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'; // import CSS module for styling

export default function Home() {
  return (
    <Layout>
      <header className={styles.header}>
        <h1>Faisal Akhmad</h1>
        <p className={styles.profession}>UI/UX Designer</p>
        <p className={styles.contact}>📧 faisal.akhmad404@gmail.com | 📍 Jakarta, Indonesia</p>
      </header>

      <section className={styles.summary}>
        <h2>Professional Summary</h2>
        <p>
          Creative and user-focused UI/UX Designer with 6+ years of experience crafting intuitive and engaging
          digital products. Adept at collaborating with cross-functional teams to deliver seamless user
          experiences that align with business goals.
        </p>
      </section>

      <section className={styles.experience}>
        <h2>Professional Experience</h2>
        <div className={styles.job}>
          <h3>UI/UX Designer | Indosat Ooredoo Hutchison</h3>
          <p>Feb 2023 – Present</p>
          <ul>
            <li>Conduct user research and create wireframes, prototypes, and high-fidelity UI.</li>
            <li>Lead design of the &#39;Ide App&#39; for SME digital engagement.</li>
            <li>Perform usability testing and iterate based on feedback.</li>
          </ul>
        </div>
        {/* Add more job sections here */}
      </section>

      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          <li>Design Tools: Figma, Adobe Illustrator, Photoshop</li>
          <li>Prototyping & Research: UX Research, Wireframing, Usability Testing</li>
          <li>Languages: Indonesian (native), English (professional proficiency)</li>
        </ul>
      </section>

      <section className={styles.education}>
        <h2>Education</h2>
        <p>B.Sc. in Computer Science (Multimedia Focus) – Binus University</p>
        <p>Graduated: June 2019</p>
      </section>
    </Layout>
  );
}
