import styles from "./ProjectImage.module.css";
import { HTMLMotionProps, motion } from "framer-motion";

const ProjectImage = (props: HTMLMotionProps<"img">) => {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      src="https://framerusercontent.com/images/lirZEuMgn3dZcLiBP3A2pI48Bs.webp"
      className={styles.root}
      {...props}
    />
  );
};

export default ProjectImage;
