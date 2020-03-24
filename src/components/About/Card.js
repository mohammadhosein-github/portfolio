import React from "react";

function Card(props) {
  const { title, icon, des } = props.card_info;
  return (
    <div className="col-md-4">
      <div className="my-card">
        {icon}
        <h4>{title}</h4>
        <p>{des}</p>
      </div>
    </div>
  );
}

export default Card;
