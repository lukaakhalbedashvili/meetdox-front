import React, { useState } from 'react'
import useDashboardClientMeetsContent from '../DashboardClientMeetsContent/useDashboardClientMeetsContent'

interface UseRefundTeacherPopupProps {
  onClose: () => void
  meetInfo: {
    teacherUid: string
    meetId: string
    clientUid: string
  }
}
const useRefundTeacherPopup = ({
  meetInfo,
  onClose,
}: UseRefundTeacherPopupProps) => {
  const [comment, setComment] = useState('')

  const { mutate, refetch } = useDashboardClientMeetsContent()

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value)
  }

  const handleSubmit = () => {
    mutate(
      {
        newStatus: 'refundAsked',
        meetId: meetInfo.meetId,
        teacherUid: meetInfo.teacherUid,
        clientUid: meetInfo.clientUid,
        refundComment: comment,
      },
      {
        onSuccess: () => {
          refetch()
          onClose()
        },
        onError: () => {
          onClose()
        },
      }
    )
  }

  return {
    comment,
    handleCommentChange,
    handleSubmit,
  }
}

export default useRefundTeacherPopup
