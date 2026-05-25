import { useState } from "react";

import {
  Upload,
  Check,
  Bell,
  User,
  Shield,
  Palette,
  Lock,
  Globe,
  ExternalLink,
  Trash2,
  AlertTriangle,
  X,
} from "lucide-react";

export default function SettingsPanel() {
  const [toggles, setToggles] = useState({
    email: true,
    push: false,
    weekly: true,
  });

  const [theme, setTheme] = useState("dark");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggle = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className="panel"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
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
          <span className="grad-text">Settings</span>
        </h2> */}

        <p
          style={{
            color: "#94a3b8",
            fontSize: 16,
          }}
        >
          Manage your account and preferences
        </p>
      </div>

      {/* PROFILE */}
      <Section title="Profile" icon={User}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#7C3AED,#06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            JS
          </div>

          <button className="btn-ghost">
            <Upload size={14} />
            Upload Photo
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          <Field label="First Name" defaultValue="Jordan" />

          <Field label="Last Name" defaultValue="Smith" />

          <div style={{ gridColumn: "1 / -1" }}>
            <Field
              label="Email"
              type="email"
              defaultValue="jordan@example.com"
            />
          </div>
        </div>

        <button
          className="btn-primary"
          style={{ marginTop: 22 }}
        >
          <Check size={15} />
          Save Changes
        </button>
      </Section>

      {/* NOTIFICATIONS */}
      <Section title="Notifications" icon={Bell}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {[
            {
              key: "email",
              label: "Email Notifications",
              desc: "Get updates about resume feedback and job matches",
            },
            {
              key: "push",
              label: "Push Notifications",
              desc: "Receive browser alerts instantly",
            },
            {
              key: "weekly",
              label: "Weekly Digest",
              desc: "Receive a weekly activity summary",
            },
          ].map(({ key, label, desc }) => (
            <div
              key={key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 18,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {label}
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: "#94a3b8",
                  }}
                >
                  {desc}
                </p>
              </div>

              <button
                className={`toggle ${
                  toggles[key] ? "on" : "off"
                }`}
                onClick={() => toggle(key)}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* THEME */}
      <Section title="Theme Preferences" icon={Palette}>
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          {["dark", "light", "system"].map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              style={{
                padding: "10px 22px",
                borderRadius: 12,
                cursor: "pointer",
                border:
                  theme === t
                    ? "1px solid rgba(124,58,237,0.5)"
                    : "1px solid rgba(255,255,255,0.1)",
                background:
                  theme === t
                    ? "rgba(124,58,237,0.18)"
                    : "rgba(255,255,255,0.04)",
                color:
                  theme === t ? "#c4b5fd" : "#94a3b8",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </Section>

      {/* SECURITY */}
      <Section title="Privacy & Security" icon={Shield}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <button
            className="btn-ghost"
            style={{ justifyContent: "flex-start" }}
          >
            <Lock size={14} />
            Change Password
          </button>

          <button
            className="btn-ghost"
            style={{ justifyContent: "flex-start" }}
          >
            <Globe size={14} />
            Two-Factor Authentication
          </button>

          <button
            className="btn-ghost"
            style={{ justifyContent: "flex-start" }}
          >
            <ExternalLink size={14} />
            Download My Data
          </button>
        </div>
      </Section>

      {/* DANGER ZONE */}
      <div
        className="glass"
        style={{
          borderRadius: 22,
          padding: 28,
          border: "1px solid rgba(239,68,68,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <AlertTriangle
            size={22}
            color="#f87171"
            style={{ flexShrink: 0 }}
          />

          <div>
            <p
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#f87171",
                marginBottom: 8,
              }}
            >
              Danger Zone
            </p>

            <p
              style={{
                fontSize: 14,
                color: "#94a3b8",
                marginBottom: 20,
                lineHeight: 1.7,
              }}
            >
              Permanently delete your account and all
              associated data.
            </p>

            <button
              onClick={() => setShowDeleteModal(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "11px 20px",
                borderRadius: 12,
                cursor: "pointer",
                border:
                  "1px solid rgba(239,68,68,0.35)",
                background: "rgba(239,68,68,0.12)",
                color: "#f87171",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              <Trash2 size={15} />
              Delete Account Permanently
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}

/* ───────────────────────────────────────── */

function Section({ title, icon: Icon, children }) {
  return (
    <div
      className="glass"
      style={{
        borderRadius: 22,
        padding: 28,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 24,
          paddingBottom: 18,
          borderBottom:
            "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Icon size={18} color="#a78bfa" />

        <p
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#f8fafc",
          }}
        >
          {title}
        </p>
      </div>

      {children}
    </div>
  );
}

function Field({
  label,
  type = "text",
  defaultValue,
}) {
  return (
    <div>
      <label
        style={{
          fontSize: 13,
          color: "#94a3b8",
          display: "block",
          marginBottom: 8,
        }}
      >
        {label}
      </label>

      <input type={type} defaultValue={defaultValue} />
    </div>
  );
}

function DeleteModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        className="glass"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 480,
          borderRadius: 24,
          padding: 32,
          border: "1px solid rgba(239,68,68,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <AlertTriangle size={24} color="#f87171" />

          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: 24,
              fontWeight: 700,
              color: "#f87171",
            }}
          >
            Confirm Deletion
          </h3>
        </div>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: 1.8,
            marginBottom: 28,
          }}
        >
          This action permanently deletes your account,
          resumes, and saved job data.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn-ghost"
            onClick={onClose}
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <X size={14} />
            Cancel
          </button>

          <button
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              padding: "12px",
              borderRadius: 12,
              cursor: "pointer",
              border:
                "1px solid rgba(239,68,68,0.35)",
              background: "rgba(239,68,68,0.14)",
              color: "#f87171",
              fontWeight: 700,
            }}
          >
            <Trash2 size={14} />
            Delete Forever
          </button>
        </div>
      </div>
    </div>
  );
}