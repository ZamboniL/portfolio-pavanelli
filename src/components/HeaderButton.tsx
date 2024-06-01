import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const variants = ['top', 'left', 'bottom', 'right'];
const duration = 1;

const borderVariants = {
  bottom: {
    background:
      'radial-gradient(25% 25% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)'
  },
  'bottom-hover': {
    background:
      'radial-gradient(100% 100% at 50% 50%, rgba(213, 179, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
  },
  right: {
    background:
      'radial-gradient(25% 50% at 100% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)'
  },
  'right-hover': {
    background:
      'radial-gradient(100% 100% at 50% 50%, rgba(213, 179, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
  },
  left: {
    background:
      'radial-gradient(25% 50% at 0% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)'
  },
  'left-hover': {
    background:
      'radial-gradient(100% 100% at 50% 50%, rgba(237, 224, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
  },
  top: {
    background:
      'radial-gradient(25% 50% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
  },
  'top-hover': {
    background:
      'radial-gradient(100% 100% at 50% 50%, rgba(213, 179, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
  }
};

const fillVariants = {
  bottom: { background: '#000000' },
  'bottom-hover': { background: '#7218e5' },
  right: { background: '#000000' },
  'right-hover': { background: '#7218e5' },
  left: { background: '#000000' },
  'left-hover': { background: '#7218e5' },
  top: { background: '#000000' },
  'top-hover': { background: '#7218e5' }
};

const textVariants = {
  bottom: { color: '#FFFFFF80' },
  'bottom-hover': { color: '#FFFFFFFF' },
  right: { color: '#FFFFFF80' },
  'right-hover': { color: '#FFFFFFFF' },
  left: { color: '#FFFFFF80' },
  'left-hover': { color: '#FFFFFFFF' },
  top: { color: '#FFFFFF80' },
  'top-hover': { color: '#FFFFFFFF' }
};

export default function HeaderButton({
  isMobile,
  active
}: {
  isMobile?: boolean;
  active?: boolean;
}) {
  const [curr, setCurr] = useState('top');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((c) => variants[(variants.indexOf(c) + 1) % variants.length]);
    }, duration * 900);
    return () => clearInterval(interval);
  }, []);

  if (isMobile) {
    return (
      <Link href="/contato">
        <motion.button
          initial={curr}
          animate={active ? `${curr}-hover` : curr}
          transition={{ duration, ease: 'linear' }}
          whileHover={`${curr}-hover`}
          className="relative w-full rounded-[30px] bg-white/15 px-4 py-2"
        >
          <div className="absolute inset-0.5 z-10 rounded-[30px] bg-primary-600" />

          <motion.div
            className="absolute inset-0 rounded-[30px]"
            transition={{ duration, ease: 'linear' }}
            variants={borderVariants}
          />
          <div className="relative z-20 text-base font-medium text-white">Contato</div>
        </motion.button>
      </Link>
    );
  }

  return (
    <Link href="/contato">
      <motion.button
        initial={curr}
        animate={active ? `${curr}-hover` : curr}
        transition={{ duration, ease: 'linear' }}
        whileHover={`${curr}-hover`}
        className="relative w-full rounded-small bg-white/15 px-4 py-2 md:w-fit"
      >
        <motion.div
          className="absolute inset-0.5 z-10 rounded-lg bg-primary-600"
          variants={fillVariants}
        />
        <motion.div
          className="absolute inset-0 rounded-main blur-[15px]"
          transition={{ duration, ease: 'linear' }}
          variants={borderVariants}
        />
        <motion.div
          className="absolute inset-0 rounded-small"
          transition={{ duration, ease: 'linear' }}
          variants={borderVariants}
        />
        <motion.div className="relative z-20 font-medium text-white/50" variants={textVariants}>
          Contato
        </motion.div>
      </motion.button>
    </Link>
  );
}
