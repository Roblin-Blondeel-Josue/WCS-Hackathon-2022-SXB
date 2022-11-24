import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AirQualityWidget from "./AirQuality/AirQualityWidget";

export default function AirQuality({ city }) {
  const [aqi, setAqi] = useState("");

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
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AirQualityWidget />
      <Typography variant="body2">
        {city}: {aqi}
        <a
          href="https://waqi.info/"
          style={{ textDecoration: "none", color: "#000" }}
        >
          World Air Quality Index
        </a>
      </Typography>
    </Box>
  );
}
