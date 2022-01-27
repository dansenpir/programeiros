import styles from './styles.module.css';
import TelegramButton from '../../../../components/TelegramButton';

export default function Highlight() {
  return (
    <div className={`px-10 xl:px-24 ${styles.container}`}>
      <div>
        <h1 className={styles.title}>
          Programação para todos com café e música.
        </h1>
        <h3 className={styles.subtitle}>
          Traceje rotas de estudo, ache uma vaga e descubra mais sobre
          programação.
        </h3>
        <div className={styles.telegramButton}>
          <TelegramButton />
        </div>
      </div>
      <div>
        <img src='/images/coding.svg' alt='pessoa programando' />
      </div>
    </div>
  );
}
