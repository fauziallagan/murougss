import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import './AboutUsPage.css';

const campusData = {
  depok: [
    { src: '/facilities/ruang1.jpeg', title: 'Robotics Lab D', desc: 'Lab robotika kampus Depok' },
    { src: '/facilities/ruang2.jpeg', title: 'Electronics D', desc: 'Lab elektronik lengkap' },
  ],
  kalimalang: [
    { src: '/facilities/ruang3.jpeg', title: 'IoT Lab J', desc: 'Zona IoT Kalimalang' },
    { src: '/facilities/ruang4.jpeg', title: 'AI Lab J', desc: 'AI & ML Lab' },
  ],
  karawaci: [
    { src: '/facilities/ruang5.jpeg', title: 'Multimedia Lab K', desc: 'Studio multimedia' },
    { src: '/facilities/ruang6.jpeg', title: '3D Printing K', desc: 'Rapid prototyping' },
  ],
};

const teamStructure = {
  director: {
    img: '/DSC_0039.JPG', name: 'Prof. Dr. Nur Sultan Salahuddin, SKom., MT.', role: 'Director of Study Center / Kepala Pusat Studi'},
  members: [
  { name: 'Aqilla Rahman Musyaffa', role: 'Research Engineer / Peneliti', img: '/DSC_0067.JPG' },
  { name: 'Nora Trisna Tumewa', role: 'Lab Manager / Manager Administrasi', img: '/DSC_0071.JPG' },
  { name: 'Salahuddin Yusuf Zhafran Fajr', role: 'RnD Lab Technician / Teknisi Lab RnD', img: '/DSC_0067.JPG' },
  { name: 'Faisal Firdaus', role: 'Practice Lab Technician / Teknisi Lab Praktikum', img: '/DSC_0071.JPG' },
]
};

function FacilitySlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const autoRef = useRef(null);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(autoRef.current);
    }, [slides.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetAuto();
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetAuto();
  };

  return (
    <div className="facility-slider ios-slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`facility-slide ${i === current ? 'active' : ''}`}
        >
          <img src={slide.src} alt={slide.title} />
          <div className="facility-slide-overlay">
            <h4>{slide.title}</h4>
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}

      <button className="facility-btn facility-btn-prev" onClick={prev}>
        <ChevronLeft size={20} />
      </button>
      <button className="facility-btn facility-btn-next" onClick={next}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default function AboutUsPage() {
  const [activeCampus, setActiveCampus] = useState('depok');

  return (
    <>
      <section className="page-header-we">
        <div className="container">
          <h1>Tentang Kami</h1>
          <p>Modern Lab with Multi Campus Facilities</p>
        </div>
      </section>

      <section className="aboutus-section">
        <div className="container">

      {/* Mission */} 
      <div className="about-content"> 
      <div className="about-text"> 
        <h2>Our Mission</h2> 
          <p> LabConnect is dedicated to empowering students and innovators with state-of-the-art equipment, expert mentorship, and a vibrant community. We believe that hands-on learning transforms ideas into reality. </p> <p> Founded in 2020, our laboratory has grown to serve over 200 students annually, providing comprehensive training in robotics, electronics, IoT, AI/ML, and more. </p> <div className="about-features"> <div className="about-feature-item"> <div className="about-feature-icon"><CheckCircle size={20} /></div> 
        <div className="about-feature-text">
          <h4>Innovation First</h4> 
            <p>We prioritize practical learning and real-world problem solving</p> 
          </div> 
        </div> 
        <div className="about-feature-item">
          <div className="about-feature-icon"><Award size={20} /></div> 
            <div className="about-feature-text"> <h4>Excellence</h4> 
            <p>Our students have won national and international competitions</p> 
            </div> 
          </div> 
          <div className="about-feature-item"> 
            <div className="about-feature-icon"><Users size={20} />
          </div> 
          <div className="about-feature-text"> 
            <h4>Community</h4> 
              <p>A supportive environment where learning happens together</p> 
            </div> 
          </div>
        <div className="about-feature-item"> 
          <div className="about-feature-icon"><TrendingUp size={20} /></div> 
            <div className="about-feature-text"> <h4>Growth</h4> 
              <p>Continuous improvement and expansion of our programs</p>
              </div> 
            </div> 
          </div> 
        </div> 
      <div className="about-image">
        <img src="/5.jpeg" alt="muro" />
      </div> 
    </div>

          <div className="facilities-section"> 
            <div className="facilities-content">
               <div className="facilities-text"> 
                <span className="facilities-label">FACILITIES</span> 
                <h2>State-of-the-Art Equipment</h2> 
                <p> Our laboratory is equipped with modern tools and technology to support research, learning, and innovation across multimedia and robotics disciplines. </p>
              </div> 
            </div>

            {/* BUTTON CAMPUS */}
            <div className="campus-tabs">
              <button
                className={activeCampus === 'depok' ? 'active' : ''}
                onClick={() => setActiveCampus('depok')}
              >
                Kampus Depok (D)
              </button>

              <button
                className={activeCampus === 'kalimalang' ? 'active' : ''}
                onClick={() => setActiveCampus('kalimalang')}
              >
                Kampus Kalimalang (J)
              </button>

              <button
                className={activeCampus === 'karawaci' ? 'active' : ''}
                onClick={() => setActiveCampus('karawaci')}
              >
                Kampus Karawaci (K)
              </button>
            </div>

            <FacilitySlider slides={campusData[activeCampus]} />
          </div>

          <div className="team-section">
            <h2>Our Team</h2>

            {/* DIRECTOR */}
            <div className="team-director">
              <div className="team-card-modern">
                
                <div className="team-image">
                  <img src={teamStructure.director.img} alt={teamStructure.director.name} />
                </div>

                <div className="team-info">
                  <h3>{teamStructure.director.name}</h3>
                  <p>{teamStructure.director.role}</p>
                </div>

              </div>
            </div>

           <div className="team-grid-modern">
              {teamStructure.members.map((m, i) => (
                <div key={i} className="team-card-modern">
                  
                  <div className="team-image">
                    <img src={m.img} alt={m.name} />
                  </div>

                  <div className="team-info">
                    <h3>{m.name}</h3>
                    <p>{m.role}</p>
                  </div>
                </div>
              ))}
              </div>

              <div className="stats-section-us">
                <div className="stats-grid-us">
                  
                  <div className="stat-card-us">
                    <h2>40+</h2>
                    <p>Alumni</p>
                  </div>

                  <div className="stat-card-us">
                    <h2>20+</h2>
                    <p>Asisten Aktif</p>
                  </div>
                </div>

              </div>
          </div>
        </div>
      </section>
    </>
  );
}
