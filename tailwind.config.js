/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "bg-color": "#2C7973",
      "wlc-color": "#D7FFFF",
      "bg-while": "#FFFFFF",
      "txt-color": "#000000",
      "bg-gold": "#FAB24B",
      "txt-gold": "#FAB24B",
      "input-border": "#675E5E",
    },
  },
  plugins: [],
};
