import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, Checkbox } from "@mui/material";
import Button from "../../components/Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import { footerData } from "./footerData";

export default function LaunchFooter() {
  const navigate = useNavigate();
  const { isMobile, isLaptop, isTablet } = ScreenSize();
  return (
    <Grid className="LaunchFooter">
      <Grid
        className="footer-boxer"
        container
        p={3}
        display="flex"
        justifyContent="space-between"
      >
        <Grid
          // xs={2.5}
          style={
            {
              // border: "1px solid #1A2644",
            }
          }
          className="footer-box1"
        >
          <img
            alt=""
            src={images.smartupsLogo}
            className="smartupsLogo-footer"
          />
          <Typography pt={2} pb={2} color="#1A2644">
            Thinking outside the box so we can help you remain compliant.
          </Typography>
          <Grid>
            <img alt="" src={images.darkfacebook} width="45px" />
            <img
              alt=""
              src={images.darkInsta}
              width="45px"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            />
            <img alt="" src={images.darkTwitter} width="45px" />
          </Grid>
        </Grid>
        {footerData?.map((item, i) => {
          return (
            <Grid
              pt={5}
              key={i}
              // xs={1.5}
              // border="1px solid red"
              className="footer-box2"
            >
              <Typography color="#1a2644" pb={3} fontWeight="700">
                {item.name}
              </Typography>
              <text
                style={{
                  whiteSpace: "pre-line",
                  color: "#1a2644",
                  lineHeight: "25px",
                }}
              >
                {item.options.replace(/,/g, "\n")}
              </text>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        gap={2}
        my={7}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <img src={images.logoIcon} className="footer-logoIcon" />
        <Typography color="#1a2644">
          &#169; 2023 Smartups. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}
