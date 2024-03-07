import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import { Typography, Box } from "@mui/material";

function Home() {
  return (
    <Box bgcolor={"rgba(0,0,0,0.5)"} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"} color={"white"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
}

export default AppLayout()(Home);
