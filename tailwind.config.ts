import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        head: ['var(--font-head)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: '#F0E6D2',
        'bg-soft': '#F7F0DF',
        paper: '#FBF6EC',
        ink: '#2A2218',
        gold: '#B8995A',
        'gold-soft': '#D9C18A',
        'ink-soft': 'rgba(42, 34, 24, 0.62)',
        'ink-faint': 'rgba(42, 34, 24, 0.38)',
        'gold-rule': 'rgba(184, 153, 90, 0.45)',
        rule: 'rgba(42, 34, 24, 0.18)',
      },
    },
  },
  plugins: [],
}
export default config
