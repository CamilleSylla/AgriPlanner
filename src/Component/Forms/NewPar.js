import React, { useState } from "react";
import axios from "axios";
import "./NewForm.scss";

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
      <div className="crudItems">
        <h1>Parcelle</h1>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Nom de la parcelle"
            onChange={onParChange}
          />
          <input
            type="number"
            name="length"
            min="1"
            max="100"
            placeholder="Longueur"
            onChange={onParChange}
          />
          <input
            type="number"
            name="width"
            min="1"
            max="100"
            placeholder="Largeur"
            onChange={onParChange}
          />
          <input
            type="number"
            name="surface"
            min="1"
            max="100"
            placeholder="Surface en M²"
            onChange={onParChange}
          />
          <button onClick={onValidate}>Validé</button>
        </div>

        
      </div>
    </div>
  );
}
