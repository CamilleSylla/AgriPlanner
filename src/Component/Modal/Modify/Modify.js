import React, { useContext } from 'react'
import { LegumeContext } from '../../../Context/LegumeContext'
import { ModalContext } from '../../../Context/ModalContext'
import { ParcelleContext } from '../../../Context/ParcelleContext'
import Cult from './Forms/Cult'
import Leg from './Forms/Leg'
import Par from './Forms/Par'

import './Modify.scss'

export default function Modify () {
    const [modal, setModal] = useContext(ModalContext)
  const [legume, setLegume] = useContext(LegumeContext)
  const [parcelle, setParcelle] = useContext(ParcelleContext)

    if(!modal.show){
        return null
    } else {
        if (modal.target === "Cult") {
            return <div><Cult details={modal.details} legume={modal.legume} parcelle={modal.parcelle}/></div>
        } else if (modal.target === "Par") {
            return <div><Par details={modal.details}/></div>
        }else if (modal.target === "Leg") {
            return <div><Leg details={modal.details}/></div>
        } else {
            return null
        }
    }
}
// clientId: "1"
// color: "#c11abb"
// date: "2020-12-14T13:15:55.662Z"
// fenetre: 2
// growLength: 15
// legume: "Betterave"
// parcelle: "SALADE D'HIVER"
// price: 1.3
// rowLength: 10
// rowNum: 3
// rowWidth: 0.8
// spaceBet: 0.3
// start: "2020-12-12"
// unit: "piece"
// variete: "Burpee Golden"