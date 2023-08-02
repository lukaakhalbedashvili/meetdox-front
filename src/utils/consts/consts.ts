const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')

export const API_URL = isProd
  ? 'https://tipppbackkk.onrender.com/api'
  : 'http://localhost:8000/api'

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Saturday',
]
