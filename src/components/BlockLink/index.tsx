import Link from "next/link";
import styles from "./BlockLink.module.css";

interface BlockLinkProps {
  href: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
  description?: React.ReactNode;
}

const BlockLink = ({
  href,
  height = "21px",
  className,
  children,
  description = children,
}: BlockLinkProps) => {
  return (
    <Link
      href={href}
      style={{ "--block-link-height": height } as React.CSSProperties}
      className={`${styles.link} ${className}`}
    >
      <span className={styles.linkA}>{children}</span>
      <span className={styles.linkB}>{description}</span>
    </Link>
  );
};

export default BlockLink;
