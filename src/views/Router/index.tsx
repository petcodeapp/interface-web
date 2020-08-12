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
import RemindersPage from "../../pages/Account/RemindersPage";
import MedicalInfoPage from "../../pages/Account/MedicalInfoPage";
import ScanLocationsPage from "../../pages/Account/ScanLocationsPage";
import { useObserver } from "mobx-react-lite";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}


const Routes = () => {
  return useObserver(() => (
    <>
      <PublicRoute restricted path="/signup">
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <RegistrationPage />
        </motion.div>
      </PublicRoute>

      <PublicRoute restricted path="/login">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <LoginPage />
        </motion.div>
      </PublicRoute>

      <PublicRoute restricted path="/forgotpassword">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <ForgotPasswordPage />
        </motion.div>
      </PublicRoute>

      <PrivateRoute path="/admin">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <AdminPage />
        </motion.div>
      </PrivateRoute>

      <PrivateRoute path="/dashboard">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <DashboardPage />
        </motion.div>
      </PrivateRoute>

      <PrivateRoute path="/contactinfo">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <ContactInfoPage />
        </motion.div>
      </PrivateRoute>

      <PrivateRoute path="/petinfo">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <PetInfoPage />
        </motion.div>
      </PrivateRoute>

      <PrivateRoute path="/reminders">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <RemindersPage />
        </motion.div>
      </PrivateRoute>

      <PrivateRoute path="/medicalinfo">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <MedicalInfoPage />
        </motion.div>
      </PrivateRoute>

      <PrivateRoute path="/scanlocations">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <ScanLocationsPage /></motion.div>
      </PrivateRoute>

      <PublicRoute path="/oldlanding">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <OldLandingpage />
        </motion.div>
      </PublicRoute>

      <PublicRoute path="/about">{/* TODO: Create about page */}</PublicRoute>

      <PublicRoute exact path="/">
      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
        <LandingPage />
        </motion.div>
      </PublicRoute>
    </>
  ));
};

export default Routes;
