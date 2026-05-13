import { useState } from "react";

import Navbar from "../components/common/Navbar";
import HeroSection from "../components/common/HeroSection";
import FeaturesSection from "../components/common/FeaturesSection";
import HowItWorks from "../components/common/HowItWorks";
import ResumePreview from "../components/common/ResumePreview";
import Testimonials from "../components/common/Testimonials";
import StatsBanner from "../components/common/StatsBanner";
import CTASection from "../components/common/CTASection";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";

import LoginModal from "../components/auth/LoginModal";
import SignupModal from "../components/auth/SignupModal";

import "../styles/globals.css";

export default function LandingPage() {
  const [activeModal, setActiveModal] =
    useState(null);

  const showLogin = () => {
    setActiveModal("login");
  };

  const showSignup = () => {
    setActiveModal("signup");
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <Navbar
        onLoginClick={showLogin}
        onSignupClick={showSignup}
      />

      <HeroSection
        onSignupClick={showSignup}
      />

      <FeaturesSection />

      <HowItWorks />

      <ResumePreview />

      <Testimonials />

      <StatsBanner />

      <CTASection
        onLoginClick={showLogin}
        onSignupClick={showSignup}
      />

      <Footer />

      <ScrollTop />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onSignupClick={showSignup}
      />

      <SignupModal
        isOpen={activeModal === "signup"}
        onClose={closeModal}
        onLoginClick={showLogin}
      />
    </>
  );
}