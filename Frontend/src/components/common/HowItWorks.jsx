const steps = [
  {
    icon: "ti ti-clipboard-text",
    title: "Paste job description",
    text: "Simply copy the job requirements from LinkedIn or Indeed.",
  },

  {
    icon: "ti ti-cpu",
    title: "AI tailors resume",
    text: "Our algorithms optimize your experience to match the role perfectly.",
  },

  {
    icon: "ti ti-download",
    title: "Download and apply",
    text: "Get your ATS-ready PDF and land that dream interview.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="how-it-works"
      id="how-it-works"
    >
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">
            From job post to ready resume in 3
            steps
          </h2>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="step reveal"
              style={{
                animationDelay: `${(index + 1) * 0.1}s`,
              }}
            >
              <div className="step-icon-box">
                <i
                  className={step.icon}
                  aria-hidden="true"
                ></i>

                <span className="step-number">
                  {index + 1}
                </span>
              </div>

              <h4>{step.title}</h4>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}