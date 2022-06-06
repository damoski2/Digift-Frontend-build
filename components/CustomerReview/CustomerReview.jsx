import React, { useEffect } from 'react'
import style from '../../styles/CustomerReview.module.css';
import ReviewCard from './ReviewCard';
import AOS from "aos";
import "aos/dist/aos.css";


const CustomerReview = () => {

  useEffect(()=>{
    AOS.init()
    AOS.refresh();
  },[])

  return (
    <div className={style.customer__review__cnt} >
      <h1>"Hear what happy customers are saying about Digift"</h1>
      <div className={style.customer__card__cnt} data-aos="fade-right" >
        <ReviewCard text="“Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.”" />
        <ReviewCard text="“Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria. Digift stood out from the crowd with an impressive team and even more impressive mission ”" />
        <ReviewCard text="“Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.”" />
      </div>
    </div>
  )
}

export default CustomerReview