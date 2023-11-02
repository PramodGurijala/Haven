import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import HomeComp from "../../components/homeComp";


export default function HomeScreen() {
  const navigate = useNavigate();
 

  return (
    <div>
      <HomeComp/>
    </div>
  );
}