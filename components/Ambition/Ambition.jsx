import React, { useEffect } from "react";
import { ambitionImage, ambitionImage2 } from "../../images";
import style from "../../styles/Ambition.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Ambition = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={style.ambition__cnt}>
      <div className={style.ambition__inner__div}>
        <div className={style.ambition__div}>
          <div className={style.ambition__info}>
            <h2>
              Designed for today’s <span>ambitious</span> businesses.
            </h2>
            <p>
              We give merchants the ability to sell digital Gift Cards for their
              business quickly, intuitively and affordably.
            </p>
          </div>
          <img src={ambitionImage} data-aos="fade-right"  />
        </div>
        <div className={style.ambition__div}>
          <div className={style.ambition__info}>
            <h2>
              Features that <span>empower</span> your business
            </h2>
            <p>
              We give merchants the ability to sell digital Gift Cards for their
              business quickly, intuitively and affordably.
            </p>
          </div>
          <img src={ambitionImage} data-aos="fade-left"  />
        </div>
      </div>
    </div>
  );
};

export default Ambition;
