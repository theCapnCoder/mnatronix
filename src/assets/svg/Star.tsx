import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.103.817a1 1 0 0 1 1.794 0l1.96 3.972a1 1 0 0 0 .753.547l4.386.641a1 1 0 0 1 .553 1.706l-3.172 3.09a1 1 0 0 0-.288.885l.748 4.365a1 1 0 0 1-1.45 1.054l-3.922-2.062a1 1 0 0 0-.93 0l-3.921 2.062a1 1 0 0 1-1.451-1.054l.748-4.365a1 1 0 0 0-.288-.885L.451 7.683a1 1 0 0 1 .553-1.706l4.386-.641a1 1 0 0 0 .752-.547z"
    />
  </svg>
);
export default SvgStar;
