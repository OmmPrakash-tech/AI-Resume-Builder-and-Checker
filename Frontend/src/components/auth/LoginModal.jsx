export default function LoginModal({
  isOpen = false,
  onClose,
  onSignupClick,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login submitted");

    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""}`}
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
          <h3 className="modal-title">Welcome back</h3>

          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close login modal"
          >
            <i className="ti ti-x" aria-hidden="true"></i>
          </button>
        </div>

        <p className="modal-sub">
          Sign in to continue building better resumes.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email address</label>

            <input
              id="login-email"
              type="email"
              placeholder="p.mehta@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>

            <input
              id="login-password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-indigo">
              Sign in
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