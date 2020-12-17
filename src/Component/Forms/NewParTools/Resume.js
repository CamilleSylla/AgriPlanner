import React from 'react'

export default function Resume ({data, onValidate}) {


    
    return (
        <div className="resume">
            <h1>Resumé</h1>
          <h2>{data.name}</h2>
          <p>Longueur : <span>{data.length}</span></p>
          <p>Largeur : <span>{data.width}</span></p>
          <p>Surface : <span>{data.surface}</span></p>
          <button className="validateBtn" onClick={onValidate}>Validé</button>
          </div>
    )
}