import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CityHeader from "../components/CityHeader";
import GenerateButton from "../components/GenerateButton";
import list from "../data/citiesList.json";

function Home() {
    const [city, setCity] = useState({ name: "paris" });

    return (
        <Box>
            <GenerateButton list={list} setCity={setCity} />
            {city.name && (
                <Typography>
                    {city.name} - {city.country}
                </Typography>
            )}
            <CityHeader city={city.name} />
        </Box>
    );
}

export default Home;
