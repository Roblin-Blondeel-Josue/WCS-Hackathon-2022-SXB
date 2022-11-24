import React from "react";
import GetDistance from "../services/DistanceCalculator";

function CarbonPrintCalcul(distance) {
  const arroundDistance = Math.round(distance);
  const carbonPrintResult = arroundDistance * 0.285;
  return carbonPrintResult;
}

export default function CarbonPrint({ start, end }) {
  const dist1 = GetDistance(start, end);
  const carbonPrintTotal = CarbonPrintCalcul(dist1);
  return <h2>{carbonPrintTotal} en Kg de CO2</h2>;
}
