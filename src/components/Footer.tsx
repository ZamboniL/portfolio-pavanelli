'use client';
import Link from './Link';
import { motion } from 'framer-motion';

const transition = {
  type: 'spring',
  stiffness: 300,
  mass: 3,
  damping: 100
};

const inView = {
  y: 0,
  opacity: 1,
  transition
};

export default function Footer() {
  return (
    <motion.footer
      className="flex max-w-8xl flex-col items-center gap-5 py-8 text-white/50 md:w-full md:flex-row md:justify-between md:pt-24"
      whileInView={{ ...inView, transition: { ...transition, delay: 0.3 } }}
      viewport={{ once: true }}
      initial={{ y: 150, opacity: 0.01 }}
    >
      <p>Lucas Pavanelli © 2024.</p>
      <ul className="flex justify-center gap-8">
        <motion.li
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }}
        >
          <Link href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/">
            <img src="/icon/linkedin.png" alt="x" width={20} height={20} />
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5, ease: 'easeOut' }
          }}
        >
          <Link href="https://www.instagram.com/lucaspavanelli/">
            <img src="/icon/instagram.png" alt="x" width={20} height={20} />
          </Link>
        </motion.li>
      </ul>
    </motion.footer>
  );
}
