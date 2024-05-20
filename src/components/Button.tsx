import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center w-full bg-white rounded-full font-bold h-10 md:w-fit md:px-5 md:py-3 md:bg-white/5",
        className
      )}
    >
      <p className="bg-clip-text text-primary-600 font-semibold md:text-transparent md:bg-gradient-to-r from-primary-500 from-[-40%] to-white">
        {children}
      </p>
    </button>
  );
}
