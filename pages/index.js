import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import { Carousel, LatestArrival, CustomerReview, Interaction } from '../components/imports'


export default function Home() {
  return (
    <main className={style.main__cnt} >
      <Head>
        <title>Digift</title>
        <meta name="description" content="The digital assets world simplified" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <LatestArrival />
      <CustomerReview />
      <Interaction />
    </main>
  )
}
