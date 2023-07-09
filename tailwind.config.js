/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
    screens: {
      lg: "1024px",
      // => @media (min-width: 1024) { ... }

      md: "768px",
      // => @media (min-width: 768) { ... }

      sm: "320px",
      // => @media (min-width: 320) { ... }
    },
  },
  plugins: [],
};
