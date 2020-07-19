import React from "react";
import LandingPage from "../../pages/Landing/index";
import OldLandingpage from "../../pages/OldLanding/index";
import LoginPage from "../../pages/Login/index";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../../pages/Admin/index";
import RegistrationPage from "../../pages/Registration/index";
import ForgotPasswordPage from "../../pages/ForgotPassword/index";
import { useObserver } from "mobx-react-lite";

const Routes = () => {
  return useObserver(() => (
    <>
      <PublicRoute restricted path="/signup">
        <RegistrationPage />
      </PublicRoute>

      <PublicRoute restricted path="/login">
        <LoginPage />
      </PublicRoute>

      <PublicRoute restricted path="/forgotpassword">
        <ForgotPasswordPage />
      </PublicRoute>

      <PrivateRoute path="/dashboard">
        <AdminPage />
      </PrivateRoute>

      <PublicRoute path="/oldlanding">
        <OldLandingpage />
      </PublicRoute>

      <PublicRoute path="/about">{/* TODO: Create about page */}</PublicRoute>

      <PublicRoute exact path="/">
        <LandingPage />
      </PublicRoute>
    </>
  ));
};

export default Routes;
