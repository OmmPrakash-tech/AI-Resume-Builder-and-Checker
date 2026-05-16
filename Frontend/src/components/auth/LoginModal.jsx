import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";

export default function LoginModal({
  isOpen = false,
  onClose,
  onSignupClick,
}) {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
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

    const data = await loginUser(formData);

    console.log("Login Success:", data);

    // Save JWT token
    localStorage.setItem(
      "token",
      data.access_token
    );

    alert("Login successful");

    // Reset form
    setFormData({
      email: "",
      password: "",
    });

    // Close modal if exists
    if (onClose) {
      onClose();
    }

    // Navigate to dashboard
    navigate("/dashboard");

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.detail ||
      "Login failed"
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
            Welcome back
          </h3>

          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close login modal"
          >
            <i
              className="ti ti-x"
              aria-hidden="true"
            ></i>
          </button>
        </div>

        <p className="modal-sub">
          Sign in to continue building better
          resumes.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">
              Email address
            </label>

            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="p.mehta@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">
              Password
            </label>

            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

         <div
  className="forgot-password-wrapper"
>
  <button
    type="button"
    className="text-button"
    onClick={() => navigate("/forgot-password")}
  >
    Forgot Password?
  </button>
</div>

<div className="form-actions">
            <button
              type="submit"
              className="btn btn-indigo"
              disabled={loading}
            >
              {loading
                ? "Signing in..."
                : "Sign in"}
            </button>
          </div>

          <div className="form-footer">
            New here?{" "}

            <button
              type="button"
              className="text-button"
              onClick={onSignupClick}
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}