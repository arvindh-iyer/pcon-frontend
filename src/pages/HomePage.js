import React from "react";
import { Navbar } from "../components/Navbar";
import { Stack, createTheme } from "@mui/material";
import { WhoAreWe } from "../components/WhoAreWe";
const theme = createTheme();

export const HomePage = () => {
  return (
    <Stack direction="column">
      <Navbar></Navbar>
      <WhoAreWe></WhoAreWe>
    </Stack>
  );
};
