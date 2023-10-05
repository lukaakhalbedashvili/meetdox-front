import Head from 'next/head'
import React from 'react'

interface HeadDataProps {
  title: string
  desc: string
}
const HeadData = ({ title, desc }: HeadDataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" key="desc" content={desc} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />

      {/* <meta
        property="og:image"
        content={img ? img : 'https://meetdox.com/og.jpg'}
      /> */}
      {/* <meta
        property="og:url"
        content="https://example.com/images/cool-page.jpg"
      /> */}
    </Head>
  )
}

export default HeadData
