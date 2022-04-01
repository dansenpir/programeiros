//import { useBreakpoint } from "../../../hooks/tailwind";
import { Hamburguer } from "../../Icons/Hamburguer";

import { NavMobile } from "../NavMobile";
import { useState } from "react";

export function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //const isDesktop = useBreakpoint("sm");

  return (
    <>
      <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <Hamburguer isOpen={isOpenMenu} />
      </button>

      {isOpenMenu && <NavMobile />}
    </>
  );
}
