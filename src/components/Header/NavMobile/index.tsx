export function NavMobile() {
  return (
    <nav className="absolute top-0 left-0 z-20 bg-bg-main w-full min-h-screen">
      <ul className="font-normal text-white font-overpass py-5 mt-20 animate__animated animate__fadeInLeft">
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
