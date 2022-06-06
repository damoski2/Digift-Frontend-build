import React, { useEffect } from "react";
import style from "../../styles/Carousel.module.css";
import {
  scribbleIconLeft,
  scribbleIconRight,
  amazonBackgrounImage,
  creditCardImage,
} from "../../images";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {

  useEffect(()=>{
    AOS.init()
    AOS.refresh();
  },[])

  return (
    <div
      className={style.carousel__cnt}
      style={{ marginTop: "65px", marginBottom: "65px" }}
    >
      <div className={style.carousel__inner}>
        <img
          src={scribbleIconLeft}
          alt="left"
          className={style.scribbleIconLeft}
          data-aos="fade-right"
        />
        <div className={style.carousel__card}>
          <h1>Eliminate bank restrictions with our unique gift cards.</h1>
          <p>
            Shop on Amazon, ASOS, 1800 flowers, Whilst paying for utilities and
            even more.
          </p>
          <button>Start Shopping</button>
        </div>
        <img
          src={scribbleIconRight}
          alt="right"
          className={style.scribbleIconLeft}
          data-aos="fade-left"
        />
      </div>
      <div className={style.img__card__div} >
        <img src={amazonBackgrounImage} data-aos="fade-up" />
        <img src={creditCardImage} data-aos="fade-up" />
      </div>
    </div>
  );
};

export default Carousel;
