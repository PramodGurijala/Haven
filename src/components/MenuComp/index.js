import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import smartupsLogo from "../../assets/smartupsLogo.png";
import { slide as Menu } from 'react-burger-menu';


export default function MenuComp() {
    //   const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
        <div className="topBar">
          <div className="logo">
            <img src={smartupsLogo} alt="SmartUps Logo" />
          </div>
          {/* <div className="topLinks"> */}
          <Menu>
          <a id="About Us" className="menu-item">About Us</a>
        <a id="Resources" className="menu-item" >Resources</a>
        <a id="News" className="menu-item" >News</a>
        <a id="Products" className="menu-item" >Products</a>
        <a id="Pricing" className="menu-item" >Pricing</a>
        <a id="Contact Us" className="menu-item" >Contact Us</a>
        <a id="Log In" className="menu-item" style={{ textDecoration: "underline" }}>Log In</a>
        <a id="Sign Up" className="menu-item" >Sign Up</a>

            {/* <a href="#" style={{ textDecoration: "underline" }}>
              Log in
            </a>
            <a href="#" className="signupButton">
              Sign up
            </a> */}
            </Menu>
        </div>
        </div>
        );
}