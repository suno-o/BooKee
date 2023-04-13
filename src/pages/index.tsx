import type { ReactElement } from 'react'
import Head from 'next/head'
import HomeMain from '@/components/Layout/HomeLayout'
import Home from '../views/Home'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>BooKee</title>
        <meta name="description" content="Start saving money like a pro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeMain>{page}</HomeMain>
  )
}