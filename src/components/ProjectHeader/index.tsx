import styles from "./ProjectHeader.module.css";
import { motion } from "framer-motion";

const ProjectHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Suitcase App
        </motion.h1>
        <h2>Travel Smart & Safely</h2>
      </div>
      <p className={styles.description}>
        Ziggo, the smart suitcase app that lets you control your luggage like a
        smart home! With Ziggo, you can easily lock and unlock your suitcase,
        check the battery level, and even receive notifications if your suitcase
        strays too far from you.
      </p>
      <ul className={styles.list}>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Client</span>
          <span>Client Example</span>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Services</span>
          <span>
            Visual Design
            <br /> UI & UX Design
          </span>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Industries</span>
          <span>Travel</span>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Date</span>
          <span>Janeiro 2023</span>
        </motion.li>
      </ul>
    </div>
  );
};

export default ProjectHeader;
