import { useState } from "react";

import MeshBg from "./MeshBg";
import Sidebar from "./Sidebar";
import ResumePanel from "./ResumePanel";
import StrengthPanel from "./StrengthPanel";
import JobsPanel from "./JobsPanel";
import SettingsPanel from "./SettingsPanel";

import "../../styles/dashboard.css";

export default function DashboardLayout() {
  const [active, setActive] = useState("resume");

  const renderPanel = () => {
    switch (active) {
      case "resume":
        return <ResumePanel />;

      case "strength":
        return <StrengthPanel />;

      case "jobs":
        return <JobsPanel />;

      case "settings":
        return <SettingsPanel />;

      default:
        return <ResumePanel />;
    }
  };

  const handleSignOut = () => {
    console.log("Signed out");

    // later:
    // localStorage.removeItem("token");
    // navigate("/");
  };

  return (
    <div className="dashboard-wrapper">
      <MeshBg />

      <div className="dashboard-layout">
        <Sidebar
          active={active}
          setActive={setActive}
          onSignOut={handleSignOut}
        />

        <main className="dashboard-main">
          <div
            key={active}
            className="dashboard-content"
          >
            {renderPanel()}
          </div>
        </main>
      </div>
    </div>
  );
}