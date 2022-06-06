import React, { useState } from "react";
import style from "../../styles/LatestArrival.module.css";
import { arrowIconGray } from "../../images";
import Filters from "./Filters";
import GiftCard from "./GiftCard";
import { LightButton } from "../imports";

const LatestArrival = () => {
  const [showRest, setShowRest] = useState(false);

  const renderRestComponent = () => (
    <>
      <div className={style.card__height__span} />
      <GiftCard />
      <div className={style.card__height__span} />
      <GiftCard />
    </>
  );

  return (
    <div className={style.latest__arrival__cnt}>
      <h2>LatestArrival</h2>
      <div className={style.filter__section}>
        <div>
          <Filters />
        </div>
        <div className={style.gitf__card__cnt}>
          <GiftCard />
          <div className={style.card__height__span} />
          <GiftCard />
          {showRest && renderRestComponent()}
        </div>
        <div className={style.gitf__card__cnt}>
          <GiftCard />
          <div className={style.card__height__span} />
          <GiftCard />
          {showRest && renderRestComponent()}
        </div>
        <div className={style.gitf__card__cnt}>
          <GiftCard />
          <div className={style.card__height__span} />
          <GiftCard />
          {showRest && renderRestComponent()}
        </div>
      </div>
     {showRest == true? <span className={style.EOL} >End of product list</span>: <LightButton
        text="Load more products"
        imgUrl={arrowIconGray}
        setShowRest={setShowRest}
      />}
    </div>
  );
};

export default LatestArrival;
