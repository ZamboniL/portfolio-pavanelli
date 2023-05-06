import BlockLink from "../BlockLink";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={styles.root}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2 className={styles.description}>
          Especialista em criar experiências digitais excepcionais para ajudar
          meus clientes a atingir seus objetivos.
        </h2>
      </motion.div>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className={styles.title}>UX/UI Designer</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <BlockLink href="mailto:lucaspavanellireis@gmail.com">
              lucaspavanellireis@gmail.com
            </BlockLink>
          </div>
          <span className={styles.scroll}>Desça para explorar</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
