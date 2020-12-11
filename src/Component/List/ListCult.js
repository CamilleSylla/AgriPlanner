import React, { useContext } from "react";
import { CultContext } from "../../Context/CultContext";

export default function ListCult() {
  const [cult, setCult] = useContext(CultContext)
  

  return (
    <div className="listContainer">
      <h2>Liste Cultures</h2>
      <table>
        <tr>
          <th>Couleur</th>
          <th>Legume</th>
          <th>Variete</th>
          <th>Prix</th>
          <th>Unité de mesure</th>
          <th>Temps de culture</th>
          <th>Fénêtre de récolte</th>
          <th>Debut de culture</th>
          <th>récolte estimé</th>
          <th>Parcelle</th>
          <th>Nombre de planches</th>
          <th>Longueur d'une planche</th>
          <th>Largeur d'une planche</th>
          <th>Espacement entre les planche</th>
        </tr>
        {cult.map((details, i) => {
          return (
            <tr>
              <th>
                <input type="color" value={details.color} />
              </th>
              <th>{details.legume}</th>
              <th>{details.variete}</th>
              <th>{details.price}</th>
              <th>{details.unit}</th>
              <th>{details.growLength}</th>
              <th>{details.fenetre}</th>
              <th>{details.start}</th>
              <th>{details.swag}</th>
              <th>{details.parcelle}</th>
              <th>{details.rowNum}</th>
              <th>{details.rowLength}</th>
              <th>{details.rowWidth}</th>
              <th>{details.spaceBet}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
