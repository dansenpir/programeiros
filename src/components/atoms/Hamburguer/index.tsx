import { FiX } from 'react-icons/fi';

interface IHamburger {
  isOpen: boolean;
}

const Hamburguer = ({ isOpen = false }: IHamburger) => (
  <div className="flex justify-center items-center lg:hidden">
    {isOpen ? (
      <div className="flex items-center justify-center w-14 h-14 z-50 cursor-pointer border-2 border-dark dark:border-white rounded-xl hover:bg-dark dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5 focus:bg-opacity-[.15] dark:focus:bg-opacity-[.15]">
        <FiX className="w-7 h-7" />
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center w-14 h-14 z-50 cursor-pointer border-2 border-dark dark:border-white rounded-xl hover:bg-dark dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5 focus:bg-opacity-[.15] dark:focus:bg-opacity-[.15]">
        <div className="bg-dark dark:bg-white w-5 h-0.5" />
        <div className="bg-dark dark:bg-white w-5 h-0.5 my-1.5" />
        <div className="bg-dark dark:bg-white w-5 h-0.5" />
      </div>
    )}
  </div>
);

export { Hamburguer };
