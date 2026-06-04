import React from "react";
import "./LastProject.css";

function LastProject() {
  return (
    <div className="project-container">
      <div className="project-card">
        <div className="project-header">
          <h2>🚀 Interview Master Platform</h2>
          <span className="project-badge">Latest Project</span>
        </div>

        <div className="project-section">
          <h3>📝 Project Overview</h3>
          <p>
            A comprehensive interview preparation platform built with React that helps candidates
            practice with curated questions across multiple domains. The platform features dynamic
            filtering, search functionality, and detailed explanations for each answer.
          </p>
        </div>

        <div className="project-section">
          <h3>✨ Key Features</h3>
          <div className="features-list">
            <div className="feature-card">
              <span className="feature-icon">🔍</span>
              <h4>Smart Search</h4>
              <p>Real-time search across all questions and answers with instant results</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏷️</span>
              <h4>Category Filtering</h4>
              <p>Filter questions by technology (React, Node, JavaScript, CSS, NextJS)</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔄</span>
              <h4>Comparison Mode</h4>
              <p>View difference between similar concepts with side-by-side comparison</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h4>Test Reports</h4>
              <p>Track progress with detailed test reports and performance metrics</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌓</span>
              <h4>Dark/Light Mode</h4>
              <p>Seamless theme switching with smooth animations and transitions</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h4>Responsive Design</h4>
              <p>Fully responsive layout that works on all devices and screen sizes</p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <h3>🛠️ Technology Stack</h3>
          <div className="tech-stack">
            <div className="tech-item">
              <span>React</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="tech-item">
              <span>JavaScript</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="tech-item">
              <span>CSS3</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div className="tech-item">
              <span>HTML5</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <h3>📈 Project Metrics</h3>
          <div className="metrics-grid">
            <div className="metric-card">
              <h4>500+</h4>
              <p>Interview Questions</p>
            </div>
            <div className="metric-card">
              <h4>5</h4>
              <p>Technology Categories</p>
            </div>
            <div className="metric-card">
              <h4>99%</h4>
              <p>Code Quality</p>
            </div>
            <div className="metric-card">
              <h4>0ms</h4>
              <p>Search Latency</p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <h3>🎯 Highlights</h3>
          <ul className="highlights-list">
            <li>Implemented advanced filtering and search algorithms</li>
            <li>Created smooth animations and transitions across the entire platform</li>
            <li>Optimized component performance using React.memo and useMemo</li>
            <li>Designed responsive layouts using CSS Grid and Flexbox</li>
            <li>Integrated dark/light theme switching with CSS variables</li>
            <li>Added comprehensive test coverage with Jest and React Testing Library</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LastProject);
