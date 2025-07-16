import React from "react";
import { FaChartBar, FaFolder, FaAward, FaBook, FaTimes } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const StatsCard = ({ onClose }) => {
  return (
    <div className="stats-card">
      <div className="card-header">
        <h3><FaChartBar /> Quick Stats</h3>
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
      </div>

      <div className="stat-row">
        <FaFolder className="stat-icon folder" />
        <span>Projects</span>
        <strong className="stat-value">5+</strong>
      </div>

      <div className="stat-row">
        <MdWork className="stat-icon experience" />
        <span>Experience</span>
        <strong className="stat-value">0 Years</strong>
      </div>

      <div className="stat-row">
        <FaAward className="stat-icon certs" />
        <span>Certifications</span>
        <strong className="stat-value">3</strong>
      </div>

      <div className="stat-row">
        <FaBook className="stat-icon blog" />
        <span>Blog Posts</span>
        <strong className="stat-value">0</strong>
      </div>
    </div>
  );
};

export default StatsCard;
