import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  description?: React.ReactNode;
}

const Button = ({ href, size = "medium", children }: ButtonProps) => {
  if (size === "small") {
    return (
      <Link href={href} className={`${styles.button} ${styles.small}`}>
        <div>{children}</div>
      </Link>
    );
  }

  return (
    <Link href={href} className={styles.button}>
      <div>{children}</div>
    </Link>
  );
};

export default Button;
