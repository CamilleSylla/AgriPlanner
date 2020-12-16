import Axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const CultContext = createContext();

export function CultProvider(props) {
    const [cult, setCult] = useState([]);
    useEffect(() => {
        Axios.get(`/api/Cult`)
            .then(res => {setCult(res.data)})
      },[])

    return (
        <CultContext.Provider value={[cult, setCult]}>
            {props.children}
        </CultContext.Provider>
    );
}