import Link from "next/link";
import styles from "./Card.module.css";
import ArrowIcon from "./ArrowIcon";

interface CardProps {
  href: string;
  src: string;
  title: string;
  description: string;
}

const Card = ({ href, src, title, description }: CardProps) => {
  return (
    <Link href={href} className={`${styles.card} `}>
      <div className={styles.imgContainer}>
        <img alt="" src={src} />
      </div>
      <div className={styles.link}>
        <span className={styles.linkA}>
          {title} <ArrowIcon />
        </span>
        <span className={styles.linkB}>
          {description} <ArrowIcon />
        </span>
      </div>
    </Link>
  );
};

export default Card;
