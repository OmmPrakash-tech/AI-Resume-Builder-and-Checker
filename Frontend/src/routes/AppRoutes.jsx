import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";


import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "@/components/auth/ForgotPassword";
import ResetPassword from "@/components/auth/ResetPassword";
import LoginModal from "@/components/auth/LoginModal";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";


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

<Route path="/" element={<LoginModal />} />
        <Route path="/dashboard" element={<DashboardLayout />} />

    </Routes>
  );
}