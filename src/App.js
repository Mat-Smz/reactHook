import React from "react";
import Profil from "./component/profil.js";
import "./App.css";

const deadAuthors = [
  {
    show: true,
    name: "Charles",
    surname: "Bukowski",
    years: 30,
  },
  {
    show: false,
    name: "Marcel",
    surname: "Poust",
    years: 25,
  },
  {
    show: true,
    name: "Victor",
    surname: "Hugo",
    years: 269,
  },
  {
    show: true,
    name: "Arthur",
    surname: "Rimbaud",
    years: 25,
  },
  {
    show: true,
    name: "Jean",
    surname: "Racine",
    years: 25,
  },
  {
    show: true,
    name: "Virginie",
    surname: "Despentes",
    years: 32,
  },
];

const renderUser = ({ show, name, surname, years }) => {
  console.log("haha");
  return (
    <div key={name}>
      <Profil name={name} surname={surname} years={years} show={show} />
    </div>
  );
};

function App() {
  const deadUsersRendered = React.useMemo(
    () => deadAuthors.filter(({ show }) => show === true).map(renderUser),
    [deadAuthors]
  );

  return (
    <div>
      <div className="row">{deadUsersRendered}</div>
    </div>
  );
}

export default App;
