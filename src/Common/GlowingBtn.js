import React from "react";
import "./Common.scss";

const GlowingBtn = (props) => {
  return (
    <button
      type="submit"
      className={"glowingBtn " + props.styled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default GlowingBtn;
