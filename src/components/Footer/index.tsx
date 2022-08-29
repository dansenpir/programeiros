import Logo from '../../../public/images/logo.svg';

const Footer = () => (
  <footer className="bg-gray.900 mt-64">
    <div className="py-12 md:py-0 md:pb-12 md:pt-14">
      <div className="w-8/12 md:w-full px-10 xl:px-24">
        <Logo fill="#fff" />
      </div>
    </div>
    <div className="pb-14 md:pb-20">
      <div className="flex flex-col sm:flex-row sm:justify-between text-white font-overpass font-normal text-xs lg:text-base leading-6 px-10 xl:px-24">
        <div>
          <div className="flex">
            <p className="font-grotesk font-bold text-xs md:text-base text-white">
              Recursos:
            </p>
            <p className="font-overpass font-normal text-xs md:text-base text-gray pl-8">
              Guia de estudos
            </p>
            <p className="font-overpass font-normal text-xs md:text-base text-gray pl-8">
              Review de cursos
            </p>
            <p className="font-overpass font-normal text-xs md:text-base text-gray pl-8">
              Buscador de vagas
            </p>
          </div>
          <div className="flex mt-4">
            <p className="font-grotesk font-bold text-xs md:text-base text-white">
              Programeiros:
            </p>
            <p className="font-overpass font-normal text-xs md:text-base text-gray pl-8">
              Sobre
            </p>
            <p className="font-overpass font-normal text-xs md:text-base text-gray pl-8">
              Contato
            </p>
          </div>
          <div className="flex mt-4">
            <p className="font-grotesk font-bold text-xs md:text-base text-white">
              Social:
            </p>
            <p className="font-overpass font-normal text-xs md:text-base text-gray pl-8">
              GitHub
            </p>
            <p className="font-overpass font-normal text-xs md:text-base text-gray pl-8">
              Telegram
            </p>
            <p className="font-overpass font-normal text-xs md:text-base text-gray pl-8">
              Discord
            </p>
          </div>
        </div>
        <div className="mt-16 sm:mt-0 self-end">
          <div className="flex items-center md:flex-none">
            <p className="font-overpass font-normal text-xs md:text-base">
              © {new Date().getFullYear()} Programeiros
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-4">
            <p className="font-overpass font-normal text-xs md:text-base">
              Termos & Políticas de privacidade
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
