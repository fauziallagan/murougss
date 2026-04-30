import React from 'react';
import './Footer.css';
<<<<<<< HEAD
import { Mail, Instagram, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Universitas Gunadarma', url: 'https://www.gunadarma.ac.id/' },
  { label: 'FIKTI', url: 'https://fikti.gunadarma.ac.id/' },
  { label: 'Sistem Komputer', url: 'https://fikti.gunadarma.ac.id/siskom/' },
];

const locations = [
  {
    city: 'Depok : ',
    address: ' Jln. Margonda Raya No. 100, Pondok Cina, Depok, Indonesia',
    details: [
      'Sekretariat Administrasi & Penelitian : Ruang D342',
      ' Praktikum & Pelatihan : Ruang D343'
    ]
  },
  {
    city: 'Karawaci : ',
    address: ' Jl. KH. Noer Ali, Jakasampurna, Bekasi, Indonesia',
    details: [
      'Praktikum & Pelatihan : Ruang J1B23'
    ]
  },
  {
    city: 'Kalimalang : ',
    address: ' Jl. Kelapa Dua Raya No.93, Kelapa Dua, Tangerang, Indonesia',
    details: [
      'Praktikum & Pelatihan : Ruang K141-B'
    ]
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="Logo" className="footer-logo-img" />
              <div>
                <p className="footer-logo-name">Pusat Studi Multimedia</p>
                <p className="footer-logo-name">dan Robotika - UG</p>
              </div>
            </div>

            <p className="footer-tagline">
              Wadah pengembangan teknologi multimedia dan robotika untuk generasi inovatif masa depan.
            </p>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Contact Us</h5>

            <div className="footer-socials">
              <a
                href="mailto:psmuro@gunadarma.ac.id"
                className="footer-social-btn"
              >
                <Mail size={15} />
                <span>psmuro@gunadarma.ac.id</span>
              </a>

              <a
                href="https://www.instagram.com/psmuro_"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
              >
                <Instagram size={15} />
                <span>@psmuro</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Quick Links</h5>

            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-links"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Our Locations</h5>

            <ul className="footer-locations">
              {locations.map((loc, i) => (
                <li key={i} className="footer-location-item">
                  <MapPin size={14} className="footer-location-icon" />

                  <div>
                    <span className="footer-location-city">
                      {loc.city}
                    </span>

                    <span className="footer-location-address">
                      {loc.address}
                    </span>

                    <div className="footer-location-details">
                      {loc.details.map((item, idx) => (
                        <span key={idx}>{item}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Pusat Studi Multimedia dan Robotika - UG. All rights reserved.
          </p>
            <span />
            <span />
            <span />
          </div>
        </div>
    </footer>
  );
}
=======

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
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> b40a687eaadc589b817ab358bb8571cb22dd7d7c
