import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Indice from "./AirQuality/Indice";
import Temperature from "./AirQuality/Temperature";
import Particules from "./AirQuality/Particules";

export default function AirQuality({ city }) {
  const [aqi, setAqi] = useState("");
  const [iaqi, setIaqi] = useState("");
  const [pm25, setPm25] = useState("");

  const endPoint = "https://api.waqi.info/feed";
  const token = "ec08e40ed8653e9069b989b3a6e4bb240d2fbafd";

  useEffect(() => {
    if (city) {
      axios
        .get(`${endPoint}/${city}/?token=${token}`)
        .then((res) => {
          setAqi(res.data.data.aqi);
          setIaqi(res.data.data.iaqi.t.v);
          setPm25(res.data.data.forecast.daily.pm25[0].avg);
        })
        .catch((err) => console.error(err));
    }
  }, [city]);
  console.log(pm25);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      <Box>
        <Indice aqi={aqi} />
      </Box>
      <Box style={{ marginLeft: "1rem" }}>
        <Particules pm25={pm25} />
      </Box>
      <Box style={{ marginLeft: "1rem" }}>
        <Temperature iaqi={iaqi} />
      </Box>
    </Box>
  );
}
