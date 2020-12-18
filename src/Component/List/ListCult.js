import React, { useContext } from "react";
import { CultContext } from "../../Context/CultContext";

import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit.svg";
import { Del } from "../../utils";
import { ModalContext } from "../../Context/ModalContext";

export default function ListCult() {
  const [cult, setCult] = useContext(CultContext);
  const [modal, setModal] = useContext(ModalContext)
  
  console.log(cult);

  return (
    <div className="listContainer">
      <h2>Liste Cultures</h2>
      <table>
        <tr>
          <th>Couleur</th>
          <th>Legume</th>
          <th>Variete</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Prévision du CA</th>
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
          <th>Quantité par rangs</th>
          <th>espace entre les rangs</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
        {cult.map((details, i) => {
          return (
            <tr>
              <th>
                <input type="color" value={details.color} />
              </th>
              <th>{details.legume}</th>
              <th>{details.variete}</th>
              <th>{details.quantity}</th>
              <th>{details.price}</th>
              <th>{details.quantity*details.price}</th>
              <th>{details.unit}</th>
              <th>{details.growLength}</th>
              <th>{details.fenetre}</th>
              <th>{details.start}</th>
              <th>{details.swag}</th>
              <th>{details.parcelle}</th>
              <th>{details.numberP}</th>
              <th>{details.lengthP}</th>
              <th>{details.widthP}</th>
              <th>{details.spaceP}</th>
              <th>{details.row}</th>
              <th>{details.spaceRow}</th>
              <th>
                <input type="image" src={Edit} onClick={() => setModal({...modal, show: true, target: "Cult", details: details})}/>
              </th>
              <th>
                <input type="image" src={Delete} id={details._id} value="cult" onClick={Del}/>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
