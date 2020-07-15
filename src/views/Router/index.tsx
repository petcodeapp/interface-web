import React from "react";
import Landing from "../../pages/Landing/index";
import Login from "../../pages/Login/index";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../../pages/Admin/index";
import Registration from "../../pages/Registration/index";
import { useObserver } from "mobx-react-lite";

const Routes = () => {
  return useObserver(() => (
    <>
      <PublicRoute restricted path="/signup">
        <Registration />
      </PublicRoute>

      <PublicRoute restricted path="/login">
        <Login />
      </PublicRoute>

      <PrivateRoute path="/dashboard">
        <AdminPage />
      </PrivateRoute>

      <PublicRoute path="/about">{/* TODO: Create about page */}</PublicRoute>

      <PublicRoute path="/">
        <Landing />
      </PublicRoute>
    </>
  ));
};

export default Routes;
