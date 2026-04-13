import React from "react";
import { useParams } from "react-router-dom";

function ServiceDetails() {
  const { type } = useParams();

  return (
    <div style={{ padding: "30px" }}>
      
      {type === "web" && (
        <>
          <h1>Modern Responsive Websites</h1>
          <ul>
            <li>Fully responsive across all devices</li>
            <li>Fast loading performance</li>
            <li>SEO-friendly structure</li>
            <li>Modern UI design</li>
            <li>Secure and scalable</li>
          </ul>
        </>
      )}

      {type === "app" && (
        <>
          <h1>Mobile App Development</h1>
          <ul>
            <li>Android & iOS apps</li>
            <li>High performance</li>
            <li>User-friendly UI</li>
          </ul>
        </>
      )}

      {type === "uiux" && (
        <>
          <h1>UI/UX Design</h1>
          <ul>
            <li>Modern UI design</li>
            <li>Better user experience</li>
            <li>Easy navigation</li>
          </ul>
        </>
      )}

      {type === "software" && (
        <>
          <h1>Custom Software Solutions</h1>
          <ul>
            <li>Business automation</li>
            <li>Scalable systems</li>
            <li>High security</li>
          </ul>
        </>
      )}

      {type === "security" && (
        <>
          <h1>Security Solutions</h1>
          <ul>
            <li>Data protection</li>
            <li>Secure systems</li>
            <li>Cloud safety</li>
          </ul>
        </>
      )}

    </div>
  );
}

export default ServiceDetails;