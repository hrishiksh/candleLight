import React from "react";
import "./Component.scss";

const TextField = (props) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      type="text"
      name=""
      id=""
      className={"textfield " + props.styled}
      placeholder={props.placeholder}
    />
  );
};

export default TextField;
