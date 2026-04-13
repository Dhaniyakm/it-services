import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1><b><u>Contact Us</u></b></h1>

      <p><h4>Email:infynixtech@gmail.com</h4></p>
      <p><h4>contact no:9876543210</h4></p>

      <div style={{ fontSize: "30px", marginTop: "20px" }}>
        
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
          <FaWhatsapp style={{ margin: "10px", color: "green" }} />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram style={{ margin: "10px", color: "pink" }} />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook style={{ margin: "10px", color: "blue" }} />
        </a>
       <p className="scroll-text">Contact us for more details!</p>

      </div>
    </div>
  );
}

export default Contact;

