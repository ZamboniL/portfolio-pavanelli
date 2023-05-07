import styles from "./BulletList.module.css";
import { motion } from "framer-motion";

interface BulletListProps {
  title: string;
  list: string[];
}

const BulletList = ({ title, list }: BulletListProps) => {
  return (
    <div className={styles.root}>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className={styles.title}
      >
        {title}
      </motion.h3>
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className={styles.list}
      >
        {list.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default BulletList;
