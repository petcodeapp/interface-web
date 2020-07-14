import { RouteProps, Route, Redirect } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Auth/index";

interface PublicRouteProps {
  restricted?: boolean;
}

const PublicRoute = ({
  children,
  restricted = false,
  ...props
}: RouteProps & PublicRouteProps) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  return (
    <Route {...props}>
      {isLoggedIn && restricted ? <Redirect to="/dashboard" /> : { children }}
    </Route>
  );
};

export default PublicRoute;