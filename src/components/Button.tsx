'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({ className, href, children }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <Internal className={className}>{children}</Internal>
      </Link>
    );
  }

  return <Internal className={className}>{children}</Internal>;
}

function Internal({ children, className }: ButtonProps) {
  return (
    <motion.button
      className={twMerge(
        'relative flex h-10 w-full items-center justify-center rounded-full bg-white font-bold md:w-fit md:bg-[#FFFFFF12] md:px-5 md:py-3',
        className
      )}
      whileTap="tap"
      whileHover="hover"
      variants={{
        tap: { scale: 0.9, opacity: 0.9 },
        hover: { backgroundColor: '#FFFFFF', paddingRight: '40px' }
      }}
    >
      <motion.p
        className="from-primary-500 from-[-40%] to-white bg-clip-text font-semibold text-primary-600 md:bg-gradient-to-r md:text-transparent"
        variants={{ hover: { backgroundImage: 'unset', backgroundColor: '#7218E5' } }}
      >
        {children}
      </motion.p>
      <motion.div
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0"
        variants={{ hover: { display: 'block', opacity: 1 } }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="size-4 stroke-primary-600"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </motion.div>
    </motion.button>
  );
}
