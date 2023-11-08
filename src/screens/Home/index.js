import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import HomeComp from "../../components/homeComp";
import SocailMediaComp from "../../components/socialMedia";
import LaunchFooter from "../../components/LaunchFooter";
import LaunchHeader from "../../components/LaunchHeader";
import images from "../../config/images";
import { Grid } from "@mui/material";


export default function HomeScreen() {
  const navigate = useNavigate();


  return (
    <div>
        <Grid p={2}>
        <img alt="" style={{maxWidth:'250px'}} width={'25%'} src={images.smartupsLogo} />
      </Grid>
      <LaunchHeader />
        <HomeComp />
        <SocailMediaComp />
        <LaunchFooter/>
    </div>
  );
}