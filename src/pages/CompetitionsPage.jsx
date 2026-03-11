import React from 'react';
import { Calendar, Users, Target, Code, Cpu, Zap } from 'lucide-react';
import './CompetitionsPage.css';

export default function CompetitionsPage() {
  const competitions = [
    {
      id: 1,
      title: 'Robotics Challenge 2025',
      badge: 'Active',
      description: 'Design and program robots to complete autonomous tasks. Show your robotics prowess in this exciting competition.',
      date: 'February 20-22, 2025',
      participants: '45+',
      prize: '₹1,00,000',
      level: 'All Levels',
      icon: Code,
    },
    {
      id: 2,
      title: 'IoT Innovation Hackathon',
      badge: 'Registration Open',
      description: 'Build innovative IoT solutions in 24 hours. Teams will present their creations to industry experts.',
      date: 'April 12-13, 2025',
      participants: '60+',
      prize: '₹75,000',
      level: 'Intermediate',
      icon: Zap,
    },
    {
      id: 3,
      title: 'AI/ML Competition',
      badge: 'Upcoming',
      description: 'Tackle real-world datasets and build machine learning models to solve prediction challenges.',
      date: 'May 10-12, 2025',
      participants: '50+',
      prize: '₹80,000',
      level: 'Advanced',
      icon: Code,
    },
    {
      id: 4,
      title: 'Electronics Design Contest',
      badge: 'Active',
      description: 'Design and build functional electronic circuits. Judging based on creativity, functionality, and innovation.',
      date: 'March 15-17, 2025',
      participants: '30+',
      prize: '₹50,000',
      level: 'Beginner',
      icon: Zap,
    },
    {
      id: 5,
      title: 'Embedded Systems Challenge',
      badge: 'Upcoming',
      description: 'Test your embedded systems knowledge with hands-on challenges on microcontrollers and real-time systems.',
      date: 'May 25-27, 2025',
      participants: '35+',
      prize: '₹40,000',
      level: 'Intermediate',
      icon: Cpu,
    },
    {
      id: 6,
      title: 'Coding Sprint 2025',
      badge: 'Upcoming',
      description: 'Fast-paced programming competition testing your algorithmic skills and problem-solving abilities.',
      date: 'April 5-6, 2025',
      participants: '120+',
      prize: '₹60,000',
      level: 'All Levels',
      icon: Code,
    },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Embedded System Competitions</h1>
          <p>Showcase your skills and compete with innovators from around the lab</p>
        </div>
      </section>

      <section className="competitions-section">
        <div className="container">
          <div className="competitions-grid">
            {competitions.map(comp => {
              const Icon = comp.icon;
              return (
                <div key={comp.id} className="competition-card">
                  <div className="comp-badge">{comp.badge}</div>
                  
                  <div className="comp-icon">
                    <Icon size={32} />
                  </div>

                  <h3 className="comp-title">{comp.title}</h3>
                  <p className="comp-description">{comp.description}</p>

                  <div className="comp-details">
                    <div className="comp-detail">
                      <Calendar size={16} />
                      <span><strong>Date:</strong> {comp.date}</span>
                    </div>
                    <div className="comp-detail">
                      <Users size={16} />
                      <span><strong>Participants:</strong> {comp.participants}</span>
                    </div>
                    <div className="comp-detail">
                      <Target size={16} />
                      <span><strong>Level:</strong> {comp.level}</span>
                    </div>
                  </div>

                  <div className="comp-prize">
                    🏆 Total Prize Pool: {comp.prize}
                  </div>

                  <button className="btn-enroll">Register Now</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
