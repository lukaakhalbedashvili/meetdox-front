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
      black: '#000000',
      white: '#ffffff',

      sky: '#427ef6',
      gray: '#f8f8fa',
      border_gray: '#ebebf1',
    },
  },
  plugins: [],
}
