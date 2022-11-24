import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ScubaDivingIcon from "@mui/icons-material/ScubaDiving";
import CityHeader from "../components/CityHeader";
import GenerateButton from "../components/GenerateButton";
import list from "../data/citiesList.json";
import { Stack } from "@mui/system";

function Home() {
    const [city, setCity] = useState();

    return (
        <Box>
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minWidth: "100vw",
                    minHeight: !city && "100vh",
                    height: city && "20vh",
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    gap="1rem"
                    sx={{
                        position: !city && "absolute",
                        top: "1rem",
                        left: { xs: "unset", sm: "1rem" },
                        // margin: { xs: "auto", sm: "0 0 0 10px" },
                    }}
                >
                    <Typography
                        variant="title"
                        color="white.main"
                        fontSize={{ xs: "3rem", sm: "5rem" }}
                    >
                        APNEA
                    </Typography>
                    <ScubaDivingIcon fontSize="large" color="white" />
                </Stack>
                <GenerateButton list={list} setCity={setCity} />
            </Stack>
            {city && <CityHeader city={city.name} />}
        </Box>
    );
}

export default Home;
