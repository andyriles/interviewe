import React from "react";
import "./card.css";

function cards({ name, description, link }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{description}</p>
      <p className="card-link" onClick={() => window.open(`${link}`, "_blank")}>
        Use Template
      </p>
    </div>
  );
}

export default cards;
