import React, { useState } from "react";
import { SignUpComp } from "../../components/SignUpComp";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Checkbox } from "@mui/material";
import Button from "../../components/Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import TextfieldComp from "../../components/TextfieldComp";
import Footer from "../../components/Footer";

export function VerifyBDSurvey() {
  return (
    <>
      <SignUpComp
        content={
          <Grid rowGap={"20px"} className="BDSurvey-boxer">
            <Typography fontSize={'20px'} color={"#fff"}>Verified!</Typography>
            <Typography textAlign={'center'} color={"#fff"}>
              People Tech is a registered business linked to your ID number.
            </Typography>
            <Button name="Continue" color="blue" />
          </Grid>
        }
        title={"Business Diagnostic Survey"}
        thumb={true}
      />
      <Footer />
    </>
  );
}
