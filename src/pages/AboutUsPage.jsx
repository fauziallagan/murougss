import React from 'react';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import './AboutUsPage.css';

export default function AboutUsPage() {
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
          <div className="about-content">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                LabConnect is dedicated to empowering students and innovators with state-of-the-art equipment, expert mentorship, and a vibrant community. We believe that hands-on learning transforms ideas into reality.
              </p>
              <p>
                Founded in 2020, our laboratory has grown to serve over 200 students annually, providing comprehensive training in robotics, electronics, IoT, AI/ML, and more.
              </p>

              <div className="about-features">
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div className="about-feature-text">
                    <h4>Innovation First</h4>
                    <p>We prioritize practical learning and real-world problem solving</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <Award size={20} />
                  </div>
                  <div className="about-feature-text">
                    <h4>Excellence</h4>
                    <p>Our students have won national and international competitions</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <Users size={20} />
                  </div>
                  <div className="about-feature-text">
                    <h4>Community</h4>
                    <p>A supportive environment where learning happens together</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="about-feature-text">
                    <h4>Growth</h4>
                    <p>Continuous improvement and expansion of our programs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              🧪
            </div>
          </div>

          {/* Team Section */}
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
