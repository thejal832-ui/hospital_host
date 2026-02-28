import React, { useState } from 'react';
import './Home.css'; // Importing our new CSS file

interface Department {
  id: string;
  name: string;
  currentToken: number;
  waitingCount: number;
}

const Home: React.FC = () => {
  const [departments] = useState<Department[]>([
    { id: '1', name: 'General Medicine', currentToken: 105, waitingCount: 12 },
    { id: '2', name: 'Pediatrics', currentToken: 42, waitingCount: 5 },
    { id: '3', name: 'Cardiology', currentToken: 18, waitingCount: 8 },
    { id: '4', name: 'Orthopedics', currentToken: 76, waitingCount: 15 },
  ]);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>  RadianceMed Hospital</h1>
        <p>Queue Management System — Live Updates</p>
      </header>

      <main className="dashboard-section">
        <h2 className="section-title">Current Queue Status</h2>
        
        <div className="token-grid">
          {departments.map((dept) => (
            <div key={dept.id} className="dept-card">
              <h3>{dept.name}</h3>
              
              <div className="token-display">
                <span className="token-label">Now Serving</span>
                <span className="token-number">{dept.currentToken}</span>
              </div>
              
              <p className="waiting-count">
                <strong>{dept.waitingCount}</strong> patients waiting
              </p>
              
              <button 
                className="btn-get-token"
                onClick={() => alert(`Generating token for ${dept.name}...`)}
              >
                Get Token
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="home-footer">
        <button className="footer-link">Staff Dashboard</button>
        <button className="footer-link">Help & Support</button>
      </footer>
    </div>
  );
};

export default Home;