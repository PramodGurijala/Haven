import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import smartupsLogo from "../../assets/smartupsLogo.png";
import { Typography, Grid } from "@mui/material";
import { ScreenSize } from "../../ScreenSize";
import Button from "../Button";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { BrowserNavbar } from "./BrowserNavbar";
import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const { ScreenWidth } = ScreenSize();
  return (
    <>
      <div className="menu-topBar">
        <div className="menu-logo">
          <img src={smartupsLogo} alt="SmartUps Logo" />
        </div>
        {ScreenWidth >= 800 ? (
          <>
            <BrowserNavbar />
          </>
        ) : null}
        <Grid
          gap={ScreenWidth < 350 ? "5px" : "10px"}
          display={"flex"}
          alignItems={"center"}
          marginTop={ScreenWidth >= 800 ? "20px" : "0"} // when width > 800
        >
          {!isLogin ? (
            <>
              {" "}
              <Typography
                style={{ color: "#1A2644" }}
                id="menuBrowser-text"
                textAlign={"center"}
                sx={{ textDecoration: "underline" }}
              >
                Sign Up
              </Typography>
              <Button color="orange" name="Login" />
            </>
          ) : (
            <>
              <PersonSharpIcon
                style={{
                  fontSize: "30",
                }}
              />
            </>
          )}

          {ScreenWidth < 800 ? (
            <>
              <HamburgerMenu isLogin={isLogin} />
            </>
          ) : null}
        </Grid>
      </div>
    </>
  );
}
