import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Credits() {
  return (
    <Stack>
      <Typography
        variant="title"
        color="white.main"
        fontSize={{ xs: "0.5rem", sm: "1.2rem" }}
      >
        <a
          href="https://waqi.info/"
          style={{ textDecoration: "none", color: "#000" }}
        >
          World Air Quality Index
        </a>
      </Typography>
    </Stack>
  );
}
