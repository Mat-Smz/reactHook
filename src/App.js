import React from "react";
// import Name from "./component/name.js";
// import Surname from "./component/surname.js";
// import Age from "./component/years.js";
import Profil from "./component/profil.js";
import "./App.css";

function App() {
  return (
    <div>
      <Profil name={"Charles"} surname={"Bukowski"} years={26}></Profil>
    </div>
  );
}
export default App;
