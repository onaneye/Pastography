/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'animate-fadeIn',
        slide: 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { left: '0' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'poppins-bold': ['Poppins', 'sans-serif', 'bold'],
        josefin_sans: ['Josefin Sans', 'sans-serif'],
        raleway: ['Raleway', 'serif'],
        mona: ['Mona Sans', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // Added Helvetica Neue
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
