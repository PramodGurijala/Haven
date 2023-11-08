import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import smartupsLogo from "../../assets/smartupsLogo.png";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";
import { ScreenSize } from "../../ScreenSize";

export default function MenuComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { ScreenWidth } = ScreenSize();
  return (
   
      <div className="topBar">
        <div className="logo">
          <img src={smartupsLogo} alt="SmartUps Logo" />
        </div>

        {ScreenWidth < 600 ? (
          <>
            <Menu
              customBurgerIcon={
                <MenuIcon style={{ color: "red", fontSize: "30" }} />
              }
              customCrossIcon={<ArrowBackIosIcon style={{ color: "red" }} />}
              right
              burgerBarClassName={"burgerBarClassName"}
              itemListClassName={"menu-list"}
              menuClassName={"menu-class"}
              isOpen={false}
              crossButtonClassName={"menu-crossButtonClassName"}
              crossClassName={"menu-crossClassName"}
              overlayClassName={"menu-overlay"}
              burgerButtonClassName={"menu-burgerButtonClassName"}
              // noOverlay
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
                    fontWeight: "500",
                    paddingBottom:'10px'
                  }}
                >
                  Menu
                </div>
                <div
                  style={{
                    borderBottom: "2px solid #1A264433",
                    borderTop: "2px solid #1A264433",
                    margin: "0px 25px",
                    padding: "20px 0px",
                  }}
                >
                  Login
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px 25px",
                    gap: "25px",
                  }}
                >
                  <a id="Pricing" className="menu-item">
                    Pricing
                  </a>

                  <a id="About Us" className="menu-item">
                    About Us
                  </a>
                  <a id="Resources" className="menu-item">
                    Resources
                  </a>
                  <a id="News" className="menu-item">
                    News
                  </a>
                  <a id="Products" className="menu-item">
                    Products
                  </a>

                  <a id="Contact Us" className="menu-item">
                    Contact Us
                  </a>
                </div>
              </div>
            </Menu>
          </>
        ) : (
          <>
          <a id="About Us" className="menu-item">
                    About Us
                  </a>

                  <a id="Resources" className="menu-item">
                    Resources
                  </a>
                  <a id="News" className="menu-item">
                    News
                  </a>
                  <a id="Products" className="menu-item">
                    Products
                  </a>
                  <a id="Pricing" className="menu-item">
                    Pricing
                  </a>

                  <a id="Contact Us" className="menu-item">
                    Contact Us
                  </a>
                  <a id="Sign Up" style={{ textDecoration: "underline" }}>
            Sign Up
          </a>
          <a id="Log in" className="loginButton">
            Log in
          </a>
                  </>   
        )}
      </div>
   
  );
}