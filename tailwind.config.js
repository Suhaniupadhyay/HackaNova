/** @type {import('tailwindcss').Config} */
export default {
    theme: {
      extend: {
        colors: {
          // backgrounds
          'ranger-bg': '#050816',
          'ranger-surface': '#0f1724',
  
          // power rangers style accents
          'ranger-red': '#ff1d25',
          'ranger-blue': '#0057ff',
          'ranger-yellow': '#ffd100',
          'ranger-pink': '#ff2bb5',
          'ranger-green': '#00e676',
          'ranger-black': '#111827',
        },
        borderRadius: {
          ranger: '14px',
        },
        boxShadow: {
          'ranger-glow': '0 0 25px rgba(0, 119, 255, 0.55)',
        },
      },
    },
    plugins: [],
  };
  