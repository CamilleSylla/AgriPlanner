import { MenuItem } from '@material-ui/core';
import React from 'react';

export default function Resume({onValidate, preset}) {
    
    return (
        <div className="resume">
            <h1>Resumé</h1>
            <h4>{preset.name}</h4>
          <h2>{preset.legume}</h2>
          <h3>{preset.variete}</h3>
          <p>Parcelle : <span>{preset.parcelle}</span></p>
          <p>Quantité : <span>{preset.quantity}</span></p>
          <p>Semé le : <span>{preset.start}</span></p>
          <h3>Planches</h3>
          <p>Longeur : <span>{preset.lengthP}</span>m</p>
          <p>Largeur : <span>{preset.widthP}</span>m</p>
          <p>espacement entre les planches : <span>{preset.spaceP}</span>m</p>
          <p>Rangs : <span>{preset.row}</span></p>
          <p>Espacement entre les rangs : <span>{preset.spaceRow}</span>m</p>
          <p>Nombre de planches : <span>{preset.numberP}</span></p>
          <button className="validateBtn" onClick={onValidate}>Validé</button>
          </div>
    )
}