import React from "react";

const player = (props) => {
  return (
    <div>
      <h1>Prénom : {props.name} </h1>
      <h1> Nom : {props.surname} </h1> <h1>Age : {props.age} ans</h1>
    </div>
  );
};
export default player;
