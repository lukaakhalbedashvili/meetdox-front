/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  ScheduleSteps,
  ScheduleStepStatus,
  ScheduleTypes,
} from '@/components/Dashboard/dashboard.interface'

export const scheduleSteps: ScheduleSteps = {
  [ScheduleTypes.MEETINGS_AS_CLIENT]: {
    [ScheduleStepStatus.SCHEDULED_BY_USER]: {
      title1: 'You have scheduled this meeting',
      title2: 'Waiting teacher for confirmation...',
      buttonRed: 'Cancel',
      buttonGreen: '',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.CANCELED_BY_USER]: {
      title1: 'You have canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.CANCELED_BY_TEACHER]: {
      title1: 'Teacher has canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.CONFIRMED_BY_TEACHER]: {
      title1: 'Teacher has confirmed this meeting',
      title2: 'Waiting for your payment...',
      buttonRed: 'Cancel',
      buttonGreen: 'Pay',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.PAID_BY_USER]: {
      title1: 'Scheduled Successfully',
      title2: 'Wait date and time of meeting...',
      buttonRed: '',
      buttonGreen: 'Join',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.COMPLETED]: {
      title1: 'Meeting completed',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
  },
  [ScheduleTypes.MEETINGS_AS_TEACHER]: {
    [ScheduleStepStatus.SCHEDULED_BY_USER]: {
      title1: 'You have scheduled this meeting',
      title2: 'Waiting for your confirmation...',
      buttonRed: 'Cancel',
      buttonGreen: 'Confirm',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.CANCELED_BY_USER]: {
      title1: 'User has canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.CANCELED_BY_TEACHER]: {
      title1: 'You have canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.CONFIRMED_BY_TEACHER]: {
      title1: 'You have confirmed this meeting',
      title2: 'Waiting for user payment...',
      buttonRed: 'Cancel',
      buttonGreen: '',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.PAID_BY_USER]: {
      title1: 'Scheduled Successfully',
      title2: 'Wait date and time of meeting...',
      buttonRed: '',
      buttonGreen: 'Join',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
    [ScheduleStepStatus.COMPLETED]: {
      title1: 'Meeting completed',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
      onButtonRedClick: (params: any) => {},
      onButtonGreenClick: (params: any) => {},
    },
  },
}
