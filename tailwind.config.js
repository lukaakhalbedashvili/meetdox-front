/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['var(--ubuntu)'],
      },
      zIndex: {
        '-1': '-1',
        1: '1',
      },
    },
    colors: {
      transparent: 'transparent',
      vannila: '#fffff5',
      lime: '#dafc3b',
      caramel: '#fdeeb9',
      sky: '#a3e8fe',
      bubblegum: '#ffbce5',
      peach: '#fcccb8',
      grape: '#7249ef',
      black: '#000000',
    },
  },
  plugins: [],
}
