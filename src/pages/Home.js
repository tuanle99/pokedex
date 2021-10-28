import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import image from "../images/legend.png";

function Home() {
  const history = useHistory();

  const title_css = {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontFamily: "cursive",
    fontSize: 50,
  };

  return (
    <Container>
      <Grid xs={12} sx={title_css}>
        Welcome to Tuan's Pokedex
      </Grid>
      <Grid xs={12}>
        <img src={image} alt="homepage" style={{ width: "100%" }} />
      </Grid>
    </Container>
  );
}

export default Home;
