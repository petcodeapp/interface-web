import React from "react";
import Landing from "../../pages/Landing/index";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../../pages/Admin/index";
import { useObserver } from "mobx-react-lite";

const Routes = () => {
  return useObserver(() => (
    <>
      <PublicRoute restricted path="/">
        <Landing />
      </PublicRoute>

      <PrivateRoute path="/dashboard">
        <AdminPage />
      </PrivateRoute>

      <PublicRoute path="/about">{/* TODO: Create about page */}</PublicRoute>

      <PublicRoute restricted path="auth">
        {/* TODO: Create auth page */}
      </PublicRoute>
    </>
  ));
};

export default Routes;
