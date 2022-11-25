import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Number from "./AirQuality/Number";

export default function AirQuality({ city }) {
  const [aqi, setAqi] = useState("");

  const endPoint = "https://api.waqi.info/feed";
  const token = "ec08e40ed8653e9069b989b3a6e4bb240d2fbafd";

  useEffect(() => {
    if (city) {
      axios
        .get(`${endPoint}/${city}/?token=${token}`)
        .then((res) => setAqi(res.data.data.aqi))
        .catch((err) => console.error(err));
    }
  }, [city]);
  console.log(aqi);
  localStorage.setItem("num", JSON.stringify(aqi));

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Number />
    </Box>
  );
}
