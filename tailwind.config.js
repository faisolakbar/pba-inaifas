/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      main: '#238764',
      second: '#002f30',
      orange: '#f46f47',
      white: '#ffffff',
      red: '#dc2626',
      link: '#0000EE',
      transparan: 'transparent',
      slate800: '#1e293b',
      slate700: '#334155',
      slate600: '#475569',
      slate500: '#64748b',
      slate400: '#94a3b8',
      slate200: '#e2e8f0',
      slate100: '#f1f5f9',
      slate50: '#f8fafc'
    },
    extend: {
      fontFamily:{
        roboto:  "'Roboto', sans-serif"
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      }
    },
    corePlugins:{
      aspectRatio: false,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
