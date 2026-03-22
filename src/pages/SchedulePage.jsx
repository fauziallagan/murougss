import React, { useState, useEffect } from "react";
import { Clock, MapPin } from "lucide-react";
import { getPraktikums } from "../lib/api";
import "./SchedulePage.css";

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [data, setData] = useState([]);

  useEffect(() => {
    getPraktikums()
      .then((res) => {
        console.log("PRAKTIKUM:", res);
        setData(res || []);
      })
      .catch((err) => {
        console.error("ERROR:", err);
      });
  }, []);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // 🔥 FILTER DATA DARI BACKEND
  const filtered = data.filter((item) => item.day === selectedDay);

  const getCapacityPercentage = (students, capacity) => {
    if (!capacity) return 0;
    return (students / capacity) * 100;
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
          {/* 🔥 DAY SELECTOR */}
          <div className="day-selector">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                className={`day-btn ${selectedDay === day ? "active" : ""}`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          {/* 🔥 GRID */}
          <div className="schedule-grid">
            {filtered.map((item) => (
              <div key={item.id} className="schedule-card">
                <div className="schedule-header">
                  <div className="time">
                    {item.startTime} - {item.endTime}
                  </div>
                  <div className="activity-badge">{item.title}</div>
                </div>

                <div className="activity-title">{item.title}</div>

                <div className="card-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>
                      <strong>Time:</strong> {item.startTime} - {item.endTime}
                    </span>
                  </div>

                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>
                      <strong>Room:</strong> {item.room}
                    </span>
                  </div>

                  <div className="detail-item">
                    <span>
                      <strong>Instructor:</strong> {item.instructor}
                    </span>
                  </div>
                </div>

                <div className="capacity-section">
                  <div className="capacity-text">
                    Capacity: {item.students}/{item.capacity}
                  </div>

                  <div className="capacity-bar">
                    <div
                      className="capacity-fill"
                      style={{
                        width: `${getCapacityPercentage(
                          item.students,
                          item.capacity,
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <button className="btn-enroll">
                  {item.students >= item.capacity
                    ? "Full / Waitlist"
                    : "Cek Nama Kamu"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO SECTION (TIDAK DIUBAH) */}
      <section className="schedule-info-section">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "48px" }}>
            Important Information
          </h2>

          <div className="schedule-info">
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>All sessions are held in the Main Lab Building, Floor 2.</p>
            </div>

            <div className="info-card">
              <h3>📋 Requirements</h3>
              <ul>
                <li>Valid student/member ID required</li>
                <li>Safety briefing mandatory</li>
                <li>Closed shoes required</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>🔄 Cancellation</h3>
              <p>Schedule may change with 24h notice.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
