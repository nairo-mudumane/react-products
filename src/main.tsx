import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import "./main.css";
import { MuiTheme } from "./global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={MuiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
