const isProd = process.env.NODE_ENV === 'production'

export const API_URL = isProd
  ? 'https://meetdoxxx-269708a18044.herokuapp.com/api'
  : 'https://meetdoxxx-269708a18044.herokuapp.com/api'

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
