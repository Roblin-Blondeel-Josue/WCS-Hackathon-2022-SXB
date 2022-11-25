import React from "react";
import { Stack, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

export default function Temperature({ iaqi }) {
  const n = parseInt(iaqi);
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <Stack alignItems="center">
      <Typography
        variant="title"
        color="#000"
        fontSize={{ xs: "7rem", sm: "5rem" }}
      >
        {n && <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>}
      </Typography>
      <Typography
        variant="title"
        color="#000"
        fontSize={{ xs: "1.4rem", sm: "1rem" }}
      >
        Température °C
      </Typography>
    </Stack>
  );
}
