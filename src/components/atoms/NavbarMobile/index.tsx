import { GoTo, SocialButton, UserButton } from '../index';
import Logo from '../../../../public/images/logoFull.svg';

const NavbarMobile = ({ isActive, clickHandle }) => (
  <>
    <div
      className={`${
        isActive ? 'block' : 'hidden'
      } fixed top-0 left-0 w-screen h-screen bg-gray-white dark:bg-gray.900 opacity-60 dark:opacity-60`}
      onClick={clickHandle}
    />
    <aside
      className={`flex flex-col fixed top-0 left-0 z-50 w-10/12 max-w-sm h-screen bg-gray-white dark:bg-gray.900 p-8 transition-transform duration-500 transform ${
        isActive ? 'translate-x-0' : '-translate-x-full'
      }`}
      onClick={clickHandle}
    >
      <Logo className="fill-current dark:text-white" />
      <p className="mt-8 font-grotesk font-bold text-dark dark:text-white text-xl">
        Crie ou entre em sua conta Programeiros
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <UserButton type="btn-blue" text="Criar conta" />
        <UserButton type="btn-outline-gray" text="Entrar na conta" />
      </div>
      <ul className="flex flex-col gap-4 text-dark dark:text-white mt-16">
        <li>
          <GoTo
            text="Vá para o guia"
            color="orange"
            hoverColor="orange"
            clickedColor="orange-dark"
            url="/"
          />
        </li>
        <li>
          <GoTo
            text="Vá para as vagas"
            color="green"
            hoverColor="green"
            clickedColor="green-dark"
            url="/"
          />
        </li>
        <li>
          <GoTo
            text="Quem somos"
            color="btn-gray"
            hoverColor="btn-gray"
            clickedColor="btn-gray-click"
            url="/"
          />
        </li>
      </ul>
      <div className="flex justify-start gap-x-11 mt-auto mb-4">
        <SocialButton type="telegram" />
        <SocialButton type="discord" />
        <SocialButton type="github" />
      </div>
    </aside>
  </>
);

export { NavbarMobile };
