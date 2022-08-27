import { MenuHamburguer, Navbar, DarkModeButton } from '../../components';
import { useTheme } from 'next-themes';
import { useBreakpoint } from '../../hooks/tailwind';
import Logo from '../../../public/images/logo.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const { theme } = useTheme();
  const isDesktop = useBreakpoint('lg');
  const [logoColor, setLogoColor] = useState('');

  useEffect(() => {
    if (theme === 'dark') return setLogoColor('#fff');
    return setLogoColor('#121315');
  }, [theme]);

  return (
    <header className="mx-8 md:mx-16 mt-8">
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-center">
            <div className="cursor-pointer mr-16">
              <Link href="/" passHref>
                <Logo fill={`${logoColor}`} />
              </Link>
            </div>
            <Navbar />
          </div>
          <div className="flex">
            <button className="text-base xl:text-xl text-dark dark:text-white font-grotesk rounded-xl border-2 border-dark dark:border-white p-3 lg:mx-5 hover:bg-dark dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5 focus:bg-opacity-20 dark:focus:bg-opacity-20">
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
