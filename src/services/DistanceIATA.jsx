import React from "react";
import axios from "axios";

export default function GetIata(ville) {
  const [iata, setIata] = React.useState();
  React.useEffect(() => {
    axios
      .post(`https://www.meteoblue.com/en/server/search/query3?query=${ville}`)
      .then((response) => setIata(response.data.results[0].iata));
  }, []);
  return iata;
}
