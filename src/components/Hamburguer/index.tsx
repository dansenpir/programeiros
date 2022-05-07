import styles from './styles.module.css';

interface HamburProps {
  isOpen: boolean;
}

const Hamburguer = ({ isOpen = false }: HamburProps) => {
  return (
    <div className='flex justify-center items-center border-2 border-dark dark:border-white w-14 rounded-xl xl:hidden'>
      <div
        className={`transition-all duration-300 ease-in w-6 h-4 my-4 z-50 cursor-pointer transform ${
          isOpen && 'rotate-90'
        }`}>
        <div className='bg-dark dark:bg-white w-full h-0.5'></div>
        <div className='bg-dark dark:bg-white my-1.5 w-full h-0.5'></div>
        <div className='bg-dark dark:bg-white w-full h-0.5'></div>
      </div>
    </div>
  );
};

export { Hamburguer };
