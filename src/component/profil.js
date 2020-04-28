import React, { useState } from "react";
import Player from "../component/player.js";

const Profil = (props) => {
  const [hide, setHide] = useState(props.show);

  const hideMe = () => {
    setHide(false);
    console.log(props.show);
  };

  return (
    <div className={"profil"}>
      <Player
        show={hide}
        name={props.name}
        surname={props.surname}
        years={props.years}
      ></Player>

      <button onClick={hideMe}>View</button>
    </div>
  );
};
export default Profil;
