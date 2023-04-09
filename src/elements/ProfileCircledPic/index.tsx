import React, { FC } from 'react'

interface ProfileCircledPicProps {
  photoUrl: string | null | undefined
  username: string
  diameter: number
}

const ProfileCircledPic: FC<ProfileCircledPicProps> = ({
  photoUrl,
  username,
  diameter,
}) => {
  return (
    <>
      {photoUrl ? (
        <img
          src={photoUrl}
          alt="Profile"
          className={`h-${diameter.toString()} w-${diameter.toString()} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`h-${diameter.toString()} w-${diameter.toString()} rounded-full bg-sky flex items-center justify-center`}
        >
          <p className="text-base text-white">{username[0]}</p>
        </div>
      )}
    </>
  )
}

export default ProfileCircledPic
