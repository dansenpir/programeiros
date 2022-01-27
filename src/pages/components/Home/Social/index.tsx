import styles from './styles.module.css';

export default function Social() {
  return (
    <div className={styles.social}>
      <a
        className={styles.icon}
        href='https://github.com/Programeiros'
        target='_blank'
        rel='noreferrer'>
        <img src='/images/GithubLogo.svg' alt='Logo GitHub' />
      </a>
      <a
        className={styles.icon}
        href='https://t.me/+p8PHV0M348k3NjE5'
        target='_blank'
        rel='noreferrer'>
        <img src='/images/TelegramLogo.svg' alt='Logo GitHub' />
      </a>
      <a
        className={styles.icon}
        href='https://discord.gg/GGjVCppR9a'
        target='_blank'
        rel='noreferrer'>
        <img src='/images/DiscordLogo.svg' alt='Logo GitHub' />
      </a>
    </div>
  );
}
