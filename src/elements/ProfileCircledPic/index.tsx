import Image from 'next/image'
import React, { FC } from 'react'

interface ProfileCircledPicProps {
  photoUrl: string | null | undefined
  username: string
}

const ProfileCircledPic: FC<ProfileCircledPicProps> = ({
  photoUrl,
  username,
}) => {
  return (
    <>
      {photoUrl ? (
        <Image
          src={photoUrl}
          fill
          alt="Profile"
          className="rounded-full object-cover"
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center rounded-full bg-sky`}
        >
          <p className="text-base text-white">{username[0]}</p>
        </div>
      )}
    </>
  )
}

export default ProfileCircledPic
