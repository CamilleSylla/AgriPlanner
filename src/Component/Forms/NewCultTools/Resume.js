import React from 'react'

export default function Resume ({data, validate }) {


    return (
        <div className="resume">
            <h1>Resumé</h1>
          <h2>{data.legume}</h2>
          <h3>{data.variete}</h3>
          <p>Parcelle : <span>{data.parcelle}</span></p>
          <p>Quantité : <span>{data.quantity}</span></p>
          <p>Semé le : <span>{data.start}</span></p>
          <h3>Planches</h3>
          <p>Longeur : <span>{data.lengthP}</span>m</p>
          <p>Largeur : <span>{data.widthP}</span>m</p>
          <p>Rangs : <span>{data.row}</span></p>
          <p>Espacement entre les rangs : <span>{data.spaceRow}</span>m</p>
          <p>Nombre de planches : <span>{data.numberP}</span></p>
          <button className="validateBtn" onClick={validate}>Validé</button>
          </div>
    )
}