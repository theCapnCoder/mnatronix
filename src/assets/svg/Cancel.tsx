import * as React from "react";
import type { SVGProps } from "react";
const SvgCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.281 18.22a.75.75 0 1 1-1.061 1.06L12 13.06l-6.219 6.22a.75.75 0 0 1-1.061-1.06L10.94 12 4.72 5.78A.75.75 0 1 1 5.78 4.72l6.22 6.22 6.219-6.22a.75.75 0 1 1 1.061 1.06L13.061 12z"
    />
  </svg>
);
export default SvgCancel;
