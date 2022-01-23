import Image from "next/image";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className="py-10">
      <div className="xl:w-11/12 xl:mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="relative z-10 flex items-center">
            <div>
              <img
                src="/images/P.svg"
                width={47.31}
                height={48}
                alt="logo do programeiros"
              />
            </div>

            <ul className="inline-flex ml-20 font-normal text-white font-overpass">
              <li className="p-5">
                <a href="#" className="hover:text-btn-border">Quem somos?</a>
              </li>
              <li className="p-5">
                <a href="#" className="hover:text-btn-border">Vagas</a>
              </li>
              <li className="p-5">
                <a href="#" className="hover:text-btn-border">Guia de estudos</a>
              </li>
            </ul>
          </div>

          <button className="p-3 px-6 text-white border border-btn-border rounded-xl font-grotesk hover:bg-btn-border">
            Entrar
          </button>
        </div>
        <div
          className={`absolute top-0 left-0 text-white xl:w-2/12 xl:h-64 z-0 rounded-br-full roudend-tr-full ${styles.logo}`}
        />
      </div>
    </header>
  );
}
