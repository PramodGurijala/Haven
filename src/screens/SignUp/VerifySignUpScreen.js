import React, { useState } from "react";
import { SignUpComp } from "../../components/SignUpComp";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Checkbox } from "@mui/material";
import Button from "../../components/Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import TextfieldComp from "../../components/TextfieldComp";
import LaunchFooter from "../../components/LaunchFooter";

export function VerifySignUpScreen() {
  return (
    <>
      <SignUpComp
        content={
          <Grid rowGap={"20px"} className="BDSurvey-boxer">
            <Typography fontSize={'20px'} color={"#fff"}>Succesfull !</Typography>
            <Typography textAlign={'center'} color={"#fff"}>
            You’ve signed up successfully. Continue exploring our platform
            </Typography>
            <Button name="Continue" color="blue" />
          </Grid>
        }
        title={"Sign up completed"}
        thumb={true}
      />
      <LaunchFooter />
    </>
  );
}
