import React, { useState } from "react";
import Player from "../component/player.js";

const Profil = (props) => {
  const [hide, setHide] = useState(props.show);

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
        years={props.years}
      ></Player>

      <button onClick={hideMe}>View/Hide</button>
    </div>
  );
};
export default Profil;
