import React, { useState } from "react";
// import axios from "axios";
import { Box, Typography } from "@mui/material";
import AirQuality from "./AirQuality";
import { alpha } from "@mui/material";

function CityHeader({ city }) {
  const [aqi, setAqi] = useState("");
  const [img, setImg] = useState(
    "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODMzMTh8MHwxfHNlYXJjaHwxfHxwYXJpc3xlbnwwfHx8fDE2NjkyOTUwODE&ixlib=rb-4.0.3&q=80"
  );

  // const apiKey = "Y0ARhn_ULsZYMBKuqKRgGRen0RPKFSmo6Hq4T-mpTVE";

  // useEffect(() => {
  //     axios
  //         .get(
  //             `https://api.unsplash.com//search/photos?query=${city}+building+architecture&orientation=landscape&per_page=1&client_id=${apiKey}`
  //         )
  //         .then((res) => {
  //             console.log(res.data);
  //             console.log(res.data.results[0].urls.regular);
  //             setImg(res.data.results[0].urls.regular);
  //         });
  // }, [city]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minWidth: "100vw",
        minHeight: "100vh",
        opacity: "30%",
        backgroundColor: getBg(aqi),
      }}
    >
      <Typography variant="h1" color="white" sx={{ fontWeight: "bold" }}>
        {city}
      </Typography>
      <Box margin="5rem">
        <AirQuality city={city} aqi={aqi} setAqi={setAqi} />
      </Box>

      {/* <img src={img} alt={city} />; */}
    </Box>
  );
}

export default CityHeader;
