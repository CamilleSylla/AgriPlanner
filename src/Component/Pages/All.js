import React from "react";
import ParOcc from "../ParcelleData/ParOcc";
import ParSurf from "../ParcelleData/ParSurf";
import PlanCalc from "../Forms/plancheCalc"
import Modify from "../Modal/Modify/Modify";
import RecettePar from "../Economics/RecettePar";
import Recette from "../Economics/Recette";
import PrevisionCA from "../Charts/PrevisionCA";

export default function All() {
  return (
    <div>
      <PrevisionCA/>
      <ParSurf/>
      <ParOcc/>
      <PlanCalc/>
      <Modify/>
      <Recette/>
      <RecettePar/>
    </div>
  );
}
