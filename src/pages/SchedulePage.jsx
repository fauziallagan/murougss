import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import './SchedulePage.css';

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const weekSchedule = {
    Monday: [
      { time: '8:00 AM - 12:00 PM', activity: 'Open Lab', capacity: '25/30', instructor: 'Dr. Sarah Chen', room: 'Lab A' },
      { time: '1:00 PM - 5:00 PM', activity: 'Robotics Workshop', capacity: '15/20', instructor: 'Engineer Mike', room: 'Lab B' },
    ],
    Tuesday: [
      { time: '8:00 AM - 12:00 PM', activity: 'Microcontroller Lab', capacity: '20/25', instructor: 'Dr. James Lee', room: 'Lab A' },
      { time: '2:00 PM - 5:00 PM', activity: 'Circuit Design Session', capacity: '18/20', instructor: 'Prof. Emma', room: 'Lab C' },
    ],
    Wednesday: [
      { time: '8:00 AM - 12:00 PM', activity: 'Open Lab', capacity: '28/30', instructor: 'Dr. Sarah Chen', room: 'Lab A' },
      { time: '1:00 PM - 4:00 PM', activity: 'Advanced Programming', capacity: '12/15', instructor: 'Engineer Mike', room: 'Lab B' },
    ],
    Thursday: [
      { time: '8:00 AM - 12:00 PM', activity: 'Electronics Workshop', capacity: '22/25', instructor: 'Prof. Emma', room: 'Lab C' },
      { time: '2:00 PM - 5:00 PM', activity: 'IoT Projects', capacity: '16/20', instructor: 'Dr. James Lee', room: 'Lab A' },
    ],
    Friday: [
      { time: '8:00 AM - 12:00 PM', activity: 'Open Lab', capacity: '30/30', instructor: 'Dr. Sarah Chen', room: 'Lab A' },
      { time: '1:00 PM - 5:00 PM', activity: 'Free Project Time', capacity: '25/30', instructor: 'All Staff', room: 'All Labs' },
    ],
    Saturday: [
      { time: '8:00 AM - 12:00 PM', activity: 'Open Lab', capacity: '30/30', instructor: 'Dr. Sarah Chen', room: 'Lab A' },
      { time: '1:00 PM - 5:00 PM', activity: 'Free Project Time', capacity: '25/30', instructor: 'All Staff', room: 'All Labs' },
    ],
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getCapacityPercentage = (capacity) => {
    const [used, total] = capacity.split('/').map(Number);
    return (used / total) * 100;
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Praktikum</h1>
          <p>Check out what's happening in the lab this week</p>
        </div>
      </section>

      <section className="schedule-section">
        <div className="container">
          {/* Day Selector */}
          <div className="day-selector">
            {daysOfWeek.map(day => (
              <button
                key={day}
                className={`day-btn ${selectedDay === day ? 'active' : ''}`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="schedule-grid">
            {weekSchedule[selectedDay]?.map((session, idx) => (
              <div key={idx} className="schedule-card">
                <div className="schedule-header">
                  <div className="time">{session.time}</div>
                  <div className="activity-badge">{session.activity}</div>
                </div>

                <div className="activity-title">{session.activity}</div>

                <div className="card-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span><strong>Time:</strong> {session.time}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span><strong>Room:</strong> {session.room}</span>
                  </div>
                  <div className="detail-item">
                    <span><strong>Instructor:</strong> {session.instructor}</span>
                  </div>
                </div>

                <div className="capacity-section">
                  <div className="capacity-text">Capacity: {session.capacity}</div>
                  <div className="capacity-bar">
                    <div 
                      className="capacity-fill" 
                      style={{ width: `${getCapacityPercentage(session.capacity)}%` }}
                    ></div>
                  </div>
                </div>

                <button className="btn-enroll">Cek Nama Kamu </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="schedule-info-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>Important Information</h2>
          <div className="schedule-info">
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>All sessions are held in the Main Lab Building, Floor 2. Different labs (A, B, C) are available for different activities.</p>
            </div>

            <div className="info-card">
              <h3>📋 Requirements</h3>
              <ul>
                <li>Valid student/member ID required</li>
                <li>Safety briefing mandatory for first-time users</li>
                <li>Dress code: Closed shoes, no loose clothing</li>
                <li>Pre-registration recommended</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>🔄 Cancellation Policy</h3>
              <p>Sessions may be cancelled or rescheduled with 24 hours notice. Check your email for updates.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
