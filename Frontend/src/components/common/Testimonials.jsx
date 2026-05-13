const testimonials = [
  {
    quote:
      "I applied to 12 companies and got 9 interview calls. ResumeAI is the reason I landed at Google.",

    initials: "AS",

    name: "Arjun S.",

    role: "Software Engineer, Google",

    color: "var(--accent-primary)",
  },

  {
    quote:
      "The ATS optimization alone is worth it. My callback rate went from 8% to 61% in two weeks.",

    initials: "FK",

    name: "Fatima K.",

    role: "Marketing Manager, Shopify",

    color: "#C084FC",
  },

  {
    quote:
      "I had zero design sense. ResumeAI made me look like I hired a professional designer and copywriter.",

    initials: "CM",

    name: "Carlos M.",

    role: "Finance Analyst, Deloitte",

    color: "var(--accent-secondary)",
  },

  {
    quote:
      "Cover letter generation saved me 3 hours per application. Genuinely life-changing software for seekers.",

    initials: "NT",

    name: "Nadia T.",

    role: "UX Designer, Figma",

    color: "#F472B6",
  },
];

export default function Testimonials() {
  return (
    <section
      className="testimonials container"
      id="reviews"
    >
      <div className="section-header reveal">
        <span className="eyebrow">
          Social proof
        </span>

        <h2 className="section-title">
          Real people. Real results.
        </h2>
      </div>

      <div className="testimonial-row reveal">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="testimonial-card glass"
          >
            <div
              className="stars"
              aria-label="Five star review"
            >
              ★★★★★
            </div>

            <p className="quote">
              "{testimonial.quote}"
            </p>

            <div className="author">
              <div
                className="avatar"
                style={{
                  width: "40px",
                  height: "40px",
                  background:
                    testimonial.color,
                }}
              >
                {testimonial.initials}
              </div>

              <div className="author-info">
                <h6>{testimonial.name}</h6>

                <span>
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}