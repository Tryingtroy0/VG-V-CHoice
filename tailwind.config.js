/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1a3c2e',
          50: '#e6efe9',
          100: '#ccdfe0',
          200: '#99bfc1',
          300: '#669fa2',
          400: '#337f83',
          500: '#1a3c2e',
          600: '#153024',
          700: '#11241b',
          800: '#0c1812',
          900: '#060c09',
        },
        gold: {
          DEFAULT: '#c9a84c',
          50: '#faf8ed',
          100: '#f5f1db',
          200: '#ebe3b7',
          300: '#e0d593',
          400: '#d6c76f',
          500: '#c9a84c',
          600: '#a1872e',
          700: '#786322',
          800: '#4f4117',
          900: '#27200b',
        },
        cream: {
          DEFAULT: '#fefdf8',
          50: '#fefdf8',
          100: '#fdfbf0',
          200: '#fbf7e1',
          300: '#f9f3d2',
          400: '#f7efc3',
          500: '#f5ebb4',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
