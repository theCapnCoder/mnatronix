import type { Config } from "tailwindcss";
import fluid, { extract, fontSize } from "fluid-tailwind";

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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black": "282828",
        "black-1": "100F0F",
        "bg": "F7F7F7",
        "grey": "EAEAEA",
        "grey-1": "DFDFDF",
        "grey-2": "A2A2A2",
        "grey-3": "A0A0A0",
        "grey-4": "3E3B3B",
      },
    },
    fluid: () => ({
      defaultScreens: ["20rem", "90rem"],
    }),
  },
  plugins: [fluid],
} satisfies Config;
