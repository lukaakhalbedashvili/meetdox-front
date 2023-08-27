import React from 'react'

const Page = () => {
  return (
    <div>
      <iframe
        src={`https://docs.google.com/document/d/e/2PACX-1vRYMXX5erT3rNYSVrsdEd1kUX6mm89aV8Su8A9pLig_Yu3vhX18vuyUf3JDvA7NgqHklspnrmvrU8Px/pub?embedded=true`}
        title="PDF Viewer"
        style={{ width: '100%', height: '800px', border: 'none' }}
      />
    </div>
  )
}

export default Page
