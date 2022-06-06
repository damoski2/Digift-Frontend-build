import React, { useEffect } from "react";
import style from "../../styles/BusinessCarousel.module.css";
import { fileIcon, starWhiteIcon } from "../../images";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessCarousel = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={style.business__cnt}>
      <div className={style.inner_business_cnt}>
        <div className={style.business__info__div}>
          <div className={style.help__section} data-aos="fade-left" >
            <img src={starWhiteIcon} />
            <span>Digift helps business</span>
          </div>
          <h1>
            Why do fast-growing merchant and vendor choose
            <img src={fileIcon} className={style.fileIcon} data-aos="fade-down" />use?
          </h1>
          <p>
            Whether you’re a business looking to sell your own gift cards, a
            company looking for bulk gift card solution, digift is for you.
          </p>
          <Link href="/">
            <a>Create an account today</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessCarousel;
