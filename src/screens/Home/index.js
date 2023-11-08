import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import SocailMediaComp from "../../components/socialMedia";
import LaunchFooter from "../../components/LaunchFooter";
import { Grid, Typography } from "@mui/material";
import { ScreenSize } from "../../ScreenSize";
import { HomeData } from "../../screens/Home/HomeScreenData";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { ScreenWidth } = ScreenSize();
  return (
    <div>
      <Grid p={2}>
        <Typography>header component</Typography>
      </Grid>
      <Grid className="homescreen-topheader">
        <Typography className="heading-top-homescreen">
          Welcome to Smartups,
          <br />
          your digital business
          {ScreenWidth < 601 ? <br /> : <> </>}
          support platform.
          <br />
          Come for the features,
          <br />
          stay for the support.
        </Typography>
      </Grid>

      <div className="mainContainer">
        {HomeData.map((item, index, key) => {
          return (
            <div
              className={
                index % 2 === 0 ? "subContainer" : "subContainerReverse"
              }
            >
              <div className="article">
                <div className="subArticle">
                  <h2 className="header">{item.title}</h2>
                  <p className="paragraph">{item.paragraph}</p>
                  <button className="btn">{item.btnText}</button>
                </div>
              </div>
              <div className="ImgBox">
                <img src={item.img_url} width="100%" />
              </div>
            </div>
          );
        })}
      </div>
      <SocailMediaComp />
      <LaunchFooter />
    </div>
  );
}
