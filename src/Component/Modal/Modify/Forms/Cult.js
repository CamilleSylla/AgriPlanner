import { MenuItem, Select } from "@material-ui/core";
import Axios from "axios";
import React, { useContext, useState } from "react";
import { LegumeContext } from "../../../../Context/LegumeContext";
import { ParcelleContext } from "../../../../Context/ParcelleContext";

export default function Cult({ details }) {
    const [modifyCult, setModifyCult] = useState({id: details._id})
    const [acc, setAcc] = useState(0);
    const [legume, setLegume] = useContext(LegumeContext)
    const [parcelle, setParcelle] = useContext(ParcelleContext)

  function variete() {
    if (modifyCult.legume) {
      const find = legume.find((legume) => legume.name === modifyCult.legume);
      if (find && acc === 0) {
        setModifyCult({
          ...modifyCult,
          price: find.price,
          unit: find.unit,
          growLength: find.growLength,
          color: find.color,
          fenetre: find.fenetre,
        });
        setAcc(1);
      }
      const vari = find.variete.map((details, i) => {
        return <MenuItem value={details}>{details}</MenuItem>;
      });
      return vari;
    } else {
      return <MenuItem>rien</MenuItem>;
    }
  }

  let legum;
  let vari;
  if (legume !== undefined) {
    legum = legume.map((details, i) => {
      return <MenuItem value={details.name}>{details.name}</MenuItem>;
    });
    vari = variete();
  }

  const onParChange = (e) => {
    setModifyCult({ ...modifyCult, [e.target.name]: e.target.value });
    
  };
  const modifyValidation = async  () => {
    await Axios.patch('/api/cult/update', {
        ...modifyCult
    })
    .then(res => console.log(res))
}

  return (
    <div>
        <input type="color" name="color" onChange={onParChange} />
        <Select name="legume" onChange={onParChange}>
        {legum}
      </Select>

      <Select name="variete" onChange={onParChange}>
        {vari}
      </Select>

      <Select name="parcelle" onChange={onParChange}>
        {parcelle.map((details, i) => {
          return <MenuItem value={details.name}>{details.name}</MenuItem>;
        })}
      </Select>
      <input
        type="number"
        min="0"
        name="fenetre"
        placeholder={"fenetre de récolte : " + details.fenetre}
        onChange={onParChange}
      />
      <input
        type="number"
        min="1"
        name="growLength"
        placeholder={"Temps de culture : " + details.growLength}
        onChange={onParChange}
      />
      <input
        type="number"
        min="0"
        name="price"
        placeholder={"prix a la revente : " + details.price}
        onChange={onParChange}
      />
      <input
        type="number"
        min="0"
        name="rowLength"
        placeholder={"longueur de planche : " + details.rowLength}
        onChange={onParChange}
      />
      <input
        type="number"
        min="0"
        name="rowNum"
        placeholder={"Nombre de planches : " + details.rowNum}
        onChange={onParChange}
      />
      <input
        type="number"
        min="0"
        name="rowWidth"
        placeholder={"largeur de planche : " + details.rowWidth}
        onChange={onParChange}
      />
      <input
        type="number"
        min="0"
        name="spaceBet"
        placeholder={"espacement entre les planches : " + details.spaceBet}
        onChange={onParChange}
      />
      <input type="date" name="start" placeholder={new Date()} onChange={onParChange}></input>
        <button onClick={modifyValidation}>Validé</button>
    </div>
  );
}
