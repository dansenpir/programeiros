import { useState } from 'react';
import { Hamburguer, NavbarMobile } from '../';

const MenuHamburguer = () => {
  const [isActive, setIsActive] = useState(false);
  const clickHandle = () => setIsActive(!isActive);

  return (
    <>
      <button onClick={clickHandle}>
        <Hamburguer isOpen={isActive} />
      </button>
      <NavbarMobile isActive={isActive} clickHandle={clickHandle} />
    </>
  );
};

export { MenuHamburguer };
