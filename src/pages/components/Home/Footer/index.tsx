import Social from '../Social';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.bgBlack}>
        <div className={`px-24 ${styles.footerSocial}`}>
          <img src='/images/p_logo_blue_white.svg' alt='Logo Programeiros' />
          <Social />
        </div>
      </div>
      <div className={styles.bgBlue}>
        <div className={`px-24 ${styles.footerCopyright}`}>
          <div className={styles.footerInfo}>
            <p>Termos</p>
            <p className={styles.footerInfoItem}>Privacidade</p>
            <p>Contato</p>
          </div>
          <div>
            <p>© {new Date().getFullYear()} Programeiros</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
