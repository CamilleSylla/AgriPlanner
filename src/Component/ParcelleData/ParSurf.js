import React, { useContext } from "react";
import { ParcelleContext } from "../../Context/ParcelleContext";
import { Ps } from "../../utils";

export default function ParSurf() {
  const [parcelle, setParcelle] = useContext(ParcelleContext);
  const calc = parcelle.map((size, i) => {
    const surface = Ps(size.length, size.width);
    return (
      <div>
        <h3>{size.name}</h3>
        <p>{surface + "m²"}</p>
      </div>
    );
  });
  const Total = parcelle.map(el => {
      const arr = []
      parcelle.forEach(element => {
          const calc = Ps(element.length,element.width)
          arr.push(calc)
      });
      console.log(arr);
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return <p>{arr.reduce(reducer) + "m²"}</p>
  })

  return (
    <div>
      <h1>Surface Total par parcelle</h1>
      {calc}
      <h1>Surface Total de l'établissement</h1>
      {Total[0]}
    </div>
  );
}
