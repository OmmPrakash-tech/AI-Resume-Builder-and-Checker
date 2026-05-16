import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";


import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "@/components/auth/ForgotPassword";
import ResetPassword from "@/components/auth/ResetPassword";


export default function AppRoutes() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Forgot Password */}
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
  path="/reset-password/:token"
  element={<ResetPassword />}
/>

    </Routes>
  );
}