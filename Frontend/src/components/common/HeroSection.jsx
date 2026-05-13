export default function HeroSection({
  onSignupClick,
}) {
  return (
    <section className="hero container">
      <div className="reveal">
        <div className="badge">
          Trusted by 50,000+ job seekers
        </div>

        <h1>
          Your dream job starts with a perfect resume
        </h1>

        <p className="hero-sub">
          ResumeAI reads job descriptions, matches your
          skills, and writes tailored resumes in seconds,
          not hours.
        </p>

        <div className="hero-ctas">
          <button
            type="button"
            className="btn btn-indigo"
            style={{
              padding: "16px 32px",
              fontSize: "16px",
            }}
            onClick={onSignupClick}
          >
            Create my resume free{" "}
            <i
              className="ti ti-arrow-right"
              aria-hidden="true"
            ></i>
          </button>

          <a
            href="#how-it-works"
            className="btn btn-ghost"
            style={{
              padding: "16px 32px",
              fontSize: "16px",
            }}
          >
            See how it works
          </a>
        </div>

        <div className="social-proof">
          <div className="avatar-group">
            <div className="avatar">AM</div>

            <div
              className="avatar"
              style={{
                backgroundColor:
                  "var(--accent-secondary)",
              }}
            >
              JD
            </div>

            <div
              className="avatar"
              style={{
                backgroundColor: "#C084FC",
              }}
            >
              TK
            </div>
          </div>

          <div className="social-proof-text">
            Join 50k+ professionals landing interviews
          </div>
        </div>

        <div className="trust-badges">
          <div className="trust-badge">
            <i
              className="ti ti-circle-check"
              aria-hidden="true"
            ></i>

            ATS optimized
          </div>

          <div className="trust-badge">
            <i
              className="ti ti-circle-check"
              aria-hidden="true"
            ></i>

            No design skills needed
          </div>

          <div className="trust-badge">
            <i
              className="ti ti-circle-check"
              aria-hidden="true"
            ></i>

            Export to PDF instantly
          </div>
        </div>
      </div>
    </section>
  );
}