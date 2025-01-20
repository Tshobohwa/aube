/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1f9fa",
          100: "#daeef3",
          200: "#badde7",
          300: "#8ac3d6",
          400: "#52a1be",
          500: "#3785a3",
          600: "#306c8a",
          700: "#2d5971",
          800: "#2c4c5e",
          900: "#284151",
          950: "#182c3a",
        },
        secondary: {
          50: "#fffaeb",
          100: "#fff1c6",
          200: "#ffe088",
          300: "#ffca4a",
          400: "#ffb628",
        },
      },
    },
  },
  plugins: [],
};
