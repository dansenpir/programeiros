import styles from './styles.module.css';
import coding from '../../../../../public/images/coding.svg';

export default function Highlight() {
  return (
    <div className={`${styles.container} px-20`}>
      <div className={styles.boxText}>
        <h1 className={styles.title}>
          Programação para todos com café e música.
        </h1>
        <h3 className={styles.subtitle}>
          Traceje rotas de estudo, ache sua vaga e aprenda mais sobre
          programação.
        </h3>
      </div>
      <div className={styles.boxImage}>
        <img src={coding} alt='pessoa programando' />
      </div>
    </div>
  );
}
