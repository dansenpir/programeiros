import Social from './Social';

export default function Footer() {
  return (
    <footer>
      <div className='bg-bg-main py-12 md:py-20'>
        <div className='flex items-center justify-between px-10 xl:px-24'>
          <div className='w-1/4 md:w-2/12 xl:w-full'>
            <img src='/images/p_logo_blue_white.svg' alt='Logo Programeiros' />
          </div>
          <Social />
        </div>
      </div>
      <div className='bg-p-shadow py-6 md:py-20'>
        <div className='flex justify-between text-white font-overpass font-normal text-xs lg:text-base leading-6 px-10 xl:px-24'>
          <div className='flex flex-col md:flex-row'>
            <p>Termos</p>
            <p className='md:px-16'>Privacidade</p>
            <p>Contato</p>
          </div>
          <div className='flex items-center md:flex-none'>
            <p>© {new Date().getFullYear()} Programeiros</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
