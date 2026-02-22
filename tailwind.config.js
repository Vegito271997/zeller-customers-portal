/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zeller: {
          primary: '#2563EB',
          primaryLight: '#DBEAFE',
        },
      },
    },
  },
  plugins: [],
};
