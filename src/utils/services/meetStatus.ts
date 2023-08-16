import { ScheduleStepStatus } from '@/components/Dashboard/dashboard.interface'
import { ScheduledMeetStructure } from '@/reactQuery/getMyMeetings/getUserData.interface'
import { isMeetTimeExpired } from './time'

const isItSuccCompletedMeet = (meet: ScheduledMeetStructure) => {
  if (meet.status === ScheduleStepStatus.PAID_BY_USER) {
    if (isMeetTimeExpired(meet.date, meet.time, meet.duration, meet.timeZone)) {
      return true
    }
  }
}

const isItExpiredMeet = (meet: ScheduledMeetStructure) => {
  if (
    meet.status !== ScheduleStepStatus.CANCELED_BY_TEACHER &&
    meet.status !== ScheduleStepStatus.CANCELED_BY_USER &&
    meet.status !== ScheduleStepStatus.PAID_BY_USER &&
    isMeetTimeExpired(meet.date, meet.time, meet.duration, meet.timeZone)
  ) {
    return true
  }
}

const isItCanceledMeet = (meet: ScheduledMeetStructure) => {
  if (
    meet.status === ScheduleStepStatus.CANCELED_BY_TEACHER ||
    meet.status === ScheduleStepStatus.CANCELED_BY_USER
  ) {
    return true
  }
}

const isItCompletedMeet = (meet: ScheduledMeetStructure) => {
  if (
    isItSuccCompletedMeet(meet) ||
    isItCanceledMeet(meet) ||
    isItExpiredMeet(meet)
  ) {
    return true
  }
}

const isItCurrentMeet = (meet: ScheduledMeetStructure) => {
  if (
    !isItCanceledMeet(meet) &&
    !isItExpiredMeet(meet) &&
    !isItSuccCompletedMeet(meet)
  ) {
    return true
  }
}

export {
  isItSuccCompletedMeet,
  isItExpiredMeet,
  isItCanceledMeet,
  isItCompletedMeet,
  isItCurrentMeet,
}
