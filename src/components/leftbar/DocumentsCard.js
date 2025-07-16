import React from "react";
import { FaDownload, FaFilePdf, FaCertificate, FaFilePowerpoint, FaTimes, FaEye } from "react-icons/fa";
import resume from '../../assets/pdf/Jivika_Patanker_Resume.pdf';
import certificates from '../../assets/pdf/Certificates.pdf';


const DocumentsCard = ({ onClose }) => {
  return (
    <div className="documents-card">
      <div className="card-header">
        <h3><FaDownload /> Documents</h3>
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
      </div>

      {/* Resume */}
      <div className="doc-item">
        <FaFilePdf className="resume-icon" />
        <div className="doc-details">
          <strong>Resume</strong>
          <div className="filename">resume.pdf</div>
          <div className="doc-actions">
            <a href={resume} download className="doc-btn"><FaDownload /> Download</a>
            <a href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer" className="doc-btn"><FaEye /> See</a>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="doc-item">
        <FaCertificate className="cert-icon" />
        <div className="doc-details">
          <strong>Certificates</strong>
          <div className="filename">certificates.pdf</div>
          <div className="doc-actions">
            <a href={certificates} download className="doc-btn"><FaDownload /> Download</a>
            <a href="/docs/certificates.pdf" target="_blank" rel="noopener noreferrer" className="doc-btn"><FaEye /> See</a>
          </div>
        </div>
      </div>

      {/* Portfolio PPT */}
      <div className="doc-item">
        <FaFilePowerpoint className="ppt-icon" />
        <div className="doc-details">
          <strong>Portfolio PPT</strong>
          <div className="filename">portfolio.pptx</div>
          <div className="doc-actions">
            <a href="/docs/portfolio.pptx" download className="doc-btn"><FaDownload /> Download</a>
            <a href="/docs/portfolio.pptx" target="_blank" rel="noopener noreferrer" className="doc-btn"><FaEye /> See</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsCard;
