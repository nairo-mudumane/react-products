import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.tsx";
import "./main.css";
import { MuiTheme } from "./global";
import { AuthContextProvider, CartContextProvider } from "./contexts";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={MuiTheme}>
          <AuthContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
