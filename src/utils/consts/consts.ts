const isProd = process.env.NODE_ENV === 'production'

export const API_URL = isProd
  ? 'https://meetdox-server-86cca615c2af.herokuapp.com/api'
  : 'https://meetdox-server-86cca615c2af.herokuapp.com/api'

//http://localhost:8000/api

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
