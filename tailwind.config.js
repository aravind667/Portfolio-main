/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#e50914',
        'netflix-dark': '#141414',
        'netflix-gray': '#333333',
        'apple-blue': '#007aff',
        'apple-gray': '#f5f5f7',
        'dark-bg': '#0f0f0f',
        'dark-surface': '#1a1a1a',
        'dark-card': '#2a2a2a',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'typing': 'typing 2s steps(20, end), blink 0.8s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'white' },
        },
      },
    },
  },
  plugins: [],
}