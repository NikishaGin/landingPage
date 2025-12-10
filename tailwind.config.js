/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5746AF',
          dark: '#3D3192',
        },
        secondary: {
          DEFAULT: '#1A1523',
          light: '#2A2438',
        }
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-blue)',
      }
    },
  },
  plugins: [],
};

// theme.js
