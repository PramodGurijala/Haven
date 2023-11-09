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

export default function EmailScreen() {
  const navigate = useNavigate();
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [idNum, setIdNum] = useState("");
  const [regNum, setRegNum] = useState("");
  return (
    <>
      <SignUpComp
        content={
          <Grid rowGap={"10px"} className="EmailScreen-boxer">
            {/* <div style={{ height: "30px" }}></div> */}
            <TextfieldComp
              label="Email address"
              val={position}
              setVal={setPosition}
            />
            {/* <div style={{ height: "30px" }}></div> */}
            <Button
              name="Get OTP"
              color="blue"
              onClick={() => {
                // navigate("/VerifyBDSurvey");
              }}
            />
             <Typography color={"#fff"}>OTP (one time PIN) will be shared to your given Email ID myna***@mail.com</Typography>
             <Typography color={"blue"}>Or</Typography>
             <Typography color={"#fff"}>Already have an account?</Typography>
             <Button
              name="Log in"
              color="whiteBlue"
              onClick={() => {
                // navigate("/VerifyBDSurvey");
              }}
            />
          </Grid>
        }
        title={"Sign Up"}
      />
       <LaunchFooter />
    </>
  );
}
