import React from "react";
import { Typography } from "@mui/material";

export default function AirQuality() {
  const token = "ec08e40ed8653e9069b989b3a6e4bb240d2fbafd";
  return (
    <div>
      <Typography variant="h6" href="https://waqi.info/">
        World Air Quality Index
      </Typography>
    </div>
  );
}
