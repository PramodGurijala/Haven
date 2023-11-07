import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, Checkbox } from "@mui/material";
import Button from "../../components/Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import LaunchFooter from "../LaunchFooter";

export function SignUpComp({ title, content, thumb }) {
  const { isMobile, isLaptop, isTablet,  } = ScreenSize();
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
        //   src={Screen.width > 900 ? images.signupBG_L : images.signupBG_m}
          //   src={images.signupBG_m}
          style={{
            width: "100vw",
            position: "absolute",
          }}
        ></img>

        {thumb ? (
          <>
            <img className="signup_thumbsUp_L" alt="" src={images.thumbsUp_L} />
          </>
        ) : null}

        <Grid className="signup-comp-boxer">
          {thumb ? (
            <>
              <img
                className="signup_thumbsUp_m"
                alt=""
                src={images.thumbsUp_L}
              />
            </>
          ) : null}
          {content}
        </Grid>
      </Grid>
      <LaunchFooter />
    </Grid>
  );
}
