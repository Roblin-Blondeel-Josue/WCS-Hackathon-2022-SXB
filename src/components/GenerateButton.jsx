import { Button } from "@mui/material";
import React from "react";

function GenerateButton({ list, setCity }) {
    const getRandomCity = (arr) => {
        const index = Math.floor(Math.random() * (arr.length - 1) + 1);
        setCity(list[index]);
    };

    return <Button onClick={() => getRandomCity(list)}>Visitez un pays</Button>;
}

export default GenerateButton;