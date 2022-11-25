import React from "react";
import { Stack, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

export default function Indice({ aqi }) {
  const n = parseInt(aqi);
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const getBg = () => {
    if (aqi >= 0 && aqi < 50) {
      return "#aed581";
    } else if (aqi >= 50 && aqi < 100) {
      return "#fff59d";
    } else if (aqi >= 100 && aqi < 150) {
      return "#ffd54f";
    } else if (aqi >= 150 && aqi < 200) {
      return "#ef5350";
    } else if (aqi >= 200 && aqi < 300) {
      return "#ba68c8";
    } else if (aqi >= 200 && aqi < 300) {
      return "#880e4f";
    } else {
      return "#000";
    }
  };

  return (
    <Stack alignItems="center">
      <Typography
        variant="title"
        sx={{ color: `${getBg(aqi)}` }}
        fontSize={{ xs: "3rem", sm: "5rem" }}
      >
        {n && <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>}
      </Typography>
      <Typography
        variant="title"
        color="#000"
        fontSize={{ xs: "0.5rem", sm: "1rem" }}
      >
        Indice de qualité de l'air
      </Typography>
    </Stack>
  );
}
