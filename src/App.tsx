import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Routes from "./views/Router";
import { AuthProvider } from "./views/Auth/index";
import theme from "./theme";

import "./styles/base.css";
import "./polyfills";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AnimatePresence>
            <Router>
              <Routes />
            </Router>
          </AnimatePresence>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
