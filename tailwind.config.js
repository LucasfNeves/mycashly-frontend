/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
        },
        primaryBlue: {
          50: '#E9F0FA',
          100: '#BCD0F0',
          200: '#9BB9E9',
          300: '#6E98DF',
          400: '#5185D9',
          500: '#2666CF',
          600: '#235DBC',
          700: '#1B4893',
          800: '#153872',
          900: '#102B57',
        },
        darkBlue: {
          DEFAULT: '#0E192C'
        },
      },
    },
  },
  plugins: [],
}
