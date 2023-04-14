import Image from 'next/image'
import React, { FC } from 'react'
import { BsFillStarFill } from 'react-icons/bs'

interface TeacherPublicPreviewProps {
  image: string
  title: string
  rating: number
  totalReviews: number
  price: number
  name: string
  lastName: string
  tags: string[]
}

const TeacherPublicPreview: FC<TeacherPublicPreviewProps> = ({
  image,
  price,
  rating,
  title,
  totalReviews,
  name,
  lastName,
  tags,
}) => {
  return (
    <div className="w-64 h-80 border border-teacher_template_border cursor-pointer m-2 -z-30">
      <div className="relative w-full h-1/2">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>

      <div className="p-3">
        <div className="flex items-center mb-2">
          {tags.map((tag) => (
            <p
              key={tag}
              className="text-xs rounded bg-info_notification_bg pt-1 pb-1 pl-3 pr-3 text-info_icon_blue mr-1"
            >
              {tag}
            </p>
          ))}
        </div>

        <p className="mb-2">
          {name} {lastName}
        </p>

        <p className="text-sm line-clamp-2 text-icon_gray">{title}</p>

        <div className="flex items-center mt-2 justify-between">
          <div className="flex items-center">
            <BsFillStarFill className="fill-star_gold" />

            <p className="ml-1 mr-1">{rating}</p>

            <p className="text-icon_gray">{`(${totalReviews})`}</p>
          </div>

          <p>{`${price}$`}</p>
        </div>
      </div>
    </div>
  )
}

export default TeacherPublicPreview
