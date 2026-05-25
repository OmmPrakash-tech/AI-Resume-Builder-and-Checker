import { useState } from "react";

import {
  Upload,
  Zap,
  TrendingUp,
  Code,
  BarChart3,
  Award,
} from "lucide-react";

/* ───────────────────────────────────────── */

const strengthData = [
  { label: "Contact Info", score: 95, color: "#10B981" },
  { label: "Experience", score: 78, color: "#06B6D4" },
  { label: "Skills", score: 62, color: "#7C3AED" },
  { label: "Education", score: 88, color: "#06B6D4" },
  { label: "Summary", score: 45, color: "#f59e0b" },
];

const suggestions = [
  {
    icon: TrendingUp,
    tip: "Add measurable achievements to experience sections",
  },
  {
    icon: Code,
    tip: "Expand your technical skills and tools section",
  },
  {
    icon: BarChart3,
    tip: "Your professional summary needs more depth",
  },
  {
    icon: Award,
    tip: "Add certifications and awards for credibility",
  },
];

/* ───────────────────────────────────────── */

export default function StrengthPanel() {
  const [analyzed, setAnalyzed] = useState(false);
  const [dragging, setDragging] = useState(false);

  const overallScore = 74;
  const dash = 282 - (282 * overallScore) / 100;

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
            Strength Check
          </span>
        </h2> */}

        <p
          style={{
            color: "#94a3b8",
            fontSize: 16,
          }}
        >
          Upload your resume and let AI analyze it
        </p>
      </div>

      {/* UPLOAD */}
      <div
        className="upload-zone"
        style={{
          background: dragging
            ? "rgba(124,58,237,0.08)"
            : "transparent",
          padding: 40,
        }}
        onDragEnter={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        onDrop={() => setDragging(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 20,
              background:
                "rgba(124,58,237,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation:
                "float 3s ease-in-out infinite",
            }}
          >
            <Upload size={30} color="#a78bfa" />
          </div>

          <p
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#c4b5fd",
            }}
          >
            Upload Resume
          </p>

          <p
            style={{
              fontSize: 14,
              color: "#94a3b8",
            }}
          >
            PDF, DOCX or TXT up to 10MB
          </p>

          <label
            className="btn-ghost"
            style={{
              cursor: "pointer",
              marginTop: 8,
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

      {/* ANALYZE BUTTON */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="btn-primary"
          onClick={() => setAnalyzed(true)}
          style={{
            fontSize: 15,
            padding: "14px 36px",
          }}
        >
          <Zap size={18} />
          Analyze with AI
        </button>
      </div>

      {/* RESULTS */}
      {analyzed && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {/* SCORE CARD */}
          <div
            className="glass"
            style={{
              borderRadius: 24,
              padding: 32,
              display: "flex",
              alignItems: "center",
              gap: 36,
              flexWrap: "wrap",
            }}
          >
            {/* RING */}
            <div
              style={{
                position: "relative",
                width: 140,
                height: 140,
                flexShrink: 0,
              }}
            >
              <svg
                width="140"
                height="140"
                style={{
                  transform: "rotate(-90deg)",
                }}
              >
                <circle
                  cx="70"
                  cy="70"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="10"
                />

                <circle
                  className="score-ring"
                  cx="70"
                  cy="70"
                  r="45"
                  fill="none"
                  stroke="url(#scoreGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="282"
                  strokeDashoffset="282"
                  style={{ "--dash": dash }}
                />

                <defs>
                  <linearGradient
                    id="scoreGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#7C3AED"
                    />

                    <stop
                      offset="100%"
                      stopColor="#06B6D4"
                    />
                  </linearGradient>
                </defs>
              </svg>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  className="grad-text"
                  style={{
                    fontFamily:
                      "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: 34,
                    lineHeight: 1,
                  }}
                >
                  {overallScore}
                </span>

                <span
                  style={{
                    fontSize: 12,
                    color: "#94a3b8",
                  }}
                >
                  / 100
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div
              style={{
                flex: 1,
                minWidth: 260,
              }}
            >
              <p
                style={{
                  fontFamily:
                    "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  marginBottom: 6,
                }}
              >
                Good Resume
              </p>

              <p
                style={{
                  fontSize: 14,
                  color: "#94a3b8",
                  marginBottom: 24,
                  lineHeight: 1.7,
                }}
              >
                Your resume performs above average.
                A few improvements can make it
                excellent.
              </p>

              {strengthData.map(
                ({ label, score, color }) => (
                  <div
                    key={label}
                    style={{
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 14,
                          color: "#cbd5e1",
                        }}
                      >
                        {label}
                      </span>

                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color,
                        }}
                      >
                        {score}%
                      </span>
                    </div>

                    <div
                      style={{
                        height: 8,
                        borderRadius: 999,
                        background:
                          "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="strength-bar-fill"
                        style={{
                          width: `${score}%`,
                          background: `linear-gradient(90deg, ${color}99, ${color})`,
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* SUGGESTIONS */}
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#9ca3af",
                marginBottom: 18,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Improvement Tips
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 18,
              }}
            >
              {suggestions.map(
                ({ icon: Icon, tip }, i) => (
                  <div
                    key={i}
                    className="glass glass-hover"
                    style={{
                      borderRadius: 18,
                      padding: 20,
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background:
                          "rgba(124,58,237,0.14)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        size={20}
                        color="#a78bfa"
                      />
                    </div>

                    <p
                      style={{
                        fontSize: 14,
                        color: "#cbd5e1",
                        lineHeight: 1.7,
                      }}
                    >
                      {tip}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}