import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="w-full bg-white text-violet-700 rounded-full font-bold h-10">
      {children}
    </button>
  );
}
