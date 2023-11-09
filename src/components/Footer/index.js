import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, Checkbox } from "@mui/material";
import Button from "../Button";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import { footerData } from "./footerData";
import AccordionComp from "../Accordian";

export default function Footer() {
  const navigate = useNavigate();
  const { isMobile, isLaptop, isTablet, ScreenWidth } = ScreenSize();
  // console.log("####", ScreenWidth);
  return (
    <Grid className="Footer">
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
          <Grid mb={3} display="flex">
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
            <>
              {ScreenWidth > 704 ? (
                <>
                  <Grid
                    pt={5}
                    key={i}
                    // border="1px solid red"
                    className="footer-box2"
                  >
                    <Typography
                      whiteSpace={"pre"}
                      fontSize={"16px"}
                      color="#1a2644"
                      pb={1}
                      fontWeight="700"
                    >
                      {item.name}
                    </Typography>
                    <text
                      style={{
                        whiteSpace: "pre",
                        color: "#1a2644",
                        lineHeight: "25px",
                        fontSize: "16px",
                      }}
                    >
                      {item.options.replace(/,/g, "\n")}
                    </text>
                  </Grid>
                </>
              ) : (
                <>
                  <AccordionComp
                    name={item.name}
                    content={item.options.replace(/,/g, "\n")}
                  />
                </>
              )}
            </>
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
        <img alt="" src={images.logoIcon} className="footer-logoIcon" />
        <Typography color="#1a2644" textAlign="center">
          &#169; 2023 Smartups. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}
