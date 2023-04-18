import React, { FC } from 'react'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from '@/utils/services/getCroppedImage'
import Button from '@/elements/Button'
import usePhotoEditor from './usePhotoEditor'

interface PhotoEditorProps {
  onSaveHandler: (image: string) => void
}

const PhotoEditor: FC<PhotoEditorProps> = ({ onSaveHandler }) => {
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
    <div className="h-[600px] w-[600px] bg-white rounded relative">
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
            aspect={4 / 4}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            cropShape="round"
            objectFit="vertical-cover"
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
