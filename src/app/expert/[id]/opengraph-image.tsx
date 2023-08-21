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

  const image = (await fetch(new URL('./cow2.png', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )) as string

  return new ImageResponse(
    (
      <div tw="text-black w-full h-full flex items-start justify-between bg-black flex-col">
        <div tw="flex items-start m-10 mb-0 h-1/2">
          <img
            src={data.image}
            tw="w-[300px] h-[300px] rounded-full"
            style={{ objectFit: 'cover' }}
            alt="profile"
          />

          <div tw="flex flex-col items-start ml-14">
            <h1 tw="text-white text-8xl m-0">{data.personalDetails.name}</h1>

            <h2 tw="text-white text-6xl m-0">{data.domain.category}</h2>
          </div>
        </div>

        <div tw="flex m-10 mt-0 items-center h-1/2">
          <h1 tw="text-white text-7xl m-0">Meetdox</h1>

          <img src={image} tw="w-1/6 ml-10" alt="aa" />
        </div>
      </div>
    )
  )
}

export default og
