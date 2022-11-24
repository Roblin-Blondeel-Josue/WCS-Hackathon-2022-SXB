import { Button } from "@mui/material";
import React from "react";

function GenerateButton({ list, setCity, setChecked }) {
    const getRandomCity = (arr) => {
        const index = Math.floor(Math.random() * arr.length);
        setChecked(false);
        setCity(list[index]);
    };

    return (
        <Button
            variant="contained"
            size="large"
            sx={{ padding: "1rem" }}
            onClick={() => getRandomCity(list)}
        >
            Generez une destination
        </Button>
    );
}

export default GenerateButton;
