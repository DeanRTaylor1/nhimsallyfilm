/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Abel",
        "Helvetica",
        "Arial",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
      ],
    },
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "4rem 1fr 3rem",
      },
    },
  },
  plugins: [],
};
