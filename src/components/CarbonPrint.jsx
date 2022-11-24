import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import GetDistance from "../services/DistanceCalculator";
import GetIata from "../services/DistanceIATA";
import { Typography, Card } from "@mui/material";
import ConnectingAirportsOutlinedIcon from "@mui/icons-material/ConnectingAirportsOutlined";
import CloudIcon from "@mui/icons-material/Cloud";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

function CarbonPrintCalcul(distance) {
  const carbonPrintResult = Math.round(distance * 0.285);
  return carbonPrintResult;
}
function FlightToAnything(CpValue, coef) {
  const CpReturn = Math.round(CpValue / coef);
  return CpReturn;
}
export default function CarbonPrint({ ville }) {
  const aeroport1 = GetIata("Strasbourg");
  const aeroport2 = GetIata("Talas");
  console.log(aeroport1, aeroport2);
  const voyage = GetDistance(aeroport1, aeroport2);
  const carbonPrintFlight = CarbonPrintCalcul(voyage);
  const carbonPrintCar = FlightToAnything(carbonPrintFlight, 0.158);
  const carbonPrintCow = FlightToAnything(carbonPrintFlight, 1.14);
  const matches = useMediaQuery("(min-width:900px)");
  const styleCardMd = {
    height: "22vh",
    widht: "80vw",
    margin: "1rem",
    bgColor: "rgb(217, 217, 217, .06)",
    color: "#324B4B",
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "3px 3px 10px 0px rgba(0,63,67,0.9)",
  };
  return (
    <Card sx={styleCardMd}>
      <Typography
        variant="body1"
        align="center"
        style={{
          display: "flex",
          height: "2.5em",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#768DDB",
          fontSize: "1em",
          color: "white",
          borderBottom: "1px solid #002463",
        }}
      >
        <ConnectingAirportsOutlinedIcon
          sx={matches ? { fontSize: "2em" } : { fontSize: "1em" }}
        />
        Empreinte carbonne de votre vol
      </Typography>
      <Typography
        variant="body2"
        align="center"
        style={{ paddingTop: "0.5em", fontSize: "1em" }}
      >
        De Strasbourg à {ville} : <br />
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1em",
        }}
      >
        {carbonPrintFlight ? carbonPrintFlight : "Error"} Kg de CO2 soit{" "}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1em",
        }}
      >
        {carbonPrintCar} Km en voiture
        <DirectionsCarFilledIcon
          style={{ paddingLeft: "0.5em" }}
          sx={matches ? { fontSize: "2em" } : { fontSize: "1em" }}
        />
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1em",
        }}
      >
        <CloudIcon
          style={{ paddingRight: "0.5em" }}
          sx={matches ? { fontSize: "2em" } : { fontSize: "1em" }}
        />
        {carbonPrintCow} jours de pets d'une vache
      </Typography>
    </Card>
  );
}
