import React from 'react';
import { Home, Calendar, Lightbulb, Trophy, BookOpen, Users } from 'lucide-react';

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
  },
  {
    id: 'schedule',
    label: 'Praktikum',
    icon: Calendar,
  },
  {
    id: 'workshops',
    label: 'Workshops',
    icon: Lightbulb,
  },
  {
    id: 'competitions',
    label: 'ESC',
    icon: Trophy,
  },
  {
    id: 'asisten',
    label: 'Research',
    icon: Users,
  },
  {
    id: 'aboutus',
    label: 'About Us',
    icon: BookOpen,
  },
];

export default function NavLinks({ activeTab, setActiveTab, isMobile = false }) {
  return (
    <div className={`nav-links ${isMobile ? 'mobile' : ''}`}>
      {NAV_ITEMS.map(item => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <Icon size={16} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
