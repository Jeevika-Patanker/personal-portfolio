import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaUserCircle, FaTools } from "react-icons/fa"; // React Icons
import LeftBar from "../components/leftbar/lbar";
import RightBar from "../components/bars/bar";
import Home from "../pages/home";
import About from "../pages/about/skill";
import Projects from "../pages/projects";
// import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import "../app/App.css";

function App() {
  const [showLeftbar, setShowLeftbar] = useState(true);
  const [showRightbar, setShowRightbar] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width <= 900;
      setIsMobileView(mobile);
      if (!mobile) {
        setShowLeftbar(true);
        setShowRightbar(true);
      }
    };
    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {isMobileView && (
        <>
          <button className="toggle-btn left" onClick={() => setShowLeftbar(!showLeftbar)}>
            <FaTools />
          </button>
          <button className="toggle-btn right" onClick={() => setShowRightbar(!showRightbar)}>
            <FaUserCircle />
          </button>
        </>
      )}
      <div className="app-container">
        {(!isMobileView || showLeftbar) && <LeftBar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/blogs" element={<Blogs />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {(!isMobileView || showRightbar) && <RightBar />}
      </div>
    </Router>
  );
}

export default App;
