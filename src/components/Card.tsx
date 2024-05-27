'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  title: string;
  subtitle: string;
  link?: string;
  slug?: string;
  image?: string;
}

export default function Card({ image, link, slug, subtitle, title }: CardProps) {
  return (
    <motion.div
      className="relative flex flex-col gap-6 overflow-hidden rounded-2xl md:h-full md:max-h-[400px]"
      initial="rest"
      whileHover="hover"
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 300, mass: 3, damping: 100 }
      }}
      viewport={{ once: true }}
      variants={{ rest: { y: 160, opacity: 0.001 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={link ?? `/portfolio/${slug}`}>
        <motion.div
          className="md:absolute md:bottom-5 md:left-5 md:z-20"
          variants={{ hover: { opacity: 0, zIndex: 10 } }}
        >
          <h4 className="text-xl font-semibold">{subtitle}</h4>
          <p className="text-sm text-white/50 md:text-base md:font-medium">{title}</p>
        </motion.div>
        <div className="relative max-h-full w-full rounded-2xl">
          <motion.div
            className="absolute left-0 top-0 z-10 hidden size-[105%] bg-gradient-to-b from-white/0 from-50% to-black opacity-50
            md:block"
            variants={{
              rest: { backgroundColor: '#FFFFFF00' },
              hover: { opacity: 0.75, backgroundColor: '#000000' }
            }}
          />
          <motion.div
            className="absolute right-1/2 top-1/2 z-10 flex -translate-y-1/2 translate-x-1/2 items-center justify-end gap-3 rounded-full
            bg-white/15 py-2 pl-5 pr-2 font-semibold backdrop-blur-md"
            variants={{
              rest: { opacity: 0, filter: 'blur(16px)', width: '56px' },
              hover: { opacity: 1, filter: 'blur(0px)', width: '170px' }
            }}
          >
            <p className="absolute left-5 z-0">Ver detalhes</p>
            <motion.div
              className="relative z-10 flex size-10 items-center justify-center rounded-full bg-primary-600"
              variants={{
                rest: { rotate: -15 },
                hover: {
                  rotate: 0
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                fill="rgb(255, 255, 255)"
                className="h-8"
              >
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
              </svg>
            </motion.div>
          </motion.div>
          <motion.img
            src={image}
            alt=""
            variants={{ hover: { scale: 1.05 } }}
            className="max-h-full w-full rounded-2xl  object-cover"
          />
        </div>
      </Link>
    </motion.div>
  );
}
