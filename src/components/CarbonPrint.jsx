import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MakeVoyage from "../services/MakeVoyage";
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
export default function CarbonPrint({ depart, airport, name }) {
    const distanceParcourue = MakeVoyage(depart, airport);

    const carbonPrintFlight = CarbonPrintCalcul(distanceParcourue);
    const carbonPrintCar = FlightToAnything(carbonPrintFlight, 0.158);
    const carbonPrintCow = FlightToAnything(carbonPrintFlight, 1.14);
    const matches = useMediaQuery("(min-width:900px)");
    const styleCardMd = {
        paddingBottom: "1rem",
        widht: "80vw",
        margin: "1rem",

        color: "#324B4B",
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };
    return (
        <Card sx={styleCardMd}>
            <Typography
                variant="title"
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{
                    display: "flex",
                    height: "2.5em",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1976d2",
                    fontSize: "1.2em",
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
                De {depart} à {name} : <br />
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
