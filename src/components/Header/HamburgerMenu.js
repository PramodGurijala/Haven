import React, { useEffect, useState } from "react";
import "./styles.css";
import "./hamburgerStyles.css";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { Typography, Grid } from "@mui/material";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

export function HamburgerMenu({isLogin}) {
  const navigate = useNavigate();

  return (
    <>
      <Menu
        customBurgerIcon={<MenuIcon style={{ color: "red", fontSize: "30" }} />}
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
          <div className="menuList-header">Menu</div>

          {isLogin ? (
            <>
              <div
                id="menuList-loginText"
                style={{
                  borderBottom: "0",
                  justifyContent: "space-between",
                  gap: "0",
                }}
              >
                <Grid gap={"10px"} display={"flex"} alignItems={"center"}>
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
              <div id="menuList-loginText">
                <LogoutSharpIcon />
                <Typography>Logout</Typography>
              </div>
            </>
          ) : (
            <>
              <div id="menuList-loginText">
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
            >
              <Typography style={{ color: "#1A2644" }} id="hamburgerList-text">
                Pricing
              </Typography>
              <ChevronRightSharpIcon
                style={{
                  fontSize: "40",
                  color: "#1A2644",
                }}
              />
            </Grid>

            <Typography id="hamburgerList-text">About Us</Typography>
            <Typography id="hamburgerList-text">Resources</Typography>
            <Typography id="hamburgerList-text">News</Typography>
            <Typography id="hamburgerList-text">Products</Typography>
            <Typography id="hamburgerList-text">Contact Us</Typography>
          </div>
        </div>
      </Menu>
    </>
  );
}
