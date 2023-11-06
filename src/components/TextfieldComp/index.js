import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import InputAdornment from "@mui/material/InputAdornment";

export default function TextfieldComp({
  val,
  setVal,
  label,
  helperText,
  type,
  disabled,
  required,
  readOnly,
  InputLabelProps,
  InputProps
}) {
  return (
    <>
      <TextField
        fullWidth
        sx={{
          "& .MuiInputLabel-root": {
            color: "#1A2644",
            transform: !val
              ? "translate(12px, 24px) scale(1)"
              : "translate(12px, 10px) scale(0.75)",
          },
          "& .MuiFilledInput-input": {
            color: "#1A2644",
            borderBottom:'2px solid #1A2644'
          },
          "& .MuiInputLabel-root.Mui-focused": {
            borderBottom: "0",
            transform: "translate(12px, 10px) scale(0.75)", //
          },
          "& .css-19ji0dv-MuiInputBase-root-MuiFilledInput-root:before": {
            borderBottom: "0",
          },
        }}
        className="textfieldcomp-css"
        id="filled-basic"
        label={label}
        variant="filled"
        //  defaultValue=""
        //  helperText="Some important text"
        //  type="search"
        //  InputLabelProps={{
        //   shrink: true,
        // }}
        // autoComplete="current-password"
        // disabled
        // required
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <AccountCircle />
        //     </InputAdornment>
        //   ),
        // readOnly: true,
        // }}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        value={val}
      />
    </>
  );
}
