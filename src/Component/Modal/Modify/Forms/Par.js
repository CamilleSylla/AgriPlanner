import Axios from "axios";
import React, { useState } from "react";

export default function Par({ details }) {
    const [modifyCult, setModifyCult] = useState({
        id: details._id
    })
    console.log(modifyCult.id);
  const onParChange = (e) => {
    setModifyCult({ ...modifyCult, [e.target.name]: e.target.value });
    
  };
  const modifyValidation = async  () => {
    await Axios.patch('/api/parcelle/update', {
        ...modifyCult
    })
    .then(res => console.log(res))
}

  return (
    <div>
        <input
        type="text"
        name="name"
        placeholder={"Nom de la parcelle : " + details.name}
        onChange={onParChange}
      />
      <label for="length">Caractéristique</label>
      <div>
        <input
          type="number"
          name="length"
          min="1"
          max="100"
          placeholder={"Longueur : " + details.length}
          onChange={onParChange}
        />
        <input
          type="number"
          name="width"
          min="1"
          max="100"
          placeholder={"Largeur : " + details.width}
          onChange={onParChange}
        />
        <input
          type="number"
          name="surface"
          min="1"
          max="100"
          placeholder={"Surface en M² : " + details.surface}
          onChange={onParChange}
        />
      </div>
          
        
        <button onClick={modifyValidation}>Validé</button>
    </div>
  );
}