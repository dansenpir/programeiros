import styles from "./styles.module.css";

import { NavLink } from "./NavLink";
import { SignIn } from "./SignIn"

export function Header() {
  return (
    <header className="px-10 py-10">
      <div className="xl:w-11/12 xl:mx-auto">
        <div className="relative flex items-center justify-between">
          <NavLink />
          <SignIn />
        </div>
        
        <div
          className={`absolute top-0 left-0 text-white w-2/12 h-64 z-0 rounded-br-full roudend-tr-full ${styles.logo}`}
        />
      </div>
    </header>
  );
}
