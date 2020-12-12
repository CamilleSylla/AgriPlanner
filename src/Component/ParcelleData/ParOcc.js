import React, { useContext } from "react";
import { CultContext } from "../../Context/CultContext";
import { ParcelleContext } from "../../Context/ParcelleContext";
import { Ps, pSE, pST } from "../../utils";

export default function ParOcc() {
  const [cult, setCult] = useContext(CultContext);
  const [parcelle, setParcelle] = useContext(ParcelleContext);
  

  const calc = cult.map((size, i) => {
    const occupied = ((size.rowLength*size.rowWidth)*size.rowNum ) + ((size.rowLength*size.spaceBet)*size.rowNum)
    const parData = parcelle.filter(par => par.name === size.parcelle)
    const parTot = parData.map((data,i) => data.length*data.width)
    const per = Math.round((occupied/parTot)*100)
    return (
        <div>
            <h3>{size.parcelle}</h3>
            <p>Espace occupé : {occupied}m² <span>{per}%</span></p>
            <p>Espace total de la parcelle : {parTot}m²</p>
        </div>
    )
  });

  return (<div>
      <h1>Occupation par parcelle</h1>
      {calc}
      </div>);
}
