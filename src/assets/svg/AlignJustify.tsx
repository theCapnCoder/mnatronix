import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignJustify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M3 12h17M3 18h17M3 6h17"
    />
  </svg>
);
export default SvgAlignJustify;
