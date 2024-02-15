/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#165FF2',
        'secondary' : '#165FF2',
        'green-one' : '#3574F2',
        'green-two' : '#558C03',
        'green-three' : '#A2D92B'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}