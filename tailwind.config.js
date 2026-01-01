/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',      // Medical Blue
        secondary: '#7B68EE',    // DNA Helix Purple
        accent: '#00C896',        // Hope Green
        neutral: {
          DEFAULT: '#F5F7FA',   // Warm Grey
          100: '#FFFFFF',
          200: '#F5F7FA',
          800: '#4A5568',
          900: '#1A2332',
        },
        'deep-navy': '#1A2332',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
