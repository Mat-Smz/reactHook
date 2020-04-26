import React from "react";
// import Name from "./component/name.js";
// import Surname from "./component/surname.js";
// import Age from "./component/years.js";
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
    years: 25,
  },
  {
    show: true,
    name: "Arthur",
    surname: "Rimbaud",
    years: 25,
  },
];

const livingAuthors = [
  {
    show: true,
    name: "Virginie",
    surname: "Despentes",
    years: 30,
  },
];

const renderUser = ({ show, name, surname, years }) => {
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

  const livingUsersRendered = React.useMemo(
    () => livingAuthors.filter(({ show }) => show === true).map(renderUser),
    [livingAuthors]
  );

  return (
    <div>
      <div className="row">{deadUsersRendered}</div>
      <div className="row">{livingUsersRendered}</div>
    </div>
  );
}

export default App;
