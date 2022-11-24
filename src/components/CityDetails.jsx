import React from "react";
import CityHeader from "./CityHeader";
import AirQuality from "./AirQuality";

function CityDetails({ city }) {
    return (
        <>
            <CityHeader city={city} />
            <AirQuality city={city.name} />
        </>
    );
}

export default CityDetails;
