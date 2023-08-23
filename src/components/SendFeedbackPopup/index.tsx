import React, { FC, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSendFeedback } from '@/reactQuery/useSendFeedback'

interface SendFeedbackPopupProps {
  onClose: () => void
  uid: string
}

const SendFeedbackPopup: FC<SendFeedbackPopupProps> = ({ onClose, uid }) => {
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

  return (
    <div className="rounded-md bg-white px-6 py-2 sm:w-[500px]">
      <div className="flex items-center justify-end">
        <FaTimes
          className="mr-3 mt-3 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-xl text-text_gray">Send Feedback</h1>
      </div>

      <p className="mt-4 text-center text-xs text-text_gray">
        Share your experience with us. We will use your feedback to improve our
        service.
      </p>

      <div className="mt-8 ">
        <textarea
          className="h-24 w-full resize-none rounded border p-2 outline-none"
          placeholder="Enter your review..."
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="mt-7 mb-8 flex items-center justify-center">
          <button
            className={`rounded-xl ${
              comment === '' ? 'bg-text_gray' : 'bg-sky'
            } px-8 py-3 text-white`}
            onClick={() => (comment ? handleSubmit() : null)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendFeedbackPopup
