import BlockLink from "../BlockLink";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  description: string;
  invert?: boolean;
  hasLink?: boolean;
  disableDescriptionAnimation?: boolean;
}

const Hero = ({
  title,
  description,
  invert,
  hasLink,
  disableDescriptionAnimation,
}: HeroProps) => {
  return (
    <div className={`${styles.root} ${invert ? styles.invert : ""}`}>
      <motion.div
        initial={disableDescriptionAnimation ? false : { opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2 className={styles.description}>{description}</h2>
      </motion.div>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className={styles.title}>{title}</h1>
        </motion.div>
        {hasLink ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
