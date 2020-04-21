import React from "react";
// import Name from "./component/name.js";
// import Surname from "./component/surname.js";
// import Age from "./component/years.js";
import Profil from "./component/profil.js";
import "./App.css";

function App() {
  return (
    <div>
      <Profil name={"Charles"} surname={"Bukowski"} years={30}></Profil>
      <Profil name={"Marcel"} surname={"Proust"} years={25}></Profil>
      <Profil name={"Victor"} surname={"Hugo"} years={25}></Profil>
      <Profil name={"Arthur"} surname={"Rimbaud"} years={25}></Profil>
    </div>
  );
}
export default App;
