import Link from 'next/link';

const NavbarMobile = () => (
  <nav className="opacity-90 absolute top-0 left-0 z-20 bg-white dark:bg-dark w-full min-h-screen">
    <ul className="opacity-100 font-normal text-dark dark:text-white font-overpass py-5 mt-20 animate__animated animate__fadeInLeft">
      <Link href="/" passHref>
        <a>
          <li className="hover:text-blue font-bold p-5">Quem somos</li>
        </a>
      </Link>
      <Link href="/vagas" passHref>
        <a>
          <li className="hover:text-blue font-bold p-5">Vagas</li>
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <li className="hover:text-blue font-bold p-5">Guia de estudos</li>
        </a>
      </Link>
    </ul>
  </nav>
);

export { NavbarMobile };
