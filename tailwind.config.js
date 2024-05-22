/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./lib/components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["nativewind/plugin"],
};
