/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
