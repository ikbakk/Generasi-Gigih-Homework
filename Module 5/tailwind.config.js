/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#fbfbfbb3",
        primaryBlack: "#1e1e1e",
        secondaryBlack: "#2e2e2e",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
