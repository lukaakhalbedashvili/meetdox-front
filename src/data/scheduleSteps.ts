import {
  ScheduleSteps,
  ScheduleStepStatus,
  ScheduleTypes,
} from '@/components/Dashboard/dashboard.interface'
import { ScheduleComponentStructureNames } from '../components/Dashboard/dashboard.interface'
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

export const scheduleSteps: ScheduleSteps = {
  [ScheduleTypes.MEETINGS_AS_CLIENT]: {
    [ScheduleStepStatus.SCHEDULED_BY_USER]: {
      [ScheduleComponentStructureNames.TITLE1]:
        'You have scheduled this meeting',
      [ScheduleComponentStructureNames.TITLE2]:
        'Waiting teacher for confirmation...',
      [ScheduleComponentStructureNames.BUTTON_RED]: 'Cancel',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]:
        ScheduleStepStatus.CANCELED_BY_USER,
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
    [ScheduleStepStatus.CANCELED_BY_USER]: {
      [ScheduleComponentStructureNames.TITLE1]:
        'You have canceled this meeting',
      [ScheduleComponentStructureNames.TITLE2]: '',
      [ScheduleComponentStructureNames.BUTTON_RED]: '',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
    [ScheduleStepStatus.CANCELED_BY_TEACHER]: {
      [ScheduleComponentStructureNames.TITLE1]:
        'Teacher has canceled this meeting',
      [ScheduleComponentStructureNames.TITLE2]: '',
      [ScheduleComponentStructureNames.BUTTON_RED]: '',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
    [ScheduleStepStatus.CONFIRMED_BY_TEACHER]: {
      [ScheduleComponentStructureNames.TITLE1]:
        'Teacher has confirmed this meeting',
      [ScheduleComponentStructureNames.TITLE2]: 'Waiting for your payment...',
      [ScheduleComponentStructureNames.BUTTON_RED]: 'Cancel',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: 'Pay',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]:
        ScheduleStepStatus.CANCELED_BY_USER,
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]:
        ScheduleStepStatus.PAID_BY_USER,
    },
    [ScheduleStepStatus.PAID_BY_USER]: {
      [ScheduleComponentStructureNames.TITLE1]: 'Scheduled Successfully',
      [ScheduleComponentStructureNames.TITLE2]:
        'Wait date and time of meeting...',
      [ScheduleComponentStructureNames.BUTTON_RED]: '',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: 'Join',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
    [ScheduleStepStatus.COMPLETED]: {
      [ScheduleComponentStructureNames.TITLE1]: 'Meeting completed',
      [ScheduleComponentStructureNames.TITLE2]: '',
      [ScheduleComponentStructureNames.BUTTON_RED]: '',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
  },
  [ScheduleTypes.MEETINGS_AS_TEACHER]: {
    [ScheduleStepStatus.SCHEDULED_BY_USER]: {
      [ScheduleComponentStructureNames.TITLE1]:
        'You have scheduled this meeting',
      [ScheduleComponentStructureNames.TITLE2]:
        'Waiting for your confirmation...',
      [ScheduleComponentStructureNames.BUTTON_RED]: 'Cancel',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: 'Confirm',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]:
        ScheduleStepStatus.CANCELED_BY_TEACHER,
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]:
        ScheduleStepStatus.CONFIRMED_BY_TEACHER,
    },
    [ScheduleStepStatus.CANCELED_BY_USER]: {
      [ScheduleComponentStructureNames.TITLE1]:
        'User has canceled this meeting',
      [ScheduleComponentStructureNames.TITLE2]: '',
      [ScheduleComponentStructureNames.BUTTON_RED]: '',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
    [ScheduleStepStatus.CANCELED_BY_TEACHER]: {
      [ScheduleComponentStructureNames.TITLE1]:
        'You have canceled this meeting',
      [ScheduleComponentStructureNames.TITLE2]: '',
      [ScheduleComponentStructureNames.BUTTON_RED]: '',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
    [ScheduleStepStatus.CONFIRMED_BY_TEACHER]: {
      [ScheduleComponentStructureNames.TITLE1]:
        'You have confirmed this meeting',
      [ScheduleComponentStructureNames.TITLE2]: 'Waiting for user payment...',
      [ScheduleComponentStructureNames.BUTTON_RED]: 'Cancel',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]:
        ScheduleStepStatus.CANCELED_BY_TEACHER,
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
    [ScheduleStepStatus.PAID_BY_USER]: {
      [ScheduleComponentStructureNames.TITLE1]: 'Scheduled Successfully',
      [ScheduleComponentStructureNames.TITLE2]:
        'Wait date and time of meeting...',
      [ScheduleComponentStructureNames.BUTTON_RED]: '',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: 'Join',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
    [ScheduleStepStatus.COMPLETED]: {
      [ScheduleComponentStructureNames.TITLE1]: 'Meeting completed',
      [ScheduleComponentStructureNames.TITLE2]: '',
      [ScheduleComponentStructureNames.BUTTON_RED]: '',
      [ScheduleComponentStructureNames.BUTTON_GREEN]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_RED_CLICK]: '',
      [ScheduleComponentStructureNames.ON_BUTTON_GREEN_CLICK]: '',
    },
  },
}
