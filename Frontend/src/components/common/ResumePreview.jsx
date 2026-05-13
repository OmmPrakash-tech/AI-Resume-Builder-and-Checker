const skills = [
  "Product Strategy",
  "Roadmapping",
  "SQL",
  "Figma",
];

export default function ResumePreview() {
  return (
    <section className="mockup-section container">
      <div className="section-header reveal">
        <h2 className="section-title">
          See it in action
        </h2>
      </div>

      <div className="browser-mockup reveal">
        {/* Browser Header */}
        <div className="browser-header">
          <div className="dots">
            <div className="dot dot-red"></div>

            <div className="dot dot-yellow"></div>

            <div className="dot dot-green"></div>
          </div>

          <div className="address-bar">
            resumeai.app/editor
          </div>
        </div>

        {/* Resume Content */}
        <div className="browser-content">
          {/* Left Side */}
          <div className="resume-left">
            <div className="resume-avatar"></div>

            <h4 className="resume-name">
              Priya Mehta
            </h4>

            <p className="resume-role">
              Senior Product Manager
            </p>

            <div className="resume-item">
              <i
                className="ti ti-mail"
                aria-hidden="true"
              ></i>

              p.mehta@example.com
            </div>

            <div className="resume-item">
              <i
                className="ti ti-phone"
                aria-hidden="true"
              ></i>

              +1 555-0123
            </div>

            <div className="resume-item">
              <i
                className="ti ti-brand-linkedin"
                aria-hidden="true"
              ></i>

              linkedin.com/in/pmehta
            </div>
          </div>

          {/* Right Side */}
          <div className="resume-right">
            <div className="resume-section">
              <h5>Experience</h5>

              <div className="experience-item">
                <p className="exp-title">
                  Lead Product Manager,
                  TechFlow Inc.
                </p>

                <p className="exp-bullet">
                  Increased user retention by 24%
                  through data-driven feature
                  prioritization.
                </p>

                <p className="exp-bullet">
                  Led cross-functional team of 15
                  designers and engineers.
                </p>
              </div>

              <div className="experience-item">
                <p className="exp-title">
                  Product Manager,
                  Innovate Solutions
                </p>

                <p className="exp-bullet">
                  Launched 3 mobile apps resulting
                  in 500k+ downloads in Year 1.
                </p>
              </div>
            </div>

            <div className="resume-section">
              <h5>Skills</h5>

              <div className="skills-pills">
                {skills.map((skill) => (
                  <span
                    className="skill-pill"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ATS Badge */}
        <div className="ats-badge-floating">
          <div className="ats-ring"></div>

          <span className="ats-score-num">
            96
          </span>

          <span className="ats-score-label">
            ATS Score
          </span>
        </div>
      </div>
    </section>
  );
}