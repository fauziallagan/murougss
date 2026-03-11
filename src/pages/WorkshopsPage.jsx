import React, { useState } from 'react';
import { Clock, Users, Star, Code, Cpu, Zap, TrendingUp, BookOpen } from 'lucide-react';
import './WorkshopsPage.css';

export default function WorkshopsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const workshops = [
    {
      id: 1,
      title: 'Introduction to Arduino',
      category: 'Microcontrollers',
      description: 'Learn the basics of Arduino programming and build your first embedded system project.',
      duration: '4 weeks',
      level: 'Beginner',
      students: 24,
      capacity: 30,
      rating: 4.8,
      instructor: 'Dr. James Lee',
      startDate: 'Mar 15, 2025',
      icon: Cpu,
    },
    {
      id: 2,
      title: 'Advanced Python for Robotics',
      category: 'Programming',
      description: 'Master Python programming with focus on robotics control, automation, and AI applications.',
      duration: '6 weeks',
      level: 'Advanced',
      students: 18,
      capacity: 20,
      rating: 4.9,
      instructor: 'Engineer Mike',
      startDate: 'Mar 20, 2025',
      icon: Code,
    },
    {
      id: 3,
      title: 'Circuit Design Fundamentals',
      category: 'Electronics',
      description: 'Design and build functional circuits using breadboards, resistors, capacitors, and more.',
      duration: '5 weeks',
      level: 'Beginner',
      students: 28,
      capacity: 30,
      rating: 4.7,
      instructor: 'Prof. Emma',
      startDate: 'Mar 10, 2025',
      icon: Zap,
    },
    {
      id: 4,
      title: 'IoT Development Workshop',
      category: 'IoT',
      description: 'Build connected devices and learn about sensors, networks, and cloud integration.',
      duration: '7 weeks',
      level: 'Intermediate',
      students: 15,
      capacity: 25,
      rating: 4.6,
      instructor: 'Dr. Sarah Chen',
      startDate: 'Mar 25, 2025',
      icon: TrendingUp,
    },
    {
      id: 5,
      title: 'Machine Learning Basics',
      category: 'AI/ML',
      description: 'Get started with machine learning using Python, TensorFlow, and real-world datasets.',
      duration: '8 weeks',
      level: 'Advanced',
      students: 12,
      capacity: 20,
      rating: 4.9,
      instructor: 'Dr. James Lee',
      startDate: 'Apr 1, 2025',
      icon: BookOpen,
    },
    {
      id: 6,
      title: 'Soldering & PCB Assembly',
      category: 'Electronics',
      description: 'Hands-on workshop on soldering techniques and printed circuit board assembly.',
      duration: '2 weeks',
      level: 'Beginner',
      students: 20,
      capacity: 25,
      rating: 4.8,
      instructor: 'Prof. Emma',
      startDate: 'Mar 18, 2025',
      icon: Zap,
    },
  ];

  const categories = ['All', ...new Set(workshops.map(w => w.category))];
  const filteredWorkshops = selectedCategory === 'All' ? workshops : workshops.filter(w => w.category === selectedCategory);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Workshops & Courses</h1>
          <p>Level up your skills with our hands-on learning programs</p>
        </div>
      </section>

      <section className="workshops-section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Workshops Grid */}
          <div className="workshops-grid">
            {filteredWorkshops.map(workshop => {
              const Icon = workshop.icon;
              const capacityPercent = (workshop.students / workshop.capacity) * 100;
              
              return (
                <div key={workshop.id} className="workshop-card">
                  <div className="workshop-header">
                    <div className="workshop-icon">
                      <Icon size={32} />
                    </div>
                    <div className="workshop-badge">{workshop.level}</div>
                  </div>

                  <h3 className="workshop-title">{workshop.title}</h3>
                  <p className="workshop-description">{workshop.description}</p>

                  <div className="workshop-meta">
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={16} />
                      <span>{workshop.students}/{workshop.capacity}</span>
                    </div>
                  </div>

                  <div className="capacity-bar">
                    <div className="capacity-fill" style={{ width: `${capacityPercent}%` }}></div>
                  </div>
                  <p className="capacity-text">Spaces left: {workshop.capacity - workshop.students}</p>

                  <div className="workshop-rating">
                    <Star size={16} className="star-icon" />
                    <span className="rating-value">{workshop.rating}</span>
                  </div>

                  <p className="workshop-instructor"><strong>Instructor:</strong> {workshop.instructor}</p>
                  <p className="workshop-date"><strong>Starts:</strong> {workshop.startDate}</p>

                  <button className="btn-enroll">
                    {workshop.students >= workshop.capacity ? 'Waitlist' : 'Enroll Now'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
