import React from "react";

const InfoCard = (props) => {
  return (
    <section className={"infocard " + props.styled + " " + props.bgcol}>
      <div className="infocard--text ">{props.title}</div>
      <div className="infocard--percent ">{props.percent}%</div>
      <div className="infocard--price ">₹ {props.price}</div>
    </section>
  );
};

export default InfoCard;
