const NavbarMobile = () => (
  <nav className='opacity-90 absolute top-0 left-0 z-20 bg-white dark:bg-dark w-full min-h-screen'>
    <ul className='opacity-100 font-normal text-dark dark:text-white font-overpass py-5 mt-20 animate__animated animate__fadeInLeft'>
      <li className='hover:text-blue font-bold p-5'>Quem somos</li>
      <li className='hover:text-blue font-bold p-5'>Vagas</li>
      <li className='hover:text-blue font-bold p-5'>Guia de estudos</li>
    </ul>
  </nav>
);

export { NavbarMobile };
