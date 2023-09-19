/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "xxs": "280px",
      "xs": "520px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
    },
    backgroundImage: {
      "hero-background": `url('../public/assets/header_bg.png')`,
    },
    keyframes: {
      fade: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      fade: "fade .5s ease-in-out",
    },
    extend: {},
  },
  plugins: [],
};
