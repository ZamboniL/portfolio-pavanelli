import { SVGProps } from "react";

const Close = (rest: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    {...rest}
  >
    <path
      d="M15.9999 15.9999L2 2"
      stroke="#222222"
      stroke-width="2.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 2L2 16"
      stroke="#222222"
      stroke-width="2.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Close;
