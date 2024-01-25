import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";
import "./assets/css/fonts.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";

import theme from "./mui/theme";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
