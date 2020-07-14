import React from "react";
import { useObserver } from "mobx-react-lite";
import { AuthProvider, AuthContext } from "./views/Auth/AuthContext";
import firebase from "firebase";
import { auth } from "./firebase/index";
import { ThemeProvider, ColorModeProvider, theme } from "@chakra-ui/core";

const Xe = () => {
  const store = React.useContext(AuthContext);

  return useObserver(() => (
    <div>
      {!!store.user ? (
        <>
          <h1>{JSON.stringify(store.user)}</h1>
          <button
            onClick={() => {
              store.signOut();
            }}
          ></button>
        </>
      ) : (
        <>
          <h1>hi</h1>
          <button
            onClick={() => {
              const goo = new firebase.auth.GoogleAuthProvider();
              auth.signInWithPopup(goo);
            }}
          ></button>
        </>
      )}
    </div>
  ));
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <AuthProvider>
          </AuthProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
