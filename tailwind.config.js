const { Poppins, Raleway, Josefin_Sans } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        fadeIn: 'animate-fadeIn',
        slide: 'slide 15s infinite'
      },
      keyframes: {
        slide: {
          '0%': { left: '0' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'poppins-bold': ['Poppins', 'sans-serif', 'bold'],
        Josefin_Sans: ['josefin', 'sans-serif'],
        raleway: ['Raleway', 'serif'],
      },
    },
  },
  plugins: [
    // Add other plugins as needed
    require('@tailwindcss/typography'),
  ],
};
