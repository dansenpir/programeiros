import { Hamburguer } from '../Icons/Hamburguer';
import { NavMobile } from '../NavMobile';
import { useState } from 'react';

function MenuHamburguer() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <button className='mr-8' onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <Hamburguer isOpen={isOpenMenu} />
      </button>

      {isOpenMenu && <NavMobile />}
    </>
  );
}

export { MenuHamburguer };
