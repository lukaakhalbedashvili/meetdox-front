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

export { getTimeAgo }
