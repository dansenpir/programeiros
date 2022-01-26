import styles from './styles.module.css';
import telegramLogo from '../../../public/images/telegram_logo.svg';

export default function TelegramButton() {
  return (
    <a href='https://t.me/+p8PHV0M348k3NjE5' target='_blank' rel='noreferrer'>
      <button className={styles.btn}>
        <img src={telegramLogo} alt='Logo do Telegram' />
        <p className={styles.text}>Conheça nosso Telegram</p>
      </button>
    </a>
  );
}
