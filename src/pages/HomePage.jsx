import React from 'react';
import { Star, TrendingUp, Users, Zap } from 'lucide-react';
import './HomePage.css';

export default function HomePage({setActiveTab}) {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Students',
    },
    {
      icon: TrendingUp,
      value: '50+',
      label: 'Projects Completed',
    },
    {
      icon: Zap,
      value: '100+',
      label: 'Workshops Held',
    },
    {
      icon: Star,
      value: '95%',
      label: 'Success Rate',
    },
  ];

  const features = [
    {
      title: 'State-of-the-Art Equipment',
      description: 'Access to the latest laboratory instruments, robotics kits, and electronics equipment for hands-on learning and experimentation.',
      emoji: '🔬',
    },
    {
      title: 'Expert Mentorship',
      description: 'Learn from experienced professionals with years of industry expertise in electronics, robotics, IoT, and artificial intelligence.',
      emoji: '👨‍🏫',
    },
    {
      title: 'Collaborative Community',
      description: 'Join a vibrant community of innovators and makers where ideas are shared, discussed, and brought to life.',
      emoji: '🤝',
    },
    {
      title: 'Real-World Projects',
      description: 'Work on practical projects that solve real problems and showcase your skills to potential employers.',
      emoji: '🚀',
    },
    {
      title: 'Competitions & Challenges',
      description: 'Participate in exciting competitions with prizes, challenge yourself, and test your knowledge against peers.',
      emoji: '🏆',
    },
    {
      title: 'Career Development',
      description: 'Build your portfolio, network with industry professionals, and prepare for your dream career in tech.',
      emoji: '📈',
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            {/* <div className="status-badge"> */}
              {/* <div className="status-dot"></div>
              <span>Welcome to the Future of Innovation</span> */}
            {/* </div> */}

            <h1>
              Pusat Studi <span className="gradient-text">Multimedia dan Robotika</span>
            </h1>

            <p>
              We brings together innovators, makers, and learners to explore cutting-edge technology,
              collaborate on projects, and transform ideas into reality.
            </p>

            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => setActiveTab('aboutus')}>
                Tentang Kami
              </button>
            </div>
          </div>

          {/* STATS GRID */}
          <div className="stats-grid">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="stat-card">
                  <div className="stat-icon">
                    <Icon size={32} />
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-header"> 
            <h2>Everything You Need to Succeed</h2>
            <p>Lorem ipsum dolor sit amet consectetur fugit id! Alias dolore aspernatur consectetur molestiae quae similique eos voluptatum!</p>
          </div>

          <div className="feature-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-emoji">{feature.emoji}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Compete?</h2>
            <p>Join thousands of innovators competing for glory and exciting prizes. Register now!</p>
            <button 
                className="btn btn-primary"
                onClick={() => setActiveTab('competitions')}>
                View All Competitions
              </button>
          </div>
        </div>
      </section>
    </div>
  );
}
