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
    <div className="relative w-[700px] h-[500px] ">
      <FaTimes
        className="z-20 absolute right-3 top-3 fill-white w-4 h-4 cursor-pointer"
        onClick={onCloseHandler}
      />

      <div className="w-full relative h-full">
        {image && (
          <Cropper
            image={image as string}
            crop={crop}
            zoom={zoom}
            aspect={6 / 6}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            cropShape="round"
            objectFit="horizontal-cover"
          />
        )}
      </div>

      <div className="absolute bottom-2 right-2">
        <Button
          type="submit"
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
          <p className="text-sm flex items-center justify-center w-32 h-[36px]">
            Save
          </p>
        </Button>
      </div>
    </div>
  )
}

export default PhotoEditor
