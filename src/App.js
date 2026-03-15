import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from "./components/ParticlesBackground";

// Import pages
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import WorkshopsPage from './pages/WorkshopsPage';
import CompetitionsPage from './pages/CompetitionsPage';
import AboutUsPage from './pages/AboutUsPage';

import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch(activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'schedule':
        return <SchedulePage />;
      case 'workshops':
        return <WorkshopsPage />;
      case 'competitions':
        return <CompetitionsPage />;
      case 'aboutus':
        return <AboutUsPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app">

      {/* <ParticlesBackground /> */}

      {activeTab === "home" && <ParticlesBackground />}

      <div className="bg-effects">
        <div className="bg-effect-1"></div>
        <div className="bg-effect-2"></div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="page-content">
        {renderPage()}
      </main>

      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}