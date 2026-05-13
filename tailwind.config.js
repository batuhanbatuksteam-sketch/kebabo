/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kebaboBg:      '#0f0f11',
        kebaboCard:    '#18181b',
        kebaboSurface: '#1f1f23',
        kebaboLine:    '#2a2a2f',
        anthra:        '#0a0a0c',
        // Amber / fire accent
        fire: {
          50:  '#fff8ed',
          100: '#ffefd4',
          200: '#fedb9d',
          300: '#fdc165',
          400: '#fb9b2d',
          500: '#f97d0d',
          600: '#ea5e03',
          700: '#c24305',
          800: '#9a3509',
          900: '#7c2d0c',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans:    ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'amber-gradient':  'linear-gradient(135deg, #92400e 0%, #f59e0b 50%, #92400e 100%)',
        'fire-gradient':   'linear-gradient(135deg, #7c2d12 0%, #ea580c 40%, #f97316 70%, #b45309 100%)',
        'ember-overlay':   'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.78) 100%)',
        'card-shine':      'linear-gradient(135deg, rgba(251,159,45,0.07) 0%, transparent 60%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'amber':      '0 4px 32px 0 rgba(245,158,11,0.20)',
        'amber-lg':   '0 8px 56px 0 rgba(245,158,11,0.28)',
        'card':       '0 8px 48px 0 rgba(0,0,0,0.40)',
        'card-hover': '0 16px 64px 0 rgba(0,0,0,0.55)',
        'inset-glow': 'inset 0 1px 0 rgba(251,159,45,0.12)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'  },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulse_slow: {
          '0%, 100%': { opacity: '1'   },
          '50%':      { opacity: '0.5' },
        },
        scanline: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)'  },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease both',
        'fade-up-d':  'fadeUp 0.7s 0.2s ease both',
        'fade-up-d2': 'fadeUp 0.7s 0.4s ease both',
        'shimmer':    'shimmer 2.8s linear infinite',
        'float':      'float 3.5s ease-in-out infinite',
        'pulse-slow': 'pulse_slow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
