import React from "react";

function Getlatitude() {
  const [latitude, setLatitude] = React.useState();
  React.useEffect(() => {
    const successCallback = (position) => {
      setLatitude(position.coords.latitude);
    };
    navigator.geolocation.getCurrentPosition(successCallback);
  }, []);
  return latitude;
}
function Getlongitude() {
  const [longitude, setLongitude] = React.useState();
  React.useEffect(() => {
    const successCallback = (position) => {
      setLongitude(position.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(successCallback);
  }, []);
  return longitude;
}
const lat = Getlatitude();
const long = Getlongitude();
const position = { lat, long };
export default position;
