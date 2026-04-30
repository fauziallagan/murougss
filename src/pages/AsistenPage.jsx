import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Monitor, Cpu, CheckCircle, FileText, Gift,
  ChevronRight, Users, Calendar, Award,
  ChevronLeft
} from 'lucide-react';
import './AsistenPage.css';

const posisiData = {
  Hardware: [
    {
      title: 'Smart Home Automation',
      desc: 'Sistem otomasi rumah berbasis IoT menggunakan ESP32, sensor PIR, dan relay untuk kontrol perangkat listrik via smartphone.',
      photos: ['/RobotPraktikum.jpg', '/RobotPraktikum.jpg', '/RobotPraktikum.jpg'],
    },
    {
      title: 'Line Follower Robot',
      desc: 'Robot line follower dengan algoritma PID berbasis Arduino yang mampu mendeteksi jalur dengan akurasi tinggi.',
      photos: ['/WorkshopAgrotech.jpg', '/WorkshopAgrotech.jpg'],
    },
    {
      title: 'Sistem Monitoring Kualitas Udara',
      desc: 'Alat monitoring kualitas udara real-time menggunakan sensor MQ-135 dan DHT22 dengan tampilan dashboard web.',
      photos: ['/WorkshopHealthcare.jpg', '/WorkshopHealthcare.jpg'],
    },
  ],
  Software: [
    {
      title: 'Aplikasi Deteksi Wajah',
      desc: 'Sistem pengenalan wajah real-time menggunakan OpenCV dan deep learning untuk absensi otomatis mahasiswa.',
      photos: ['/WorkshopDrone.jpg', '/WorkshopDrone.jpg'],
    },
  ],
};

const ketentuanData = [
  {
    icon: CheckCircle,
    title: 'Requirements',
    color: 'purple',
    items: [
      'Mahasiswa aktif min. semester 3',
      'IPK minimal 3.00',
      'Menguasai bidang yang dilamar',
      'Bersedia hadir sesuai jadwal',
      'Belum pernah dikenai sanksi akademik',
    ],
  },
  {
    icon: FileText,
    title: 'Dokumen',
    color: 'blue',
    items: [
      'KTM (Kartu Tanda Mahasiswa)',
      'Transkrip nilai terbaru',
      'CV / Resume',
      'Sertifikat pendukung (jika ada)',
      'Foto 3x4 terbaru',
    ],
  },
  {
    icon: Gift,
    title: 'Keuntungan',
    color: 'emerald',
    items: [
      'Sertifikat resmi dari lab',
      'Pengembangan skill teknis',
      'Jaringan profesional',
      'Prioritas workshop eksklusif',
      'Honorarium bulanan',
    ],
  },
];

function ProjectSlider({ photos }) {
  const [current, setCurrent] = useState(0);
  const autoRef = useRef(null);

    const resetAuto = useCallback(() => {
      clearInterval(autoRef.current);
      autoRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % photos.length);
      }, 4000);
    }, [photos.length]);

    useEffect(() => {
      resetAuto();
      return () => clearInterval(autoRef.current);
    }, [resetAuto]);

  const prev = () => { setCurrent(p => (p - 1 + photos.length) % photos.length); resetAuto(); };
  const next = () => { setCurrent(p => (p + 1) % photos.length); resetAuto(); };

  return (
    <div className="project-slider">
      <div className="project-slider-main">
        {photos.map((src, i) => (
          <div key={i} className={`project-slide ${i === current ? 'active' : ''}`}>
            <img src={src} alt={`Project ${i + 1}`} />
          </div>
        ))}
        <button className="project-btn project-btn-prev" onClick={prev}><ChevronLeft size={16} /></button>
        <button className="project-btn project-btn-next" onClick={next}><ChevronRight size={16} /></button>
        <div className="project-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`project-dot ${i === current ? 'active' : ''}`}
              onClick={() => { setCurrent(i); resetAuto(); }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PendaftaranAsistenPage() {
  const [activeTab, setActiveTab] = useState('Hardware');

  return (
    <>
      {/* HEADER */}
      <section className="page-header-as">
        <div className="container">
          <h1>What We Do</h1>
          <p>Project penelitian dan karya inovatif dari asisten laboratorium kami</p>
        </div>
      </section>

      <section className="asisten-section">
        <div className="container">

          {/* INTRO */}
          <div className="asisten-intro">
            <div className="asisten-intro-text">
              <div className="about-header">
                <div className="about-badge">Penelitian Kami</div>
                <h2>Inovasi dari Asisten Lab</h2>
                <p>
                Asisten kami telah berkontribusi dalam berbagai penelitian dan project inovatif di bidang Hardware dan Software. 
                Setiap project dirancang untuk memberikan solusi nyata dan pengalaman belajar yang bermakna.
              </p>
            </div>
  
              <div className="asisten-stats">
                <div className="asisten-stat">
                  <Users size={20} />
                  <div>
                    <strong>30+</strong>
                    <span>Asisten Aktif</span>
                  </div>
                </div>
                <div className="asisten-stat">
                  <Award size={20} />
                  <div>
                    <strong>Projects</strong>
                    <span>Hardware & Software</span>
                  </div>
                </div>
                <div className="asisten-stat">
                  <Calendar size={20} />
                  <div>
                    <strong>1x/Tahun</strong>
                    <span>Buka Pendaftaran</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB */}
          <div className="posisi-tab-menu">
            {['Hardware', 'Software'].map(tab => (
              <button
                key={tab}
                className={`posisi-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'Hardware' ? <Cpu size={16} /> : <Monitor size={16} />}
                {tab}
              </button>
            ))}
          </div>

          {/* PROJECT CARDS */}
          <div className="project-grid">
            {posisiData[activeTab].map((project, i) => (
              <div key={i} className={`project-card project-card-${activeTab.toLowerCase()}`}>
                <ProjectSlider photos={project.photos} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                 </div>
              </div>
            ))}
          </div>

          {/* INFO PENDAFTARAN */}
          <div className="info-pendaftaran">
            <div className="about-header">
              <div className="about-badge">Tertarik?</div>
              <h2>Bergabung Sebagai Asisten</h2>
              <p>Ingin berkontribusi dalam penelitian dan membimbing praktikum? Daftarkan dirimu sekarang!</p>
            </div>

            {/* KETENTUAN */}
            <div className="ketentuan-grid">
              {ketentuanData.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={`ketentuan-card ketentuan-${item.color}`}>
                    <div className="ketentuan-header">
                      <div className="ketentuan-icon"><Icon size={22} /></div>
                      <h3>{item.title}</h3>
                    </div>
                    <ul className="ketentuan-list">
                      {item.items.map((point, j) => (
                        <li key={j}>
                          <ChevronRight size={14} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* DAFTAR BUTTON */}
            <div className="daftar-section">
              <div className="daftar-box">
                <h2>Siap Bergabung?</h2>
                <p>Pendaftaran dibuka setiap awal semester. Pastikan semua dokumen sudah disiapkan.</p>
                <button className="btn-daftar">
                  <FileText size={18} />
                  Daftar Sekarang
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}