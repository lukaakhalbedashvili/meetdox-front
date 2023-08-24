import React, { useState } from 'react'

import { useSendFeedback } from '@/reactQuery/useSendFeedback'

interface UseSendFeedbackPopupProps {
  uid: string
  onClose: () => void
}
const useSendFeedbackPopup = ({ uid, onClose }: UseSendFeedbackPopupProps) => {
  const [comment, setComment] = useState('')

  const { mutate } = useSendFeedback()

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value)
  }

  const handleSubmit = () => {
    mutate(
      {
        uid: uid,
        feedback: comment,
      },
      {
        onSuccess: () => {
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

export default useSendFeedbackPopup
