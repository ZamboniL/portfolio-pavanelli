const SpeechBubble = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="278"
    height="132"
    viewBox="0 0 278 132"
    fill="none"
    className={className}
  >
    <path
      d="M0 10C0 4.47715 4.47715 0 10 0H268C273.523 0 278 4.47715 278 10V122C278 127.523 273.523 132 268 132H139.533H42.4282C41.1383 132 39.8606 131.75 38.6655 131.265L6.23726 118.095C2.4665 116.564 0 112.9 0 108.83V10Z"
      fill="#222222"
    />
    <rect x="8" y="7" width="245" height="100" rx="5" fill="white" />
  </svg>
);

export default SpeechBubble;
