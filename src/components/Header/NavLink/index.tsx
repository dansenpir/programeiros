export function NavLink() {
  return (
    <nav className=" z-10 flex items-center ">
      <ul className="hidden ml-20 font-normal text-white sm:flex font-overpass">
        <li className="p-5">
          <a href="#" className="hover:text-btn-border">
            Quem somos?
          </a>
        </li>
        <li className="p-5">
          <a href="#" className="hover:text-btn-border">
            Vagas
          </a>
        </li>
        <li className="p-5">
          <a href="#" className="hover:text-btn-border">
            Guia de estudos
          </a>
        </li>
      </ul>
    </nav>
  );
}
