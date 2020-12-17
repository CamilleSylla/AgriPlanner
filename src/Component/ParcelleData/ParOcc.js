import React, { useContext } from "react";
import { CultContext } from "../../Context/CultContext";
import { ParcelleContext } from "../../Context/ParcelleContext";
import "./ParOcc.scss";

export default function ParOcc() {
  const [cult, setCult] = useContext(CultContext);
  const [parcelle, setParcelle] = useContext(ParcelleContext);
  console.log(cult);
  const calc = cult.map((size, i) => {
    const occupied =
      Math.round(
        (size.lengthP * size.widthP + size.lengthP * size.spaceP) *
          size.numberP *
          100
      ) / 100;
    const parData = parcelle.filter((par) => par.name === size.parcelle);
    const parTot = parData.map((data, i) => data.length * data.width);
    const per = Math.round((occupied / parTot) * 100);
    return (
      <div className="cardOcc"  style={{border: `5px solid ${size.color}`}}>
        <div className="cardPercent">
          <p>{per}%</p>
        </div>
        <div>
        <input type="color" value={size.color} />
        <h3>{size.parcelle}</h3>
        <p>{size.numberP} planches</p>
        <p>Espace occupé : {occupied}m²</p>
        <p>Espace total de la parcelle : {parTot}m²</p>
        </div>
        
      </div>
    );
  });

  return (
    <div>
      <h1>Occupation par parcelle</h1>
      <div className="occContainer">{calc}</div>
    </div>
  );
}
