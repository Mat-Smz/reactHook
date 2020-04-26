import React, { useState } from "react";
import Player from "../component/player.js";

const Profil = (props) => {
  const [age, setAge] = useState(props.years);
  const [hide, setHide] = useState(props.show);

  const subOneYear = () => {
    setAge(age - 1);
  };

  const addOneYear = () => {
    setAge(age + 1);
  };

  const hideMe = () => {
    setHide(false);
    console.log(hide);
  };

  return (
    <div className={"profil"}>
      <Player
        show={hide}
        name={props.name}
        surname={props.surname}
        years={age}
      ></Player>

      <button onClick={hideMe}>Cacher</button>
      <button onClick={subOneYear}>Plus jeune ?</button>
      <button onClick={addOneYear}>Plus vieux ?</button>
    </div>
  );
};
export default Profil;
