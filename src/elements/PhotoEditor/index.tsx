import React, { FC } from 'react'
import Cropper from 'react-easy-crop'
import { FaTimes } from 'react-icons/fa'
import { getCroppedImg } from '@/utils/services/getCroppedImage'
import Button from '@/elements/Button'
import usePhotoEditor from './usePhotoEditor'

interface PhotoEditorProps {
  onSaveHandler: (image: string) => void
  onCloseHandler: () => void
  image: string | ArrayBuffer
}

const PhotoEditor: FC<PhotoEditorProps> = ({
  onSaveHandler,
  onCloseHandler,
  image,
}) => {
  const { onCropComplete, crop, zoom, setCrop, setZoom, croppedAreaPixels } =
    usePhotoEditor()

  return (
    <div className="relative h-full w-full md:h-[500px] md:w-[700px]">
      <FaTimes
        className="absolute right-3 top-3 z-20 h-4 w-4 cursor-pointer fill-white"
        onClick={onCloseHandler}
      />

      <div className="relative h-full w-full">
        {image && (
          <Cropper
            image={image as string}
            crop={crop}
            zoom={zoom}
            aspect={3 / 2}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            objectFit="horizontal-cover"
          />
        )}
      </div>

      <div className="absolute bottom-2 right-2">
        <Button
          type="button"
          customTailwindClasses="bg-sky border-sky text-white"
          onClickHandler={async () => {
            const resultImage =
              image &&
              croppedAreaPixels &&
              (await getCroppedImg({
                imageSrc: image as string,
                pixelCrop: croppedAreaPixels,
              }))

            resultImage && onSaveHandler(resultImage)
          }}
        >
          <p className="flex h-[36px] w-32 items-center justify-center text-sm">
            Save
          </p>
        </Button>
      </div>
    </div>
  )
}

export default PhotoEditor
