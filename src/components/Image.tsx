'use client';
import { HTMLMotionProps, motion } from 'framer-motion';

const transition = {
  type: 'spring',
  stiffness: 300,
  mass: 3,
  damping: 100
};

const initial = {
  y: 150,
  opacity: 0.001
};

const inView = {
  y: 0,
  opacity: 1,
  transition
};

export default function Image(props: HTMLMotionProps<'img'>) {
  return (
    <motion.img
      initial={initial}
      whileInView={inView}
      viewport={{ once: true }}
      src="https://framerusercontent.com/images/lirZEuMgn3dZcLiBP3A2pI48Bs.webp"
      className="h-auto w-full rounded-main object-contain md:max-w-full md:object-cover"
      {...props}
    />
  );
}
