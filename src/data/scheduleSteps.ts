import {
  ScheduleSteps,
  ScheduleStepStatus,
} from '@/components/Dashboard/dashboard.interface'
import { ScheduledMeetStructure } from '@/reactQuery/getMyMeetings/getUserData.interface'

export const scheduleSteps: ScheduleSteps = {
  meetingsAsClient: {
    scheduledByUser: {
      title1: 'You have scheduled this meeting',
      title2: 'Waiting teacher for confirmation...',
      buttonRed: 'Cancel',
      buttonGreen: '',
      onButtonRedClick: ScheduleStepStatus.CANCELED_BY_USER,
      onButtonGreenClick: '',
    },
    canceledByUser: {
      title1: 'You have canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    canceledByTeacher: {
      title1: 'Teacher has canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    confirmedByTeacher: {
      title1: 'Teacher has confirmed this meeting',
      title2: 'Waiting for your payment...',
      buttonRed: 'Cancel',
      buttonGreen: 'Pay',
      onButtonRedClick: ScheduleStepStatus.CANCELED_BY_USER,
      onButtonGreenClick: (meeting: ScheduledMeetStructure) => {
        window.open(meeting.paymentDetails.transactionUrl, '_blank')
      },
    },
    paidByUser: {
      title1: 'Scheduled Successfully',
      title2: 'Wait date and time of meeting...',
      buttonRed: '',
      buttonGreen: 'Join',
      onButtonRedClick: '',
      onButtonGreenClick: (meeting: ScheduledMeetStructure) => {
        window.open(meeting.hangoutLink, '_blank')
      },
    },
    completed: {
      title1: 'Meeting completed',
      title2: '',
      buttonRed: 'Refund',
      buttonGreen: 'Rate',
      onButtonRedClick: (setIsRefundPopupOpen: Function) => {
        setIsRefundPopupOpen()
      },
      onButtonGreenClick: (setIsRatePopupOpen: Function) => {
        setIsRatePopupOpen()
      },
    },
    refundAsked: {
      title1: 'Refund asked by client',
      title2: 'Waiting for moderators review and decision...',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    reviewed: {
      title1: 'This meet is reviewed by client',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    expired: {
      title1: 'Meeting expired',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
  },
  meetingsAsTeacher: {
    scheduledByUser: {
      title1: 'User have scheduled this meeting',
      title2: 'Waiting for your confirmation...',
      buttonRed: 'Cancel',
      buttonGreen: 'Confirm',
      onButtonRedClick: ScheduleStepStatus.CANCELED_BY_TEACHER,
      onButtonGreenClick: ScheduleStepStatus.CONFIRMED_BY_TEACHER,
    },
    canceledByUser: {
      title1: 'User has canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    canceledByTeacher: {
      title1: 'You have canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    confirmedByTeacher: {
      title1: 'You have confirmed this meeting',
      title2: 'Waiting for user payment...',
      buttonRed: 'Cancel',
      buttonGreen: '',
      onButtonRedClick: ScheduleStepStatus.CANCELED_BY_TEACHER,
      onButtonGreenClick: '',
    },
    paidByUser: {
      title1: 'Scheduled Successfully',
      title2: 'Wait date and time of meeting...',
      buttonRed: '',
      buttonGreen: 'Join',
      onButtonRedClick: '',
      onButtonGreenClick: (meeting: ScheduledMeetStructure) => {
        window.open(meeting.hangoutLink, '_blank')
      },
    },
    completed: {
      title1: 'Meeting completed',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    refundAsked: {
      title1: 'Refund asked by client',
      title2: 'Waiting for moderators review and decision...',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    reviewed: {
      title1: 'This meet is reviewed by client',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
    expired: {
      title1: 'Meeting expired',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: '',
      onButtonGreenClick: '',
    },
  },
}
