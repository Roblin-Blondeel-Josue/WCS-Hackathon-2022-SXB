import React from "react";
import CityHeader from "./CityHeader";
import AirQuality from "./AirQuality";
import CityWikipediaInfos from "./CityWikipediaInfos";
import { Stack } from "@mui/material";
import CarbonPrint from "./CarbonPrint";

function CityDetails({ city, setCity, list, setChecked }) {
  return (
    <>
      <CityHeader
        city={city}
        list={list}
        setCity={setCity}
        setChecked={setChecked}
      />
      <Stack
        gap="2rem"
        sx={{ padding: "1rem", maxWidth: "900px", margin: "auto" }}
      >
        <AirQuality city={city.name} />
        <CityWikipediaInfos city={city} />
        <CarbonPrint depart="Strasbourg" airport={city.iata} name={city.name} />
      </Stack>
    </>
  );
}

export default CityDetails;
