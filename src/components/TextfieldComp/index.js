import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { ScreenSize } from "../../ScreenSize";
import images from "../../config/images";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function TextfieldComp({
  val,
  setVal,
  label,
  error = false,
  helperText = "",
  type = "text",
  disabled = false,
  required = false,
  readOnly,
  InputLabelProps,
  InputProps,
  maxLength,
}) {
  return (
    <>
      <TextField
        onChange={(e) => {
          setVal(e.target.value);
        }}
        value={val}
        fullWidth
        label={label}
        error={error}
        helperText={helperText}
        type={type} // search/text/number/password
        //  InputLabelProps={{
        //   shrink: true,
        // }}
        // autoComplete="current-password"
        disabled={disabled}
        required={required}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* <VisibilityIcon style={{
              color:'#1A2644'
            }}  /> */}
            </InputAdornment>
          ),
          // readOnly: true,
        }}
        inputProps={{
          maxLength: maxLength, // does not work if (type=number) is defined
        }}
        //  defaultValue=""
        className="textfieldcomp-css"
        id="filled-basic"
        variant="filled"
        sx={{
          "& .MuiInputLabel-root": {
            color: "#1A2644",
            transform: !val
              ? "translate(12px, 20px) scale(1)"
              : "translate(12px, 7px) scale(0.75)",
          },
          "& .MuiFilledInput-input": {
            color: "#1A2644",
            borderRadius: "4px 4px 0px 0px",
            paddingTop: "20px",
            paddingBottom: "6px",
          },
          "& .css-1qrqp1l-MuiInputBase-root-MuiFilledInput-root:hover": {
            backgroundColor: "transparent",
          },
          "& .css-1qrqp1l-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: !error ? "2px solid #1A2644" : "1.5px solid #B00020",
          },
          "& .css-xgij6c-MuiFormHelperText-root": {
            color: !error ? "#fff" : "red",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            transform: "translate(12px, 5px) scale(0.75)", //
          },
          "& .css-1qrqp1l-MuiInputBase-root-MuiFilledInput-root:before": {
            borderBottom: !error ? "2px solid #1A2644" : "1.5px solid #B00020",
          },
        }}
      />
    </>
  );
}
