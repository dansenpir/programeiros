const Navbar = () => (
  <nav className='hidden lg:flex items-center'>
    <ul className='flex font-overpass text-base xl:text-xl text-dark dark:text-white'>
      <li className='hover:text-blue cursor-pointer mr-6'>Quem somos</li>
      <li className='hover:text-blue cursor-pointer mr-6'>Vagas</li>
      <li className='hover:text-blue cursor-pointer'>Guia de estudos</li>
    </ul>
  </nav>
);

export { Navbar };
