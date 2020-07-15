import React, { useContext } from "react";
import { AuthContext } from "../../views/Auth";
import { useObserver } from "mobx-react";

const Landing = () => {
  const auth = useContext(AuthContext);
  return useObserver(() => (
    <>
      <div>Hello!</div>
      {!auth.isLoggedIn && <button onClick={auth.signInWithGoogle}>Sign in!</button>}
      {auth.isLoggedIn && <button onClick={auth.signOut}>Sign out!</button>}
    </>
  ));
};

export default Landing;
