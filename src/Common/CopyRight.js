import React from "react";
import "./Common.scss";

const CopyRight = (props) => {
  return (
    <p className={"copyright " + props.styled}>
      This Site is Designed and developed by Hrishikesh Pathak
    </p>
  );
};

export default CopyRight;
