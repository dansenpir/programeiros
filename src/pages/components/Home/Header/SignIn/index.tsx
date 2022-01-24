import { useBreakpoint } from '../../../../../hooks/tailwind';
import { Hamburguer } from '../../../../../components/Icons/Hamburguer';

import NavMobile from '../NavMobile';
import { useState } from 'react';

export default function SignIn() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isDesktop = useBreakpoint('sm');

  return (
    <>
      {isDesktop ? (
        <button className='hidden p-3 px-6 text-white border border-btn-border rounded-xl font-grotesk hover:bg-btn-border hover:text-white sm:inline text-btn-border'>
          Entrar
        </button>
      ) : (
        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <Hamburguer isOpen={isOpenMenu} />
        </button>
      )}

      {isOpenMenu && <NavMobile />}
    </>
  );
}
