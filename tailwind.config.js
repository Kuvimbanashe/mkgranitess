/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9b9e61',
        secondary: '#9a8a65',
        tertiary: '#74694d',
        'ash-white': '#f5f5f5',
      },
    },
  },
  plugins: [],
}