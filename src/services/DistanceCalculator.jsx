import React from "react";
import axios from "axios";

export default function GetDistance(start, end) {
  const [distance, setDistance] = React.useState();
  React.useEffect(() => {
    axios
      .post(
        "https://airportgap.dev-tester.com/api/airports/distance",
        new URLSearchParams({
          from: start,
          to: end,
        })
      )
      .then((response) =>
        setDistance(response.data.data.attributes.kilometers)
      );
  }, []);
  return distance;
}
