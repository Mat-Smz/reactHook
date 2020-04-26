import React from "react";

const player = (props) => {
  console.log(props.name);
  if (props.show === false) {
    return null;
  } else {
    return (
      <div>
        <h1>Prénom : {props.name} </h1>
        <h1> Nom : {props.surname} </h1> <h1>Age : {props.years} ans</h1>
      </div>
    );
  }
};
export default player;
