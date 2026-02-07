import { ArrowUpRight } from "lucide-react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      <span className={styles.label}>{text}</span>
      <ArrowUpRight className={styles.icon} />
    </button>
  );
}