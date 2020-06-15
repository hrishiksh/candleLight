import React from "react";
import "./Common.scss";

const TextField = (props) => {
  return (
    <div className={"textfield " + props.styled}>
      <label htmlFor="textarea" className="textfield__label">
        {props.children}
      </label>
      <input
        onChange={props.onChange}
        type="tel"
        name=""
        id="textarea"
        className="textfield__input"
      />
    </div>
  );
};

export default TextField;
