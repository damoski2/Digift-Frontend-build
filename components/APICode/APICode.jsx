import React, { useEffect } from "react";
import style from "../../styles/APICode.module.css";
import {
  startBlueIcon,
  arrowIcon,
  buttonWhiteArrowIcon,
  arcLeftIcon,
  arcRightIcon,
  codeImage,
} from "../../images";
import { SecondaryButton, LightButton } from "../imports";
import AOS from "aos";
import "aos/dist/aos.css";

const APICode = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={style.expand__cnt}>
      <div className={style.expand__info}>
        <h1>
          Our API is built to be as <span>lightweight</span> and efficient as
          possible.
        </h1>
        <p>We offer client and server libraries in everything from our API</p>
        <div data-aos="fade-right" className={style.expand__button__div}>
          <SecondaryButton text="Get started" imgUrl={buttonWhiteArrowIcon} />
          <LightButton text="Sign In" imgUrl={arrowIcon} />
        </div>
      </div>

      <div className={style.expand__illustration__div}>
        <img src={codeImage} />
      </div>
    </div>
  );
};

export default APICode;
