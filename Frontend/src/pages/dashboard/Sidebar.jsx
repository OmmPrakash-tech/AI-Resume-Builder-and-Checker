import { FileText, Zap, Search, Settings, LogOut } from "lucide-react";

const nav = [
  { id: "resume",   icon: FileText, label: "Create resume" },
  { id: "strength", icon: Zap,      label: "Strength check" },
  { id: "jobs",     icon: Search,   label: "Find jobs" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export default function Sidebar({ active, setActive, onSignOut }) {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo-row">
        <div className="sidebar-logo-icon">
          <FileText size={22} color="#60a5fa" />
        </div>
        <div>
          <h1 className="grad-text sidebar-logo-title">ResumeAI</h1>
          <p className="sidebar-logo-sub">Career intelligence platform</p>
        </div>
      </div>

      {/* User card */}
      <div className="sidebar-user-card">
        <div className="sidebar-avatar">JS</div>
        <div style={{ minWidth: 0 }}>
          <p className="sidebar-user-name">Jordan Smith</p>
          <p className="sidebar-user-email">jordan@example.com</p>
        </div>
      </div>

      {/* Nav */}
      <p className="sidebar-nav-label">Menu</p>
      <nav className="sidebar-nav">
        {nav.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`nav-item ${active === id ? "active" : ""}`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      {/* Sign out */}
      <button onClick={onSignOut} className="sidebar-signout">
        <LogOut size={18} />
        Sign out
      </button>

    </aside>
  );
}