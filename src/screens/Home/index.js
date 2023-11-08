import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import HomeComp from "../../components/homeComp";
import MenuComp from "../../components/MenuComp";
import SocailMediaComp from "../../components/socialMedia";
import LaunchFooter from "../../components/LaunchFooter";
import LaunchHeader from "../../components/LaunchHeader";
import images from "../../config/images";
import { Grid } from "@mui/material";


export default function HomeScreen() {
  const navigate = useNavigate();


  return (
    <div>
      <MenuComp/>
      <HomeComp/>
        <SocailMediaComp />
        <LaunchFooter/>
    </div>
  );
}