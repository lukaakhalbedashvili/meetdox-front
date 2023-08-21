import React, { FC, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'
import useDashboardClientMeetsContent from '../DashboardClientMeetsContent/useDashboardClientMeetsContent'

interface RateTeacherPopupProps {
  onClose: () => void
  meetInfo: {
    teacherUid: string
    meetId: string
    clientUid: string
  }
}

const RateTeacherPopup: FC<RateTeacherPopupProps> = ({ onClose, meetInfo }) => {
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

  return (
    <div className="rounded-md bg-white px-6 py-2 sm:w-[500px]">
      <div className="flex items-center justify-end">
        <FaTimes
          className="mr-3 mt-3 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-text_gray">Rate Expert</h1>
      </div>

      <div className="mt-8 ">
        <textarea
          className="h-24 w-full resize-none rounded border p-2 outline-none"
          placeholder="Enter your review..."
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="mt-4 flex items-center justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => handleRatingChange(star)}>
              <BsFillStarFill
                size={40}
                className={`mr-1 ${
                  star <= rating ? 'fill-star_gold' : 'fill-disable_gray'
                }`}
              />
            </button>
          ))}
        </div>
        <div className="mt-7 mb-8 flex items-center justify-center">
          <button
            className={`rounded-xl ${
              comment === '' || rating === 0 ? 'bg-text_gray' : 'bg-sky'
            } px-8 py-3 text-white`}
            onClick={() =>
              comment === '' || rating === 0 ? null : handleSubmit()
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default RateTeacherPopup
