import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Stack, Typography } from "@mui/material";
import GenerateButton from "./GenerateButton";

function CityHeader({ city, setCity, list, setChecked }) {
    const [img, setImg] = useState(
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODMzMTh8MHwxfHNlYXJjaHwxfHxwYXJpc3xlbnwwfHx8fDE2NjkyOTUwODE&ixlib=rb-4.0.3&q=80"
    );

    // const apiKey = "Y0ARhn_ULsZYMBKuqKRgGRen0RPKFSmo6Hq4T-mpTVE";

    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://api.unsplash.com//search/photos?query=${city.country}+${city.country}+architecture&orientation=landscape&per_page=1&client_id=${apiKey}`
    //         )
    //         .then((res) => {
    //             setImg(res.data.results[0].urls.regular)
    //          .catch((err) => console.warn(err));
    //         });
    // }, [city]);

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
                position: "relative",
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                minWidth: "100vw",
                height: "85vh",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "1rem",
                    right: { sm: "1rem" },
                }}
            >
                <GenerateButton
                    list={list}
                    setCity={setCity}
                    setChecked={setChecked}
                    isTryAgain
                />
            </Box>
            <Stack alignItems="center" justifyContent="center">
                <Typography
                    variant="h1"
                    color="white.main"
                    sx={{ fontWeight: "bold" }}
                >
                    {city.name}
                </Typography>
                <Typography
                    variant="h3"
                    color="white.main"
                    sx={{ fontWeight: "bold" }}
                >
                    {city.country}
                </Typography>
            </Stack>
        </Box>
    );
}

export default CityHeader;
