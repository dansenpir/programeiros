import { NavLink } from "./NavLink";
import { Menu } from "./Menu";
import { BiSun } from "react-icons/bi";

export function Header() {
  return (
    <header className="px-8 pt-8 w-full">
      <div className="xl:w-11/12 xl:mx-auto">
        <div className="container flex justify-between">
          <div className="flex justify-between w-full ">
            <div className="mt-2">
              <img
                src="/images/logo.svg"
                alt="logo do programeiros"
                className="max-w-none"
              />
            </div>
            <NavLink />
            <div className="flex ml-10 xl:w-32 ml-px">
              <button className="text-base text-white font-grotesk rounded-xl	border-2 border-white	p-3 xl:h-14">
                Entrar
              </button>
              <div className="rounded-xl border-2 border-white p-3 mx-5 text-white text-2xl xl:mx-4 h-14">
                <BiSun />
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
