export default function Toast({
  isOpen = false,
  message = "Account created! Welcome to ResumeAI.",
}) {
  return (
    <div
      className={`toast ${
        isOpen ? "active" : ""
      }`}
      role="status"
      aria-live="polite"
    >
      <i
        className="ti ti-circle-check-filled"
        style={{
          color: "var(--accent-primary)",
          fontSize: "24px",
        }}
        aria-hidden="true"
      ></i>

      <div>{message}</div>
    </div>
  );
}