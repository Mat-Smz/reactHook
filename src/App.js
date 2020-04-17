import React, { useState } from "react";
// import Name from "./component/name.js";
// import Surname from "./component/surname.js";
// import Age from "./component/years.js";
import Player from "./component/player.js";
import "./App.css";

function App() {
  const [age, setAge] = useState(25);

  return (
    <div className={"profil"}>
      {/* <Name name={"Charles"}></Name>
      <Surname surname={"Bukowski"}></Surname>
      <Age age={30}></Age> */}
      <Player name={"Charles"} surname={"Bukowski"} years={age}></Player>

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
}
export default App;
