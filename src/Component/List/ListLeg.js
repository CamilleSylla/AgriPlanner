import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { LegumeContext } from "../../Context/LegumeContext";

export default function ListLeg() {
  const [legume, setLegume] = useContext(LegumeContext)
  console.log(legume);


  return (
    <div className="listContainer">
      <h2>Liste Legumes</h2>
      <table>
        <tr>
          <th>Couleur</th>
          <th>Nom</th>
          <th>Variétés</th>
          <th>Prix</th>
          <th>Unité</th>
          <th>Temps de culture</th>
          <th>Fenêtre de récolte</th>
        </tr>
        {legume.map((details, i) => {
    return (
      <tr>
        <th>
          <input type="color" value={details.color} />
        </th>
        <th>{details.name}</th>
        <th>
          {details.variete.map((vari, i) => {
            return <li>{vari}</li>;
          })}
        </th>
        <th>{details.price + "€"}</th>
        <th>{details.unit}</th>
        <th>{details.growLength}</th>
        <th>{details.fenetre}</th>
      </tr>
    );
  })}
      </table>
    </div>
  );
}
