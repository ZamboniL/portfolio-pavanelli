import StarSvg from "./StarSvg";
import ZiggoSvg from "./ZiggoSvg";
import styles from "./LogoGrid.module.css";
import { motion } from "framer-motion";

const LogoGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={styles.root}
    >
      {[...Array(8)].map((_, i) => (
        <div key={i} className={styles.card}>
          {((i + 1) % 5) % 2 === 0 ? <ZiggoSvg /> : <StarSvg />}
        </div>
      ))}
    </motion.div>
  );
};

export default LogoGrid;
