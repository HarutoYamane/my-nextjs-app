import type { Config } from "tailwindcss";

export default {
  content: [
    // App Routerを使用するので、pagesは削除
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "720px",
      },
    },
    extend: {
      fontFamily: {
        atkinson: ["Atkinson", "sans-serif"],
      },
      colors: {
        primary: "#64b5f6",
        secondary: "#81c784",
        text: "#e0e0e0",
        background: "#121212",
        "card-bg": "#1e1e1e",
        "code-bg": "#24292e",
        caption: "#9e9e9e",
        accent: "#4d9fff",
        "accent-dark": "#000d8a",
      },
    },
  },
  plugins: [],
} satisfies Config;
