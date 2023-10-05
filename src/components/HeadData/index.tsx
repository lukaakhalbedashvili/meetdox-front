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
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadData
