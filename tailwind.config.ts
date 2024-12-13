import type { Config } from "tailwindcss";
import fluid, { extract, fontSize as baseFontSize } from "fluid-tailwind";
import { fontFamily } from "tailwindcss/defaultTheme";

const createClamp = (min: number, max: number) =>
  `clamp(${min}px, calc((${max} - ${min}) * ((100vw - 375px) / (1920 - 375)) + ${min}px), ${max}px)`;

const fontSize = {
  ...baseFontSize,
  xxs: createClamp(16, 18),
  xs: "18px",
  s: createClamp(16, 24),
  m: createClamp(20, 28),
  l: createClamp(18, 32),
  xl: createClamp(22, 40),
  xxl: createClamp(28, 70),
};

export default {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    fontSize,
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#282828",
        "black-1": "#100F0F",
        bg: "#F7F7F7",
        grey: "#EAEAEA",
        "grey-1": "#DFDFDF",
        "grey-2": "#A2A2A2",
        "grey-3": "#A0A0A0",
        "grey-4": "#3E3B3B",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    fluid: () => ({
      defaultScreens: ["23.4375rem", "120rem"],
    }),
  },
  plugins: [fluid],
} satisfies Config;
