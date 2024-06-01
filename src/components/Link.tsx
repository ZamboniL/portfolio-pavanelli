'use client';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { default as NextLink } from 'next/link';

interface LinkProps {
  className?: string;
  active?: boolean;
  href: string;
  children?: React.ReactNode;
}

export default function Link({ className, active, href, children }: LinkProps) {
  return (
    <motion.div
      className={twMerge('transition-all', className)}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: active ? 1 : 0.5 }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1, ease: 'anticipate' }}
    >
      <NextLink className="text-inherit" href={href}>
        {children}
      </NextLink>
    </motion.div>
  );
}
