import React from "react";

function Home() {
  return (
    <div className="home-container">
      <h1 style={{ textAlign: "center" }}>Welcome to Infynix Tech</h1>

      <h3 style={{ textAlign: "center", marginTop: "10px" }}>
        We provide web development, app development and IT solutions.
      </h3>

      <ul style={{ marginTop: "30px", lineHeight: "2", fontSize: "18px" }}>
        <li><i>Empowering businesses with innovative IT solutions</i></li>
        <li><i>Transforming ideas into digital reality</i></li>
        <li><i>Building smart, scalable, and secure applications</i></li>
        <li><i>Your trusted partner in digital transformation</i></li>
        <li><i>Delivering technology that drives success</i></li>
      </ul>
    </div>
  );
}

export default Home;