import React from "react";
import style from "../../styles/Header.module.css";
import { logo, searchIcon, starIcon } from "../../images";
import { PrimaryButton, PrimaryLink, ThemeToggle } from "../imports";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={style.main__cnt}>
      <div className={style.logo__cnt}>
        <Link href="/" >
        <img src={logo} />
        </Link>
      </div>
      <div className={style.link__cnt}>
        <PrimaryLink text="Personal" to="/" />
        <PrimaryLink text="Business" to="/business" />
      </div>
      <div className={style.search__bar}>
        <img src={searchIcon} />
        <input type="text" placeholder="Find cards anywhere" />
      </div>
      <div className={style.theme__div}>
        <ThemeToggle />
      </div>
      <div className={style.auth_button__div}>
        <Link href="/">
          <a>Login</a>
        </Link>
        <PrimaryButton imgUrl={starIcon} text="Get Started" />
      </div>
    </nav>
  );
};

export default Header;
