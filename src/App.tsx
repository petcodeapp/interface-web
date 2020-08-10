import React from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./views/Router";
import { AuthProvider } from "./views/Auth/index";
import theme from "./theme";

import "./styles/base.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <AuthProvider>
            <Router>
              <Switch>
                <Routes />
              </Switch>
            </Router>
          </AuthProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
