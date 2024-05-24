'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const variants = ['top', 'left', 'bottom', 'right'];
const duration = 1;

export default function DreamProject() {
  const [curr, setCurr] = useState('top');
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((c) => variants[(variants.indexOf(c) + 1) % variants.length]);
    }, duration * 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center gap-10 rounded-main border border-white/15 p-8 md:w-full md:max-w-8xl md:py-14"
      initial="initial"
      animate={hover ? 'hover' : 'initial'}
      variants={{
        initial: {
          background:
            'radial-gradient(35% 25% at 50% 3.3%, rgba(0, 0, 0, 0) 0%, rgba(79, 0, 196, 0) 51.0417%, rgba(172, 117, 255, 0) 100%)'
        },
        hover: {
          background:
            'radial-gradient(100% 100% at 50% 3.3%, rgba(0, 0, 0, 0) 0%, rgba(79, 0, 196, 1) 51.0417%, rgba(172, 117, 255, 1) 100%)'
        }
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center gap-8 text-center md:w-full md:max-w-[600px]">
        <h3 className="text-4xl font-semibold md:text-5xl">Vamos conversar?</h3>
        <p className="text-white/50">
          Vamos transformar sua ideia em uma realidade impressionante! Entre em contato hoje mesmo e
          vamos juntos começar essa jornada.
        </p>
      </div>
      <motion.div
        animate={curr}
        whileHover="hover"
        transition={{ duration: duration }}
        className="relative cursor-pointer rounded-full px-12 py-6 text-[32px]  font-semibold md:text-[64px] md:leading-[72px]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link href="/contato">
          <motion.div
            className="absolute inset-0 rounded-[70px] blur-[20px]"
            transition={{ duration: duration, ease: 'linear' }}
            variants={{
              top: {
                background:
                  'radial-gradient(30% 50% at 50% 0%, rgb(236, 222, 255) 0%, rgba(171, 171, 171, 0) 100%)'
              },
              left: {
                background:
                  'radial-gradient(25% 50% at 0% 50%, rgb(199, 156, 255) 0%, rgba(171, 171, 171, 0) 100%)'
              },
              bottom: {
                background:
                  'radial-gradient(30% 50% at 50% 100%, rgb(199, 156, 255) 0%, rgba(171, 171, 171, 0) 100%)'
              },
              right: {
                background:
                  'radial-gradient(25% 50% at 100% 50%, rgb(199, 156, 255) 0%, rgba(171, 171, 171, 0) 100%)'
              },
              hover: {
                background: 'none'
              }
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-[70px] blur-[2px]"
            transition={{ duration: duration, ease: 'linear' }}
            variants={{
              top: {
                background:
                  'radial-gradient(50% 50% at 50% 0%, rgb(236, 222, 255) 0%, rgb(109, 0, 252) 61.261261261261254%, rgba(255, 255, 255, 0) 100%)'
              },
              left: {
                background:
                  'radial-gradient(50% 50% at 0% 50%, rgb(236, 222, 255) 0%, rgb(122, 20, 255) 70.27027027027026%, rgba(255, 255, 255, 0) 100%)'
              },
              bottom: {
                background:
                  'radial-gradient(50% 50% at 50% 100%, rgb(236, 222, 255) 0%, rgb(122, 20, 255) 52.70270270270271%, rgba(255, 255, 255, 0) 100%)'
              },
              right: {
                background:
                  'radial-gradient(50% 50% at 100% 50%, rgb(236, 222, 255) 0%, rgb(122, 20, 255) 70.27027027027026%, rgba(255, 255, 255, 0) 100%)'
              },
              hover: {
                background: 'none'
              }
            }}
          />
          <motion.div
            className="absolute inset-[5px] rounded-[70px]"
            initial={{ background: '#000000' }}
            variants={{ hover: { background: '#FFFFFF' } }}
          />
          <motion.p
            className="relative z-10 size-full rounded-full"
            initial={{ color: '#ffffff' }}
            variants={{ hover: { color: '#000000' } }}
          >
            Vamos!
          </motion.p>
        </Link>
      </motion.div>
    </motion.div>
  );
}
