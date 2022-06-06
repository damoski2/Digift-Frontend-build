import React from 'react'
import style from "../../styles/CustomElements.module.css";

const LightButton = ({ imgUrl, text, setShowRest }) => {
    return (
        <button onClick={()=>setShowRest(true)} className={style.light__button} >
          <span>{text}</span>
          <img src={imgUrl} />
        </button>
    );
  };
export default LightButton