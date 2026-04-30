import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const NODE_COUNT = 80;

    let nodes = [];
    let pulses = [];

    let scrollBoost = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("scroll", () => {
      scrollBoost = 3;
    });

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;

        this.size = 2 + Math.random();
      }

      move() {
        this.x += this.vx * (1 + scrollBoost);
        this.y += this.vy * (1 + scrollBoost);

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#a855f7";
        ctx.fill();
      }
    }

    class Pulse {
      constructor(a, b) {
        this.a = a;
        this.b = b;
        this.progress = Math.random();
        this.speed = 0.01 + Math.random() * 0.01;
      }

      update() {
        this.progress += this.speed * (1 + scrollBoost * 2);

        if (this.progress > 1) {
          this.progress = 0;
        }
      }

      draw() {
        const x = this.a.x + (this.b.x - this.a.x) * this.progress;
        const y = this.a.y + (this.b.y - this.a.y) * this.progress;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#3b82f6";
        ctx.fill();
      }
    }

    function createNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push(new Node());
      }
    }

    function drawConnections() {
      pulses = [];

      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);

            ctx.strokeStyle = `rgba(59,130,246,${0.15 + scrollBoost * 0.1})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            if (Math.random() < 0.002) {
              pulses.push(new Pulse(nodes[a], nodes[b]));
            }
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        node.move();
        node.draw();
      });

      drawConnections();

      pulses.forEach((pulse) => {
        pulse.update();
        pulse.draw();
      });

      scrollBoost *= 0.92;

      requestAnimationFrame(animate);
    }

    createNodes();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createNodes();
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
