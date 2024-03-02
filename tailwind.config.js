/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
    },
    extend: {
      colors: {
        'primary' : '#0583F2',
        'secondary' : '#164773',
        'three' : '#188FD9',
        'four' : '#BF9663',
        'five' : '#F2F2F2',
        'bc': 'rgba(255,255,255,.1)',
        'white-50': 'rgba(255,255,255,.5)',
        "black": "#272425"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}