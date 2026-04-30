import React from 'react';
import './Footer.css';
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