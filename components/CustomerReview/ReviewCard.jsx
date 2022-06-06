import React from 'react'
import { devProfileImage } from '../../images'
import style from '../../styles/CustomerReview.module.css';

const ReviewCard = ({ text }) => {
  return (
    <div className={style.review__card} >
        <p className={style.review__details} >{text}</p>
        <div className={style.review__info} >
            <img src={devProfileImage} />
            <div>
                <h3>Osemwengie Benjamin</h3>
                <p>Product Designer at Digift</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard