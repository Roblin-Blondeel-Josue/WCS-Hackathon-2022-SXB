import React from "react";
import CityHeader from "./CityHeader";
import AirQuality from "./AirQuality";
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
      <AirQuality city={city.name} />
      <CarbonPrint depart="Strasbourg" airport={city.iata} name={city.name} />
    </>
  );
}

export default CityDetails;
