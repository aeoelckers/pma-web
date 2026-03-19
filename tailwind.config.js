/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pma: {
          carbon: '#0f1115',
          steel: '#171b21',
          graphite: '#222833',
          sand: '#d6c5a2',
          copper: '#c46f2d',
          ash: '#97a1ad',
          line: '#313947',
        },
      },
      boxShadow: {
        panel: '0 24px 60px rgba(0, 0, 0, 0.28)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
