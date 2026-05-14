import { useState } from "react";

import { registerUser } from "../../api/authApi";

export default function SignupModal({
  isOpen = false,
  onClose,
  onLoginClick,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const data = await registerUser(
        formData
      );

      console.log("Signup Success:", data);

      alert("Account created successfully");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
          "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`modal-overlay ${
        isOpen ? "active" : ""
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-card glass">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h3 className="modal-title">
            Get started
          </h3>

          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close signup modal"
          >
            <i
              className="ti ti-x"
              aria-hidden="true"
            ></i>
          </button>
        </div>

        <p className="modal-sub">
          Create your free account in seconds.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="signup-name">
              Full name
            </label>

            <input
              id="signup-name"
              name="name"
              type="text"
              placeholder="Priya Mehta"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">
              Email address
            </label>

            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="p.mehta@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">
              Password
            </label>

            <input
              id="signup-password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <label
            htmlFor="signup-terms"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              color: "var(--text-muted)",
            }}
          >
            <input
              id="signup-terms"
              type="checkbox"
              required
            />

            I agree to the Terms of Service
          </label>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-indigo"
              disabled={loading}
            >
              {loading
                ? "Creating account..."
                : "Create my free account"}
            </button>
          </div>

          <div className="form-footer">
            Already have an account?{" "}

            <button
              type="button"
              className="text-button"
              onClick={onLoginClick}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}