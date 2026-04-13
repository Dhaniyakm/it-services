import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:type" element={<ServiceDetails />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;