import Link from 'next/link';

const Navbar = () => (
  <nav className="hidden lg:flex items-center">
    <ul className="flex font-overpass text-base xl:text-xl text-dark dark:text-white">
      <li className="hover:text-blue cursor-pointer mr-6">Quem somos</li>
      <Link href="/vagas" passHref>
        <li className="hover:text-blue cursor-pointer mr-6">Vagas</li>
      </Link>
      <li className="hover:text-blue cursor-pointer">Guia de estudos</li>
    </ul>
  </nav>
);

export { Navbar };
