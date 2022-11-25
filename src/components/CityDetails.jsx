import React from "react";
import CityHeader from "./CityHeader";
import AirQuality from "./AirQuality";

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
        </>
    );
}

export default CityDetails;
