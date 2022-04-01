//import { NavLink } from "./NavLink";
import { Menu } from "./Menu";
import { BiSun } from "react-icons/bi";

export function Header() {
  return (
    <header className="px-8 pt-8">
      <div className="xl:w-11/12 xl:mx-auto">
        <div className="container flex items-center justify-between">
          <div className="flex justify-between w-full ">
            <div className="pr-10">
              <img
                src="/images/logo.svg"
                alt="logo do programeiros"
                className="max-w-none"
              />
            </div>
            {/* <NavLink /> */}
            <div className="flex">
              <button className="text-base text-white font-grotesk rounded-xl	border-2 border-white	p-3">
                Entrar
              </button>
              <div className="rounded-xl border-2 border-white p-3 mx-5 text-white text-2xl">
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
