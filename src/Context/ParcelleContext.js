import Axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const ParcelleContext = createContext();

export function ParcelleProvider(props) {
    const [parcelle, setParcelle] = useState([]);
    useEffect(() => {
        Axios.get(`/api/Parcelle`)
            .then(res => {setParcelle(res.data)})
      },[])

    return (
        <ParcelleContext.Provider value={[parcelle, setParcelle]}>
            {props.children}
        </ParcelleContext.Provider>
    );
}