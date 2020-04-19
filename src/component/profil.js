import React, { useState } from "react";
import Player from "../component/player.js";

const profil = (props) => {
  const [age, setAge] = useState(25);

  return (
    <div className={"profil"}>
      <Player name={props.name} surname={props.surname} years={age}></Player>

      <button
        onClick={() => {
          setAge(age - 1);
        }}
      >
        Plus jeune ?
      </button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Plus vieux ?
      </button>
    </div>
  );
};
export default profil;
