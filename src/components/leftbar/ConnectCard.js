import React from "react";
import {
  FaUser,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaTimes
} from "react-icons/fa";

const ConnectCard = ({ onClose }) => {
  return (
    <div className="connect-card">
      <div className="card-header">
        <h3><FaUser /> Connect With Me</h3>
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
      </div>

      <p>
        <a href="https://www.linkedin.com/in/jeevikapatanker" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedin" /> LinkedIn
        </a>
      </p>

      <p>
        <a href="https://github.com/Jeevika-Patanker" target="_blank" rel="noopener noreferrer">
          <FaGithub className="github" /> GitHub
        </a>
      </p>

      <p>
        <a href="https://www.instagram.com/jeevikapatanker" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instagram" /> Instagram
        </a>
      </p>

      <p>
        <a href="https://www.youtube.com/@jivika7357" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="youtube" /> YouTube
        </a>
      </p>

      <p><FaPhoneAlt className="phone" /> +91 8305841551</p>
      <p><FaEnvelope className="email" /> jeevikapatanker@gmail.com</p>
    </div>
  );
};

export default ConnectCard;
