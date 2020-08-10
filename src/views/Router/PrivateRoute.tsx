import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthContext } from "../Auth";

const PrivateRoute = ({ children, ...props }: RouteProps) => {
  const auth = useContext(AuthContext);

  return (
    <Route {...props}>{auth.isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
};

export default PrivateRoute;
