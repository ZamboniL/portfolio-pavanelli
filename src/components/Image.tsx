'use client';
import { HTMLMotionProps, motion } from 'framer-motion';
export default function Image(props: HTMLMotionProps<'img'>) {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      src="https://framerusercontent.com/images/lirZEuMgn3dZcLiBP3A2pI48Bs.webp"
      className="h-auto w-full rounded-[20px] object-contain md:max-w-full md:object-cover"
      {...props}
    />
  );
}
