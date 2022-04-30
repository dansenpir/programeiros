import { useState } from 'react';
import { Hamburguer, NavbarMobile } from '../../components';

const MenuHamburguer = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>
        <Hamburguer isOpen={isActive} />
      </button>

      {isActive && <NavbarMobile />}
    </>
  );
};

export { MenuHamburguer };
