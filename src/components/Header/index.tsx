import { MenuHamburguer, Navbar, DarkModeButton } from '../index';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useBreakpoint } from '../../hooks/tailwind';

const Header = () => {
  const { theme } = useTheme();
  const [logo, setLogo] = useState('/images/logo_black.svg');
  const isDesktop = useBreakpoint('lg');

  useEffect(() => {
    theme === 'light'
      ? setLogo('/images/logo_black.svg')
      : setLogo('/images/logo.svg');
  });

  return (
    <header className='mx-8 md:mx-16 mt-8'>
      <div className='flex justify-between'>
        <div className='flex justify-between w-full'>
          <div className='flex items-center justify-center'>
            <div className='cursor-pointer mr-16'>
              <img src={logo} alt='logo Programeiros' />
            </div>
            <Navbar />
          </div>
          <div className='flex'>
            <button className='text-base xl:text-xl text-dark dark:text-white font-grotesk rounded-xl border-2 border-dark dark:border-white p-3 lg:mx-5 xl:h-13'>
              Entrar
            </button>
            <DarkModeButton />
            {isDesktop ? null : <MenuHamburguer />}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
