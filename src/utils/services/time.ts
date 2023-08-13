const getTimeAgo = (timeMs: number) => {
  const now = Date.now()
  const diff = now - timeMs
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour

  if (diff < minute) {
    return 'Just now'
  } else if (diff < hour) {
    const minutesAgo = Math.floor(diff / minute)
    return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`
  } else if (diff < day) {
    const hoursAgo = Math.floor(diff / hour)
    return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`
  } else {
    const daysAgo = Math.floor(diff / day)
    return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`
  }
}

const get24Hours = (daySelected: Date) => {
  const TimeRange = []

  const month = daySelected.getMonth() + 1
  const day = daySelected.getDate()
  const selectedTime = [month, day].join('/')

  const now = new Date()

  const monthNow = now.getMonth() + 1
  const dayNow = now.getDate()
  const nowTime = [monthNow, dayNow].join('/')

  const isITToday = selectedTime === nowTime

  const startTime = isITToday ? now.getHours() + 2 : 1

  for (let i = startTime; i <= 24; i++) {
    TimeRange.push({ value: i, isChosen: i === startTime ? true : false })
  }
  return TimeRange
}

function formatScheduledDate(dateString: string, timeZoneOffset: number) {
  const parts = dateString.split('-')
  const day = parseInt(parts[0])
  const month = parseInt(parts[1]) - 1 // Months are zero-based in JavaScript
  const year = parseInt(parts[2])

  const date = new Date(year, month, day)
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000
  const convertedTime = new Date(utcTime + timeZoneOffset * 3600000)

  const formattedDate = convertedTime.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return formattedDate
}

function convertToLocalTime(hour: number, offset: number) {
  const currentOffsetInMinutes = new Date().getTimezoneOffset()
  const offsetInMinutes = offset * 60

  const localHour = hour + (currentOffsetInMinutes + offsetInMinutes) / 60
  const localOffset = currentOffsetInMinutes / -60

  return `${localHour}:00 (GMT${localOffset > 0 ? '+' : '-'}${localOffset})`
}

function isMeetTimeExpired(
  dateStr: string,
  time: number,
  durationInMinutes: number
) {
  var dateComponents = dateStr.split('-')
  var day = parseInt(dateComponents[0])
  var month = parseInt(dateComponents[1]) - 1
  var year = parseInt(dateComponents[2])

  var targetDate = new Date(year, month, day, time, 0, 0)

  var expirationTime = new Date(
    targetDate.getTime() + durationInMinutes * 60000
  )

  var currentDate = new Date()

  return expirationTime <= currentDate
}

export {
  getTimeAgo,
  get24Hours,
  formatScheduledDate,
  convertToLocalTime,
  isMeetTimeExpired,
}
