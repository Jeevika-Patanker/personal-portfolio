import React from "react";
import "./bar.css";
import { useNavigate } from "react-router-dom";
import { FaUser,
   FaHome,
    FaGift, 
    // FaBookOpen, 
    FaRegCommentDots } from 'react-icons/fa';


function RightBar() {
  const navigate = useNavigate();

  return (
    <div className="rightbar">
      <button onClick={() => navigate("/")}><FaHome className="sidebar-icon" />
      </button>
      <button onClick={() => navigate("/about")}><FaUser className="sidebar-icon" />
      </button>
      <button onClick={() => navigate("/projects")}><FaGift className="sidebar-icon" />
      </button>
      {/* <button onClick={() => navigate("/blogs")}><FaBookOpen className="sidebar-icon" />
      </button> */}
      <button onClick={() => navigate("/contact")}><FaRegCommentDots className="sidebar-icon" /></button>
    </div>
  );
}

export default RightBar;
