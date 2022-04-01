import styles from "./styles.module.css";

interface HamburProps {
  isOpen: boolean;
}

export function Hamburguer({ isOpen = false }: HamburProps) {
  return (
    <div className="border-2 border-white w-14 rounded-xl">
      <div
        className={`${styles.hamburguer} relative ${
          isOpen && styles["close-hamburguer"]
        }`}
      >
        {/* Linahs abaixo: */}
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
