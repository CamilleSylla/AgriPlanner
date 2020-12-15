import React, { useContext } from "react";
import { CultContext } from "../../Context/CultContext";

export default function Recette() {
  const [cult, setCult] = useContext(CultContext);
  const arr = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  function All() {
    function calc() {
      cult.map((details, i) => {
        if (details.quantity) {
          const R = details.quantity * details.price;
          arr.push(R);
        }
      });
    }
    calc();
    if (arr.length) {
      const All = arr.reduce(reducer);
      return All;
    }
  }
  return (
    <div>
      <h1>Chiffre d'affaire Global estimé</h1>
      <p>{All()}€</p>{" "}
    </div>
  );
}
