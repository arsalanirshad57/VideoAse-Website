import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1c1f24
      colors: {
        'bg-color': '#0a0a0a',
        'bg-colorTwo': '#18191D',
        'blue': '#018ec4',
        'text-color': '#a4a7b1',
        'white': '#ffffff',
      },
      fontSize: {
        '3xl': ['65px', {
          letterSpacing: '2px',
          fontWeight: '800',
        }],
        '2xl': '51px',
        // lineHeight: '1.2rem',
        //   fontWeight: '700',
        'xl': '48px',
        // fontWeight: '500',
        'lg': '17px',
        // lineHeight: '2.25rem',
        // letterSpacing: '7px',
        // fontWeight: '300',
        'md': "16px",
        // fontWeight: '300',
        'sm': '',
        'span': '13px'
      },
      Width: {
        "container": "1200px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-br': ' linear-gradient(to right top, #00d4ff, #00c7f5, #00b9ea, #00acdf, #009fd4, #0a8cc1, #117aae, #14689b, #164d7c, #12345d, #0a1d3f, #020024)',

      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
export default config;
