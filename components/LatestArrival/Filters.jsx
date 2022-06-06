import React from "react";
import style from "../../styles/LatestArrival.module.css";
import { categories } from "./categories";

const Filters = () => {



  return (
    <div className={style.filter__option__cnt}>
      <div className={style.filter__header} >
        <p>Filters</p>
        <span>Reset</span>
      </div>
      <div className={style.checkbox__options} >
        <p>Categories</p>
        <div>
            {categories.map((category, index) =>
                <div className={style.innermost__div} >
                    <input type="checkbox" />
                    <label>{category}</label>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
