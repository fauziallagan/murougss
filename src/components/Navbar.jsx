import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import './Navbar.css';

export default function Navbar({ activeTab, setActiveTab}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo Section */}
        <NavLogo />

        {/* Desktop Navigation Links */}
        <div className="nav-links-wrapper">
          <NavLinks activeTab={activeTab} setActiveTab={handleNavClick} />
        </div>

        {/* Action Buttons - Desktop
        <div className="nav-actions-desktop">
          <button className="btn btn-primary">Sign In</button>
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{ display: isMobileMenuOpen ? 'flex' : 'none', flexDirection: 'column' }} className="mobile-menu">
          <NavLinks 
            activeTab={activeTab} 
            setActiveTab={handleNavClick}
            isMobile={true}
          />
          {/* <div className="mobile-actions">
            <button className="btn btn-primary">Sign In</button>
          </div> */}
        </div>
    </nav>
  );
}
