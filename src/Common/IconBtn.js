import React from "react";
import sprite from "../assets/sprite.svg";

const IconBtn = (props) => {
  return (
    <div className="iconBtn">
      <svg className="iconBtn__icon">
        <use xlinkHref={sprite + "#icon-home3"}></use>
      </svg>
    </div>
    // <button className="iconBtn">
    //
    // </button>
  );
};

export default IconBtn;
