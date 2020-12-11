import React, { useState } from "react";
import axios from "axios";

export default function NewLeg() {
  const [newLeg, setNewLeg] = useState({ clientId: "1" });
  const [vari, setVari] = useState([]);

  const onParChange = (e) => {
    setNewLeg({ ...newLeg, [e.target.name]: e.target.value, variete: vari });
    console.log(newLeg);
  };

  function onValidate() {
    setNewLeg({ ...newLeg, variete: vari });
    console.log(newLeg);

    axios.post("/api/newLegume", newLeg).then((res) => console.log(res));
  }

  const addNewVar = (e) => {
    const value = document.querySelector("#variete");
    setVari([...vari, value.value]);
    value.value = "";
  };

  return (
    <div className="CrudContainer">
      <h1>Legume</h1>
      <input
        type="text"
        name="name"
        placeholder="Nom de la parcelle"
        onChange={onParChange}
      />
      <label for="length">Caractéristique</label>
      <div>
        <input
          type="number"
          name="price"
          min="0"
          max="100"
          placeholder="Prix unitaire"
          onChange={onParChange}
        />
        <input
          type="text"
          name="unit"
          placeholder="unité de mesure"
          onChange={onParChange}
        />
        <input
          type="number"
          name="growLength"
          min="1"
          max="100"
          placeholder="Temps de culture"
          onChange={onParChange}
        />
        <input
          type="number"
          name="fenetre"
          min="0"
          placeholder="Fenetre de récolte"
          onChange={onParChange}
        />
        <div>
          <input
            type="text"
            id="variete"
            name="variete"
            placeholder="Variété"
          />
          <button onClick={addNewVar}>Ajouté</button>
        </div>
        <label for="color">Couleur</label>
        <input type="color" name="color" onChange={onParChange} />
      </div>

      <button onClick={onValidate}>Validé</button>
    </div>
  );
}
