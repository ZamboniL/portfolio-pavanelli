import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      {...props}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 12 7 7m5 5 5 5m-5-5 5-5m-5 5-5 5"
      />
    </svg>
  );
};

export default CloseIcon;