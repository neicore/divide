import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { Sidebar } from '../components/sidebar'
import TopBar from '../components/topBar/TopBar'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Divide</title>
        <meta name="description" content="Overcomplicated todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Sidebar />

        <div>
          <TopBar />
          <main>Yolo</main>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
