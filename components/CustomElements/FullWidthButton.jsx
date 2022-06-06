import React from 'react'
import { starIcon } from "../../images";
import style from "../../styles/CustomElements.module.css";


const FullWidthButton = ({ imgUrl, text }) => {
    return (
        <button className={style.full__button} >
          <span>{text}</span>
          <img src={imgUrl} />
        </button>
    );
  };

export default FullWidthButton