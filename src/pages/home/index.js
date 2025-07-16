import React from 'react';
import './style.css';
import profileImage from '../../assets/img/jeevika.jpg';
import resume from '../../assets/pdf/Jivika_Patanker_Resume.pdf';
import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <div className="profile-pic">
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>
        <h1 className="name">Jeevika Patanker</h1>
        <h2 className="role">Full-Stack Developer & AI Engineer</h2>
        <p className="bio">
          Passionate about creating beautiful, functional, and user-centered digital experiences.
          I bring ideas to life through code and design.
        </p>

        <div className="buttons">
          <button className="btn-primary" onClick={() => navigate('/projects')}>
            View My Work
          </button>
          <a href={resume} download className="btn-secondary">
            <FaDownload style={{ marginRight: 8 }} /> Download Resume
          </a>
        </div>

        <p className="scroll animate-scroll">Explore more pages 🚀 </p>
      </div>
    </div>
  );
};

export default Home;
