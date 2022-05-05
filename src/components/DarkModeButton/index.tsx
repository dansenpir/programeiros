import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(<FiSun />);

  useEffect(() => {
    theme === 'light' ? setIcon(<FiMoon />) : setIcon(<FiSun />);
  }, [theme]);

  return (
    <button
      className='rounded-xl border-2 border-dark dark:border-white py-3 px-4 mx-5 lg:mx-0 ml-5 text-dark dark:text-white text-2xl h-13'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {icon}
    </button>
  );
};

export { DarkModeButton };
