import React, { useState } from 'react'
import useDashboardClientMeetsContent from '../DashboardClientMeetsContent/useDashboardClientMeetsContent'

interface UseRateTeacherPopupProps {
  meetInfo: {
    teacherUid: string
    meetId: string
    clientUid: string
  }
  onClose: () => void
}
const useRateTeacherPopup = ({
  meetInfo,
  onClose,
}: UseRateTeacherPopupProps) => {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)
  const { mutate, refetch } = useDashboardClientMeetsContent()

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value)
  }

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
  }

  const handleSubmit = () => {
    mutate(
      {
        newStatus: 'reviewed',
        reviewRate: rating,
        meetId: meetInfo.meetId,
        teacherUid: meetInfo.teacherUid,
        clientUid: meetInfo.clientUid,
        reviewComment: comment,
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
    handleRatingChange,
    rating,
  }
}

export default useRateTeacherPopup
