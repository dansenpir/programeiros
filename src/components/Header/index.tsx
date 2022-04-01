import { NavLink } from "./NavLink";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="p-10">
      <div className="xl:w-11/12 xl:mx-auto">
        <div className="flex items-center justify-between">
          <NavLink />
          <Menu />
          <button className="p-2 rounded-xl	border-2 border-white	mr-14 text-white">
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
}
