// const Contact = () => {
//   return <h1>Contact Page</h1>;
// };

// export default Contact;

import React, { useState } from "react";
import bgImage from "../assets/rose.jpg";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* ===== HEu,ADER ===== */}
      <header style={styles.header}>
        <h2>RadianceMed Hospital</h2>
      </header>

      {/* ===== CONTACT SECTION ===== */}
      <section style={styles.contactSection}>
        <h1>Contact Us</h1>
        <p style={styles.subtitle}>
          We are here to help you 24/7
        </p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={styles.footer}>
        <p>© 2026 RadianceMed Hospital | All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default Contact;

/* ===== STYLES ===== */
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#00695c",
    color: "white",
    padding: "20px",
    textAlign: "center"
  },
  contactSection: {
    padding: "40px",
    backgroundColor: "#ffffff",
    textAlign: "center"
  },
  subtitle: {
    color: "#555",
    marginBottom: "25px",
    fontSize: "18px"
  },
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    height: "120px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "12px",
    backgroundColor: "#e53935",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer"
  },
  container: {
  padding: "40px 20px",
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",

  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
},
  footer: {
    backgroundColor: "#00695c",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px"
  }
};