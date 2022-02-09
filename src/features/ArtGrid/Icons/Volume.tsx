const Volume = ({ className }: { className?: string }) => (
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
      x="2.5"
      y="17.5"
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
      x="45.5"
      y="104.5"
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

export default Volume;
