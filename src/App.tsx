import React from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./views/Router";
import { AuthProvider } from "./views/Auth/index";
import theme from "./theme";  
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <AuthProvider>
            <AnimatePresence>
            <Router>
              <Switch>
                <Routes />
              </Switch>
            </Router>
            </AnimatePresence>
          </AuthProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
