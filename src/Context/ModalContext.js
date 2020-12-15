import React, { useState, createContext} from 'react';

export const ModalContext = createContext();

export function ModalProvider(props) {
    const [modal, setModal] = useState({show: false});

    return (
        <ModalContext.Provider value={[modal, setModal]}>
            {props.children}
        </ModalContext.Provider>
    );
}