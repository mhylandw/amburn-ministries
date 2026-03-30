/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        flame: {
          400: '#ff8c42',
          500: '#e8621a',
          600: '#c44f0e',
        },
        coal: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#252525',
          500: '#333333',
        },
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
