/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-dim': '#131318',
        'surface': '#1a1a1f',
        'surface-bright': '#211f26',
        'surface-container-lowest': '#0f0d13',
        'surface-container-low': '#161318',
        'surface-container': '#1b1721',
        'surface-container-high': '#25202b',
        'surface-container-highest': '#2f2a35',
      },
    },
  },
  plugins: [],
}
