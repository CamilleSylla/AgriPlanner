import React, { useState } from "react";
import ListCult from "../../../List/ListCult";
import ListLeg from "../../../List/ListLeg";
import ListPar from "../../../List/ListPar";

import '../../../List/List.scss'
export default function List() {
  const [show, setShow] = useState("Cult");
  function Show() {
    if (show === "Cult") {
      return <ListCult />;
    } else if (show === "Leg") {
      return <ListLeg />;
    } else {
      return <ListPar />;
    }
  }
  return (
    <div id="listNav">
      <nav>
        <li onClick={() => setShow("Cult")}>Liste des Cultures</li>
        <li onClick={() => setShow("Leg")}>Liste des Produits</li>
        <li onClick={() => setShow("Par")}>Liste des Parcelles</li>
      </nav>
      <div id="list">{Show()}</div>
    </div>
  );
}
