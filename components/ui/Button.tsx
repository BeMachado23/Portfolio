import { ArrowUpRight } from "lucide-react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className ?? ''}`}>
      <span className={styles.label}>{text}</span>
      <ArrowUpRight className={styles.icon} />
    </button>
  );
}