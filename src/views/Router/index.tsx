import React from "react";
import LandingPage from "../../pages/Landing";
import OldLandingpage from "../../pages/OldLanding";
import LoginPage from "../../pages/Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../../pages/Admin";
import RegistrationPage from "../../pages/Registration/";
import ForgotPasswordPage from "../../pages/ForgotPassword";
import DashboardPage from "../../pages/Account/DashboardPage";
import ContactInfoPage from "../../pages/Account/ContactInfoPage";
import PetInfoPage from "../../pages/Account/PetInfoPage";
import MedicalInfoPage from "../../pages/Account/MedicalInfoPage";
import ScanLocationsPage from "../../pages/Account/ScanLocationsPage";
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

      <PrivateRoute path="/admin">
        <AdminPage />
      </PrivateRoute>

      <PrivateRoute path="/dashboard">
        <DashboardPage />
      </PrivateRoute>

      <PrivateRoute path="/contactinfo">
        <ContactInfoPage />
      </PrivateRoute>
      
      <PrivateRoute path="/petinfo">
        <PetInfoPage />
      </PrivateRoute>

      <PrivateRoute path="/medicalinfo">
        <MedicalInfoPage />
      </PrivateRoute>

      <PrivateRoute path="/scanlocations">
        <ScanLocationsPage />
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
