import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Typography, Grid } from "@mui/material";

export function BrowserNavbar() {
  const navigate = useNavigate();

  return (
    <>
      <Grid className="menu-browserGrid">
        <Typography id="menuBrowser-text" textAlign={"center"}>
          About Us
        </Typography>
        <Typography id="menuBrowser-text">Resources</Typography>
        <Typography id="menuBrowser-text">News</Typography>
        <Typography id="menuBrowser-text">Products</Typography>
        <Typography style={{ color: "#1A2644" }} id="menuBrowser-text">
          Pricing
        </Typography>
        <Typography id="menuBrowser-text" textAlign={"center"}>
          Contact Us
        </Typography>
      </Grid>
    </>
  );
}
