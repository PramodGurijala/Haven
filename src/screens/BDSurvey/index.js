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

export function BDSurvey() {
  const navigate = useNavigate();
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [idNum, setIdNum] = useState("");
  const [regNum, setRegNum] = useState("");
  return (
    <>
      <SignUpComp
        content={
          <Grid rowGap={"10px"} className="BDSurvey-boxer">
            <Typography color={"#fff"}>Let's verify your details.</Typography>
          
            <TextfieldComp
              label="Position / role"
              val={position}
              setVal={setPosition}
            />
          
            <TextfieldComp
              label="Company name"
              val={company}
              setVal={setCompany}
            />
           
            <TextfieldComp
              label="Personal ID number"
              val={idNum}
              setVal={setIdNum}
            />
           
            <TextfieldComp
              label="Business registeration number"
              val={regNum}
              setVal={setRegNum}
            />
          
            <Button
              name="Verify"
              color="blue"
              onClick={() => {
                navigate("/VerifyBDSurvey");
              }}
            />
          </Grid>
        }
        title={"Business Diagnostic Survey"}
      />
       <LaunchFooter />
    </>
  );
}
