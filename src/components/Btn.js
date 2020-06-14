import React from "react";
import "./Component.scss";

const Btn = (props) => {
  return (
    <button
      className={"btn " + props.styled + " " + props.bgcol}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Btn;
