import Link from "next/link";
import styles from "./Card.module.css";
import ArrowIcon from "./ArrowIcon";
import { motion } from "framer-motion";
import { useRef } from "react";

const imgVariants = {
  hover: {
    scale: 1.09,
  },
};

const arrowVariants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    rotate: -45,
  },
};

const containerVariants = {
  rest: {
    opacity: 0,
    scale: 0.95,
  },
  view: {
    opacity: 1,
    scale: 1,
  },
};

interface CardProps {
  href: string;
  src: string;
  title: string;
  description: string;
}

const Card = ({ href, src, title, description }: CardProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="rest"
      whileInView="view"
      whileHover="hover"
      transition={{ duration: 1, ease: [0.19, 0, 0.5, 1], delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Link href={href} className={`${styles.card} `}>
        <div className={styles.imgContainer}>
          <motion.div
            variants={arrowVariants}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 60,
              mass: 1,
            }}
            className={styles.arrowContainer}
          >
            <svg
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              id="b385ca18-4b85-46d4-bb4b-571c73a19812"
              data-name="b922a425-e5e0-4ef1-881c-5748460fd139"
              viewBox="0 0 30.125 18.1738"
            >
              <path
                d="M29.75,9.3948,21.5281,1.1735a.8479.8479,0,0,0-.601-.261L20.9124.9119a.8526.8526,0,0,0-.5956.2409.8642.8642,0,0,0-.0027,1.23l6.7618,6.7611H.7316a.8566.8566,0,1,0,0,1.7131H27.0759l-6.7591,6.7591a.8576.8576,0,0,0-.0214,1.2113.8462.8462,0,0,0,.61.2583.8949.8949,0,0,0,.621-.2556l8.2233-8.224A.8587.8587,0,0,0,29.75,9.3948Z"
                transform="translate(0.125 -0.9119)"
              />
            </svg>
          </motion.div>
          <motion.img
            variants={imgVariants}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 60,
              mass: 1,
            }}
            alt=""
            src={src}
          />
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
    </motion.div>
  );
};

export default Card;
