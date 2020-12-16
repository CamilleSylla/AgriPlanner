import React, { useContext, useState } from "react";
import axios from "axios";
import Resume from "./NewCultTools/Resume";
import Forms from "./NewCultTools/Form";

export default function NewCult() {
  const [newCult, setNewCult] = useState({ clientId: "1" });
  console.log(newCult);
  const onParChange = (e) => {
    setNewCult({ ...newCult, [e.target.name]: e.target.value });
    console.log(newCult);
  };
  function onValidate() {
    axios.post("/api/newCult", newCult).then((res) => console.log(res));
    console.log(newCult);
  }

  return (
    <div className="CrudContainer">
      <h1>Nouvelle culture</h1>
      <div className="crudItems">
        <Forms onChange={onParChange} data={newCult} setData={setNewCult} />
        <Resume data={newCult} validate={onValidate} />
      </div>
    </div>
  );
}
