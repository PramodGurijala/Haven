import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, Checkbox } from "@mui/material";
import Button from "../../components/Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import LaunchFooter from "../LaunchFooter";

export function SignUpComp({ title, content }) {
  const { isMobile, isLaptop, isTablet } = ScreenSize();
  return (
    <Grid>
      <Grid className="signupcomp-title">
        <Typography className="signupcomp-title-topography">{title}</Typography>
      </Grid>
      <Grid
        className="signup-comp-container"
        display={"flex"}
        justifyContent={"center"}
      >
        <img
          alt=""
          src={
            isLaptop
              ? images.bg_dt_launch
              : isMobile
              ? images.signupBG_m
              : images.bg_tb_launch
          }
          //   src={images.signupBG_m}
          style={{
            width: "100vw",
            position: "absolute",
          }}
        ></img>

        <Grid className="signup-comp-boxer">{content}</Grid>
      </Grid>
      <LaunchFooter />
    </Grid>
  );
}
