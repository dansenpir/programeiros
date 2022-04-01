import styles from "./styles.module.css";

interface HamburProps {
  isOpen: boolean;
}

export function Hamburguer({ isOpen = false }: HamburProps) {
  return (
    <div className="">
      <div
        className={`${styles.hamburguer} absolute top-8 right-0 ${
          isOpen && styles["close-hamburguer"]
        }`}
      >
        <div
          className={`${styles.lines} ${isOpen && styles["line-top"]}`}
        ></div>
        <div
          className={`${styles.lines} ${isOpen && styles["line-mid"]}`}
        ></div>
        <div
          className={`${styles.lines} ${isOpen && styles["line-bottom"]}`}
        ></div>
      </div>
    </div>
  );
}
