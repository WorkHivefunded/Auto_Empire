/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#c7c7cf',
          400: '#a1a1ad',
          500: '#777783',
          600: '#50505b',
          700: '#34343c',
          800: '#24242b',
          850: '#1b1b21',
          900: '#131318',
          950: '#0b0b0f',
        },
        brand: { 300: '#ff8f8f', 400: '#ff6666', 500: '#f04444', 600: '#d92d2d', 700: '#b42323' },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'],
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(240, 68, 68, .25)',
        card: '0 8px 30px rgba(0,0,0,.2)',
        'card-hover': '0 12px 40px rgba(0,0,0,.3)',
      },
    },
  },
  plugins: [],
};
