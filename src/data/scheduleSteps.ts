export const scheduleSteps: any = {
  clientMeeting: {
    scheduledByUser: {
      title1: 'You have scheduled this meeting',
      title2: 'Waiting teacher for confirmation...',
      buttonRed: 'Cancel',
      buttonGreen: '',
    },
    canceledByUser: {
      title1: 'You have canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
    },
    canceledByTeacher: {
      title1: 'Teacher has canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
    },
    confirmedByTeacher: {
      title1: 'Teacher has confirmed this meeting',
      title2: 'Waiting for your payment...',
      buttonRed: 'Cancel',
      buttonGreen: 'Pay',
    },
    paidByUser: {
      title1: 'Scheduled Successfully',
      title2: 'Wait date and time of meeting...',
      buttonRed: '',
      buttonGreen: 'Join',
    },
    completed: {
      title1: 'Meeting completed',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
    },
  },
  teacherMeeting: {
    scheduledByUser: {
      title1: 'Client has scheduled this meeting',
      title2: 'Waiting you for confirmation...',
      buttonRed: 'Decline',
      buttonGreen: 'Accept',
    },
    canceledByUser: {
      title1: 'Client has canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
    },
    canceledByTeacher: {
      title1: 'You have canceled this meeting',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
    },
    confirmedByTeacher: {
      title1: 'You have confirmed this meeting',
      title2: 'Waiting for client payment...',
      buttonRed: '',
      buttonGreen: '',
    },
    paidByUser: {
      title1: 'Scheduled Successfully',
      title2: 'Wait date and time of meeting...',
      buttonRed: '',
      buttonGreen: 'Join',
    },
    completed: {
      title1: 'Meeting completed',
      title2: '',
      buttonRed: '',
      buttonGreen: '',
    },
  },
}
