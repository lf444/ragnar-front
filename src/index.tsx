import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { HelmetProvider } from "react-helmet-async";

import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import {  WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains, wagmiClient } from "./components/wallet/walletConfig";

const container = document.getElementById("root");
// @ts-ignore
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <BrowserRouter basename="/">
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
            <App />
        </ThemeProvider>
      </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
