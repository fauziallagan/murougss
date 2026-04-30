import React, { useState } from 'react';
import { Clock, User, } from 'lucide-react';
import './WorkshopsPage.css';

export default function WorkshopsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const workshops = [
    {
      id: 1,
      title: 'Introduction to Arduino',
      category: 'Semester 1',
      description: 'Learn the basics of Arduino programming and build your first embedded system project.',
      level: 'Beginner',
      img : '/WorkshopDrone.jpg',
      students: 24,
      capacity: 30,
      instructor: 'Dr. James Lee',
      startDate: 'Mar 15, 2025',
    },
    {
      id: 2,
      title: 'Advanced Python for Robotics',
      category: 'Semester 2',
      description: 'Master Python programming with focus on robotics control, automation, and AI applications.',
      level: 'Advanced',
      img : '/WorkshopDrone.jpg',
      students: 18,
      capacity: 20,
      instructor: 'Engineer Mike',
      startDate: 'Mar 20, 2025',
    },
    {
      id: 3,
      title: 'Circuit Design Fundamentals',
      category: 'Semester 3',
      description: 'Design and build functional circuits using breadboards, resistors, capacitors, and more.',
      level: 'Beginner',
      img : '/WorkshopDrone.jpg',
      students: 28,
      capacity: 30,
      instructor: 'Prof. Emma',
      startDate: 'Mar 10, 2025',
    },
    {
      id: 4,
      title: 'IoT Development Workshop',
      category: 'Semester 4',
      description: 'Build connected devices and learn about sensors, networks, and cloud integration.',
      level: 'Intermediate',
      img : '/WorkshopDrone.jpg',
      students: 15,
      capacity: 25,
      instructor: 'Dr. Sarah Chen',
      startDate: 'Mar 25, 2025',
    },
    {
      id: 5,
      title: 'Machine Learning Basics',
      category: 'Semester 5',
      description: 'Get started with machine learning using Python, TensorFlow, and real-world datasets.',
      level: 'Advanced',
      img : '/WorkshopDrone.jpg',
      students: 12,
      capacity: 20,
      instructor: 'Dr. James Lee',
      startDate: 'Apr 1, 2025',
    },
    {
      id: 6,
      title: 'Soldering & PCB Assembly',
      category: 'Semester 6',
      description: 'Hands-on workshop on soldering techniques and printed circuit board assembly.',
      level: 'Beginner',
      img : '/WorkshopDrone.jpg',
      students: 20,
      capacity: 25,
      instructor: 'Prof. Emma',
      startDate: 'Mar 18, 2025',
    },
  ];

  const categories = ['All', ...new Set(workshops.map(w => w.category))];
  const filteredWorkshops = selectedCategory === 'All' ? workshops : workshops.filter(w => w.category === selectedCategory);

  return (
    <>
      <section className="page-header-ws">
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
              const capacityPercent = (workshop.students / workshop.capacity) * 100;
              
              return (
                <div key={workshop.id} className="workshop-card">
                  <div className="workshop-header">
                    <div className="workshop-badge">{workshop.level}</div>
                  </div>

                <div className="workshop-image-box">
                  <img src={workshop.img} alt={workshop.title} className="workshop-image" />
                  <span className={`badge-level ${workshop.level.toLowerCase()}`}>
                    {workshop.level}
                  </span>
                </div>

                  <h3 className="workshop-title">{workshop.title}</h3>
                  <p className="workshop-description">{workshop.description}</p>

                  <div className="workshop-meta">
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="meta-item">
                      <User size={16} />
                      <span>{workshop.students}/{workshop.capacity}</span>
                    </div>
                  </div>

                  <div className="capacity-bar">
                    <div className="capacity-fill" style={{ width: `${capacityPercent}%` }}></div>
                  </div>
                  <p className="capacity-text">Spaces left: {workshop.capacity - workshop.students}</p>

                  <p className="workshop-instructor"><strong>Instructor:</strong> {workshop.instructor}</p>
                  <p className="workshop-date"><strong>Starts:</strong> {workshop.startDate}</p>

                <div className="btn-group">
                  <button className="btn-outline">
                    Pengajuan Blanko
                  </button>

                  <button className="btn-primary">
                    {workshop.students >= workshop.capacity ? 'Waitlist' : 'Konfirmasi Pembayaran'}
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}