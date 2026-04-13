import React from "react";

function ServiceCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px"
    }}>
      <h3>{props.title}</h3>
      <p>High quality service for your business.</p>
    </div>
  );
}

export default ServiceCard;