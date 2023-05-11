import { Area } from 'react-easy-crop'

export interface GetCroppedImgReturn {
  blob: Blob
  dataUrl: string
}

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'Anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

export function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180
}

interface RotateSizeProps {
  width: number
  height: number
  rotation: number
}

export function rotateSize({ width, height, rotation }: RotateSizeProps) {
  const rotRad = getRadianAngle(rotation)
  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}

interface GetCroppedImgProps {
  imageSrc: string
  pixelCrop: Area
  rotation?: number
  flip?: {
    horizontal: boolean
    vertical: boolean
  }
}

export const getCroppedImg = async ({
  imageSrc,
  pixelCrop,
  rotation = 0,
  flip = { horizontal: false, vertical: false },
}: GetCroppedImgProps): Promise<GetCroppedImgReturn> => {
  const image = await createImage(imageSrc)

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!

  const rotRad = getRadianAngle(rotation)

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize({
    width: image.width,
    height: image.height,
    rotation,
  })

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth
  canvas.height = bBoxHeight

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  // draw rotated image
  ctx.drawImage(image, 0, 0)

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values

  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  )

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.putImageData(data, 0, 0)

  const createBlobFromCanvas = (): Promise<Blob> => {
    return new Promise(function (resolve, reject) {
      canvas.toBlob(function (blob) {
        if (blob) {
          resolve(blob)
        } else {
          reject(new Error('Failed to create blob from canvas'))
        }
      })
    })
  }

  return {
    blob: await createBlobFromCanvas().then((res) => res),
    dataUrl: canvas.toDataURL('image/png'),
  }
}
