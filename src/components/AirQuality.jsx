import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

export default function AirQuality({ city }) {
  const token = "ec08e40ed8653e9069b989b3a6e4bb240d2fbafd";

  useEffect(() => {
    fetch(`https://api.waqi.info/feed/${city}/?token=${token}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2">
        {city}
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
