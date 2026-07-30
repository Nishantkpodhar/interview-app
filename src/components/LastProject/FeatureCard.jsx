import React from "react";

function FeatureCard({ item }) {
  return (
    <div className="feature-card">
      <span className="feature-icon">
        {item.icon}
      </span>

      <h4>{item.title}</h4>

      <p>{item.description}</p>
    </div>
  );
}

export default React.memo(FeatureCard);