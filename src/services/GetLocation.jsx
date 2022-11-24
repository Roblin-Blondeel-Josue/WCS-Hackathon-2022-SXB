const successCallbackLatitude = (position) => {
  const latitude = position.coords.latitude;
  console.log(latitude);
};
const successCallbackLongitude = (position) => {
  const longitude = position.coords.longitude;
  console.log(longitude);
};

const errorCallback = (error) => {
  console.log(error);
};
export default function GetLocalisation() {
  navigator.geolocation.getCurrentPosition(
    successCallbackLatitude,
    errorCallback
  );
  navigator.geolocation.getCurrentPosition(
    successCallbackLongitude,
    errorCallback
  );
}
