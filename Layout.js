// components/Layout.js
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>My Portfolio</h2>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Faisal Akhmad</p>
      </footer>
    </div>
  );
}
