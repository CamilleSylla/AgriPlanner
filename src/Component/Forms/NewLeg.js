import React, { useState } from "react";
import axios from "axios";
import Forms from "./NewLegTools.js/Forms";
import Resume from "./NewLegTools.js/Resume";

export default function NewLeg() {
  const [newLeg, setNewLeg] = useState({ clientId: "1", variete: [] });
  const [vari, setVari] = useState([]);

  const onParChange = (e) => {
    setNewLeg({ ...newLeg, [e.target.name]: e.target.value, variete: vari });
    console.log(newLeg);
  };

  function onValidate() {
    setNewLeg({ ...newLeg, variete: vari });
    console.log(newLeg);

    axios.post("/api/newLegume", newLeg).then((res) => console.log(res));
  }

  const addNewVar = (e) => {
    const value = document.querySelector("#variete");
    setVari([...vari, value.value]);
    value.value = "";
  };

  return (
    <div className="CrudContainer">
      <h1>Legume</h1>
      <div className="crudItems">
        <Forms onChange={onParChange} addNewVar={addNewVar}  />
        <Resume onValidate={onValidate} data={newLeg} vari={vari}/>
      </div>
    </div>
  );
}
