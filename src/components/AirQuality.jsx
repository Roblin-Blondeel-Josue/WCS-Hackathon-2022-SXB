import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";

export default function AirQuality({ city, aqi, setAqi }) {
  const endPoint = "https://api.waqi.info/feed";
  const token = "ec08e40ed8653e9069b989b3a6e4bb240d2fbafd";

  useEffect(() => {
    if (city) {
      fetch(`${endPoint}/${city}/?token=${token}`)
        .then((response) => response.json())
        .then((data) => setAqi(data.data.aqi))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [city]);

  return (
    <Stack alignItems="center">
      <Typography
        variant="title"
        color="white.main"
        fontSize={{ xs: "3rem", sm: "5rem" }}
      >
        {aqi}
      </Typography>
      <Typography
        variant="title"
        color="white.main"
        fontSize={{ xs: "0.5rem", sm: "1rem" }}
      >
        Indice de qualité de l'air
      </Typography>
    </Stack>
  );
}
