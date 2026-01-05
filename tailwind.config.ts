import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    '!./src/**',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#7B68EE',
        accent: '#00C896',
        neutral: {
          DEFAULT: '#F5F7FA',
          100: '#FFFFFF',
          200: '#F5F7FA',
          800: '#4A5568',
          900: '#1A2332',
        },
        'deep-navy': '#1A2332',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
