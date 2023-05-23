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

  const startTime = isITToday ? now.getHours() + 1 : 1

  for (let i = startTime; i <= 24; i++) {
    TimeRange.push({ value: i, isChosen: false })
  }
  return TimeRange
}

export { getTimeAgo, get24Hours }
