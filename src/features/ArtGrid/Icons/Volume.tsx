import { useEffect, useState } from "react";

const Volume = ({ className }: { className?: string }) => {
  const [left, setLeft] = useState({ enabled: false, value: 0 });
  const [right, setRight] = useState({ enabled: false, value: 0 });

  const handleMouseMove = ({ movementY }: MouseEvent) => {
    if (left.enabled) {
      let value = left.value + movementY;
      if (value > 135) return;
      if (value < -14) return;
      setLeft((state) => ({ ...state, value: left.value + movementY }));
    }
    if (right.enabled) {
      let value = right.value + movementY;
      if (value > 48) return;
      if (value < -101) return;
      setRight((state) => ({ ...state, value: right.value + movementY }));
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setLeft((state) => ({ ...state, enabled: false }));
      setRight((state) => ({ ...state, enabled: false }));
    };

    window.addEventListener("mouseup", handleMouseUp);

    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  if (typeof document !== "undefined") document.onmousemove = handleMouseMove;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="73"
      height="170"
      viewBox="0 0 73 170"
      fill="none"
      className={className}
    >
      <rect x="10" width="10" height="170" fill="#222222" />
      <rect
        onMouseDown={() => setLeft((state) => ({ ...state, enabled: true }))}
        x="2.5"
        y={17.5 + left.value}
        width="25"
        height="15"
        rx="5.5"
        fill="white"
        stroke="#222222"
        strokeWidth="5"
        id="left"
      />
      <rect x="53" width="10" height="170" fill="#222222" />
      <rect
        onMouseDown={() => setRight((state) => ({ ...state, enabled: true }))}
        x="45.5"
        y={104.5 + right.value}
        width="25"
        height="15"
        rx="5.5"
        fill="white"
        stroke="#222222"
        strokeWidth="5"
        id="right"
      />
    </svg>
  );
};

export default Volume;
