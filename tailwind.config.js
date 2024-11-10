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
        },pulses: {
          '0%': { transform: ' scale(.5)' },  
          '50%': { transform: ' scale(1)' },     
          '100%': { transform: ' scale(.5)' }, 
        },
      },
      animation: {
        'reverse-spin': 'reverseSpin 3s linear infinite',
        pulses: 'pulse 2s ease-in-out infinite', 
      },
      backgroundImage: {
        'main': "url('./src//assets//main.jpg')", 
        'linear-blur': 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 2px, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)',
      }, filter: {
        'blur-1': 'blur(1px)',
      },
    },
  },
  plugins: [],
}