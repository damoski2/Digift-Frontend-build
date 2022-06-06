import React from 'react'
import style from '../styles/Home.module.css'
import { Expand, BusinessCarousel, Ambition, APICode } from '../components/imports';

const business = () => {
  return (
    <main className={style.main__cnt} >
        <Expand />
        <BusinessCarousel />
        <Ambition />
        <APICode />
    </main>
  )
}

export default business