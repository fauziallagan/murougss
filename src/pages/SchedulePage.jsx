import React, { useState } from 'react';
import { Clock, MapPin, User, FileText, BookOpen, Download, Calendar } from 'lucide-react';
import './SchedulePage.css';

const scheduleData = [
  {
    jenjang: 'S1',
    subtitle: 'Strata 1 — Sistem Komputer',
    color: '#a855f7',
    items: [
      { hari: 'Senin', tanggal: '5 Mei 2025', waktu: '08:00 - 10:00', lokasi: 'Gedung 4', ruang: 'Lab A', instruktur: 'Dr. Sarah Chen' },
      { hari: 'Selasa', tanggal: '6 Mei 2025', waktu: '10:00 - 12:00', lokasi: 'Gedung 4', ruang: 'Lab B', instruktur: 'Prof. Emma Williams' },
      { hari: 'Rabu', tanggal: '7 Mei 2025', waktu: '13:00 - 15:00', lokasi: 'Gedung 4', ruang: 'Lab A', instruktur: 'Dr. Sarah Chen' },
      { hari: 'Jumat', tanggal: '9 Mei 2025', waktu: '15:00 - 17:00', lokasi: 'Gedung 4', ruang: 'Lab C', instruktur: 'Prof. Emma Williams' },
    ],
  },
  {
    jenjang: 'D3',
    subtitle: 'Diploma 3 — Teknik Komputer',
    color: '#3b82f6',
    items: [
      { hari: 'Senin', tanggal: '5 Mei 2025', waktu: '08:00 - 10:00', lokasi: 'Gedung 5', ruang: 'Lab C', instruktur: 'Engineer Mike' },
      { hari: 'Selasa', tanggal: '6 Mei 2025', waktu: '10:00 - 12:00', lokasi: 'Gedung 5', ruang: 'Lab D', instruktur: 'Dr. James Lee' },
      { hari: 'Kamis', tanggal: '8 Mei 2025', waktu: '13:00 - 15:00', lokasi: 'Gedung 5', ruang: 'Lab C', instruktur: 'Engineer Mike' },
      { hari: 'Sabtu', tanggal: '10 Mei 2025', waktu: '08:00 - 10:00', lokasi: 'Gedung 5', ruang: 'Lab D', instruktur: 'Dr. James Lee' },
    ],
  },
];

const sopItems = [
  { no: '01', title: 'Tata Tertib Lab', desc: 'Wajib memakai jas lab dan sepatu tertutup saat berada di dalam laboratorium.' },
  { no: '02', title: 'Penggunaan Alat', desc: 'Setiap alat harus dikembalikan ke tempat semula setelah digunakan dan dicatat dalam logbook.' },
  { no: '03', title: 'Keselamatan Kerja', desc: 'Dilarang makan, minum, dan merokok di dalam ruang laboratorium.' },
  { no: '04', title: 'Laporan Praktikum', desc: 'Laporan dikumpulkan maksimal 1 minggu setelah praktikum selesai.' },
  { no: '05', title: 'Kehadiran', desc: 'Kehadiran minimal 80% untuk dapat mengikuti ujian akhir praktikum.' },
];

const silabusItems = [
  { week: 'Minggu 1', topic: 'Pengenalan Elektronika Dasar', desc: 'Komponen pasif, resistor, kapasitor, induktor' },
  { week: 'Minggu 2', topic: 'Rangkaian DC', desc: 'Hukum Ohm, Kirchhoff, analisis rangkaian' },
  { week: 'Minggu 3', topic: 'Sistem Digital', desc: 'Gerbang logika, flip-flop, counter' },
  { week: 'Minggu 4', topic: 'Mikrokontroler', desc: 'Arduino, pemrograman dasar, GPIO' },
  { week: 'Minggu 5', topic: 'IoT Dasar', desc: 'Sensor, aktuator, komunikasi wireless' },
  { week: 'Minggu 6', topic: 'Robotika', desc: 'Motor DC, servo, sistem kontrol dasar' },
];

