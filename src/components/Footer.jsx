import React from "react";
import "./Footer.css";

export default function Footer({ setActiveTab }) {
  const handleNav = (tab) => {
    setActiveTab(tab);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-box">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <span>Pusat Studi Multimedia dan Robotika - UG</span>
            </div>

            <p>
              Your gateway to laboratory schedules, workshops, competitions, and
              everything you need to stay connected with the lab community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>

            <ul className="footer-links">
              <li>
                <button
                  className="footer-link-btn"
                  onClick={() => handleNav("home")}
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  className="footer-link-btn"
                  onClick={() => handleNav("schedule")}
                >
                  Schedule
                </button>
              </li>

              <li>
                <button
                  className="footer-link-btn"
                  onClick={() => handleNav("workshops")}
                >
                  Workshops
                </button>
              </li>

              <li>
                <button
                  className="footer-link-btn"
                  onClick={() => handleNav("competitions")}
                >
                  Competitions
                </button>
              </li>

              <li>
                <button
                  className="footer-link-btn"
                  onClick={() => handleNav("aboutus")}
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>

            <p>
              Have questions? Reach out to the lab administration for any
              inquiries about schedules, workshops, or competitions.
            </p>

            <p>
              <strong>Email:</strong> labconnect@university.edu
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2026 Pusat Studi Multimedia dan Robotika - UG. All rights
            reserved.
          </p>

          <div className="footer-links-bottom">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
