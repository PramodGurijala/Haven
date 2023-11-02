import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A2644",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF6102",
      contrastText: "#ffffff",
    },
    error: {
      main: "#B00020",
    },
    background: {
      default: "#ffffff",
    },
    orange: {
      main: "#FE9400",
      contrastText: "#000000",
    },
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    blue: {
      main: "#3C8C9E",
      contrastText: "#FFFFFF",
    },
    green: {
      main: "#44983C",
      contrastText: "#FFFFFF",
    },
    red: {
      main: " #A22027",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "",
    // fontWeightLight: 300,
    // fontWeightRegular: 500,
    // fontWeightBold: 600,
    // fontSize: 20,
    h1: {
      fontWeight: "bold",
      //   fontSize: "24px",
      color: "#333333",
    },
    h6: {
      fontWeight: "bold",
      //   fontSize: "24px",
      color: "#5F5D5D",
    },
    body2: {
      //   fontSize: "14px",
      color: "#5f5d5d",
    },
    body1: {
      //   fontSize: "10px",
      //   paddingTop: "8px",
      //   display: "block",
    },
  },
});

theme.components = {
  MuiListItem: {
    styleOverrides: {
      root: {
        "&.MuiListItem-root": {
          "&:hover": {
            color: theme.palette.secondary.main,
            "& .MuiListItemIcon-root": {
              color: theme.palette.secondary.main,
            },
          },
        },
        "&.Mui-selected": {
          background: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            background: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.contrastText,
            },
          },
          "& .MuiListItemIcon-root": {
            color: theme.palette.primary.contrastText,
          },
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          background: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            background: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
          },
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        // marginTop: "0px",
        // marginBottom: "8px",
        marginTop: "2px",
        "& .MuiFilledInput-root::after": {
          // borderBottom: "0px solid rgba(0, 0, 0, 0.42)",
        },
        "& input": {
          height: "28px",

          // padding: "10px",
          // fontSize: "11px",
          // marginLeft: "10px",
        },
      },
    },
  },
};

export default theme;
