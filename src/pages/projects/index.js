import React from "react";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaFlask,
  FaRocket,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";
import expanseImg from "../../assets/img/expanse.png";
import realTrustImg from "../../assets/img/real-trust.png"; // replace with correct filename if needed

import "./index.css"; // make sure this file exists

const workProcess = [
  {
    icon: <FaSearch />,
    title: "Research & Planning",
    description: "Understanding requirements, user needs, and project scope",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes",
  },
  {
    icon: <FaCode />,
    title: "Development",
    description: "Writing clean, efficient, and maintainable code",
  },
  {
    icon: <FaFlask />,
    title: "Testing & QA",
    description: "Comprehensive testing to ensure quality and performance",
  },
  {
    icon: <FaRocket />,
    title: "Deployment & Launch",
    description: "Deploying to production and monitoring performance",
  },
];

const projects = [
  {
    title: "Real Trust Real Estate",
    description:
      "Fullstack real estate platform with a landing page and admin dashboard to manage projects, clients, contact form data, and newsletter subscriptions.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    code: "https://github.com/Jeevika-Patanker/Real-Trust",
    demo: "https://www.youtube.com/watch?v=30FYGfqka7o&t=3s",
    image: realTrustImg,

  },
  {
    title: "Personal Finance Tracker",
    description:
      "A comprehensive MERN stack finance management tool with budgeting, goals, transactions, reports, and reminders.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Recharts"],
    code: "https://github.com/Jeevika-Patanker/personal-finance-tracker",
    demo: "https://www.youtube.com/watch?v=oYKWWBWoa3s&t=7s",
    image: expanseImg,

  },
  // {
  //   title: "Weather Dashboard",
  //   description: "A responsive weather application with location-based forecasts and interactive maps.",
  //   tech: ["React", "OpenWeather API", "Leaflet"],
  //   code: "#",
  //   demo: "#",
  // },
  // {
  //   title: "Social Media Dashboard",
  //   description: "Analytics dashboard for social media management with data visualization.",
  //   tech: ["Angular", "D3.js", "Node.js"],
  //   code: "#",
  //   demo: "#",
  // },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Projects & Working Process</h2>
        <p>
          Explore my recent projects and discover the systematic approach I take to deliver exceptional results.
        </p>
      </div>

      <div className="work-process">
        <h3>My Working Process</h3>
        <div className="process-grid">
          {workProcess.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>



      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image"><img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.code} className="btn">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} className="btn">
                  <FaExternalLinkAlt /> Video Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
