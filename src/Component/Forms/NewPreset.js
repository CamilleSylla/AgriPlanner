import Axios from "axios";
import React, { useState } from "react";
import Forms from "./NewPresetTools/Forms";
import Resume from "./NewPresetTools/Resume";

export default function NewPreset() {
    const [preset, setPreset] = useState({ clientId: "1" });
    const [vari, setVari] = useState([]);
    const onChange = (e) => {
        setPreset({ ...preset, [e.target.name]: e.target.value, variete: vari });
    }
    function onValidate() {
    
        Axios.post("/api/newLegume", preset).then((res) => console.log(res));
      }
    
    return (
        <div  className="CrudContainer">
            <h1>Nouveau Preset</h1>
            <div className="crudItems">
            <Forms preset={preset} onChange={onChange}/>
            <Resume preset={preset} onValidate={onValidate} />
            </div>
        </div>
    )
}
