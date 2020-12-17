import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { LegumeContext } from "../../../Context/LegumeContext";
import { ParcelleContext } from "../../../Context/ParcelleContext";
import { plancheCalc, Variete } from "../../../utils";

export default function Forms({ onChange, data, setData }) {
  const [acc, setAcc] = useState(0);
  const [legume, setLegume] = useContext(LegumeContext);
  const [parcelle, setParcelle] = useContext(ParcelleContext);
  let legum;
  let vari;
  if (legume) {
    legum = legume.map((details, i) => {
      return <MenuItem value={details.name}>{details.name}</MenuItem>;
    });
    vari = Variete(data, legume, acc, setData, setAcc);
  } 
  console.log(data);
  return (
    <div className="createFroms">
      <div>
        
        <h3>Information produit :</h3>
        <FormControl className="outlined-basic" variant="outlined">
          <InputLabel className="demo-simple-select-label">Produit</InputLabel>
          <Select
            label="Produit"
            name="legume"
            onChange={onChange}
            value={data.legume}
          >
            {legum}
          </Select>
        </FormControl>
        <FormControl className="outlined-basic" variant="outlined">
          <InputLabel className="demo-simple-select-label">Variété</InputLabel>
          <Select
            label="Variété"
            name="variete"
            onChange={onChange}
            value={data.variete}
          >
            {vari}
          </Select>
        </FormControl>
        <FormControl className="outlined-basic" variant="outlined">
          <InputLabel className="demo-simple-select-label">Parcelle</InputLabel>
          <Select
            label="Parcelle"
            name="parcelle"
            onChange={onChange}
            value={data.parcelle}
          >
            {parcelle.map((details, i) => {
              return <MenuItem value={details.name}>{details.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <TextField
          className="outlined-basic"
          label="Quantité"
          name="quantity"
          onChange={onChange}
          variant="outlined"
        />
        <input
          type="date"
          name="start"
          placeholder={new Date()}
          onChange={onChange}
        />
      </div>

      <div>
        <h3>Information des planches :</h3>
        <TextField
          className="outlined-basic"
          min="1"
          type="number"
          label="Longueur de la planche"
          name="lengthP"
          onChange={onChange}
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          min="1"
          type="number"
          label="Largeur de la planche"
          name="widthP"
          onChange={onChange}
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          min="1"
          type="number"
          label="Espacement entre les planche"
          name="spaceP"
          onChange={onChange}
          variant="outlined"
        />

        <TextField
          className="outlined-basic"
          min="1"
          type="number"
          label="Espacement entre les rangs"
          name="spaceRow"
          onChange={onChange}
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          min="1"
          type="number"
          label="Quantité dans un rang"
          name="row"
          onChange={onChange}
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          min="1"
          type="number"
          label={"Nombre de planche" + " " +`(estimé ${plancheCalc(data)})`}
          name="numberP"
          onChange={onChange}
          variant="outlined"
        />
      </div>
    </div>
  );
}
