import { TextField } from "@material-ui/core";
  import React from "react";

  export default function Forms ({onChange, addNewVar}) {

    return (
        <div className="createFroms">
            <TextField
          className="outlined-basic"
          label="Nom du Produit"
          name="name"
          onChange={onChange}
          variant="outlined"
        />
            <TextField
          className="outlined-basic"
          min="0"
          type="number"
          label="Prix unitaire"
          name="price"
          onChange={onChange}
          variant="outlined"
        />
         <TextField
          className="outlined-basic"
          label="Unité de mesure"
          name="unit"
          onChange={onChange}
          variant="outlined"
        />
         <TextField
          className="outlined-basic"
          label="Temps de culture"
          name="growLength"
          min="0"
          onChange={onChange}
          variant="outlined"
        />
         <TextField
          className="outlined-basic"
          label="Fenetre de récolte"
          name="fenetre"
          min="0"
          onChange={onChange}
          variant="outlined"
        />
        <div>
        <TextField
          className="outlined-basic"
          label="Variété"
          id="variete"
          name="variete"
          onChange={onChange}
          variant="outlined"
        />
        <button onClick={addNewVar}>Ajouté</button>
        </div>
        <input type="color" name="color" onChange={onChange} />
        <div>
          
        </div>
        
      </div>
    )
  }