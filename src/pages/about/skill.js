import React from 'react';
import './index.css';
import profileImage from '../../assets/img/jeevika.jpg';

import Education from './education';
import Certifications from './certifications';
import Academic from './academic';


const AboutMe = () => {
  return (
    <div className="about-container">
      {/* ===== ABOUT ME ===== */}
      <h1 className="about-heading">About Me</h1>
      <p className="about-description">
        Aspiring Computer Science and Engineering graduate with a focus on AI and ML, passionate
        about solving problems through innovative projects and eager to apply knowledge in real-world applications.
      </p>

      <div className="about-card">
        <div className="profile-section">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" className="profile-img" />

          </div>
          <h2 className="profile-name">Jeevika Patanker</h2>
          <p className="profile-role">An Engineer</p>
          <p className="profile-location">📍 Indore, MP &nbsp;&nbsp; 🎓 2021–2025</p>
        </div>

        <div className="info-section">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-tree">
            <ul>
              <li>
                <span className="main-skill">Full Stack Development</span>
                <ul>
                  <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
                  <li><strong>Backend:</strong> Java</li>
                  <li><strong>Database:</strong> SQL, MySQL</li>
                  <li><strong>MERN Stack:</strong> React.js, Node,js, MongoDB, Express.js</li>

                </ul>
              </li>
              <li>
                <span className="main-skill">AI & ML</span>
                <ul>
                  <li><strong>ML Libraries:</strong> NumPy, Pandas, OpenCV, Keras</li>
                  <li><strong>ML Algorithms:</strong> Supervised, Unsupervised, Reinforcement</li>
                </ul>
              </li>
              <li>
                <span className="main-skill">Python</span>
              </li>
              <li>
                <span className="main-skill"> DBMS</span>
              </li>
            </ul>
          </div>

          <hr className="divider" />

          <h3 className="section-title">Soft Skills</h3>
          <div className="soft-skills">
            {['Adaptability', 'Project Management', 'Problem Solving', 'Team Collaboration'].map((skill, idx) => (
              <span key={idx} className="soft-skill">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== EDUCATION ===== */}
      <div className="section-spacing">
        <Education />
      </div>

      {/* ===== EXPERIENCE + CERTIFICATIONS ===== */}
      <div className="section-spacing">
        <Certifications />
      </div>

      {/* ===== ACADEMIC PROJECTS ===== */}
      <div className="section-spacing">
        <Academic />
      </div>
    </div>
  );
};

export default AboutMe;
