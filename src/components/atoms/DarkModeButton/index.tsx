import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(<FiSun />);

  useEffect(() => {
    if (theme === 'light') {
      return setIcon(<FiMoon />);
    }

    return setIcon(<FiSun />);
  }, [theme]);

  return (
    <button
      className="rounded-xl border-2 border-dark dark:border-white py-3 px-4 mx-5 lg:mx-0 ml-5 text-dark dark:text-white text-2xl hover:bg-dark dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5 focus:bg-opacity-20 dark:focus:bg-opacity-20"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {icon}
    </button>
  );
};

export { DarkModeButton };
