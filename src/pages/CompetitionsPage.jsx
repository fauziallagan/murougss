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
