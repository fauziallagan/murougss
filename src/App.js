import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import WorkshopsPage from './pages/WorkshopsPage';
import CompetitionsPage from './pages/CompetitionsPage';
<<<<<<< HEAD
import AsistenPage from './pages/AsistenPage';
=======
>>>>>>> b40a687eaadc589b817ab358bb8571cb22dd7d7c
import AboutUsPage from './pages/AboutUsPage';

import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch(activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;  // ✅ Pass props
      case 'schedule':
        return <SchedulePage />;
      case 'workshops':
        return <WorkshopsPage />;
      case 'competitions':
        return <CompetitionsPage />;
<<<<<<< HEAD
      case 'asisten':
        return <AsistenPage />;
=======
>>>>>>> b40a687eaadc589b817ab358bb8571cb22dd7d7c
      case 'aboutus':
        return <AboutUsPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;  // ✅ Pass props
    }
  };

  return (
    <div className="app">
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