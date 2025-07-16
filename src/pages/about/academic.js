import React from 'react';
import './index.css';

const projects = [
  {
    title: "SurveilAI",
    date: "Aug. 2024 - Nov. 2024",
    description: "Real-time crime detection system leveraging machine learning for analyzing video feeds.",
    tags: ["Machine Learning", "Computer Vision", "Python"],
    achievements: [
      "Designed and implemented a real-time crime detection system",
      "Developed alert notifications and incident logging features",
      "Enhanced monitoring and reporting capabilities"
    ]
  },
  {
    title: "CineSense",
    date: "Aug. 2023 - Nov. 2023",
    description: "Sentiment analysis platform for movie reviews using Flask framework.",
    tags: ["Flask", "NLP", "Python", "Web Development"],
    achievements: [
      "Built a sentiment analysis platform for movie reviews",
      "Implemented features for analyzing user reviews",
      "Created an OTT platform clone interface"
    ]
  },
  {
    title: "Lang. Detection",
    date: "Feb. 2023 - Mar. 2023",
    description: "System to accurately identify and recognize multiple languages from text input.",
    tags: ["NLP", "Python", "Machine Learning"],
    achievements: [
      "Built a language detection system for text input",
      "Implemented NLP techniques for accurate detection",
      "Designed with scalability for additional languages"
    ]
  }
];

const AcademicProjects = () => {
  return (
    <div className="academic-projects-container">
      <h2 className="section-heading">
        <span className="angle-brackets">&lt;/&gt;</span> Academic Projects
      </h2>
      <div className="project-cards-wrapper">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>
              ))}
            </div>
            <div className="project-achievements">
              <strong>Key Achievements:</strong>
              <ul>
                {project.achievements.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicProjects;
