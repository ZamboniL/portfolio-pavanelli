import { useScroll } from "framer-motion";
import styles from "./Window.module.css";
import { motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Window = React.forwardRef<HTMLDivElement>(function Window(props, ref) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "150%"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <div ref={containerRef} className={styles.root}>
        <motion.img
          style={{ translateY }}
          transition={{ type: "spring", stiffness: 893, damping: 60, mass: 1 }}
          className={styles.img}
          alt=""
          src="https://framerusercontent.com/images/GSikKY7mmQZ5LUyUDjXyOxAOilA.webp"
        />
      </div>
    </div>
  );
});

export default Window;
