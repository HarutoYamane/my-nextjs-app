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
      backgroundColor: {
        "gray-gradient": "rgba(229, 233, 240, 50%)",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(120deg, #4a4a4a 0%, #2b2b2b 100%)",
        "gradient-text": "linear-gradient(45deg, #64b5f6, #81c784)",
      },
      boxShadow: {
        custom:
          '0 2px 6px rgba(96, 115, 159, 0.25), 0 8px 24px rgba(96, 115, 159, 0.33), 0 16px 32px rgba(96, 115, 159, 0.33)',
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-in-out',
        scrolling: 'scrolling 1.5s ease-in-out infinite',
        // 2 つのアニメーションを同時に実行
        typing: 'typing 3.5s steps(40,end) forwards, blinkCaret 1s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrolling: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(25px)', opacity: '0' },
        },
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        blinkCaret: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#81c784' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
