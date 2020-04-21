import React, { useState } from "react";
import Player from "../component/player.js";

const Profil = (props) => {
  const [age, setAge] = useState(props.years);

  const addOneYear = () => {
    setAge(age - 1);
  };

  return (
    <div className={"profil"}>
      <Player name={props.name} surname={props.surname} years={age}></Player>

      <button onClick={addOneYear}>Plus jeune ?</button>
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
export default Profil;
