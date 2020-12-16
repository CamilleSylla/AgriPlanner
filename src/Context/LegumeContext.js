import Axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const LegumeContext = createContext();

export function LegumeProvider(props) {
    const [legume, setLegume] = useState([]);
    useEffect(() => {
        Axios.get(`/api/Legume`)
            .then(res => {setLegume(res.data)})
      },[])

    return (
        <LegumeContext.Provider value={[legume, setLegume]}>
            {props.children}
        </LegumeContext.Provider>
    );
}