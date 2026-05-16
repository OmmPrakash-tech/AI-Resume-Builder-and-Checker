import { useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  resetPassword,
} from "../../api/authApi";

import "../../styles/ResetPassword.css";

export default function ResetPassword() {

  const navigate = useNavigate();

  const { token } = useParams();

  const [formData, setFormData] =
    useState({
      password: "",
      confirmPassword: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value,
    });
  };

  const handleSubmit = async (
    event
  ) => {

    event.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      alert(
        "Passwords do not match"
      );

      return;
    }

    try {

      setLoading(true);

      const data =
        await resetPassword(
          token,
          formData.password
        );

      alert(
        data.message ||
        "Password reset successful"
      );

      navigate("/");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Reset failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="reset-container">

      <div className="reset-card">

        <div className="reset-icon">
          🔐
        </div>

        <h1>
          Reset Password
        </h1>

        <p className="reset-subtitle">
          Enter your new password below.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>
              New Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

          </div>

          <button
            type="submit"
            className="reset-btn"
            disabled={loading}
          >
            {loading
              ? "Updating..."
              : "Reset Password"}
          </button>

        </form>

      </div>

    </div>
  );
}