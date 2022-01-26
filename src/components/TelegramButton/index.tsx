import styles from './styles.module.css';

export default function TelegramButton() {
  return (
    <a href='https://t.me/+p8PHV0M348k3NjE5' target='_blank' rel='noreferrer'>
      <button className={styles.btn}>
        <img src='/images/telegram_logo.svg' alt='Logo do Telegram' />
        <p className={styles.text}>Conheça nosso Telegram</p>
      </button>
    </a>
  );
}
