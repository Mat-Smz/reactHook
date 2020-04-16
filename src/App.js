import React from "react";
import Name from "./component/name.js";
import Surname from "./component/surname.js";
import Age from "./component/age.js";
import Player from "./component/player.js";
import "./App.css";

function App() {
  return (
    <>
      <Name name={"Charles"}></Name>
      <Surname surname={"Bukowski"}></Surname>
      <Age age={30}></Age>
      <Player name={"Charles"} surname={"Bukowski"} age={30}></Player>
    </>
  );
}
export default App;
