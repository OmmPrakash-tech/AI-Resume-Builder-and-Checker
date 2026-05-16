import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../api/authApi";

import "../../styles/ForgotPassword.css";

export default function ForgotPassword() {

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    event
  ) => {

    event.preventDefault();

    try {

      setLoading(true);

      const data =
        await forgotPassword(email);

      alert(
        data.message ||
        "Reset link sent successfully"
      );

      setEmail("");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="forgot-container">

      <div className="forgot-card">

        <div className="lock-icon">
          🔒
        </div>

        <h1>
          Forgot your password?
        </h1>

        <p className="forgot-subtitle">
          No worries. Enter your email and
          we'll send you a reset link.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>
              Email address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <button
            type="submit"
            className="reset-btn"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "Send reset link"}
          </button>

        </form>

        <div className="divider"></div>

        <Link
          to="/"
          className="back-btn"
        >
          ← Back to sign in
        </Link>

        <p className="support-text">
          Didn't get an email?
          Check your spam folder or
          <span> contact support.</span>
        </p>

      </div>

    </div>
  );
}