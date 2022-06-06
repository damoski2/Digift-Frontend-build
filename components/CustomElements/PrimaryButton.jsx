import React from "react";
import style from "../../styles/CustomElements.module.css";
import Link from "next/link";
import { starIcon } from "../../images";

const PrimaryButton = ({ imgUrl, text }) => {
  return (
    <Link href="/">
      <div className={style.primary__button} >
        <span>{text}</span>
        <img src={imgUrl} />
      </div>
    </Link>
  );
};

export default PrimaryButton;
