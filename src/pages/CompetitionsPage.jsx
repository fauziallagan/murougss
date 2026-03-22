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

  return <>{/* ... UI tetap sama */}</>;
}
