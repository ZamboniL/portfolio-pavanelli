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

interface ExperienceProps {
  period: string;
  company: string;
  title: string;
  description: string;
}

export default function Experience({ company, description, period, title }: ExperienceProps) {
  return (
    <motion.div
      className="flex flex-col gap-6 border-b border-white/15 pb-8 md:grid md:grid-cols-2"
      initial={initial}
      whileInView={inView}
      viewport={{ once: true }}
    >
      <p className="font-medium text-white/50">{period}</p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-semibold">{company}</h4>
          <p className="text-sm text-white/50">{title}</p>
        </div>
        <p className="font-medium text-white/50">{description}</p>
      </div>
    </motion.div>
  );
}
