import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import HomeComp from "../../components/homeComp";
import SocailMediaComp from "../../components/socialMedia";
import LaunchFooter from "../../components/LaunchFooter";
import { Grid } from "@mui/material";


export default function HomeScreen() {
  const navigate = useNavigate();


  return (
    <div>
        <HomeComp />
        <SocailMediaComp />
        <LaunchFooter/>
    </div>
  );
}