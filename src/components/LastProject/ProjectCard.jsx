import React from "react";
import FeatureCard from "./FeatureCard";
import TechItem from "./TechItem";
import MetricCard from "./MetricCard";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <div className="project-header">
        <h2>
          {project.icon} {project.title}
        </h2>

        <span className="project-badge">
          {project.badge}
        </span>
      </div>

      {/* Overview */}

      <div className="project-section">
        <h3>📝 Project Overview</h3>

        {project.overview.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      {/* Business Flow */}

      <div className="project-section">
        <h3>🔄 Business Flow</h3>

        <div className="features-list">

          {project.businessFlow.map((item, index) => (
            <FeatureCard
              key={index}
              item={item}
            />
          ))}

        </div>

      </div>

      {/* Responsibilities */}

      <div className="project-section">
        <h3>💼 Responsibilities</h3>

        <ul className="highlights-list">

          {project.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

        </ul>

      </div>

      {/* Technology */}

      <div className="project-section">
        <h3>🛠 Technology</h3>

        <div className="tech-stack">

          {project.technology.map((item, index) => (
            <TechItem
              key={index}
              tech={item}
            />
          ))}

        </div>

      </div>

      {/* Modules */}

      <div className="project-section">
        <h3>📦 Modules</h3>

        <div className="metrics-grid">

          {project.modules.map((item, index) => (
            <MetricCard
              key={index}
              item={item}
            />
          ))}

        </div>

      </div>

      {/* Challenges */}

      <div className="project-section">
        <h3>🚀 Challenges</h3>

        <ul className="highlights-list">

          {project.challenges.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

        </ul>

      </div>

      {/* Highlights */}

      <div className="project-section">
        <h3>🌟 Highlights</h3>

        <ul className="highlights-list">

          {project.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

        </ul>

      </div>

    </div>
  );
}

export default React.memo(ProjectCard);