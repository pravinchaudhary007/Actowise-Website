/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/**/**/**/**/**/*.{js,jsx,ts,tsx}',  
    "./index.html",        
  ],
  theme: {
    extend: {
      keyframes: {
        reverseSpin: {
          '0%': { transform: 'rotate(360deg) scale(0.2)' },   // Start at 360° rotation, 10% scale
          '50%': { transform: 'rotate(180deg) scale(1)' },     // At 50%, rotate to 180° and scale to 100%
          '100%': { transform: 'rotate(0deg) scale(0.2)' }, 
        },
      },
      animation: {
        'reverse-spin': 'reverseSpin 3s linear infinite',
      },
      backgroundImage: {
        'main': "url('./src//assets//main.jpg')", 
      },
    },
  },
  plugins: [],
}