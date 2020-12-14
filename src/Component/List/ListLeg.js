import React, { useContext, useEffect } from "react";
import { LegumeContext } from "../../Context/LegumeContext";
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit.svg";
import { Del } from "../../utils";

export default function ListLeg() {
  const [legume, setLegume] = useContext(LegumeContext);
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
          <th>Modifier</th>
          <th>Supprimer</th>
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
              <th>
                <input type="image" src={Edit} />
              </th>
              <th>
                <input
                  type="image"
                  src={Delete}
                  id={details._id}
                  value="legume"
                  onClick={Del}
                />
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
