import { defineConfig } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  darkMode: 'class', // enable manual light/dark switching via a "dark" class on <html> or <body>
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * colors are driven by CSS variables so that toggling light/dark
       * themes does not require rewriting every utility class.  Default
       * (root) values are the existing dark palette; a ".light" class can
       * be applied to switch the variables for a light theme.  Forms remain
       * untouched by Tailwind and continue using the hard‑coded values in
       * style.css (see .input-field below).
       */
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        card: 'var(--color-card)',
        'card-hover': 'var(--color-card-hover)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          secondary: 'var(--color-accent-secondary)',
          tertiary: 'var(--color-accent-tertiary)',
          success: 'var(--color-accent-success)',
          warning: 'var(--color-accent-warning)',
          error: 'var(--color-accent-error)',
        },
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        soft: 'var(--color-soft)',
        border: 'var(--color-border)',
        'border-light': 'var(--color-border-light)',
        status: {
          open: 'var(--color-status-open)',
          progress: 'var(--color-status-progress)',
          completed: 'var(--color-status-completed)',
          pending: 'var(--color-status-pending)',
          cancelled: 'var(--color-status-cancelled)',
        },
      },
      fontFamily: {
        'display': ['Syne', 'Inter', 'sans-serif'],
        'sans': ['DM Sans', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(200, 245, 62, 0.25)',
        'glow-sm': '0 0 10px rgba(200, 245, 62, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'gradient': 'gradient-shift 8s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 0 0 var(--color-accent)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 20px 5px var(--color-accent)' },
        },
        'slide-up': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
})