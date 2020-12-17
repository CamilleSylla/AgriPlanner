import React from 'react'

export default function Resume ({data, onValidate, vari}) {


    
    return (
        <div className="resume">
          <h1>Resumé</h1>
          <h2>{data.name}</h2>
          <h3>Varietées</h3>
          <div>{vari && vari.map(vari => {
              return <li>{vari}</li>
          })}</div>
          <p>Prix : <span>{data.price}</span></p>
          <p>Unité de mesure : <span>{data.unit}</span></p>
          <p>Temps de culture en semaine : <span>{data.growLength}</span></p>
          <p>Fenetre de récolte en semaine : <span>{data.fenetre}</span></p>
          <input type="color" name="color" value={data.color}/>
          <button className="validateBtn" onClick={onValidate}>Validé</button>
          </div>
    )
}