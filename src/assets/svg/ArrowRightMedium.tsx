import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M5 12h14m0 0-7-7m7 7-7 7"
    />
  </svg>
);
export default SvgArrowRightMedium;
