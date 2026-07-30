import React from "react";

function MetricCard({ item }) {
  return (
    <div className="metric-card">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
}

export default React.memo(MetricCard);