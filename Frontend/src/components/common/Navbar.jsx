import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#templates", label: "Templates" },
  { href: "#reviews", label: "Reviews" },
];

export default function Navbar({
  onLoginClick,
  onSignupClick,
}) {
  const [isDrawerOpen, setIsDrawerOpen] =
    useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav id="navbar">
        <div className="container">
          <a href="/" className="logo">
            <div className="logo-mark">
              <i
                className="ti ti-square-rounded-check-filled"
                aria-hidden="true"
              ></i>
            </div>

            ResumeAI
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onLoginClick}
            >
              Sign in
            </button>

            <button
              type="button"
              className="btn btn-indigo btn-pulse"
              onClick={onSignupClick}
            >
              Create account
            </button>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <i
              className="ti ti-menu-2"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <button
        type="button"
        className={`drawer-overlay ${
          isDrawerOpen ? "active" : ""
        }`}
        onClick={closeDrawer}
        aria-label="Close navigation menu"
      ></button>

      {/* Drawer */}
      <div
        className={`drawer ${
          isDrawerOpen ? "active" : ""
        }`}
      >
        <div className="drawer-links">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={closeDrawer}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "auto",
          }}
        >
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              closeDrawer();

              if (onLoginClick) {
                onLoginClick();
              }
            }}
          >
            Sign in
          </button>

          <button
            type="button"
            className="btn btn-indigo"
            onClick={() => {
              closeDrawer();

              if (onSignupClick) {
                onSignupClick();
              }
            }}
          >
            Create account
          </button>
        </div>
      </div>
    </>
  );
}