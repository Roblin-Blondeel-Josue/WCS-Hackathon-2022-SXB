import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import GenerateButton from "../components/GenerateButton";
import list from "../data/citiesList.json";

function Home() {
    const [city, setCity] = useState({});

    return (
        <Box>
            <GenerateButton list={list} setCity={setCity} />
            {city.name && (
                <Typography>
                    {city.name} - {city.country}
                </Typography>
            )}
        </Box>
    );
}

export default Home;
