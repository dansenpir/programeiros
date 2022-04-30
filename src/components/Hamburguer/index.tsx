import styles from './styles.module.css';

interface HamburProps {
  isOpen: boolean;
}

const Hamburguer = ({ isOpen = false }: HamburProps) => {
  return (
    <div className='flex justify-center items-center border-2 border-dark dark:border-white w-14 rounded-xl xl:hidden'>
      <div
        className={`${styles.hamburguer} relative ${
          isOpen && styles['close-hamburguer']
        }`}>
        <div
          className={`bg-dark dark:bg-white ${styles.lines} ${
            isOpen && styles['line-top']
          }`}></div>
        <div
          className={`my-1.5 bg-dark dark:bg-white ${styles.lines} ${
            isOpen && styles['line-mid']
          }`}></div>
        <div
          className={`bg-dark dark:bg-white ${styles.lines} ${
            isOpen && styles['line-bottom']
          }`}></div>
      </div>
    </div>
  );
};

export { Hamburguer };
