import React from "react";
import { FaFeatherAlt } from "react-icons/fa";
import "./index.css";

const WritePostForm = () => {
  return (
    <div className="write-post-form">
      <div className="form-header">
        <FaFeatherAlt className="form-icon" />
        <h2>Write Your Thoughts</h2>
      </div>

      <div className="form-row">
        <input type="text" placeholder="Your name" className="form-input" />
        <input type="text" placeholder="Tags (comma separated)" className="form-input" />
      </div>

      <input type="text" placeholder="Post title" className="form-input full-width" />

      <textarea
        placeholder="Share your thoughts..."
        className="form-textarea"
      ></textarea>

      <div className="form-actions">
        <button className="btn publish-btn">Publish Post</button>
        <button className="btn cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default WritePostForm;
