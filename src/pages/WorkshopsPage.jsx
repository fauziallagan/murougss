import React, { useState, useEffect } from "react";
import { Clock, Users, Star } from "lucide-react";
import { getWorkshops } from "../lib/api";
import "./WorkshopsPage.css";

// ✅ PINDAH KE LUAR (FIX WARNING)
const CATEGORY_MAP = {
  microcontroller: "Microcontrollers",
  programming: "Programming",
  electronics: "Electronics",
  iot: "IoT",
  ai: "AI/ML",
};

export default function WorkshopsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [workshops, setWorkshops] = useState([]);

  const getIcon = (category) => {
    switch (category) {
      case "Microcontrollers":
        return "💻";
      case "Programming":
        return "🧠";
      case "Electronics":
        return "⚡";
      case "IoT":
        return "🌐";
      case "AI/ML":
        return "🤖";
      default:
        return "✨";
    }
  };

  useEffect(() => {
    getWorkshops().then((data) => {
      const mapped = (data || []).map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description || "",
        duration: item.duration || "-",
        level: item.level || "Beginner",
        students: item.students || 0,
        capacity: item.capacity || 30,
        rating: item.rating || 4.5,
        instructor: item.instructor || "-",
        startDate: item.startDate || "-",

        category: CATEGORY_MAP[item.category?.toLowerCase()] || "General",
      }));

      setWorkshops(mapped);
    });
  }, []); // ✅ sekarang aman

  const categories = [
    "All",
    "Microcontrollers",
    "Programming",
    "Electronics",
    "IoT",
    "AI/ML",
  ];

  const filteredWorkshops =
    selectedCategory === "All"
      ? workshops
      : workshops.filter((w) => w.category === selectedCategory);

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
          {/* 🔥 CATEGORY FILTER */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <span style={{ marginRight: "6px" }}>{getIcon(category)}</span>
                {category}
              </button>
            ))}
          </div>

          {/* 🔥 WORKSHOPS GRID */}
          <div className="workshops-grid">
            {filteredWorkshops.map((workshop) => {
              const capacityPercent =
                (workshop.students / workshop.capacity) * 100;

              return (
                <div key={workshop.id} className="workshop-card">
                  <div className="workshop-header">
                    <div className="workshop-icon">
                      {getIcon(workshop.category)}
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
                      <span>
                        {workshop.students}/{workshop.capacity}
                      </span>
                    </div>
                  </div>

                  <div className="capacity-bar">
                    <div
                      className="capacity-fill"
                      style={{ width: `${capacityPercent}%` }}
                    ></div>
                  </div>

                  <p className="capacity-text">
                    Spaces left: {workshop.capacity - workshop.students}
                  </p>

                  <div className="workshop-rating">
                    <Star size={16} className="star-icon" />
                    <span className="rating-value">{workshop.rating}</span>
                  </div>

                  <p className="workshop-instructor">
                    <strong>Instructor:</strong> {workshop.instructor}
                  </p>

                  <p className="workshop-date">
                    <strong>Starts:</strong> {workshop.startDate}
                  </p>

                  <button className="btn-enroll">
                    {workshop.students >= workshop.capacity
                      ? "Waitlist"
                      : "Enroll Now"}
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
