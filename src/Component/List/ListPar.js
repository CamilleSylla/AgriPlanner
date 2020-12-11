import React, { useContext } from 'react';
import { ParcelleContext } from '../../Context/ParcelleContext';

import './List.scss';

export default function ListPar () {
    const [parcelle, setParcelle] = useContext(ParcelleContext)
    
    
    return (
        <div className="listContainer">
            <h2>Liste Parcelle</h2>
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Longueur en (m)</th>
                    <th>Largeur en (m)</th>
                    <th>surface (m²)</th>
                </tr>
                {parcelle.map((details, i) => {
                    return (
                        <tr>
                            <th>{details.name}</th>
                            <th>{details.length}</th>
                            <th>{details.width}</th>
                            <th>{details.surface}</th>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}