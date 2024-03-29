import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import useRefundTeacherPopup from './useRefundTeacherPopup'

interface RefundTeacherPopupProps {
  onClose: () => void
  meetInfo: {
    teacherUid: string
    meetId: string
    clientUid: string
  }
}

const RefundTeacherPopup: FC<RefundTeacherPopupProps> = ({
  onClose,
  meetInfo,
}) => {
  const { comment, handleCommentChange, handleSubmit } = useRefundTeacherPopup({
    meetInfo,
    onClose,
  })

  return (
    <div className="rounded-md bg-white px-6 py-2 sm:w-[500px]">
      <div className="flex items-center justify-end">
        <FaTimes
          className="mr-3 mt-3 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-xl text-text_gray">Ask For Refund Expert</h1>
      </div>

      <p className="mt-4 text-center text-xs text-text_gray">
        Please explain why you want to refund this meet. We will review your
        request and get back to you within 24 hours. be consider that if you ask
        for refund we got permission to watch your meeting video.
      </p>

      <div className="mt-8 ">
        <textarea
          className="h-24 w-full resize-none rounded border p-2 outline-none"
          placeholder="Enter your review..."
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="mb-8 mt-7 flex items-center justify-center">
          <button
            className={`rounded-xl ${
              comment === '' ? 'bg-text_gray' : 'bg-sky'
            } px-8 py-3 text-white`}
            onClick={() => comment && handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default RefundTeacherPopup
