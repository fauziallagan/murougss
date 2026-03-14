import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import './AboutUsPage.css';

const facilitySlides = [
  {
    src: '/facilities/ruang1.jpeg',
    title: 'Advanced Robotics Workshop',
    desc: 'Peralatan robotik lengkap untuk eksperimen nyata',
  },
  {
    src: '/facilities/ruang2.jpeg',
    title: 'Electronics Lab',
    desc: 'Oscilloscope, soldering station, dan PCB fabrication',
  },
  {
    src: '/facilities/ruang3.jpeg',
    title: 'IoT Development Zone',
    desc: 'Arduino, Raspberry Pi, dan berbagai modul wireless',
  },
  {
    src: '/facilities/ruang4.jpeg',
    title: 'AI/ML Computing Center',
    desc: 'Workstation GPU untuk deep learning dan computer vision',
  },
  {
    src: '/facilities/ruang5.jpeg',
    title: 'Multimedia Design Studio',
    desc: 'Studio lengkap untuk desain dan produksi konten digital',
  },
  {
    src: '/facilities/ruang6.jpeg',
    title: '3D Printing Lab',
    desc: 'Printer 3D presisi tinggi untuk prototyping cepat',
  },
];

const facilityList = [
  'Advanced Robotics Workshop',
  'Multimedia Design Studio',
  'IoT Development Zone',
  '3D Printing Lab',
  'VR/AR Experience Room',
  'Electronics Assembly Area',
];

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Lab Director',
    bio: 'PhD in Electronics Engineering with 15+ years of industry experience',
    emoji: '👩‍🔬',
  },
  {
    name: 'Engineer Mike Johnson',
    role: 'Lead Instructor',
    bio: 'Expert in Robotics and Automation with passion for hands-on learning',
    emoji: '👨‍💼',
  },
  {
    name: 'Prof. Emma Williams',
    role: 'Electronics Specialist',
    bio: 'Specializes in Circuit Design and IoT applications',
    emoji: '👩‍🏫',
  },
  {
    name: 'Dr. James Lee',
    role: 'AI/ML Researcher',
    bio: 'Leading research in machine learning and artificial intelligence',
    emoji: '👨‍🔬',
  },
];

function FacilitySlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const autoRef = useRef(null);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, []);

  const prev = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
    resetAuto();
  };

  const next = () => {
    setCurrent(prev => (prev + 1) % slides.length);
    resetAuto();
  };

  const goTo = (i) => {
    setCurrent(i);
    resetAuto();
  };

  return (
    <div className="facility-slider">
      {/* Main Image */}
      <div className="facility-slider-main">
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

        {/* Nav Buttons */}
        <button className="facility-btn facility-btn-prev" onClick={prev}>
          <ChevronLeft size={20} />
        </button>
        <button className="facility-btn facility-btn-next" onClick={next}>
          <ChevronRight size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="facility-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`facility-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="facility-thumbs">
        {slides.map((slide, i) => (
          <button
            key={i}
            className={`facility-thumb ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          >
            <img src={slide.src} alt={slide.title} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Tentang Kami</h1>
          <p>Learn about our mission, values, and the amazing team behind the lab</p>
        </div>
      </section>

      <section className="aboutus-section">
        <div className="container">

          {/* Mission */}
          <div className="about-content">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                LabConnect is dedicated to empowering students and innovators with
                state-of-the-art equipment, expert mentorship, and a vibrant community.
                We believe that hands-on learning transforms ideas into reality.
              </p>
              <p>
                Founded in 2020, our laboratory has grown to serve over 200 students
                annually, providing comprehensive training in robotics, electronics,
                IoT, AI/ML, and more.
              </p>
              <div className="about-features">
                <div className="about-feature-item">
                  <div className="about-feature-icon"><CheckCircle size={20} /></div>
                  <div className="about-feature-text">
                    <h4>Innovation First</h4>
                    <p>We prioritize practical learning and real-world problem solving</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon"><Award size={20} /></div>
                  <div className="about-feature-text">
                    <h4>Excellence</h4>
                    <p>Our students have won national and international competitions</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon"><Users size={20} /></div>
                  <div className="about-feature-text">
                    <h4>Community</h4>
                    <p>A supportive environment where learning happens together</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon"><TrendingUp size={20} /></div>
                  <div className="about-feature-text">
                    <h4>Growth</h4>
                    <p>Continuous improvement and expansion of our programs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">🧪</div>
          </div>

          {/* Facilities */}
          <div className="facilities-section">
            <div className="facilities-content">
              <div className="facilities-text">
                <span className="facilities-label">FACILITIES</span>
                <h2>State-of-the-Art Equipment</h2>
                <p>
                  Our laboratory is equipped with modern tools and technology to support
                  research, learning, and innovation across multimedia and robotics disciplines.
                </p>
                <div className="facilities-list">
                  {facilityList.map((item, i) => (
                    <div key={i} className="facilities-list-item">
                      <span className="facilities-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <FacilitySlider slides={facilitySlides} />
            </div>
          </div>

          {/* Team */}
          <div className="team-section">
            <div className="about-header">
              <div className="about-badge">Our Team</div>
              <h2>Meet Our Experts</h2>
              <p>Experienced professionals dedicated to your learning journey</p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="team-card">
                  <div className="team-avatar">{member.emoji}</div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}