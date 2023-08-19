import Image from 'next/image'
import React, { FC } from 'react'
import { BsFillStarFill } from 'react-icons/bs'

interface TeacherPublicPreviewProps {
  image: string
  title: string
  totalReviews: number
  name: string
  lastName: string
  tags: string[]
  onClickHandler: () => void
  rate: number
  perHour: number
}

const TeacherPublicPreview: FC<TeacherPublicPreviewProps> = ({
  image,
  title,
  totalReviews,
  name,
  lastName,
  tags,
  onClickHandler,
  rate,
  perHour,
}) => {
  let renewedTags = tags
  let tagsTogether = renewedTags.join('___')
  while (tagsTogether.length > 28) {
    renewedTags = renewedTags.slice(0, renewedTags.length - 1)
    tagsTogether = renewedTags.join('___')
  }
  if (renewedTags.length === 0 && tags.length > 0) {
    renewedTags.push('...')
  }
  return (
    <div
      className="-z-30 m-2 h-80 w-64 cursor-pointer border border-teacher_template_border"
      onClick={onClickHandler}
    >
      <div className="relative h-1/2 w-full">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>

      <div className="p-3">
        <div className="mb-2 flex items-center">
          {renewedTags.map((tag, i) => (
            <p
              key={`${tag}-${i}`}
              className="mr-1 rounded bg-info_notification_bg pt-1 pb-1 pl-3 pr-3 text-xs text-info_icon_blue"
            >
              {tag}
            </p>
          ))}
          {tags.length === 0 && (
            <p className="mr-1 rounded bg-info_notification_bg pt-1 pb-1 pl-3 pr-3 text-center text-xs text-error">
              No Skills Provided
            </p>
          )}
        </div>

        <p className="mb-2">
          {name} {lastName}
        </p>

        <p className="h-10 text-sm text-icon_gray line-clamp-2">{title}</p>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <BsFillStarFill className="fill-star_gold" />

            <p className="ml-1 mr-1">{rate}</p>

            <p className="text-icon_gray">{`(${totalReviews})`}</p>
          </div>

          <p>{`$${perHour}/hr`}</p>
        </div>
      </div>
    </div>
  )
}

export default TeacherPublicPreview
