import React from "react";
import { Stack, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

export default function Number() {
  const n = parseInt(localStorage.getItem("num"));
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  console.log(n);
  return (
    <Stack alignItems="center">
      <Typography
        variant="title"
        color="#000"
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
