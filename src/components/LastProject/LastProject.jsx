import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import "./LastProject.css";

function LastProject() {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default React.memo(LastProject);