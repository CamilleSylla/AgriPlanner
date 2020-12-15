import React, { useContext, useState } from "react";
import { CultContext } from "../../Context/CultContext";

import "./Recette.scss";

export default function RecettePar() {
  const [cult, setCult] = useContext(CultContext);
  const arr = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  function All() {
    if (arr.length) {
      const All = arr.reduce(reducer);
      return <p>{All}</p>;
    }
  }
  return cult.map((details, i) => {
    if (details.quantity) {
      function calc() {
        const R = details.quantity * details.price;
        arr.push(R);
        return R;
      }

      return (
        <div>
          <div>
            <h1>Chiffre d'affaire global estimé</h1>
            {All()}
          </div>
          <h2>
            Prévison de CA pour la parcelle <span> {details.parcelle} </span>
          </h2>
          <h2>
            Produit :<span> {details.legume} </span>
          </h2>
          <h3>
            Variété : <span> {details.variete} </span>
          </h3>
          <h3>
            {" "}
            Quantité de plans : <span> {details.quantity} </span>
          </h3>
          <h4>
            Prix unitaire <span> {details.price + " " + "€"} </span>
          </h4>
          <h5>Recette estimé</h5>
          <p>{calc() + "€"}</p>
        </div>
      );
    } else {
      return null;
    }
  });
}
