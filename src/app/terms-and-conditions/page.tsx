'use client'
import React from 'react'

const Page = () => {
  return (
    <div>
      <iframe
        src={`https://docs.google.com/document/d/e/2PACX-1vT30zqHwovOGpu_bmIIO_L5sY7CVYBddfPI8knACxVX4mYPmt5O9k7XlXaL1yKsh-8-g868qLn-9Fhd/pub?embedded=true`}
        title="PDF Viewer"
        style={{ width: '100%', height: '800px', border: 'none' }}
      />
    </div>
  )
}

export default Page
