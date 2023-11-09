import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import smartupsLogo from "../../assets/smartupsLogo.png";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { Typography, Grid } from "@mui/material";
import { ScreenSize } from "../../ScreenSize";
import Button from "../Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

export default function MenuComp() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const { ScreenWidth } = ScreenSize();
  return (
    <div className="menu-topBar">
      <div className="menu-logo">
        <img src={smartupsLogo} alt="SmartUps Logo" />
      </div>
      {ScreenWidth >= 800 ? (
        <>
          <Grid className="menu-browserGrid">
            <Typography id="menuBrowser-text" textAlign={"center"}>
              About Us
            </Typography>
            <Typography id="menuBrowser-text">Resources</Typography>
            <Typography id="menuBrowser-text">News</Typography>
            <Typography id="menuBrowser-text">Products</Typography>
            <Typography style={{ color: "#1A2644" }} id="menuBrowser-text">
              Pricing
            </Typography>
            <Typography id="menuBrowser-text" textAlign={"center"}>
              Contact Us
            </Typography>
          </Grid>
        </>
      ) : null}
      <Grid
        // border={"1px solid purple"}
        gap={"5px"}
        display={"flex"}
        alignItems={"center"}
         marginTop={ScreenWidth >= 800 ? '20px' : '0'} // when width > 800
      >
        {!isLogin ? (<> <Typography
        // border={'1px solid red'}
          style={{ color: "#1A2644" }}
          id="menuBrowser-text"
          textAlign={"center"}
          sx={{ textDecoration: "underline" }}
        >
          Sign Up
        </Typography>
        <Button color="orange" name="Login" /></>):(<>
        <PersonSharpIcon style={{
          fontSize:'30',
        }} />
        </>)}
       

        {ScreenWidth < 800 ? (
          <>
            <Menu
              customBurgerIcon={
                <MenuIcon style={{ color: "red", fontSize: "30" }} />
              }
              customCrossIcon={
                <ChevronLeftSharpIcon
                  style={{
                    fontSize: "60",
                  }}
                />
              }
              right
              burgerBarClassName={"burgerBarClassName"}
              itemListClassName={"menu-list"}
              menuClassName={"menu-class"}
              isOpen={false}
              crossButtonClassName={"menu-crossButtonClassName"}
              crossClassName={"menu-crossClassName"}
              overlayClassName={"menu-overlay"}
              burgerButtonClassName={"menu-burgerButtonClassName"}
              // isOpen={true}
              // onClose={() =>!isMenuOpen}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  // border: "5px solid blue",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "50px",
                    alignItems: "flex-end",
                    paddingLeft: "60px",
                    color: "#1A264480",
                    fontWeight: "600",
                    paddingBottom: "10px",
                  }}
                >
                  Menu
                </div>

                {isLogin ? (
                  <>
                    <div
                      style={{
                        borderTop: "1.5px solid #1A264433",
                        margin: "0px 25px",
                        padding: "20px 0px",
                        display: "flex",
                        alignItems: "center",
                       
                        justifyContent:'space-between'
                      }}
                    >
                      <Grid gap={'10px'} display={'flex'} alignItems={'center'}>
                      <PersonSharpIcon />
                      <Typography>My Profile</Typography>
                      </Grid>
                    

                      <ChevronRightSharpIcon
                      style={{
                        fontSize: "40",
                        color: "#1A2644",
                      }}
                    />
                    </div>
                    <div
                      style={{
                        borderBottom: "1.5px solid #1A264433",
                        borderTop: "1.5px solid #1A264433",
                        margin: "0px 25px",
                        padding: "20px 0px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <LogoutSharpIcon />
                      <Typography>Logout</Typography>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        borderBottom: "1.5px solid #1A264433",
                        borderTop: "1.5px solid #1A264433",
                        margin: "0px 25px",
                        padding: "20px 0px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <PersonSharpIcon />
                      <u>Login</u>
                    </div>
                  </>
                )}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px 25px",
                    gap: "25px",
                  }}
                >
                  <Grid
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    // border={"1px solid red"}
                  >
                    <a style={{ color: "#1A2644" }} id="menuBrowser-text">
                      Pricing
                    </a>
                    <ChevronRightSharpIcon
                      style={{
                        fontSize: "40",
                        color: "#1A2644",
                      }}
                    />
                  </Grid>

                  <a id="menuBrowser-text">About Us</a>
                  <a id="menuBrowser-text">Resources</a>
                  <a id="menuBrowser-text">News</a>
                  <a id="menuBrowser-text">Products</a>

                  <a id="menuBrowser-text">Contact Us</a>
                </div>
              </div>
            </Menu>
          </>
        ) : null}
      </Grid>
    </div>
  );
}
