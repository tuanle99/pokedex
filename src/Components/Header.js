import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useHistory } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function Header() {
  const history = useHistory();

  const handleChange = (event, newValue) => {
    handleNavigate(newValue);
  };

  function handleNavigate(i) {
    switch (i) {
      case 1:
        history.push("/pokedex/listPokemon");
        break;
      default:
        history.push("/pokedex");
        break;
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs onChange={handleChange} aria-label="header nav">
        <LinkTab label="Home" />
        <LinkTab label="Pokemon" />
      </Tabs>
    </Box>
  );
}

export default Header;
