import React, { useState } from "react";

const Player = (props) => {
  const [age, setAge] = useState(props.years);

  const subOneYear = () => {
    setAge(age - 1);
  };

  const addOneYear = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h1>Prénom : {props.name} </h1>
      <h1> Nom : {props.surname} </h1> <h1>Age : {age} ans</h1>
      <button onClick={subOneYear}>Plus jeune ?</button>
      <button onClick={addOneYear}>Plus vieux ?</button>
    </div>
  );
};
export default Player;

// Faire une modal avec un formulaire permetant de modifier les champs du joueur
