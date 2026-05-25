import { useState } from "react";
import { Pencil, Award } from "lucide-react";

const templates = [
  { name: "Slate Pro", colors: ["#1e1b4b", "#7C3AED"], tag: "Popular" },
  { name: "Cyan Edge", colors: ["#0c4a6e", "#06B6D4"], tag: "Modern" },
  { name: "Emerald", colors: ["#064e3b", "#10B981"], tag: "Clean" },
  { name: "Midnight", colors: ["#0f172a", "#8b5cf6"], tag: "Bold" },
];

export default function ResumePanel() {
  const [editorText, setEditorText] = useState(
    "Start writing your professional summary here...\n\nHighlight your key achievements, skills, and experience that make you stand out to employers."
  );

  return (
    <div
      className="panel"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      {/* HEADER */}
      <div>
        {/* <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            fontSize: 52,
            marginBottom: 10,
          }}
        >
          <span className="grad-text">Build Your Resume</span>
        </h2> */}

        <p
          style={{
            color: "#94a3b8",
            fontSize: 16,
          }}
        >
          Choose a template or start from scratch
        </p>
      </div>

      {/* TEMPLATES */}
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
          Templates
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 22,
          }}
        >
          {templates.map((t) => (
            <div
              key={t.name}
              className="template-card glass"
              style={{
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              {/* CARD TOP */}
              <div
                style={{
                  height: 150,
                  background: `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[1]})`,
                  position: "relative",
                  padding: 22,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    opacity: 0.7,
                  }}
                >
                  {[100, 65, 80, 45].map((w, i) => (
                    <div
                      key={i}
                      style={{
                        height: 8,
                        width: `${w}%`,
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.45)",
                      }}
                    />
                  ))}
                </div>

                <span
                  className="tag-pill"
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    background: "rgba(255,255,255,0.18)",
                    color: "#fff",
                  }}
                >
                  {t.tag}
                </span>
              </div>

              {/* CARD BOTTOM */}
              <div style={{ padding: 18 }}>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    marginBottom: 14,
                    color: "#f8fafc",
                  }}
                >
                  {t.name}
                </p>

                <button
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "10px 16px",
                    fontSize: 14,
                  }}
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}

          {/* BLANK TEMPLATE */}
          <div
            className="glass"
            style={{
              borderRadius: 18,
              border: "2px dashed rgba(124,58,237,0.35)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              padding: 30,
              minHeight: 260,
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 18,
                background: "rgba(124,58,237,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pencil size={26} color="#a78bfa" />
            </div>

            <p
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#c4b5fd",
              }}
            >
              Blank Canvas
            </p>

            <p
              style={{
                fontSize: 14,
                color: "#94a3b8",
                textAlign: "center",
              }}
            >
              Design your resume from scratch
            </p>
          </div>
        </div>
      </div>

      {/* EDITOR */}
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
          Resume Editor
        </p>

        <div
          className="glass"
          style={{
            borderRadius: 22,
            overflow: "hidden",
          }}
        >
          {/* TOOLBAR */}
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: "14px 18px",
              borderBottom:
                "1px solid rgba(255,255,255,0.08)",
              flexWrap: "wrap",
            }}
          >
            {["B", "I", "U", "H1", "H2", "•", "1.", "—", "Link", "⇥"].map(
              (t) => (
                <button
                  key={t}
                  className="btn-ghost"
                  style={{
                    padding: "7px 12px",
                    fontSize: 13,
                    minWidth: 38,
                  }}
                >
                  {t}
                </button>
              )
            )}

            <div style={{ flex: 1 }} />

            <button
              className="btn-primary"
              style={{
                padding: "8px 18px",
                fontSize: 13,
              }}
            >
              <Award size={15} />
              Export PDF
            </button>
          </div>

          {/* TEXTAREA */}
          <textarea
            value={editorText}
            onChange={(e) => setEditorText(e.target.value)}
            style={{
              width: "100%",
              minHeight: 320,
              padding: "24px",
              resize: "vertical",
              border: "none",
              outline: "none",
              borderRadius: 0,
              background: "transparent",
              lineHeight: 1.9,
              fontSize: 15,
              color: "#e2e8f0",
            }}
          />
        </div>
      </div>
    </div>
  );
}