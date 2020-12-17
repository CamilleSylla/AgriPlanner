import React, { useState } from "react";
import { plancheCalc } from "../../utils";
import "./NewForm.scss";


export default function PlanCalc () {
  const [newPar, setNewPar] = useState({ clientId: "1" });

  const onParChange = (e) => {
    setNewPar({ ...newPar, [e.target.name]: e.target.value });
    console.log(newPar);
  };
  

  return (
    <div className="CrudContainer">
      <h1>Calc</h1>
      
      <input
        type="number"
        name="lengthP"
        placeholder="Longueur de la planche"
        onChange={onParChange}
      />
      <input
        type="number"
        name="widthP"
        placeholder="Largeur de la planche"
        onChange={onParChange}
      />
      <input
        type="number"
        name="spaceRow"
        placeholder="Espace entre les planches"
        onChange={onParChange}
      />
      <input
        type="number"
        name="row"
        placeholder="Nombre de rangs"
        onChange={onParChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantité a planté"
        onChange={onParChange}
      />
      <p id="under">{plancheCalc(newPar)}</p>
    </div>
  );
}