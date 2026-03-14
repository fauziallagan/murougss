import React from 'react';
import './Footer.css';

export default function Footer({setActiveTab}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-box">
                  <img 
                    src="/logo.jpg"  
                    alt="Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain'}}
                  />
              </div>
              <span>Pusat Studi Multimedia dan Robotika - UG </span>
            </div>
            <p>Your gateway to laboratory schedules, workshops, competitions, and everything you need to stay connected with the lab community.</p>
          </div>

          
          {/* Quick Links - WITH NAVIGATION */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a 
                  onClick={() => setActiveTab('home')}
                  style={{ cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  onClick={() => setActiveTab('schedule')}
                  style={{ cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                >
                  Schedule
                </a>
              </li>
              <li>
                <a 
                  onClick={() => setActiveTab('workshops')}
                  style={{ cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                >
                  Workshops
                </a>
              </li>
              <li>
                <a 
                  onClick={() => setActiveTab('competitions')}
                  style={{ cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                >
                  Competitions
                </a>
              </li>
              <li>
                <a 
                  onClick={() => setActiveTab('aboutus')}
                  style={{ cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Have questions? Reach out to the lab administration for any inquiries about schedules, workshops, or competitions.</p>
            <p><strong>Email:</strong> labconnect@university.edu</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Pusat Studi Multimedia dan Robotika - UG. All rights reserved.</p>
          <div className="footer-links-bottom">
          </div>
        </div>
      </div>
    </footer>
  );
}
