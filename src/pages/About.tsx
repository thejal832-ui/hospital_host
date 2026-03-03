// 




import React from "react";
import "./About.css";
import aboutImage from "../assets/justify.jpg"; // put your image in assets

const About: React.FC = () => {
  return (
    <div className="about-container">

      {/* HEADER */}
      <header className="about-header">
        <h2>RadianceMed Hospital</h2>
      </header>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h1>About Us</h1>
            <p className="subtitle">
              Trusted Healthcare with Compassion & Excellence
            </p>

            <p>
              RadianceMed Hospital is a multi-specialty healthcare center
              dedicated to providing high-quality medical services with
              compassion and care.
            </p>

            <p>
              We believe that every patient deserves personalized care,
              timely treatment, and a comfortable healing environment.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutImage} alt="Hospital" />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vm-section">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To deliver safe, ethical, and patient-centered healthcare using
            advanced medical practices.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be a trusted healthcare provider known for excellence,
            innovation, and compassion.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <p>© 2026 RadianceMed Hospital | All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default About;