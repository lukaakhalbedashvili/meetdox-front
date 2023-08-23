import { ImageResponse } from 'next/server'

export const contentType = 'image/png'

export const runtime = 'edge'

const og = async () => {
  const image = (await fetch(new URL('./og.png', import.meta.url)).then((res) =>
    res.arrayBuffer()
  )) as string

  return new ImageResponse(
    (
      <div tw="text-white w-full h-full flex items-start justify-between  flex-col">
        <img
          src={image}
          tw="w-full h-full"
          style={{ objectFit: 'contain' }}
          alt="profile"
        />
      </div>
    )
  )
}

export default og
