/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'var(--canvas)',
          raised: 'var(--canvas-raised)',
          surface: 'var(--canvas-surface)',
        },
        line: 'var(--line)',
        ink: {
          DEFAULT: 'var(--ink)',
          dim: 'var(--ink-dim)',
          faint: 'var(--ink-faint)',
        },
        signal: {
          DEFAULT: '#7c8cff',
          soft: '#a78bfa',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '36px 36px',
      },
    },
  },
  plugins: [],
}
