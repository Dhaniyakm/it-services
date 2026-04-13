import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about">
      <h1>About Us</h1>

      <div className="card-container">
        <div className="card" onClick={() => navigate("/service/web")}>
          Modern Responsive Websites
        </div>

        <div className="card" onClick={() => navigate("/service/app")}>
          High-performance Mobile Apps
        </div>

        <div className="card" onClick={() => navigate("/service/uiux")}>
          UI/UX Design
        </div>

        <div className="card" onClick={() => navigate("/service/software")}>
          Custom Software Solutions
        </div>

        <div className="card" onClick={() => navigate("/service/security")}>
          Security Solutions
        </div>
      </div>
    </div>
  );
}

export default About;