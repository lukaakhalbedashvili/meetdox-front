import Image from 'next/image'
import React, { FC } from 'react'

interface ProfileCircledPicProps {
  photoUrl: string | null | undefined
}

const ProfileCircledPic: FC<ProfileCircledPicProps> = ({ photoUrl }) => {
  return (
    <>
      <Image
        src={photoUrl ? photoUrl : '/unknown_user.png'}
        fill
        alt="Profile"
        className="rounded-full object-cover"
      />
    </>
  )
}

export default ProfileCircledPic
