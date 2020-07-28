import React from "react";
import LandingPage from "../../pages/Landing";
import OldLandingpage from "../../pages/OldLanding";
import LoginPage from "../../pages/Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../../pages/Admin";
import RegistrationPage from "../../pages/Registration/";
import ForgotPasswordPage from "../../pages/ForgotPassword";
import DashboardPage from "../../pages/Dashboard";
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
        <DashboardPage />
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
