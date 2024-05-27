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

interface ServiceProps {
  title: string;
  tag: string;
}
export default function Service({ title, tag }: ServiceProps) {
  return (
    <motion.div
      className="flex gap-5 rounded-main bg-primary-900 p-5 text-xl font-semibold text-white/50 md:p-7"
      initial={initial}
      whileInView={{ ...inView, transition: { ...transition, delay: Number(tag) * 0.1 } }}
      viewport={{ once: true }}
    >
      <h4>{tag}</h4>
      <h4>{title}</h4>
    </motion.div>
  );
}
