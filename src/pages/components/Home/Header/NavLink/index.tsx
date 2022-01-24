export default function NavLink() {
  return (
    <nav className='relative z-10 flex items-center'>
      <div>
        <img src='/images/P.svg' alt='logo do programeiros' />
      </div>

      <ul className='hidden ml-20 font-normal text-white sm:flex font-overpass'>
        <li className='p-5'>
          <a href='#' className='hover:text-btn-border'>
            Quem somos?
          </a>
        </li>
        <li className='p-5'>
          <a href='#' className='hover:text-btn-border'>
            Vagas
          </a>
        </li>
        <li className='p-5'>
          <a href='#' className='hover:text-btn-border'>
            Guia de estudos
          </a>
        </li>
      </ul>
    </nav>
  );
}
