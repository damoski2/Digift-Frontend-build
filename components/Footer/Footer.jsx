import React from "react";
import style from "../../styles/Footer.module.css";
import {
  logo,
  igLogo,
  fbLogo,
  twitterLogo,
  linkedInLogo,
  blueArrowIconUp,
  arrowIcon,
  footerPolygon,
} from "../../images";

const Footer = () => {
  return (
    <div className={style.footer__cnt}>
      <div className={style.first__row}>
        <div className={style.social__icons}>
          <img src={logo} />
          <p>Creating Happiness One Giftcard at a Time.</p>
          <div className={style.icons}>
            <img src={igLogo} />
            <img src={fbLogo} />
            <img src={twitterLogo} />
            <img src={linkedInLogo} />
          </div>
        </div>
        <div className={style.address__details}>
          <p>Contact us</p>
          <span className={style.address__details__span}>
            hello@digiftng.com
          </span>
          <p>Office</p>
          <span className={style.address__details__span}>
            226, Awolowo road, Ikoyi, Lagos State, Nigeria
          </span>
          <div>
            <span>
              Our privacy policy <img src={arrowIcon} />
            </span>
            <span>
              Our privacy policy <img src={arrowIcon} />
            </span>
          </div>
        </div>
        <div className={style.footer__links}>
          <div>
            <h4>Company</h4>
            <span>Careers</span>
            <span>FAQ</span>
          </div>
          <div>
            <h4>Products</h4>
            <span>Personal</span>
            <span>Business</span>
            <span>Vendor</span>
          </div>
          <div>
            <h4>Contact</h4>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <div className={style.second__row}>
        <div className={style.second__inner__div}>
          <img src={footerPolygon} />
          <p>
            The website www.digiftng.com is owned and operated by Blinksky
            Nigeria Limited, a company duly registered under the Laws of the
            Federal Republic of Nigeria with RC Number: 1656204. Trademark to
            all logos of Giftcards are owned by their respective brands and
            Blinksky Nigeria Limited doesn’t claim ownership of these
            trademarks. All Giftcards dominated in USD are provided in
            conjunction with BlinkSky Inc. Users must have valid US account and
            in some cases a valid US address before purchasing.
          </p>
        </div>
        <p className={style.footer__copywrite}>
          Copyright © 2022 Blinksky Nigeria Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;
