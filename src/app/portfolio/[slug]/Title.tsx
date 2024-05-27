'use client';
import { motion } from 'framer-motion';

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

interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="mb-8 flex flex-col items-center gap-3 pt-24">
      <motion.h2
        className="text-[64px] font-semibold leading-[74px]"
        initial={initial}
        whileInView={inView}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.h2>
      <motion.p
        className="font-medium text-white/50"
        initial={initial}
        whileInView={{ ...inView, transition: { ...transition, delay: 0.1 } }}
        viewport={{ once: true }}
      >
        {title}
      </motion.p>
    </div>
  );
}
