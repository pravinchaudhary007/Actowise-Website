
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/**/**/**/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        reverseSpin: {
          "0%": { transform: "rotate(360deg) scale(0.2)" }, 
          "50%": { transform: "rotate(180deg) scale(1)" }, 
          "100%": { transform: "rotate(0deg) scale(0.2)" },
        },
        pulses: {
          "0%": { transform: " scale(.5)" },
          "50%": { transform: " scale(1)" },
          "100%": { transform: " scale(.5)" },
        },
        'pulse-smooth': {
          '0%': { transform: 'scaleX(0.7) scaleY(0.4)', opacity: 1 }, // Start with smaller size, full opacity
          '100%': { transform: 'scaleX(1.2) scaleY(1.1)', opacity: 0 }, // End with larger size, full opacity
        },
      },
      animation: {
        "reverse-spin": "reverseSpin 3s linear infinite",
        pulses: "pulse 2s ease-in-out infinite",
        'pulse-smooth': 'pulse-smooth 3s ease-in-out 1s infinite',
      },
      backgroundImage: {
        main: "url('./src//assets//main.jpg')",
        "linear-blur":
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 2px, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
      },
      filter: {
        "blur-1": "blur(1px)",
      },
    },
  },
  plugins: [],
};
