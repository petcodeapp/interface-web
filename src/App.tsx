import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./views/Router";
import { AuthProvider } from "./views/Auth/index";
import theme from "./theme";

import "./styles/base.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AnimatePresence>
            <Router>
              <Switch>
                <Routes />
              </Switch>
            </Router>
          </AnimatePresence>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
