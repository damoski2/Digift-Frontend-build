import React, { useEffect } from 'react'
import style from '../../styles/CustomElements.module.css';
import Link from 'next/link';
import { arrowIconGray } from '../../images'
import { useRouter } from 'next/router'



const PrimaryLink = ({ text, to }) => {

  const { asPath } = useRouter()

  return (
    <Link href={to} >
        <a style={{ color: asPath.toString() === to&& '#0069E0' }} className={style.link}> {text}<img src={arrowIconGray} /> </a>
    </Link>
  )
}

export default PrimaryLink