import React, { useState } from "react";
import "./NewForm.scss";


export default function PlanCalc () {
  const [newPar, setNewPar] = useState({ clientId: "1" });

  const onParChange = (e) => {
    setNewPar({ ...newPar, [e.target.name]: e.target.value });
    console.log(newPar);
  };
  function onValidate() {
      const Sp = newPar.length*newPar.width
      const Sr = newPar.width*newPar.space
      const Npl = Sp/Sr
      const Qpl = newPar.quantity/newPar.rang
      const R = Qpl/Npl
      const round = Math.round(R * 100 )/100
    document.getElementById("under").innerHTML = `Nombre de planches estimées ${round}`;
  }

  return (
    <div className="CrudContainer">
      <h1>Calc</h1>
      
      <input
        type="number"
        name="length"
        placeholder="Longueur de la planche"
        onChange={onParChange}
      />
      <input
        type="number"
        name="width"
        placeholder="Largeur de la planche"
        onChange={onParChange}
      />
      <input
        type="number"
        name="space"
        placeholder="Espace entre les planches"
        onChange={onParChange}
      />
      <input
        type="number"
        name="rang"
        placeholder="Nombre de rangs"
        onChange={onParChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantité a planté"
        onChange={onParChange}
      />
      

      <button onClick={onValidate}>Validé</button>
      <p id="under"></p>
    </div>
  );
}