import { ImageResponse } from 'next/server'

export const sizes = {
  width: 900,
  heigh: 450,
}

export const contentType = 'image/png'

const og = () => {
  return new ImageResponse(<div tw="text-black">hiii</div>)
}

export default og
