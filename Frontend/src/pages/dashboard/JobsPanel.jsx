import { useState } from "react";

import {
  Upload,
  Search,
  Briefcase,
  MapPin,
  ChevronRight,
} from "lucide-react";

/* ───────────────────────────────────────── */

const jobs = [
  {
    title: "Senior Frontend Engineer",
    company: "Vercel",
    location: "Remote",
    match: 94,
    tags: ["React", "Next.js", "Remote"],
    type: "Full-time",
  },

  {
    title: "Full Stack Developer",
    company: "Stripe",
    location: "San Francisco, CA",
    match: 87,
    tags: ["Node.js", "TypeScript", "Hybrid"],
    type: "Full-time",
  },

  {
    title: "UI Engineer",
    company: "Linear",
    location: "Remote",
    match: 91,
    tags: ["React", "CSS", "Design Systems"],
    type: "Full-time",
  },

  {
    title: "Software Engineer II",
    company: "Notion",
    location: "New York, NY",
    match: 79,
    tags: ["JavaScript", "Python", "Onsite"],
    type: "Full-time",
  },

  {
    title: "Frontend Architect",
    company: "Loom",
    location: "Remote",
    match: 83,
    tags: ["React", "GraphQL", "Remote"],
    type: "Senior",
  },

  {
    title: "React Developer",
    company: "Figma",
    location: "San Francisco, CA",
    match: 88,
    tags: ["React", "TypeScript", "Hybrid"],
    type: "Mid-level",
  },
];

/* ───────────────────────────────────────── */

const matchColor = (m) =>
  m >= 90
    ? "#10B981"
    : m >= 80
    ? "#06B6D4"
    : "#f59e0b";

/* ───────────────────────────────────────── */

export default function JobsPanel() {
  const [searched, setSearched] = useState(false);

  const [query, setQuery] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title
        .toLowerCase()
        .includes(query.toLowerCase()) ||
      job.tags.some((tag) =>
        tag
          .toLowerCase()
          .includes(query.toLowerCase())
      )
  );

  return (
    <div
      className="panel"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 36,
      }}
    >
      {/* HEADER */}
      <div>
        {/* <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            fontSize: 48,
            marginBottom: 10,
          }}
        >
          <span className="grad-text">
            Find Jobs
          </span>
        </h2> */}

        <p
          style={{
            color: "#94a3b8",
            fontSize: 16,
          }}
        >
          Upload your resume and discover
          AI-matched opportunities
        </p>
      </div>

      {/* UPLOAD */}
      <div
        className="upload-zone"
        style={{
          padding: 34,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 18,
              background:
                "rgba(6,182,212,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Upload size={28} color="#22d3ee" />
          </div>

          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: 17,
                color: "#67e8f9",
                marginBottom: 6,
              }}
            >
              Upload Resume for Matching
            </p>

            <p
              style={{
                fontSize: 14,
                color: "#94a3b8",
              }}
            >
              AI will analyze your skills and
              recommend the best-fit jobs
            </p>
          </div>

          <label
            className="btn-ghost"
            style={{
              cursor: "pointer",
            }}
          >
            Browse Files

            <input
              type="file"
              hidden
            />
          </label>
        </div>
      </div>

      {/* SEARCH */}
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search by title, technology or keyword..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          style={{
            flex: 1,
            minWidth: 240,
          }}
        />

        <button
          className="btn-primary"
          onClick={() => setSearched(true)}
          style={{
            whiteSpace: "nowrap",
            padding: "12px 22px",
          }}
        >
          <Search size={16} />
          Search Jobs
        </button>
      </div>

      {/* RESULTS */}
      {searched && (
        <div>
          {/* TOP BAR */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: 22,
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#9ca3af",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {filteredJobs.length} Matched
              Roles
            </p>

            <span
              className="tag-pill"
              style={{
                background:
                  "rgba(16,185,129,0.15)",
                color: "#34d399",
                fontSize: 12,
              }}
            >
              AI Matched ✓
            </span>
          </div>

          {/* EMPTY */}
          {filteredJobs.length === 0 && (
            <div
              className="glass"
              style={{
                borderRadius: 20,
                padding: 32,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                }}
              >
                No matching jobs found.
              </p>
            </div>
          )}

          {/* JOB GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="glass glass-hover job-card"
                style={{
                  borderRadius: 22,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {/* TOP */}
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        flexShrink: 0,
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                          "center",
                      }}
                    >
                      <Briefcase
                        size={22}
                        color="#a78bfa"
                      />
                    </div>

                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          color: "#f8fafc",
                          marginBottom: 4,
                        }}
                      >
                        {job.title}
                      </p>

                      <p
                        style={{
                          fontSize: 13,
                          color: "#94a3b8",
                        }}
                      >
                        {job.company}
                      </p>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily:
                        "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      color: matchColor(
                        job.match
                      ),
                    }}
                  >
                    {job.match}%
                  </span>
                </div>

                {/* META */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "wrap",
                    color: "#94a3b8",
                    fontSize: 13,
                  }}
                >
                  <MapPin size={13} />

                  {job.location}

                  <span
                    style={{
                      opacity: 0.5,
                    }}
                  >
                    •
                  </span>

                  {job.type}
                </div>

                {/* TAGS */}
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill"
                      style={{
                        background:
                          "rgba(124,58,237,0.14)",
                        color: "#c4b5fd",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <button
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent:
                      "center",
                    padding: "10px",
                    fontSize: 14,
                    marginTop: "auto",
                  }}
                >
                  Apply Now

                  <ChevronRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}