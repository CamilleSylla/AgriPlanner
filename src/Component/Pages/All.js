import React from "react";
import NewCult from "../Forms/NewCult";
import NewLeg from "../Forms/NewLeg";
import NewPar from "../Forms/NewPar";
import ListCult from "../List/ListCult";
import ListLeg from "../List/ListLeg";
import ListPar from "../List/ListPar";
import ParOcc from "../ParcelleData/ParOcc";
import ParSurf from "../ParcelleData/ParSurf";

export default function All() {
  return (
    <div>
      <NewPar />
      <NewLeg />
      <NewCult />
      <ListPar />
      <ListLeg />
      <ListCult />
      <ParSurf/>
      <ParOcc/>
    </div>
  );
}
