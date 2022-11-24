import React, { useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import ScubaDivingIcon from "@mui/icons-material/ScubaDiving";
import GenerateButton from "../components/GenerateButton";
import list from "../data/citiesList.json";
import { Stack } from "@mui/system";
import CityDetails from "../components/CityDetails";

function Home() {
  const [city, setCity] = useState();
  const [checked, setChecked] = useState(true);

  return (
    <Box>
      <Collapse in={checked} collapsedSize="15vh" timeout={1500}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minWidth: "100vw",
            height: "100vh",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            gap="1rem"
            sx={{
              position: "absolute",
              top: "1rem",
              left: { xs: "unset", sm: "1rem" },
            }}
          >
            <Typography
              variant="title"
              color="white.main"
              fontSize={{ xs: "3rem", sm: "5rem" }}
            >
              APNEA
            </Typography>
            <ScubaDivingIcon fontSize="large" color="white" />
          </Stack>
          <GenerateButton
            list={list}
            setCity={setCity}
            setChecked={setChecked}
          />
        </Stack>
      </Collapse>

      {city && <CityDetails city={city} />}
    </Box>
  );
}

export default Home;
