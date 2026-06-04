import React from "react";
import "./Navigation.css";

function Navigation({ activeSection, onSectionChange }) {
  return (
    <div className="navigation-container">
      <button
        className={`nav-button intro-btn ${activeSection === "intro" ? "active" : ""}`}
        onClick={() => onSectionChange("intro")}
      >
        👤 My Introduction
      </button>
      <button
        className={`nav-button project-btn ${activeSection === "project" ? "active" : ""}`}
        onClick={() => onSectionChange("project")}
      >
        🚀 Last Project
      </button>
      <button
        className={`nav-button ques-btn ${activeSection === "questions" ? "active" : ""}`}
        onClick={() => onSectionChange("questions")}
      >
        ❓ All Ques & Ans
      </button>
    </div>
  );
}

export default React.memo(Navigation);
