import React from "react";
import "../styles/MetricsCard.css";

const MetricsCard = ({ value, label }) => {
  return (
    <div className="metrics-card">
      <h3 className="metrics-value">{value}</h3>
      <p className="metrics-label">{label}</p>
    </div>
  );
};

export default MetricsCard;
