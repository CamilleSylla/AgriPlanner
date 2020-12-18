import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useContext } from "react";
import { LegumeContext } from "../../../Context/LegumeContext";
import { ParcelleContext } from "../../../Context/ParcelleContext";
import { plancheCalc } from "../../../utils";

export default function Forms({ preset, onChange }) {
  const [legume, setLegume] = useContext(LegumeContext);
  const [parcelle, setParcelle] = useContext(ParcelleContext);

  const Legume = legume.map((details, i) => {
    return <MenuItem value={details.name}>{details.name}</MenuItem>;
  });

  function Variete() {
    const data = legume.filter((details, i) => details.name === preset.legume);
    console.log(data);
    return data.map((details, i) => {
      return details.variete.map((el) => {
        return <MenuItem value={el}>{el}</MenuItem>;
      });
    });
  }

  const Parcelles = parcelle.map((details, i) => {
      return <MenuItem value={details.name}>{details.name}</MenuItem>
  })

  return (
    <div className="createFroms">
        <div>
        <TextField
        className="outlined-basic"
        label="Nom du preset"
        name="name"
        onChange={onChange}
        variant="outlined"
      />
      <FormControl className="outlined-basic" variant="outlined">
        <InputLabel className="demo-simple-select-label">Produit</InputLabel>
        <Select
          label="Produit"
          name="legume"
          onChange={onChange}
          value={preset.legume}
        >
          {Legume}
        </Select>
      </FormControl>
      <FormControl className="outlined-basic" variant="outlined">
        <InputLabel className="demo-simple-select-label">Variété</InputLabel>
        <Select
          label="Variete"
          name="variete"
          onChange={onChange}
          value={preset.variete}
        >
          {Variete()}
        </Select>
      </FormControl>
      <FormControl className="outlined-basic" variant="outlined">
        <InputLabel className="demo-simple-select-label">Parcelle</InputLabel>
        <Select
          label="Parcelle"
          name="parcelle"
          onChange={onChange}
          value={preset.parcelle}
        >
          {Parcelles}
        </Select>
      </FormControl>
      <TextField
          className="outlined-basic"
          label="Quantité"
          name="quantity"
          onChange={onChange}
          variant="outlined"
        />
        </div>
      <div>
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
          label={"Nombre de planche" + " " +`(estimé ${plancheCalc(preset)})`}
          name="numberP"
          onChange={onChange}
          variant="outlined"
        />
      </div>
        
    </div>
  );
}
