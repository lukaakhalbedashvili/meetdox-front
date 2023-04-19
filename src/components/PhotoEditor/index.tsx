import React, { FC } from 'react'
import Cropper from 'react-easy-crop'
import { FaTimes } from 'react-icons/fa'
import { getCroppedImg } from '@/utils/services/getCroppedImage'
import Button from '@/elements/Button'
import usePhotoEditor from './usePhotoEditor'

interface PhotoEditorProps {
  onSaveHandler: (image: string) => void
  onCloseHandler: () => void
}

const PhotoEditor: FC<PhotoEditorProps> = ({
  onSaveHandler,
  onCloseHandler,
}) => {
  const {
    handleUpload,
    onCropComplete,
    crop,
    zoom,
    setCrop,
    setZoom,
    uploadedImage,
    fileInputRef,
    croppedAreaPixels,
  } = usePhotoEditor()

  return (
    <div className="relative w-[700px] h-[500px] ">
      <FaTimes
        className="z-20 absolute right-3 top-3 fill-white w-4 h-4 cursor-pointer"
        onClick={onCloseHandler}
      />

      <input
        ref={fileInputRef}
        className="hidden"
        accept="image/png, image/jpeg"
        multiple
        type="file"
        onChange={(e) => e.target.files && handleUpload(e.target.files)}
      />

      <div className="w-full relative h-full">
        {uploadedImage && (
          <Cropper
            image={uploadedImage as string}
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
            const image =
              uploadedImage &&
              croppedAreaPixels &&
              (await getCroppedImg({
                imageSrc: uploadedImage as string,
                pixelCrop: croppedAreaPixels,
              }))

            image && onSaveHandler(image)
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
