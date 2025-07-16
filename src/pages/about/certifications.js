import React from 'react';
import './index.css';
import certificate from '../../assets/pdf/TCS_CodeVita.pdf';

import {
  FaBriefcase,
  FaCertificate,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaAward,
} from 'react-icons/fa';

const ExperienceAndCertifications = () => {
  return (
    <div className="experience-certifications-container">
      {/* Professional Experience */}
      <div className="section-card">
        <h2 className="section-title">
          <FaBriefcase className="section-icon" />
          Professional Experience
        </h2>

        {/* Java Training */}
        <div className="experience-item">
          <h3 className="experience-title">Java Training Program</h3>
          <p className="company-name">Ypsilon IT solutions</p>
          <div className="experience-meta">
            <span><FaRegCalendarAlt /> May 20, 2023 - July 5, 2023</span>
            <span><FaMapMarkerAlt /> Indore, Madhya Pradesh</span>
          </div>
          <span className="badge">Training</span>
          <p className="experience-summary">
            Comprehensive training in Java Core and Advanced Java, including JDBC and Servlets.
          </p>
          <ul className="experience-list">
            <li>Developed an MCQ portal as a full-stack application</li>
            <li>Implemented database connectivity using JDBC</li>
            <li>Created dynamic content handling through Servlets</li>
            <li>Built user authentication, quiz creation, and result management features</li>
          </ul>
        </div>

        {/* TCS CodeVita Achievement */}
        {/* Honors & Awards Subsection */}
        <h3 className="subsection-title">🎖 Honors & Awards</h3>

        <div className="experience-item">
          <h3 className="experience-title">
            <FaAward className="experience-icon" /> TCS CodeVita S12 – Round 2 Qualifier
          </h3>
          <p className="company-name">Tata Consultancy Services</p>
          <div className="experience-meta">
            <span><FaRegCalendarAlt /> Dec 2024</span>
          </div>
          <span className="badge">Honor</span>
          <p className="experience-summary">
            Advanced to Round 2 of TCS CodeVita Season 12 with a global rank of 473 in Round 1.
            CodeVita is a prestigious global coding competition evaluating programming and problem-solving skills.
          </p>
          <a
            className="download-link"
            href={certificate}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

      </div>

      {/* Certifications */}
      <div className="section-card">
        <h2 className="section-title">
          <FaCertificate className="section-icon" />
          Certifications
        </h2>

        <div className="certification-card">
          <div className="certification-header">
            <h3 className="certification-title">Artificial Intelligence Builder</h3>
            <span className="badge">2024</span>
          </div>
          <p className="issuer">FITT, IIT Delhi</p>
          <div className="experience-meta">
            <span><FaRegCalendarAlt /> January 2024 – February 2024</span>
          </div>
          <p className="experience-summary">
            Program focusing on Machine Learning and Artificial Intelligence with practical applications.
          </p>
        </div>

        <div className="certification-card">
          <div className="certification-header">
            <h3 className="certification-title">Frontend Developer React</h3>
            <span className="badge">Dec 2024</span>
          </div>
          <p className="issuer">HackerRank</p>
          <div className="experience-meta">
            <span><FaRegCalendarAlt /> Issued Dec 2024</span>
          </div>
          <p className="experience-summary">Credential ID: 357D277O2B84</p>
          <p className="experience-summary">Skills: React.js · CSS · JavaScript</p>
        </div>

        <div className="certification-card">
          <div className="certification-header">
            <h3 className="certification-title">R Programming for Beginners</h3>
            <span className="badge">Feb 2024</span>
          </div>
          <p className="issuer">Simplilearn</p>
          <div className="experience-meta">
            <span><FaRegCalendarAlt /> Issued Feb 2024</span>
          </div>
          <p className="experience-summary">Credential ID: 4843568</p>
          <p className="experience-summary"> Introductory course on R programming including data visualization, lists, and matrices.</p>
        </div>
        {/* 
        <div className="certification-card">
          <div className="certification-header">
            <h3 className="certification-title">Fundamentals of R</h3>
            <span className="badge">2024</span>
          </div>
          <p className="issuer">N/A</p>
          <div className="experience-meta">
            <span><FaRegCalendarAlt /> 2024</span>
          </div>
          <p className="experience-summary">
           
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ExperienceAndCertifications;
