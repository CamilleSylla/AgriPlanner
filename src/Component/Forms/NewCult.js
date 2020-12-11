import React, { useContext, useEffect, useState } from "react";
import { MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { LegumeContext } from "../../Context/LegumeContext";
import { ParcelleContext } from "../../Context/ParcelleContext";

export default function NewCult() {
  const [newCult, setNewCult] = useState({ clientId: "1" });
  const [acc, setAcc] = useState(0);
  const [legume, setLegume] = useContext(LegumeContext)
  const [parcelle, setParcelle] = useContext(ParcelleContext)

  const onParChange = (e) => {
    setNewCult({ ...newCult, [e.target.name]: e.target.value });
    
  };

  function onValidate() {
    axios.post("/api/newCult", newCult).then((res) => console.log(res));
    console.log(newCult);
  }

 
   function variete() {
    if (newCult.legume) {
      const find =  legume.find((legume) => legume.name === newCult.legume);
      if (find && acc === 0) {
        setNewCult({
          ...newCult,
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
    })
    vari = variete()
  }

  return (
    <div className="CrudContainer">
      <h1>New culture</h1>
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

      <label for="length">Organisation</label>
      <div>
        <input
          type="number"
          name="rowNum"
          min="1"
          placeholder="nombre de planches"
          onChange={onParChange}
        />
        <input
          type="number"
          name="rowLength"
          min="1"
          placeholder="Longueur de la planche"
          onChange={onParChange}
        />
        <input
          type="number"
          name="rowWidth"
          min="1"
          placeholder="Largeur de la planche"
          onChange={onParChange}
        />
        <input
          type="number"
          name="spaceBet"
          min="0.1"
          placeholder="Espacement"
          onChange={onParChange}
        />
        <input
          type="date"
          name="start"
          placeholder={new Date()}
          onChange={onParChange}
        ></input>
      </div>

      <button onClick={onValidate}>Validé</button>
    </div>
  );
}
