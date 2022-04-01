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
          className={`${styles.lines} ${isOpen && styles["line-top"]} ${
            isOpen ? "h-1.25" : "h-0.5"
          }`}
        ></div>
        <div
          className={`${styles.lines} ${isOpen && styles["line-mid"]} ${
            isOpen ? "h-1.25" : "h-0.5"
          }`}
        ></div>
        <div
          className={`${styles.lines} ${isOpen && styles["line-bottom"]} ${
            isOpen ? "h-1.25" : "h-0.5"
          }`}
        ></div>
      </div>
    </div>
  );
}
