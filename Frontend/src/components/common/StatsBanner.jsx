const stats = [
  ["50,000+", "Resumes created"],
  ["94%", "Average ATS score"],
  ["3x", "More interview callbacks"],
  ["2 min", "Time to first draft"],
];

export default function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="container stats-grid">
        {stats.map(([number, label], index) => (
          <div
            key={label}
            className="stat-item reveal"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="stat-num">
              {number}
            </div>

            <div className="stat-label">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}