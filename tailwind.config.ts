import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#A866FF',
          500: '#6f00ff',
          600: '#7218E5',
          700: '#421592',
          900: '#101010'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-tag':
          'radial-gradient(50% 75% at 50% 0%,rgba(255,255,255,.1) 0%,rgb(0,0,0) 98.5%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        main: '20px',
        small: '10px'
      },
      width: {
        '8xl': '1360px'
      },
      maxWidth: {
        '8xl': '1360px'
      }
    }
  },
  plugins: []
};
export default config;
