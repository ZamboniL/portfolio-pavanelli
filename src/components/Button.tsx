import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'flex h-10 w-full items-center justify-center rounded-full bg-white font-bold md:w-fit md:bg-white/5 md:px-5 md:py-3',
        className
      )}
    >
      <p className="from-primary-500 from-[-40%] to-white bg-clip-text font-semibold text-primary-600 md:bg-gradient-to-r md:text-transparent">
        {children}
      </p>
    </button>
  );
}
