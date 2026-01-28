import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'space': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'bg-dark': '#0a0a0a',
        'text-main': '#e5e5e5',
      },
      animation: {
        'scroll-vertical': 'scroll-vertical 30s linear infinite',
        'drift': 'drift 8s ease-in-out infinite',
      },
      keyframes: {
        'scroll-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'drift': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(15px, 20px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
