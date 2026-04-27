/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        
        brand: {
          red: '#E42327',
          navy: '#003652',
          navyDark: '#001a29',
        },
        
        primary: {
          DEFAULT: '#E42327', 
          dark: '#b91c1c',
        },
        secondary: {
          DEFAULT: '#003652', 
        },
        
        slate: {
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          green: '#22C55E',
        },
        border: 'rgba(255, 255, 255, 0.1)', 
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'status-ping': 'pulse-red 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-red': {
          '0%': { boxShadow: '0 0 0 0 rgba(228, 35, 39, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(228, 35, 39, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(228, 35, 39, 0)' },
        }
      }
    },
  },
  plugins: [],
}