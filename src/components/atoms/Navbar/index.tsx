import Link from 'next/link';

const Navbar = () => (
  <nav className="hidden lg:flex items-center">
    <ul className="flex font-overpass text-base xl:text-xl text-dark dark:text-white">
      <Link href="/" passHref>
        <a>
          <li className="hover:text-blue cursor-pointer mr-6">Quem somos</li>
        </a>
      </Link>
      <Link href="/jobs" passHref>
        <a>
          <li className="hover:text-blue cursor-pointer mr-6">Vagas</li>
        </a>
      </Link>
      <Link href="/" passHref>
        <a>
          <li className="hover:text-blue cursor-pointer">Guia de estudos</li>
        </a>
      </Link>
    </ul>
  </nav>
);

export { Navbar };
