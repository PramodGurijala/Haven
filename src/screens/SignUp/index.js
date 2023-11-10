import React, { useState } from "react";
import { SignUpComp } from "../../components/SignUpComp";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Checkbox } from "@mui/material";
import Button from "../../components/Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import TextfieldComp from "../../components/TextfieldComp";
import FilledInput from '@mui/material/FilledInput';
import LaunchFooter from "../../components/LaunchFooter";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export function SignUpScreen() {
  const navigate = useNavigate();
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [idNum, setIdNum] = useState("");
  const [regNum, setRegNum] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };
  return (
    <>
      <SignUpComp
        content={
          <Grid rowGap={"10px"} className="BDSurvey-boxer">
            <Typography color={"#fff"} sx={{fontSize:'16px'}}>Sign up to create your startup profile</Typography>

            <TextfieldComp
              label="First name"
              val={position}
              setVal={setPosition}
            />

            <TextfieldComp
              label="Last name"
              val={company}
              setVal={setCompany}
            />

            <FormControl sx={{ m: 1, width: '100%', backgroundColor: 'white', borderBottom:'2px solid #1A2644' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password" sx={{ color: 'black' }}>Set your password</InputLabel>
              <FilledInput
                style={{ backgroundColor: 'white' }}
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>


            <FormControl sx={{ m: 1, width: '100%', backgroundColor: 'white', borderBottom:'2px solid #1A2644', borderRadius:'4px 4px 0px 0px' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password" sx={{ color: 'black' }}>Confirm your password</InputLabel>
              <FilledInput
                style={{ backgroundColor: 'white' }}
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              name="Continue"
              color="blue"
              onClick={() => {
                navigate("/VerifyBDSurvey");
              }}
            />

            <Typography>or</Typography>
            <Typography sx={{color:'#fff'}}>Already have an account?</Typography>
            <Button
              name="Log in"
              color="whiteBlue"
              onClick={() => {
                navigate("/VerifyBDSurvey");
              }}
            />
          </Grid>
        }
        title={"Sign up"}
      />

      <LaunchFooter />
    </>
  );
}
