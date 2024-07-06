/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: 'rgb(152, 162, 179)',
        primary: 'rgb(23, 23, 33)',
        primaryBg: 'rgb(28, 28, 40)',
        secondary: 'rgb(34, 34, 48)',
      },
    },
  },
  plugins: [],
};
