import { TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";

export default function Forms({ onChange }) {
  return (
    <div className="createFroms">
      <TextField
        className="outlined-basic"
        label="Nom de la parcelle"
        name="name"
        onChange={onChange}
        variant="outlined"
      />
      <TextField
        className="outlined-basic"
        min="1"
        type="number"
        label="Longueur"
        name="length"
        onChange={onChange}
        variant="outlined"
      />
      <TextField
        className="outlined-basic"
        label="Largeur"
        name="width"
        min="1"
        onChange={onChange}
        variant="outlined"
      />
      <TextField
        className="outlined-basic"
        label="Surface en M²"
        name="surface"
        min="0"
        onChange={onChange}
        variant="outlined"
      />
    </div>
  );
}
