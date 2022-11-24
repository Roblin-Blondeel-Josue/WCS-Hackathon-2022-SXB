import React from "react";
import CityHeader from "./CityHeader";
import AirQuality from "./AirQuality";
import CarbonPrint from "./CarbonPrint";

function CityDetails({ city }) {
  return (
    <div>
      <CityHeader city={city} />
      <AirQuality city={city.name} />
      <CarbonPrint ville={city.name} />
    </div>
  );
}

export default CityDetails;
