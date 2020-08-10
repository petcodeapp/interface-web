import { RouteProps, Route, Redirect } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Auth";
import { useObserver } from "mobx-react-lite";
import { auth } from "../../firebase/index";

interface PublicRouteProps {
  restricted?: boolean;
}

const PublicRoute = ({
  children,
  restricted = false,
  ...props
}: RouteProps & PublicRouteProps) => {
  const auth = React.useContext(AuthContext);

  return useObserver(() => (
    <Route {...props}>
      {auth.isLoggedIn ? <Redirect to="/dashboard" /> : children}
    </Route>
  ));
};

export default PublicRoute;
