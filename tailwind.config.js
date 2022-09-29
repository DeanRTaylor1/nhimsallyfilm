/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "4rem 1fr 3rem",
      },
    },
  },
  plugins: [],
};
