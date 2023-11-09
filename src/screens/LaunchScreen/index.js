import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, Checkbox } from "@mui/material";
import Button from "../../components/Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import Footer from "../../components/Footer";
import SocailMediaComp from "../../components/socialMedia";
import { Header } from "../../components/Header";

export default function LaunchScreen() {
  const navigate = useNavigate();
  const { isMobile, isLaptop, isTablet } = ScreenSize();
  return (
    <Grid className="LaunchScreen">
      <Header />
      <Grid className="LaunchHeader">
        <img
          alt=""
          src={
            isLaptop
              ? images.bg_dt_launch
              : isMobile
              ? images.bg_m_launch
              : images.bg_tb_launch
          }
          style={{
            width: "100vw",
            position: "absolute",
          }}
        />
        <Grid
          className="top_launch"
          style={{
            aspectRatio: isLaptop ? 2.26 : isMobile ? 0.93 : 1.68,
          }}
        >
          <Typography className="heading-top-launch">
            Welcome to Smartups.
            <br />
            Your digital business
            <br />
            management platform.
          </Typography>
          <Typography className="body-top-launch">
            How will you be using our platform?
            <br />
            Select the button that best describes you.
          </Typography>
          <Grid className="launch-top-btn">
            <Grid mx="2%">
              <Button
                color="white"
                onClick={() => navigate("/HomeScreen")}
                name="Startup"
              />
            </Grid>
            <Grid mx="2%">
              <Button
                color="white"
                // onClick={() => viewCartFunc()}
                name="Incubator"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="socailMedia_LS">
        <SocailMediaComp />
      </div>
      <Footer />
    </Grid>
  );
}
