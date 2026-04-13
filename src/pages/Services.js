import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

function Services() {
  const navigate = useNavigate();

  return (
    <div className="services">
      <h1>Our Services</h1>

      <div className="services-container">

        <div className="service-card" onClick={() => navigate("/service/web")}>
          Web Development
        </div>

        <div className="service-card" onClick={() => navigate("/service/app")}>
          App Development
        </div>

        <div className="service-card" onClick={() => navigate("/service/uiux")}>
          UI/UX Design
        </div>

      </div>
    </div>
  );
}

export default Services;