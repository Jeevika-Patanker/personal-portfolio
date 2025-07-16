// LeftBar.jsx
import React, { useState } from "react";
import "./lbar.css";
import { FaUser, FaDownload, FaChartBar } from "react-icons/fa";
import ConnectCard from "./ConnectCard";
import DocumentsCard from "./DocumentsCard";
import StatsCard from "./StatsCard";

function LeftBar() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(prev => (prev === card ? null : card));
  };

  return (
    <div className="leftbar-wrapper">
      <div className="leftbar">
        <button onClick={() => toggleCard("connect")}>
          <FaUser className="sidebar-icon" />
        </button>
        <button onClick={() => toggleCard("documents")}>
          <FaDownload className="sidebar-icon" />
        </button>
        <button onClick={() => toggleCard("stats")}>
          <FaChartBar className="sidebar-icon" />
        </button>
      </div>

      <div className="card-container">
        {activeCard === "connect" && <ConnectCard onClose={() => setActiveCard(null)} />}
        {activeCard === "documents" && <DocumentsCard onClose={() => setActiveCard(null)} />}
        {activeCard === "stats" && <StatsCard onClose={() => setActiveCard(null)} />}
      </div>
    </div>
  );
}

export default LeftBar;
