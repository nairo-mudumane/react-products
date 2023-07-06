import { createTheme } from "@mui/material/styles";

const THEME = {
  colors: {
    primary: "#00292d",
    secondary: "#014144",
    tertiary: "#095a59",
    gold: "#daaf71",
    error: "#be1622",
    warning: "#cf9f5e",
    muted: "#969696",
  },
};

const MuiTheme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    text: { primary: "#fff", disabled: THEME.colors.muted },
    primary: { main: THEME.colors.primary },
    secondary: { main: THEME.colors.secondary },
    background: { paper: THEME.colors.secondary },
    warning: { main: THEME.colors.warning },
    error: { main: THEME.colors.error },
  },
  components: {
    MuiAlertTitle: { styleOverrides: { root: { fontWeight: 700, mb: 2 } } },
    MuiPaper: {
      styleOverrides: { root: { backgroundColor: THEME.colors.tertiary } },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fieldset: { borderColor: "#a1a1a1" },
          "& label, & label.Mui-focused": { color: " #fff" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": { borderColor: "#fff" },
          },
        },
      },
    },
    MuiIconButton: { styleOverrides: { root: { color: "#fff" } } },
    MuiIcon: { styleOverrides: { root: { color: "#fff" } } },
    MuiButton: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: "4.5rem" },
        contained: {
          backgroundColor: "#fff",
          color: THEME.colors.primary,
          "&:hover": {
            backgroundColor: THEME.colors.tertiary,
            color: "#fff",
          },
        },
        outlined: {
          borderColor: "#fff",
          color: "#fff",
          "&:hover": { borderColor: THEME.colors.tertiary },
        },
        text: {
          color: "#fff",
          border: "1px solid transparent",
          "&:hover": { borderColor: THEME.colors.tertiary },
        },
      },
    },
  },
});

export { THEME, MuiTheme };
