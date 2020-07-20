import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.img}
        </span>
        <span> {props.name} </span>
      </dt>

      <dd> {props.definition} </dd>
    </div>
  );
}

export default Card;