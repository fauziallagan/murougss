import React, { useEffect, useState } from "react";
import { Star, TrendingUp, Users, Zap } from "lucide-react";
import "./HomePage.css";
import { getWorkshops, getCompetitions } from "../lib/api";

export default function HomePage({ setActiveTab }) {
  const stats = [
    { icon: Users, value: "500+", label: "Students" },
    { icon: TrendingUp, value: "50+", label: "Projects Completed" },
    { icon: Zap, value: "100+", label: "Workshops Held" },
    { icon: Star, value: "95%", label: "Success Rate" },
  ];

  const features = [
    {
      title: "State-of-the-Art Equipment",
      description:
        "Access to the latest laboratory instruments, robotics kits, and electronics equipment for hands-on learning and experimentation.",
      emoji: "🔬",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from experienced professionals with years of industry expertise in electronics, robotics, IoT, and artificial intelligence.",
      emoji: "👨‍🏫",
    },
    {
      title: "Collaborative Community",
      description:
        "Join a vibrant community of innovators and makers where ideas are shared, discussed, and brought to life.",
      emoji: "🤝",
    },
    {
      title: "Real-World Projects",
      description:
        "Work on practical projects that solve real problems and showcase your skills to potential employers.",
      emoji: "🚀",
    },
    {
      title: "Competitions & Challenges",
      description:
        "Participate in exciting competitions with prizes, challenge yourself, and test your knowledge against peers.",
      emoji: "🏆",
    },
    {
      title: "Career Development",
      description:
        "Build your portfolio, network with industry professionals, and prepare for your dream career in tech.",
      emoji: "📈",
    },
  ];
  const sentences = [
    "We brings together innovators",
    "makers",
    "learners to explore cutting-edge technology",
    "collaborate on projects",
    "and transform ideas into reality.",
  ];

  const [completedText, setCompletedText] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (sentenceIndex < sentences.length) {
      const sentence = sentences[sentenceIndex];

      if (charIndex < sentence.length) {
        const timeout = setTimeout(() => {
          setCurrentWord((prev) => prev + sentence[charIndex]);
          setCharIndex(charIndex + 1);
        }, 25);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCompletedText((prev) => prev + currentWord + " ");
          setCurrentWord("");
          setCharIndex(0);
          setSentenceIndex(sentenceIndex + 1);
        }, 600);

        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, sentenceIndex, currentWord]);
  const [workshops, setWorkshops] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  // ✅ TARO DI SINI
  const getImageUrl = (url) => {
    if (!url) return null;

    const base = "http://localhost:3000";

    if (url.startsWith("/api")) {
      return `${base}${url}`;
    }

    return `${base}/api${url}`;
  };
  // 🔥 FETCH CMS DATA
  useEffect(() => {
    console.log("FETCH START");

    getWorkshops()
      .then((res) => {
        console.log("WORKSHOPS:", res);
        setWorkshops(res || []);
      })
      .catch((err) => {
        console.error("WORKSHOP ERROR:", err);
      });

    getCompetitions()
      .then((res) => {
        console.log("COMPETITIONS:", res);
        setCompetitions(res || []);
      })
      .catch((err) => {
        console.error("COMP ERROR:", err);
      });
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Pusat Studi{" "}
              <span className="gradient-text">Multimedia dan Robotika</span>
            </h1>
          </div>
          {/* ✨ TYPING TEXT */}{" "}
          <p className="typing-text">
            {" "}
            {completedText} <span className="glow-word">{currentWord}</span>{" "}
            <span className="cursor">|</span>{" "}
          </p>{" "}
          <div className="cta-buttons">
            {" "}
            <button
              className="btn btn-primary"
              onClick={() => setActiveTab("aboutus")}
            >
              {" "}
              Tentang Kami{" "}
            </button>
          </div>
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

      {/* FEATURES */}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <h2>Everything You Need to Succeed</h2>
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

      {/* 🔥 WORKSHOP */}
      <section className="preview-section">
        <div className="container">
          <h2>Latest Workshops</h2>

          <div className="preview-grid">
            {workshops.map((item) => (
              <div key={item.id} className="preview-card">
                {item.image?.url && (
                  <img src={getImageUrl(item.image.url)} alt={item.title} />
                )}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 COMPETITION */}
      <section className="preview-section">
        <div className="container">
          <h2>Latest Competitions</h2>

          <div className="preview-grid">
            {competitions.map((item) => (
              <div key={item.id} className="preview-card">
                {item.image?.url && (
                  <img src={getImageUrl(item.image.url)} alt={item.title} />
                )}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
