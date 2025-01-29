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
          DEFAULT: '#0E192C',
          700: '#0D172A',
          800: '#0A1220',
          900: '#080E19',

        },
        red: {
          50: '#fcedf0',
          100: '#f7c7cf',
          200: '#f3acb8',
          300: '#f3acb8',
          400: '#ea6f84',
          500: '#e54b65',
          600: '#d0445c',
          700: '#a33548',
          800: '#7e2938',
          900: '#60202a',
        }
      },
    },
  },
  plugins: [],
}
