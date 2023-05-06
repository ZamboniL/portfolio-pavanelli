import { SVGProps } from "react";

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 18" width="24" height="18" fill="white" {...props}>
      <rect y="0" width="24" height="2" rx="2"></rect>
      <rect y="8" width="24" height="2" rx="2"></rect>
      <rect y="16" width="24" height="2" rx="2"></rect>
    </svg>
  );
};

export default HamburgerIcon;