const materiItems = [
  { title: 'Modul 1 - Elektronika Dasar', size: '2.4 MB', type: 'PDF' },
  { title: 'Modul 2 - Rangkaian DC', size: '1.8 MB', type: 'PDF' },
  { title: 'Modul 3 - Sistem Digital', size: '3.1 MB', type: 'PDF' },
  { title: 'Modul 4 - Mikrokontroler Arduino', size: '4.2 MB', type: 'PDF' },
  { title: 'Modul 5 - IoT Development', size: '2.9 MB', type: 'PDF' },
  { title: 'Modul 6 - Robotika Dasar', size: '3.7 MB', type: 'PDF' },
];

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState('jadwal');
  const tabs = ['jadwal', 'sop', 'silabus', 'materi'];

  return (
    <>
      {/* HEADER */}
      <section className="page-header-jad">
        <div className="container">
          <h1>Praktikum</h1>
          <p>Informasi lengkap jadwal, SOP, silabus, dan materi praktikum</p>
          <div className="header-actions">
            <button className="btn-header-primary">
              Daftar Praktikum
            </button>
            <button className="btn-header-secondary">
              Daftar Praktikum Ulang
            </button>
          </div>
        </div>
      </section>

      {/* SECTION PRAKTIKUM */}
      <section className="praktikum-section">
        <div className="container">

          {/* Tab Menu */}
          <div className="tab-menu">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'jadwal' && <Calendar size={15} />}
                {tab === 'sop' && <FileText size={15} />}
                {tab === 'silabus' && <BookOpen size={15} />}
                {tab === 'materi' && <Download size={15} />}
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="tab-content">

            {/* JADWAL */}
            {activeTab === 'jadwal' && (
              <div className="jadwal-wrapper">
                <div className="section-intro">
                  <h2>Jadwal Praktikum</h2>
                  <p>Jadwal pelaksanaan praktikum untuk mahasiswa S1 dan D3.</p>
                </div>
                <div className="jadwal-wrapper-new">
                    {scheduleData.map((group, i) => (
                      <div key={i} className="jadwal-group">

                        {/* HEADER S1 / D3 */}
                        <div className="jadwal-group-header">
                          <div 
                            className="jadwal-badge-new"
                            style={{ borderColor: group.color, color: group.color }}
                          >
                            {group.jenjang}
                          </div>
                          <p>{group.subtitle}</p>
                        </div>

                        {/* GRID CARD */}
                        <div className="jadwal-grid-new">
                          {group.items.map((item, j) => (
                            <div key={j} className="jadwal-item-card">

                              <div className="jadwal-item-head">
                                <h4>{item.hari}</h4>
                                <span className="jadwal-date">{item.tanggal}</span>
                              </div>

                              <div className="jadwal-item-body">
                                <div><Clock size={14}/> {item.waktu}</div>
                                <div><MapPin size={14}/> {item.lokasi}</div>
                                <div><FileText size={14}/> {item.ruang}</div>
                                <div><User size={14}/> {item.instruktur}</div>
                              </div>

                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
             </div>
            )}

            {/* SOP */}
            {activeTab === 'sop' && (
              <div className="sop-wrapper">
                <div className="section-intro">
                  <h2>Standard Operating Procedure</h2>
                  <p>Peraturan dan tata tertib yang wajib dipatuhi selama kegiatan praktikum berlangsung.</p>
                </div>
                <div className="sop-list">
                  {sopItems.map((item, i) => (
                    <div key={i} className="sop-card">
                      <div className="sop-number">{item.no}</div>
                      <div className="sop-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                      {/* <ChevronRight size={18} className="sop-arrow" /> */}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SILABUS */}
            {activeTab === 'silabus' && (
              <div className="silabus-wrapper">
                <div className="section-intro">
                  <h2>Silabus Praktikum</h2>
                  <p>Rencana materi yang akan dipelajari selama satu semester praktikum.</p>
                </div>
                <div className="silabus-list">
                  {silabusItems.map((item, i) => (
                    <div key={i} className="silabus-card">
                      <div className="silabus-week">{item.week}</div>
                      <div className="silabus-content">
                        <h4>{item.topic}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MATERI */}
            {activeTab === 'materi' && (
              <div className="materi-wrapper">
                <div className="section-intro">
                  <h2>Unduh Materi</h2>
                  <p>Kumpulan modul dan bahan ajar yang dapat diunduh secara gratis.</p>
                </div>
                <div className="materi-list">
                  {materiItems.map((item, i) => (
                    <div key={i} className="materi-card">
                      <div className="materi-icon">
                        <FileText size={22} />
                      </div>
                      <div className="materi-info">
                        <h4>{item.title}</h4>
                        <span>{item.type} · {item.size}</span>
                      </div>
                      <button className="materi-download-btn">
                        <Download size={16} />
                        Unduh
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
}
