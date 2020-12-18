import React, { useState } from "react";
import NewCult from "../../../Forms/NewCult";
import NewLeg from "../../../Forms/NewLeg";
import NewPar from "../../../Forms/NewPar";
import NewPreset from "../../../Forms/NewPreset";

import "./Crud.scss";

export default function Crud() {
  const [show, setShow] = useState("Cult");
  function Show() {
    if (show === "Cult") {
      return <NewCult />;
    } else if (show === "Par") {
      return <NewPar />;
    } else if (show === "Preset") {
      return <NewPreset/>;
    } else {
      return <NewLeg />;
    }
  }
  return (
    <div id="createNav">
      <nav>
        <li onClick={() => setShow("Cult")}>Nouvelle Culture</li>
        <li onClick={() => setShow("Preset")}>Nouveau Preset</li>
        <li onClick={() => setShow("Leg")}>Nouveau Produit</li>
        <li onClick={() => setShow("Par")}>Nouvelle Parcelle</li>
      </nav>
      <div id="create">{Show()}</div>
    </div>
  );
}
