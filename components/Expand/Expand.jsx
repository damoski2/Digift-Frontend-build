import React, { useEffect } from "react";
import style from "../../styles/Expand.module.css";
import {
  startBlueIcon,
  arrowIcon,
  buttonWhiteArrowIcon,
  arcLeftIcon,
  arcRightIcon,
  businessImg,
} from "../../images";
import { SecondaryButton, LightButton } from "../imports";
import AOS from "aos";
import "aos/dist/aos.css";

const Expand = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={style.expand__cnt}>
      <div className={style.expand__info}>
        <h1>
          Expand the giftcard industry, <span>one card</span> at a time!{" "}
          <img src={startBlueIcon} data-aos="fade-up" className={style.starIcon} />
        </h1>
        <p>
          Digift helps business connect with customers by letting them offer
          their business gift cards to a large number of people.
        </p>
        <div data-aos="fade-right" className={style.expand__button__div}>
          <SecondaryButton text="Get started" imgUrl={buttonWhiteArrowIcon} />
          <LightButton text="Sign In" imgUrl={arrowIcon} />
        </div>
      </div>

      <div className={style.expand__illustration__div}>
        <img src={arcLeftIcon} />
        <img src={businessImg} />
        <img src={arcRightIcon} />
      </div>
    </div>
  );
};

export default Expand;
