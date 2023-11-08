import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, Checkbox } from "@mui/material";
import Button from "../../components/Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import LaunchFooter from '../../components/LaunchFooter';
import LaunchHeader from "../../components/LaunchHeader";
import SocailMediaComp from "../../components/socialMedia";
export default function LaunchScreen() {
  const navigate = useNavigate();
  const { isMobile, isLaptop, isTablet } = ScreenSize();
  return (
    <Grid className="LaunchScreen">
      <Grid p={2}>
        <img alt="" style={{maxWidth:'250px'}} width={'25%'} src={images.smartupsLogo} />
      </Grid>
      <LaunchHeader />
      <div className="SocailMediaGrid">
      <SocailMediaComp/>
      </div>
      <LaunchFooter />
    </Grid>
  );
}
