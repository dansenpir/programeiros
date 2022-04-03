export function NavLink() {
  return (
    <nav className="hidden xl:flex z-10 items-center mr-150">
      <ul className="ml-16 hidden ml-20 w-80 font-normal text-white sm:flex font-overpass">
        <li className="py-5">
          <a href="#" className="hover:text-btn-border">
            Quem somos?
          </a>
        </li>
        <li className="py-5 mx-6">
          <a href="#" className="hover:text-btn-border">
            Vagas
          </a>
        </li>
        <li className="py-5">
          <a href="#" className="hover:text-btn-border">
            Guia de estudos
          </a>
        </li>
      </ul>
    </nav>
  );
}
