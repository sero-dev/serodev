const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      height: {
        page: 'calc(100vh - 2.5rem)',
        nav: '2.5rem',
      },
      colors: {
        red: {
          50: '#F5F5F5',
          100: '#EEECEC',
          200: '#E3CECE',
          300: '#E0AEAE',
          400: '#E18989',
          500: '#F05454', // Key
          600: '#CD3737',
          700: '#8B3636',
          800: '#512F2F',
          900: '#231F1F',
          950: '#0F0F0F',
        },
        blue: {
          50: '#EBF0F5',
          100: '#D6E0EA',
          200: '#AEC2D6',
          300: '#85A3C1',
          400: '#5D85AC',
          500: '#456687',
          600: '#30475E', // Key
          700: '#243647',
          800: '#18242F',
          900: '#0C1218',
          950: '#05080A',
        },
        gray: {
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#DDDDDD', // Key
          300: '#C2C2C2',
          400: '#A6A6A6',
          500: '#8A8A8A',
          600: '#6E6E6E',
          700: '#545454',
          800: '#383838',
          900: '#1C1C1C',
          950: '#0D0D0D',
        },
      },
    },
  },
  plugins: [],
};
