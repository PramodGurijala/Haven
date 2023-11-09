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

export default function OtpScreen() {
  const navigate = useNavigate();
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [idNum, setIdNum] = useState("");
  const [regNum, setRegNum] = useState("");
  return (
    <>
      <SignUpComp
        content={
          <Grid rowGap={"10px"} className="OtpScreen-boxer">
            <Typography color={"#fff"}>Enter OTP sent to myna@mail.com</Typography>
            {/* <div style={{ height: "30px" }}></div> */}
            <TextfieldComp
              label="OTP"
              val={position}
              setVal={setPosition}
            />
            {/* <div style={{ height: "30px" }}></div> */}
            <Button
              name="Verify OTP"
              color="blue"
              onClick={() => {
                // navigate("/VerifyBDSurvey");
              }}
            />
          </Grid>
        }
        title={"Continue Sign up"}
      />
       <LaunchFooter />
    </>
  );
}
