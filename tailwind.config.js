/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "pulse-medium": "pulse 3.5s ease-in-out infinite",
        "pulse-fast": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
