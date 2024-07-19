/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}