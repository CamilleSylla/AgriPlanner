import React, { useState } from "react";
import axios from "axios";
import "./NewForm.scss";
import Forms from "./NewParTools/Forms";
import Resume from "./NewParTools/Resume";

export default function NewPar() {
  const [newPar, setNewPar] = useState({ clientId: "1" });

  const onParChange = (e) => {
    setNewPar({ ...newPar, [e.target.name]: e.target.value });
    console.log(newPar);
  };

  function onValidate() {
    axios.post("/api/newParc", newPar).then((res) => console.log(res));
  }

  return (
    <div className="CrudContainer">
      <h1>Parcelle</h1>
      <div className="crudItems">
         <Forms data={newPar} onChange={onParChange}/>
         <Resume data={newPar} onValidate={onValidate}/>
      </div>
    </div>
  );
}
