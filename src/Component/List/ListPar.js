import React, { useContext } from "react";
import { ParcelleContext } from "../../Context/ParcelleContext";
import { Del } from "../../utils";
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit.svg";

import "./List.scss";

export default function ListPar() {
  const [parcelle, setParcelle] = useContext(ParcelleContext);

  return (
    <div className="listContainer">
      <h2>Liste Parcelle</h2>
      <table>
        <tr>
          <th>Nom</th>
          <th>Longueur en (m)</th>
          <th>Largeur en (m)</th>
          <th>surface (m²)</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
        {parcelle.map((details, i) => {
          return (
            <tr>
              <th>{details.name}</th>
              <th>{details.length}</th>
              <th>{details.width}</th>
              <th>{details.surface}</th>
              <th>
                <input type="image" src={Edit} />
              </th>
              <th>
                <input
                  type="image"
                  src={Delete}
                  id={details._id}
                  value="parcelle"
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
