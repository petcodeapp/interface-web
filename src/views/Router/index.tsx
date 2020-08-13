import React from "react";
import LandingPage from "../../pages/Landing";
import OldLandingpage from "../../pages/OldLanding";
import LoginPage from "../../pages/Login";
import { Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../../pages/Admin";
import RegistrationPage from "../../pages/Registration/";
import ForgotPasswordPage from "../../pages/ForgotPassword";
import DashboardPage from "../../pages/Account/DashboardPage";
import ContactInfoPage from "../../pages/Account/ContactInfoPage";
import PetInfoPage from "../../pages/Account/PetInfoPage";
import RemindersPage from "../../pages/Account/RemindersPage";
import MedicalInfoPage from "../../pages/Account/MedicalInfoPage";
import ScanLocationsPage from "../../pages/Account/ScanLocationsPage";
import ShippingInformationPage from "../../pages/Checkout/ShippingInformationPage";
import BillingInformationPage from "../../pages/Checkout/BillingInformationPage";
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

      <PrivateRoute path="/reminders">
        <RemindersPage />
      </PrivateRoute>

      <PrivateRoute path="/medicalinfo">
        <MedicalInfoPage />
      </PrivateRoute>

      <PrivateRoute path="/scanlocations">
        <ScanLocationsPage />
      </PrivateRoute>

      <Route path="/shippinginfo">
        <ShippingInformationPage />
      </Route>

      <Route path="/billinginfo">
        <BillingInformationPage />
      </Route>

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
