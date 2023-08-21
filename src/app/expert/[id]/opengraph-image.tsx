import { ImageResponse } from 'next/server'
// import { fetchTeacherPublicDataApiReq } from '@/utils/api/fetchTeacherPublicDataApiReq'

export const contentType = 'image/png'

interface Props {
  params: {
    id: string
  }
}

export const runtime = 'edge'

const og = async (props: Props) => {
  // const yy = await fetchTeacherPublicDataApiReq(props.params.id)

  console.error('props', props)

  const image = (await fetch(new URL('./cow.png', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )) as string

  return new ImageResponse(
    (
      <div tw="text-black w-full h-full flex items-start justify-center">
        <div tw="flex items-center justify-center bg-black w-full h-1/2 justify-start">
          <img src={image} tw="w-1/5" alt="aa" />

          <div tw="text-white flex flex-col">
            <p tw="text-3xl">Have a question?</p>
            <p>Schedule a meet</p>
          </div>
        </div>

        {/* <img src={yy.image} tw="w-[400-px] h-[200px]" /> */}
      </div>
    )
  )
}

export default og
