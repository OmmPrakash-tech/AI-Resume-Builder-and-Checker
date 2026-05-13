const features = [
  {
    icon: "ti ti-target",
    title: "AI job match analysis",
    text: "Paste any job description. Our AI extracts the top keywords and rewrites your resume bullets to match, boosting ATS scores by up to 3x.",
    className: "bento-large",
    delay: "0.1s",

    extra: (
      <div className="ats-widget">
        <div className="ats-header">
          <span>ATS Score Reliability</span>
          <span>94%</span>
        </div>

        <div className="progress-container">
          <div
            className="progress-bar"
            id="features-progress"
            style={{ width: "94%" }}
          ></div>
        </div>
      </div>
    ),
  },

  {
    icon: "ti ti-wand",
    title: "One-click tailoring",
    text: "Switch roles in seconds. Every application gets a unique, role-specific resume.",
    delay: "0.2s",
  },

  {
    icon: "ti ti-layout-grid",
    title: "50+ premium templates",
    text: "Recruiter-approved designs for every industry, including tech, finance, creative, and healthcare.",
    delay: "0.3s",
  },

  {
    icon: "ti ti-chart-bar",
    title: "Real-time ATS score",
    text: "See your resume's ATS compatibility score live as you edit. Never stay in the dark.",
    delay: "0.4s",
  },

  {
    icon: "ti ti-mail-forward",
    title: "Cover letter AI",
    text: "Generate a matching cover letter in one click. Personalized to the company and role with precision.",
    className: "bento-large",
    delay: "0.5s",

    extra: (
      <div className="cover-letter-view">
        Dear Hiring Manager, I am writing to express my strong
        interest in the Senior PM role...
      </div>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="features container" id="features">
      <div className="section-header reveal">
        <span className="eyebrow">
          Everything you need
        </span>

        <h2 className="section-title">
          Built for the modern job seeker
        </h2>
      </div>

      <div className="bento-grid">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`bento-card glass reveal ${
              feature.className ?? ""
            }`}
            style={{
              animationDelay: feature.delay,
            }}
          >
            <i
              className={feature.icon}
              aria-hidden="true"
            ></i>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>

            {feature.extra}
          </div>
        ))}
      </div>
    </section>
  );
}