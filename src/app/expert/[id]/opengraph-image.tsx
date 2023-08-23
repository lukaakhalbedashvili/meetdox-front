import { ImageResponse } from 'next/server'
import { API_URL } from '@/utils/consts/consts'
import { TeacherData } from '@/components/Catalog/catalog.interface'

export const contentType = 'image/png'

interface Props {
  params: {
    id: string
  }
}

export const runtime = 'edge'

const og = async (props: Props) => {
  const response = await fetch(
    `${API_URL}/users/teacher/get-teacher?uid=${props.params.id}`
  )

  const jsonData = await response.json()

  const data: TeacherData = jsonData.data

  return new ImageResponse(
    (
      <div tw="text-black w-full h-full flex items-start justify-between bg-black flex-col">
        <img
          src={data.image}
          tw="w-full h-full"
          style={{ objectFit: 'cover' }}
          alt="profile"
        />
      </div>
    )
  )
}

export default og
