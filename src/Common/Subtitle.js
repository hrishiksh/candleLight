import React from "react";
import "./Common.scss";

const Subtite = (props) => {
  return (
    <div className="subtitle">
      <p className="subtitle__text">{props.children}</p>
    </div>
  );
};

export default Subtite;
