import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arrow_svg__a)">
      <path
        fill="#000"
        d="M18.2 15.937a.75.75 0 0 1-.812-.682l-.674-7.706-9.442 11.253a.75.75 0 1 1-1.15-.965l9.443-11.252-7.706.674a.75.75 0 0 1-.13-1.495l9.509-.832a.75.75 0 0 1 .813.682l.832 9.51a.75.75 0 0 1-.682.813"
      />
    </g>
    <defs>
      <clipPath id="arrow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrow;
