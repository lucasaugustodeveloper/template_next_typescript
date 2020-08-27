import React from 'react'
import Head from 'next/head'

import * as S from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <S.Container>
        <h1>Template Next.JS + Typescript</h1>

        <p>this template use next.js with typescript</p>
      </S.Container>
    </div>
  )
}

export default Home
