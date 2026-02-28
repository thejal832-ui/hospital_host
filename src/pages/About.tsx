// const About = () => {
//   return <h1>About Page</h1>;
// };

// export default About;

import React from "react";

const About: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h2>City Care Hospital</h2>
      </header>

      {/* ===== ABOUT SECTION ===== */}
      <section style={styles.aboutSection}>
        <h1>About Us</h1>
        <p style={styles.subtitle}>
          Trusted Healthcare with Compassion & Excellence
        </p>

        <p style={styles.text}>
          City Care Hospital is a multi-specialty healthcare center dedicated to
          providing high-quality medical services with compassion and care.
          Our hospital is equipped with modern technology and experienced
          medical professionals to ensure the best treatment for our patients.
        </p>

        <p style={styles.text}>
          We believe that every patient deserves personalized care, timely
          treatment, and a comfortable healing environment. Our mission is to
          improve lives through exceptional healthcare services.
        </p>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section style={styles.vmSection}>
        <div style={styles.card}>
          <h3>Our Mission</h3>
          <p>
            To deliver safe, ethical, and patient-centered healthcare using
            advanced medical practices.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Our Vision</h3>
          <p>
            To be a trusted healthcare provider known for excellence,
            innovation, and compassion.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={styles.footer}>
        <p>© 2026 RadianceMed Hospital | All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default About;

/* ===== STYLES ===== */
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#00695c",
    color: "white",
    padding: "20px",
    textAlign: "center"
  },
  aboutSection: {
    padding: "40px",
    backgroundColor: "#ffffff",
    textAlign: "center"
  },
  subtitle: {
    color: "#555",
    marginBottom: "20px",
    fontSize: "18px"
  },
  text: {
    maxWidth: "800px",
    margin: "0 auto 15px",
    color: "#333",
    lineHeight: "1.6"
  },
  vmSection: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "30px",
    flexWrap: "wrap",
    backgroundColor: "#e0f2f1"
  },
  card: {
    width: "300px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },
  footer: {
    backgroundColor: "#00695c",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px"
  }
};