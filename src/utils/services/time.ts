import { timeZones } from '@/data/timeZones'
import { UnavailableTimeSlots } from '../api/fetchTeacherUnavailableTimeSlots'

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

const getRemainingTimeSlots = (selectedTimeOffset: string) => {
  const offset = timeZones.find((item) => item.text === selectedTimeOffset)
    ?.offset!

  const now = new Date()

  const offsetMillis = offset * 60 * 60 * 1000
  const userOffset = new Date().getTimezoneOffset() * -60 * 1000

  const daySelected = new Date(now.getTime() + offsetMillis - userOffset)
  return daySelected
}

const get24Hours = (
  daySelected: Date,
  unavailableTimeSlots: UnavailableTimeSlots[]
) => {
  const TimeRange = []

  const myCurrentTime = new Date()

  const month = daySelected.getMonth() + 1
  const day = daySelected.getDate()
  const year = daySelected.getFullYear()

  const selectedTime = [month, day].join('/')

  const nowTimeBackendFormat = [day, month, year].join('-')

  const isITToday =
    selectedTime ===
    [myCurrentTime.getMonth() + 1, myCurrentTime.getDate()].join('/')

  const startTime = isITToday ? daySelected.getHours() + 2 : 1

  const unavailableTimeSlotsToday = unavailableTimeSlots
    .filter((item) => item.date === nowTimeBackendFormat)
    .map((item) => item.time)

  for (let i = startTime; i <= 24; i++) {
    let isUnavailable = unavailableTimeSlotsToday.includes(i)

    !isUnavailable &&
      TimeRange.push({
        value: i,
        isChosen: i === startTime,
      })
  }

  return TimeRange
}

function formatScheduledDate(
  dateString: string,
  hour: number,
  timeZoneOffset: number
) {
  const [day, month, year] = dateString.split('-').map(Number)
  const inputDate = new Date(year, month - 1, day, hour)

  const userOffset = new Date().getTimezoneOffset() * 60 * 1000
  const inputOffset = timeZoneOffset * 60 * 60 * 1000

  const convertedTime = new Date(inputDate.getTime() - inputOffset - userOffset)

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  const formatter = new Intl.DateTimeFormat('en-US', options)
  const formattedDate = formatter.format(convertedTime)

  return formattedDate
}

function convertToLocalTime(date: string, hour: number, offset: number) {
  const [day, month, year] = date.split('-').map(Number)
  const inputDate = new Date(year, month - 1, day, hour)

  const userOffset = new Date().getTimezoneOffset() * 60 * 1000
  const inputOffset = offset * 60 * 60 * 1000

  const convertedTime = new Date(inputDate.getTime() - inputOffset - userOffset)

  const localTimeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  }

  const formattedDateTime = convertedTime.toLocaleString(
    'en-US',
    localTimeOptions
  )
  return `${formattedDateTime}`
}

function isMeetTimeExpired(
  dateStr: string,
  time: number,
  durationInMinutes: number,
  timezoneOffset: number
): boolean {
  const parsedDate = new Date(
    formatScheduledDate(dateStr, time, timezoneOffset)
  )

  // Get the parsed time components
  const parsedTime = convertToLocalTime(dateStr, time, timezoneOffset).split(
    ':'
  )
  const minutes = parseInt(parsedTime[1])

  // Set the hour and minutes on the parsedDate
  parsedDate.setHours(time)
  parsedDate.setMinutes(minutes)

  const expirationTime = new Date(
    parsedDate.getTime() + durationInMinutes * 60000
  )

  const currentDate = new Date()
  return expirationTime <= currentDate
}

export {
  getTimeAgo,
  get24Hours,
  formatScheduledDate,
  convertToLocalTime,
  isMeetTimeExpired,
  getRemainingTimeSlots,
}
