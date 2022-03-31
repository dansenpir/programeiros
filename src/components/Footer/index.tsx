export function Footer() {
  return (
    <footer className='bg-footer mt-64'>
      <div className='py-12 md:py-0 md:pb-12 md:pt-14'>
        <div className='w-1/4 md:w-2/12 xl:w-full px-10 xl:px-24'>
          <img src='/images/logo.svg' alt='Logo Programeiros' />
        </div>
      </div>
      <div className='py-6 md:py-0 md:pb-20'>
        <div className='flex justify-between text-white font-overpass font-normal text-xs lg:text-base leading-6 px-10 xl:px-24'>
          <div>
            <div className='flex'>
              <p className='font-grotesk font-bold text-base text-white'>
                Recursos:
              </p>
              <p className='font-overpass font-normal text-base text-gray pl-8'>
                Guia de estudos
              </p>
              <p className='font-overpass font-normal text-base text-gray pl-8'>
                Review de cursos
              </p>
              <p className='font-overpass font-normal text-base text-gray pl-8'>
                Buscador de vagas
              </p>
            </div>
            <div className='flex mt-4'>
              <p className='font-grotesk font-bold text-base text-white'>
                Programeiros:
              </p>
              <p className='font-overpass font-normal text-base text-gray pl-8'>
                Sobre
              </p>
              <p className='font-overpass font-normal text-base text-gray pl-8'>
                Contato
              </p>
            </div>
            <div className='flex mt-4'>
              <p className='font-grotesk font-bold text-base text-white'>
                Social:
              </p>
              <p className='font-overpass font-normal text-base text-gray pl-8'>
                GitHub
              </p>
              <p className='font-overpass font-normal text-base text-gray pl-8'>
                Telegram
              </p>
              <p className='font-overpass font-normal text-base text-gray pl-8'>
                Discord
              </p>
            </div>
          </div>
          <div className='self-end'>
            <div className='flex items-center md:flex-none'>
              <p>© {new Date().getFullYear()} Programeiros</p>
            </div>
            <div className='flex flex-col md:flex-row mt-4'>
              <p>Termos & Políticas de privacidade</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
