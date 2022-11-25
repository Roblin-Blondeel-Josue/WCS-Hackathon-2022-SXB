import { Button } from "@mui/material";
import React from "react";

function GenerateButton({ list, setCity, setChecked, isTryAgain = false }) {
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
            {isTryAgain ? "Essayez encore" : "Generez une destination"}
        </Button>
    );
}

export default GenerateButton;
