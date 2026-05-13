export default function SignupModal({
  isOpen = false,
  onClose,
  onLoginClick,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Signup submitted");

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
          <h3 className="modal-title">Get started</h3>

          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close signup modal"
          >
            <i className="ti ti-x" aria-hidden="true"></i>
          </button>
        </div>

        <p className="modal-sub">
          Create your free account in seconds.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="signup-name">Full name</label>

            <input
              id="signup-name"
              type="text"
              placeholder="Priya Mehta"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">Email address</label>

            <input
              id="signup-email"
              type="email"
              placeholder="p.mehta@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">Password</label>

            <input
              id="signup-password"
              type="password"
              placeholder="••••••••"
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
            <button type="submit" className="btn btn-indigo">
              Create my free account
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