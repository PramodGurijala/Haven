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
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      contrastText: "#1A2644",
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
    fontFamily: "Poppins",
    color: "#1A2644",
    h1: {
      fontWeight: "bold",
    },
    h6: {
      fontWeight: "bold",
    },
    body2: {
        // fontSize: "10px",
    },
    body1: {
      // fontSize: "14px",
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
