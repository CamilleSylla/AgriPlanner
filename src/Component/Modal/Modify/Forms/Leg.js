import Axios from "axios";
import React, { useEffect, useState } from "react";
import Delete from '../../../../assets/icons/delete.svg'

export default function Leg({ details }) {
  const [modifyCult, setModifyCult] = useState({
    id: details._id,
  });
  const [vari, setVari] = useState(details.variete);
  console.log(modifyCult.id);
  const onParChange = (e) => {
    setModifyCult({ ...modifyCult, [e.target.name]: e.target.value });
  };
  const modifyValidation =  () => {
    console.log(modifyCult);

      setModifyCult({...modifyCult, variete: vari})
      
 Axios.patch("/api/legume/update", {
      ...modifyCult,
    }).then((res) => console.log(res));
  };
  const addNewVar = (e) => {
    const value = document.querySelector("#varieteM");
    setVari([...vari, value.value]);
    value.value = "";
  };
  const removeVari = (e) => {
      const index = vari.indexOf(e.target.value)
      if (index > -1) {
          vari.splice(index, 1)
      }
      
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder={"Nom du produit : " + details.name}
        onChange={onParChange}
      />
      <label for="length">Caractéristique</label>
      <input type="color" name="color" onChange={onParChange} />
      <input
        type="number"
        name="price"
        min="0"
        max="100"
        placeholder={"Prix unitaire : " + details.price}
        onChange={onParChange}
      />
      <input
        type="text"
        name="unit"
        placeholder={"Unité de mesure : " + details.unit}
        onChange={onParChange}
      />
      <input
        type="number"
        name="growLength"
        min="1"
        max="100"
        placeholder={"Temps de culture : " + details.growLength}
        onChange={onParChange}
      />
      <input
        type="number"
        name="fenetre"
        min="0"
        placeholder={"Fenetre de récolte : " + details.fenetre}
        onChange={onParChange}
      />
      <div>
        <input type="text" id="varieteM" name="variete" placeholder="Ajouter une variete"/>

        {vari.map((variete, i) => {
          return (<table>
<th>{variete}</th>
<th><input type="image" src={Delete} value={variete} onClick={removeVari}/></th>
          </table>)
        })}

        <button onClick={addNewVar}>Ajouté</button>
      </div>

      <button onClick={modifyValidation}>Validé</button>
    </div>
  );
}
