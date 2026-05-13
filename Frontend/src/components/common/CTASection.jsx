export default function CTASection({
  onSignupClick,
  onLoginClick,
}) {
  return (
    <section className="cta-section container">
      <div className="reveal">
        <div className="badge">Start for free</div>

        <h2>Your next job is one resume away</h2>

        <p className="cta-sub">
          No credit card. No design skills. Just results.
        </p>

        <button
          type="button"
          className="btn btn-indigo btn-pulse"
          style={{
            padding: "20px 40px",
            fontSize: "18px",
          }}
          onClick={onSignupClick}
        >
          Build my resume now{" "}
          <i
            className="ti ti-arrow-right"
            aria-hidden="true"
          ></i>
        </button>

        <button
          type="button"
          className="cta-link"
          onClick={onLoginClick}
        >
          Already have an account? Sign in
        </button>
      </div>
    </section>
  );
}