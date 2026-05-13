const footerLinks = {
  Product: [
    "Resume Builder",
    "Cover Letter AI",
    "ATS Scanner",
    "Job Tracker",
  ],

  Company: [
    "About Us",
    "Success Stories",
    "Careers",
    "Contact",
  ],

  Social: [
    "LinkedIn",
    "Twitter",
    "Instagram",
    "YouTube",
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <a href="/" className="logo footer-logo">
            <div className="logo-mark">
              <i
                className="ti ti-square-rounded-check-filled"
                aria-hidden="true"
              ></i>
            </div>

            ResumeAI
          </a>

          <p className="footer-tagline">
            Empowering professionals to navigate the modern
            job market with AI precision.
          </p>
        </div>

        {Object.entries(footerLinks).map(
          ([title, links]) => (
            <div className="footer-col" key={title}>
              <h5>{title}</h5>

              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      <div className="container footer-bottom">
        <div>
          © 2026 ResumeAI. All rights reserved.
        </div>

        <div className="footer-legal">
          <a href="/">Privacy Policy</a>

          <a href="/">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}