import React from "react";
import axios from "axios";

async function LongDist(start, end) {
  const response = await axios.post(
    "https://airportgap.dev-tester.com/api/airports/distance",
    new URLSearchParams({
      from: `${start}`,
      to: `${end}`,
    })
  );
  const distance = response.data.data.attributes.kilometers;
  console.log(distance);
  return distance;
}
async function Iata(ville) {
  const response = await axios.post(
    `https://www.meteoblue.com/en/server/search/query3?query=${ville}`
  );
  const iataResult = response.data.results[0].iata;
  console.log(iataResult);
  return iataResult;
}
async function GetDist(ville, airport) {
  const iata = await Iata(ville);
  const dist = await LongDist(iata, airport);
  return dist;
}

export default function MakeVoyage(ville, airport) {
  const [voyage, setVoyage] = React.useState();
  React.useEffect(() => {
    GetDist(ville, airport).then((data) => setVoyage(data));
  }, []);
  console.log(voyage);
  return voyage;
}
