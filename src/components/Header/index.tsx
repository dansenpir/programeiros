import { MenuHamburguer, NavLink, DarkModeButton } from '../index';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {
  const { theme } = useTheme();
  const [logo, setLogo] = useState('');

  useEffect(() => {
    theme === 'light'
      ? setLogo('/images/logo_black.svg')
      : setLogo('/images/logo.svg');
  });

  return (
    <header className='px-8 pt-8 w-full'>
      <div className='xl:w-11/12 xl:mx-auto'>
        <div className='container flex justify-between'>
          <div className='flex justify-between w-full '>
            <div className='mt-2'>
              <img
                src={logo}
                alt='logo do Programeiros'
                className='max-w-none'
              />
            </div>
            <NavLink />
            <div className='flex ml-10 xl:w-32 ml-px'>
              <button className='text-base text-dark dark:text-white font-grotesk rounded-xl	border-2 border-dark dark:border-white p-3 xl:h-14'>
                Entrar
              </button>
              <DarkModeButton />
              <MenuHamburguer />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
