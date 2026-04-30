<<<<<<< HEAD
import React, { useState } from 'react';
import { Calendar, Users, Award } from 'lucide-react';
import './CompetitionsPage.css';

const competitionsData = [
  {
    year: '2022',
    panitia: '/ESC 22-23.jpeg',
    events: [
      { id: 'drone', title: 'Drone', bg: '/WorkshopDrone.jpg', desc: 'Kompetisi drone racing dan misi otomatis.' },
      { id: 'wf', title: 'Workshop Festival', bg: '/WorkshopDrone.jpg', desc: 'Ajang kreativitas teknologi.' },
      { id: 'rcv', title: 'Robot Computer Vision', bg: '/WorkshopDrone.jpg', desc: 'Robot berbasis computer vision.' },
    ],
  },
  {
    year: '2026',
    panitia: '/ESC 24-25.jpeg',
    isLive: true,
    events: [
      { id: 'drone', title: 'Drone', bg: '/WorkshopDrone.jpg', desc: 'Kompetisi drone racing.' },
      { id: 'wf', title: 'Workshop Festival', bg: '/WorkshopDrone.jpg', desc: 'Ajang inovasi teknologi.' },
      { id: 'triathlon', title: 'Triathlon Robot', bg: '/WorkshopDrone.jpg', desc: 'Robot multi challenge.' },
    ],
  },
];

function EventCard({ event, index }) {
  const [hovered] = useState(false);

  return (
    <div  className="event-card">
      <img
        src={event.bg}
        alt={event.title}
        className={`event-img ${hovered ? 'zoom' : ''}`}
      />

      <div className="event-overlay" />

      {hovered && <div className="event-hover-glow" />}

      <div className="event-content">
        <div className="event-top">
          <span className="event-number">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div>
          <h3>{event.title}</h3>
          <p>{event.desc}</p>
          <div className={`event-line ${hovered ? 'active' : ''}`} />
        </div>
      </div>
    </div>
  );
}

function YearSection({ data }) {
  return (
    <div className="year-section">
      <div className="year-header">
        <div className="year-title">
          <span className="year-text">ESC {data.year}</span>

          {data.isLive ? (
            <span className="badge-live">● On Goin</span>
          ) : (
            <span className="badge-done">Selesai</span>
          )}
        </div>
        <div className="year-line" />
      </div>

      <div className="panitia">
        <img src={data.panitia} alt="" />
        <div className="panitia-overlay">
          <h3>Electronic Student Competition {data.year}</h3>
          <p>PSMR Universitas Gunadarma</p>
        </div>
      </div>

      <div className="events-header">
        <h4>Cabang Lomba</h4>
        <span className="badge-count">
          {data.events.length} kategori
        </span>
      </div>

      <div className="events-grid">
        {data.events.map((event, i) => (
          <EventCard key={event.id} event={event} index={i} />
        ))}
      </div>
  </div>
  );
}

export default function CompetitionsPage() {
  return (
    <div className="page">
        <div className="hero-comp">
          <div className="hero-glow"></div>

          <div className="hero-inner">
            <h1 className="hero-title">ESC Competition</h1>
            <p className="hero-desc">
              <strong>Electronic Student Competition (ESC)</strong> adalah ajang kompetisi teknologi tahunan yang diselenggarakan oleh Pusat Studi Multimedia dan Robotika Universitas Gunadarma.
            </p>
            <p className="hero-sub">
              ESC hadir sebagai wadah bagi mahasiswa untuk mengeksplorasi dan membuktikan kemampuan di bidang teknologi — mulai dari robotika, drone, computer vision, hingga sistem komputer.
            </p>

            <div className="stats">
              <div className="stat">
                <Calendar size={18}/>
                <h3>3+</h3>
                <span>Tahun</span>
              </div>
              <div className="stat">
                <Award size={18}/>
                <h3>10+</h3>
                <span>Cabang Lomba</span>
              </div>
              <div className="stat">
                <Users size={18}/>
                <h3>100+</h3>
                <span>Tim Peserta</span>
              </div>
            </div>
          </div>
        </div>

      {/* CONTENT */}
      <div className="content">
        {competitionsData.map((data) => (
          <YearSection key={data.year} data={data} />
        ))}
      </div>

      {/* REGISTER */}
      <div className="register">
        <h2>Daftarkan Tim Kamu!</h2>
        <p>Pendaftaran ESC 2026 masih dibuka.</p>
        <button className="register-button">Daftar Sekarang</button>
      </div>
    </div>
  );
}
=======
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
>>>>>>> b40a687eaadc589b817ab358bb8571cb22dd7d7c
