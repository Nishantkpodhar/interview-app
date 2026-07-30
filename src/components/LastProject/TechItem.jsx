import React from "react";

function TechItem({ tech }) {
  return (
    <div className="tech-item">

      <span>{tech.name}</span>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${tech.percentage}%`,
          }}
        />

      </div>

    </div>
  );
}

export default React.memo(TechItem);