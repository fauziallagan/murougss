import React, { useState } from 'react';
import {
  CheckCircle,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';

import './AboutUsPage.css';


/* =========================================================
   DATA
========================================================= */

const campusData = {

  depok: [
    {
      src: '/facilities/ruang1.jpeg',
      title: 'Robotics Lab D',
      desc: 'Lab robotika kampus Depok'
    },

    {
      src: '/facilities/ruang2.jpeg',
      title: 'Electronics D',
      desc: 'Lab elektronik lengkap'
    },

    {
      src: '/facilities/ruang3.jpeg',
      title: 'Programming Lab D',
      desc: 'Modern coding & embedded system lab'
    },
  ],


  kalimalang: [
    {
      src: '/facilities/ruang3.jpeg',
      title: 'IoT Lab J',
      desc: 'Zona IoT Kalimalang'
    },

    {
      src: '/facilities/ruang4.jpeg',
      title: 'AI Lab J',
      desc: 'Artificial Intelligence Laboratory'
    },

    {
      src: '/facilities/ruang5.jpeg',
      title: 'Cyber Security J',
      desc: 'Security research & networking lab'
    },
  ],


  karawaci: [
    {
      src: '/facilities/ruang5.jpeg',
      title: 'Multimedia Lab K',
      desc: 'Studio multimedia modern'
    },

    {
      src: '/facilities/ruang6.jpeg',
      title: '3D Printing K',
      desc: 'Rapid prototyping technology'
    },

    {
      src: '/facilities/ruang1.jpeg',
      title: 'Creative Studio K',
      desc: 'Digital creative production studio'
    },
  ],
};


const teamStructure = {

  director: {
    img: '/DSC_0039.JPG',
    name: 'Prof. Dr. Nur Sultan Salahuddin, SKom., MT.',
    role: 'Director of Study Center / Kepala Pusat Studi'
  },

  members: [

    {
      name: 'Aqilla Rahman Musyaffa',
      role: 'Research Engineer / Peneliti',
      img: '/DSC_0067.JPG'
    },

    {
      name: 'Nora Trisna Tumewa',
      role: 'Lab Manager / Manager Administrasi',
      img: '/DSC_0071.JPG'
    },

    {
      name: 'Salahuddin Yusuf Zhafran Fajr',
      role: 'RnD Lab Technician / Teknisi Lab RnD',
      img: '/DSC_0067.JPG'
    },

    {
      name: 'Faisal Firdaus',
      role: 'Practice Lab Technician / Teknisi Lab Praktikum',
      img: '/DSC_0071.JPG'
    },
  ]
};



/* =========================================================
   SWIPE SLIDER
========================================================= */

function FacilitySlider({ slides }) {

  const [current, setCurrent] = useState(0);

  const [touchStart, setTouchStart] = useState(0);

  const [touchEnd, setTouchEnd] = useState(0);


  /* =========================
     SWIPE
  ========================= */

  const handleTouchStart = (e) => {

    setTouchStart(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchMove = (e) => {

    setTouchEnd(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchEnd = () => {

    if (touchStart - touchEnd > 70) {

      setCurrent((prev) =>
        (prev + 1) % slides.length
      );
    }

    if (touchStart - touchEnd < -70) {

      setCurrent((prev) =>
        (prev - 1 + slides.length) % slides.length
      );
    }
  };


  return (

    <div
      className="facility-slider-modern"

      onTouchStart={handleTouchStart}

      onTouchMove={handleTouchMove}

      onTouchEnd={handleTouchEnd}
    >

      {/* TRACK */}

      <div
        className="facility-track-modern"

        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >

        {slides.map((slide, i) => (

          <div
            className="facility-slide-modern"
            key={i}
          >

            <img
              src={slide.src}
              alt={slide.title}
            />

            <div className="facility-overlay-modern">

              <div className="facility-info-modern">

                <h3>{slide.title}</h3>

                <p>{slide.desc}</p>

              </div>

            </div>

          </div>
        ))}

      </div>


      {/* DOT */}

      <div className="facility-dots">

        {slides.map((_, i) => (

          <button
            key={i}

            className={
              current === i ? 'active' : ''
            }

            onClick={() => setCurrent(i)}
          />

        ))}
      </div>

    </div>
  );
}



/* =========================================================
   PAGE
========================================================= */

export default function AboutUsPage() {

  const [activeCampus, setActiveCampus] = useState('depok');

  return (
    <>

      {/* HEADER */}

      <section className="page-header-we">

        <div className="container">

          <h1>Tentang Kami</h1>

          <p>
            Modern Lab with Multi Campus Facilities
          </p>

        </div>
      </section>



      {/* ABOUT */}

      <section className="aboutus-section">

        <div className="container">


          <div className="about-content">

            <div className="about-text">

              <h2>Our Mission</h2>

              <p>
                LabConnect is dedicated to empowering students
                and innovators with state-of-the-art equipment,
                expert mentorship, and a vibrant community.
              </p>

              <p>
                Founded in 2020, our laboratory has grown
                to serve over 200 students annually.
              </p>


              <div className="about-features">


                <div className="about-feature-item">

                  <div className="about-feature-icon">
                    <CheckCircle size={20} />
                  </div>

                  <div className="about-feature-text">

                    <h4>Innovation First</h4>

                    <p>
                      Practical learning and real-world problem solving
                    </p>

                  </div>
                </div>



                <div className="about-feature-item">

                  <div className="about-feature-icon">
                    <Award size={20} />
                  </div>

                  <div className="about-feature-text">

                    <h4>Excellence</h4>

                    <p>
                      National & international achievements
                    </p>

                  </div>
                </div>



                <div className="about-feature-item">

                  <div className="about-feature-icon">
                    <Users size={20} />
                  </div>

                  <div className="about-feature-text">

                    <h4>Community</h4>

                    <p>
                      Learning together in a supportive environment
                    </p>

                  </div>
                </div>



                <div className="about-feature-item">

                  <div className="about-feature-icon">
                    <TrendingUp size={20} />
                  </div>

                  <div className="about-feature-text">

                    <h4>Growth</h4>

                    <p>
                      Continuous development & innovation
                    </p>

                  </div>
                </div>

              </div>
            </div>



            <div className="about-image">

              <img src="/5.jpeg" alt="about" />

            </div>

          </div>



          {/* FACILITIES */}

          <div className="facilities-section">

            <div className="facilities-content">

              <div className="facilities-text">

                <span className="facilities-label">
                  FACILITIES
                </span>

                <h2>
                  State-of-the-Art Equipment
                </h2>

                <p>
                  Modern facilities designed to support
                  innovation, multimedia, robotics,
                  AI, and advanced research.
                </p>

              </div>
            </div>



            {/* CAMPUS TAB */}

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



            {/* SLIDER */}

            <FacilitySlider
              slides={campusData[activeCampus]}
            />

          </div>



          {/* TEAM */}

          <div className="team-section">

            <h2>Our Team</h2>


            {/* DIRECTOR */}

            <div className="team-director">

              <div className="team-card-modern">

                <div className="team-image">

                  <img
                    src={teamStructure.director.img}
                    alt={teamStructure.director.name}
                  />

                </div>


                <div className="team-info">

                  <h3>
                    {teamStructure.director.name}
                  </h3>

                  <p>
                    {teamStructure.director.role}
                  </p>

                </div>

              </div>

            </div>



            {/* MEMBER */}

            <div className="team-grid-modern">

              {teamStructure.members.map((m, i) => (

                <div
                  key={i}
                  className="team-card-modern"
                >

                  <div className="team-image">

                    <img
                      src={m.img}
                      alt={m.name}
                    />

                  </div>


                  <div className="team-info">

                    <h3>{m.name}</h3>

                    <p>{m.role}</p>

                  </div>

                </div>

              ))}

            </div>



            {/* STATS */}

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