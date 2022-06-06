import React from "react";
import style from "../../styles/CustomElements.module.css";
import Link from "next/link";

const SecondaryButton = ({ imgUrl, text }) => {
  return (
    <Link href="/">
      <div className={style.secondary__button} >
        <span>{text}</span>
        <img src={imgUrl} />
      </div>
    </Link>
  );
};

export default SecondaryButton;
