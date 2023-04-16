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
      border_gray: '#dae1e7',
      error: '#ff0000',
      text_gray: '#414755',
      success_border_green: '#2D8A39',
      success_body_green: '#f0faf0',
      info_icon_blue: '#437EF7',
      info_notification_bg: '#f5faff',
      info_notification_border: '#648EF7',
      warning_icon_yellow: '#FFAE43',
      warning_bg_yellow: '#fff8ec',
      warning_border_yellow: '#EEA23E',
      error_icon_red: '#F04438',
      error_bg_red: '#fef7f6',
      error_border_red: '#FEB8AE',
      icon_gray: '#5F6D7E',
      teacher_template_border: '#EAEBF0',
      star_gold: '#ffbe5b',
      empty_gray: '#eeeef0',
      lite: '#ccccce',
      footer_blue: '#151b28',
      footer_text: '#9ea4b3',
      footer_blue_lite: '#2d3544',
      disable_gray: '#9ba3af',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
