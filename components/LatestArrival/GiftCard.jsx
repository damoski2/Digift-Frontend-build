import React from 'react'
import style from "../../styles/LatestArrival.module.css";
import { amazonProfileImage, infoIcon, buttonArrow } from '../../images'
import { FullWidthButton } from '../imports';


const GiftCard = () => {
  return (
    <div className={style.gift_card} >
        <p className={style.gift__span} >GiftCard</p>
        <div className={style.gift__card__header} >
            <img src={amazonProfileImage} />
            <h2>Amazon Gift Card</h2>
        </div>
        <p className={style.card__details} >Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....</p>
        <div className={style.rule} />
        <p className={style.card__info} >
            <img src={infoIcon} />
            <span>This card has a fee of $ 0.99</span>
        </p>
        <FullWidthButton text="Purchase Card" imgUrl={buttonArrow} />
    </div>
  )
}

export default GiftCard