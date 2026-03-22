import React, { useEffect, useState } from "react";
import { Calendar, Users, Target, Code, Cpu, Zap } from "lucide-react";
import { getCompetitions } from "../lib/api";
import "./CompetitionsPage.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CompetitionsPage() {
  const [competitions, setCompetitions] = useState([]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    getCompetitions().then((data) => {
      const mapped = data.map((item, index) => ({
        id: item.id,
        title: item.title,
        description: item.description || "",
        date: item.date || null,

        startDate: item.startDate || item.date,
        endDate: item.endDate || null,

        participants: item.participants || "0+",
        prize: item.prize || "-",
        level: item.level || "All Levels",

        icon: [Code, Zap, Cpu][index % 3],

        // ✅ FIX IMAGE URL
        image: item.image?.url ? `${API_URL}${item.image.url}` : null,

        link: item.link || null,
      }));

      setCompetitions(mapped);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatus = (startDate, endDate) => {
    if (!startDate) return "UPCOMING";

    const current = new Date(now);
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (current < start) return "UPCOMING";
    if (end && current > end) return "ENDED";
    return "ONGOING";
  };

  const getCountdownParts = (targetDate) => {
    if (!targetDate) return null;

    const current = new Date(now);
    const target = new Date(targetDate);
    const diff = target - current;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Embedded System Competitions</h1>
          <p>
            Showcase your skills and compete with innovators from around the lab
          </p>
        </div>
      </section>

      <section className="competitions-section">
        <div className="container">
          <div className="competitions-grid">
            {competitions.map((comp) => {
              const Icon = comp.icon;

              const status = getStatus(comp.startDate, comp.endDate);

              const countdown =
                status === "UPCOMING"
                  ? getCountdownParts(comp.startDate)
                  : status === "ONGOING"
                    ? getCountdownParts(comp.endDate)
                    : null;

              return (
                <div key={comp.id} className="competition-card">
                  {comp.image && (
                    <img
                      src={comp.image}
                      alt={comp.title}
                      className="competition-image"
                    />
                  )}

                  {/* STATUS */}
                  <div className={`comp-status ${status.toLowerCase()}`}>
                    {status}
                  </div>

                  <div className="comp-icon">
                    <Icon size={32} />
                  </div>

                  <h3 className="comp-title">{comp.title}</h3>
                  <p className="comp-description">{comp.description}</p>

                  <div className="comp-details">
                    <div className="comp-detail">
                      <Calendar size={16} />
                      <span>
                        <strong>Date:</strong> {formatDate(comp.date)}
                      </span>
                    </div>

                    {/* 🔥 WEB3 COUNTDOWN */}
                    <div className="countdown-wrapper">
                      {countdown ? (
                        ["days", "hours", "minutes", "seconds"].map((unit) => (
                          <div key={unit} className="countdown-box">
                            <div className="countdown-value">
                              {String(countdown[unit]).padStart(2, "0")}
                            </div>
                            <div className="countdown-label">{unit}</div>
                          </div>
                        ))
                      ) : (
                        <div className="countdown-ended">Event Ended</div>
                      )}
                    </div>

                    <div className="comp-detail">
                      <Users size={16} />
                      <span>
                        <strong>Participants:</strong> {comp.participants}
                      </span>
                    </div>

                    <div className="comp-detail">
                      <Target size={16} />
                      <span>
                        <strong>Level:</strong> {comp.level}
                      </span>
                    </div>
                  </div>

                  <div className="comp-prize">
                    🏆 Total Prize Pool: {comp.prize}
                  </div>

                  {comp.link ? (
                    <a
                      href={comp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-enroll"
                    >
                      Register Now
                    </a>
                  ) : (
                    <button className="btn-enroll">Register Now</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
