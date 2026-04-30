import React from 'react';

export default function NavLogo() {
  return (
    <div className="nav-logo">
      <div className="nav-logo-box">
        <img 
          src="/logo.jpg"  
          alt="Logo"
          style={{ width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </div>
      <span className="nav-logo-text">UG-MURO</span>
    </div>
  );
}
