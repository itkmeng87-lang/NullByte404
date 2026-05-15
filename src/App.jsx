

import { useState, useEffect, useRef } from "react";
import nullbyte from './assets/null.jpg';

const SKILLS = [
  { name: "HTML", level: 95, icon: "🌐" },
  { name: "CSS", level: 92, icon: "🎨" },
  { name: "JavaScript", level: 88, icon: "⚡" },
  { name: "React", level: 85, icon: "⚛️" },
  { name: "Tailwind CSS", level: 90, icon: "💨" },
  { name: "PHP", level: 75, icon: "🐘" },
  { name: "MySQL", level: 78, icon: "🗃️" },
  { name: "Git & GitHub", level: 88, icon: "🔧" },
];

const PROJECTS = [
  {
    title: "NeonShop",
    desc: "A futuristic e-commerce UI with dark glassmorphism cards, animated product carousels, and seamless checkout flow.",
    tag: "React · Tailwind",
    color: "#00d4ff",
  },
  {
    title: "DevMetrics",
    desc: "Real-time developer analytics dashboard with live graphs, GitHub integration, and customizable widget layouts.",
    tag: "React · Chart.js",
    color: "#7c3aed",
  },
  {
    title: "PortalCMS",
    desc: "Headless CMS with a sleek admin UI, drag-and-drop page builder, and REST API backend built with PHP.",
    tag: "PHP · MySQL · React",
    color: "#10b981",
  },
  {
    title: "ByteChat",
    desc: "Real-time messaging app featuring end-to-end encryption indicators, presence detection, and a minimal UI.",
    tag: "React · WebSocket",
    color: "#f59e0b",
  },
];

const SERVICES = [
  { title: "Web Design", icon: "✦", desc: "Crafting visually stunning interfaces that balance aesthetics with usability and brand identity." },
  { title: "Frontend Dev", icon: "⌬", desc: "Building performant, scalable React applications with clean architecture and modern tooling." },
  { title: "Responsive Design", icon: "◈", desc: "Pixel-perfect layouts that adapt beautifully across every device and screen resolution." },
  { title: "UI/UX Design", icon: "◎", desc: "User-centered design processes from wireframes and prototypes to polished final products." },
];

const TYPING_TEXTS = [
  "Frontend Developer",
  "UI Designer",
  "React Enthusiast",
  "Code Craftsman",
];

function useTypingEffect(texts, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setCharIdx((c) => c - 1);
        setDisplay(current.slice(0, charIdx - 1));
      }, speed / 2);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return display;
}

function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setFade(true), 400);
      setTimeout(onDone, 1000);
    }
  }, [progress, onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#050508", zIndex: 9999,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "2rem", opacity: fade ? 0 : 1, transition: "opacity 0.6s ease",
    }}>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "2.5rem", fontWeight: 700, color: "#00d4ff", letterSpacing: "0.2em" }}>
        NullByte<span style={{ color: "#fff" }}>404</span>
      </div>
      <div style={{ width: 280, height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", transition: "width 0.05s linear", borderRadius: 4 }} />
      </div>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.75rem", color: "rgba(0,212,255,0.6)", letterSpacing: "0.3em" }}>
        INITIALIZING... {progress}%
      </div>
    </div>
  );
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div style={{
      position: "fixed", pointerEvents: "none", zIndex: 9998,
      left: pos.x - 200, top: pos.y - 200,
      width: 400, height: 400, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
      transition: "left 0.12s ease, top 0.12s ease",
    }} />
  );
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0.9rem 2rem",
      background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      transition: "all 0.3s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "1.2rem", fontWeight: 700, color: "#00d4ff", letterSpacing: "0.1em", cursor: "pointer" }} onClick={() => scrollTo("Home")}>
        NullByte<span style={{ color: "#fff" }}>404</span>
      </div>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem" }} className="nav-links-desktop">
        {links.map((l) => (
          <button key={l} onClick={() => scrollTo(l)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Courier New', monospace", fontSize: "0.8rem",
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: active === l ? "#00d4ff" : "rgba(255,255,255,0.6)",
              transition: "color 0.2s", padding: "0.25rem 0",
              borderBottom: active === l ? "1px solid #00d4ff" : "1px solid transparent",
            }}>
            {l}
          </button>
        ))}
      </div>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 4 }}
        className="hamburger">
        {[0, 1, 2].map(i => <span key={i} style={{ display: "block", width: 22, height: 2, background: "#00d4ff", borderRadius: 2 }} />)}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0,
          background: "rgba(5,5,8,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,212,255,0.15)",
          display: "flex", flexDirection: "column", padding: "1rem 0",
        }}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Courier New', monospace", fontSize: "0.85rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: active === l ? "#00d4ff" : "rgba(255,255,255,0.7)",
                padding: "0.9rem 2rem", textAlign: "left",
                borderLeft: active === l ? "2px solid #00d4ff" : "2px solid transparent",
              }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function SkillBar({ name, level, icon, delay }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setFilled(true), delay); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{ marginBottom: "1.25rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.85rem", color: "#e2e8f0", letterSpacing: "0.05em" }}>
          {icon} {name}
        </span>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.8rem", color: "#00d4ff" }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 6, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 6,
          width: filled ? `${level}%` : "0%",
          background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: filled ? "0 0 10px rgba(0,212,255,0.4)" : "none",
        }} />
      </div>
    </div>
  );
}

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false);
  const dots = ["◆", "◇", "▲", "△"];
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(0,212,255,0.04)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? "rgba(0,212,255,0.35)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        padding: "1.75rem",
        cursor: "pointer",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${project.color}15` : "none",
        position: "relative", overflow: "hidden",
      }}>
      {/* accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
        opacity: hovered ? 1 : 0.3, transition: "opacity 0.35s",
      }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: `${project.color}15`,
          border: `1px solid ${project.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.4rem", color: project.color,
        }}>
          {dots[i % dots.length]}
        </div>
        <span style={{
          fontFamily: "'Courier New', monospace", fontSize: "0.65rem",
          color: project.color, letterSpacing: "0.1em", textTransform: "uppercase",
          background: `${project.color}15`, border: `1px solid ${project.color}25`,
          padding: "0.2rem 0.6rem", borderRadius: 100,
        }}>{project.tag}</span>
      </div>
      <h3 style={{ margin: "0 0 0.5rem", fontFamily: "'Courier New', monospace", fontSize: "1.1rem", color: "#f1f5f9", letterSpacing: "0.05em" }}>
        {project.title}
      </h3>
      <p style={{ margin: "0 0 1.25rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
        {project.desc}
      </p>
      <button style={{
        background: "none", border: `1px solid ${project.color}50`,
        color: project.color, fontFamily: "'Courier New', monospace",
        fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
        padding: "0.45rem 1rem", borderRadius: 6, cursor: "pointer",
        transition: "all 0.2s",
        backgroundColor: hovered ? `${project.color}15` : "transparent",
      }}>
        Live Demo →
      </button>
    </div>
  );
}

function ServiceCard({ service, i }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(0,212,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16, padding: "2rem 1.75rem",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}>
      <div style={{ fontSize: "2rem", marginBottom: "1rem", color: "#00d4ff" }}>{service.icon}</div>
      <h3 style={{ margin: "0 0 0.75rem", fontFamily: "'Courier New', monospace", fontSize: "1rem", color: "#f1f5f9", letterSpacing: "0.08em" }}>
        {service.title}
      </h3>
      <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
        {service.desc}
      </p>
    </div>
  );
}

function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!fields.name || !fields.email || !fields.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFields({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10,
    color: "#f1f5f9", fontFamily: "'Courier New', monospace",
    fontSize: "0.85rem", padding: "0.85rem 1rem",
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input placeholder="Your Name" value={fields.name}
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
        style={inputStyle} onFocus={(e) => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
        onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
      <input placeholder="Your Email" type="email" value={fields.email}
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
        style={inputStyle} onFocus={(e) => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
        onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
      <textarea placeholder="Your Message" rows={5} value={fields.message}
        onChange={(e) => setFields({ ...fields, message: e.target.value })}
        style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
        onFocus={(e) => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
        onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
      <button onClick={handleSubmit} style={{
        background: sent ? "rgba(16,185,129,0.15)" : "rgba(0,212,255,0.1)",
        border: `1px solid ${sent ? "rgba(16,185,129,0.5)" : "rgba(0,212,255,0.4)"}`,
        color: sent ? "#10b981" : "#00d4ff",
        fontFamily: "'Courier New', monospace", fontSize: "0.8rem",
        letterSpacing: "0.2em", textTransform: "uppercase",
        padding: "0.85rem", borderRadius: 10, cursor: "pointer",
        transition: "all 0.3s",
      }}>
        {sent ? "✓ Message Sent!" : "Send Message →"}
      </button>
    </div>
  );
}

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("Home");
  const typing = useTypingEffect(TYPING_TEXTS);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionStyle = {
    maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem",
  };

  const headingStyle = {
    fontFamily: "'Courier New', monospace",
    fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
    fontWeight: 700, color: "#f1f5f9",
    letterSpacing: "0.05em", margin: "0 0 0.5rem",
  };

  const subAccent = {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.75rem", color: "#00d4ff",
    letterSpacing: "0.3em", textTransform: "uppercase",
    marginBottom: "0.75rem", display: "block",
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #050508; color: #f1f5f9; overflow-x: hidden; }
        html { scroll-behavior: smooth; }
        ::placeholder { color: rgba(255,255,255,0.25); }
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-14px); } }
        @keyframes rotate { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes scanline { 0% { top:-2px; } 100% { top:100%; } }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .float { animation: float 4s ease-in-out infinite; }
        @media(max-width:768px) {
          .nav-links-desktop { display:none !important; }
          .hamburger { display:flex !important; }
          .hero-grid { flex-direction:column-reverse !important; text-align:center; }
          .about-grid { flex-direction:column !important; }
          .skills-cols { grid-template-columns:1fr !important; }
          .projects-grid { grid-template-columns:1fr !important; }
          .services-grid { grid-template-columns:1fr 1fr !important; }
          .contact-grid { grid-template-columns:1fr !important; }
        }
        @media(max-width:480px) {
          .services-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <CursorGlow />

      {/* BG grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <Navbar active={active} setActive={setActive} />

      {/* ─── HERO ─── */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "15%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ ...sectionStyle, width: "100%" }}>
          <div className="hero-grid" style={{ display: "flex", alignItems: "center", gap: "4rem", justifyContent: "space-between" }}>
            {/* Text */}
            <div style={{ flex: 1 }}>
              <span style={{ ...subAccent, animationDelay: "0.1s" }} className="fade-up">
                &lt; Hello, World! /&gt;
              </span>
              <h1 className="fade-up" style={{ fontFamily: "'Courier New', monospace", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 700, margin: "0 0 0.5rem", letterSpacing: "0.05em", lineHeight: 1.1, animationDelay: "0.15s" }}>
                <span style={{ color: "#f1f5f9" }}>NullByte</span>
                <span style={{ color: "#00d4ff" }}>404</span>
              </h1>
              <div className="fade-up" style={{ fontFamily: "'Courier New', monospace", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", color: "#64748b", marginBottom: "1.25rem", minHeight: "2rem", animationDelay: "0.2s" }}>
                <span style={{ color: "rgba(0,212,255,0.7)" }}>{">"} </span>
                <span style={{ color: "#94a3b8" }}>{typing}</span>
                <span style={{ animation: "pulse 1s infinite", color: "#00d4ff" }}>|</span>
              </div>
              <p className="fade-up" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 460, margin: "0 0 2rem", animationDelay: "0.25s" }}>
                I build sleek, performant digital experiences that live at the intersection of design and engineering. Every pixel is intentional, every interaction crafted.
              </p>
              <div className="fade-up" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animationDelay: "0.3s" }}>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.5)",
                    color: "#00d4ff", fontFamily: "'Courier New', monospace",
                    fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase",
                    padding: "0.85rem 1.75rem", borderRadius: 8, cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => { e.target.style.background = "rgba(0,212,255,0.2)"; e.target.style.boxShadow = "0 0 20px rgba(0,212,255,0.25)"; }}
                  onMouseLeave={(e) => { e.target.style.background = "rgba(0,212,255,0.1)"; e.target.style.boxShadow = "none"; }}>
                  View Projects
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.7)", fontFamily: "'Courier New', monospace",
                    fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase",
                    padding: "0.85rem 1.75rem", borderRadius: 8, cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.35)"; e.target.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "rgba(255,255,255,0.7)"; }}>
                  Contact Me
                </button>
              </div>
            </div>

            {/* Avatar */}
            <div className="float" style={{ flexShrink: 0 }}>
              <div style={{ position: "relative", width: 280, height: 280 }}>

                {/* Rotating ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: -16,
                    borderRadius: "50%",
                    border: "1px solid transparent",
                    borderTopColor: "rgba(0,212,255,0.5)",
                    borderRightColor: "rgba(124,58,237,0.3)",
                    animation: "rotate 6s linear infinite",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    border: "1px solid transparent",
                    borderBottomColor: "rgba(0,212,255,0.3)",
                    animation: "rotate 10s linear infinite reverse",
                  }}
                />

                {/* Main circle */}
                <div
                  style={{
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    overflow: "hidden", // IMPORTANT
                    background:
                      "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))",
                    border: "1px solid rgba(0,212,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(20px)",
                    boxShadow:
                      "0 0 60px rgba(0,212,255,0.1), inset 0 0 40px rgba(0,212,255,0.05)",
                  }}
                >
                  <img
                    src={nullbyte}
                    alt="profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section >

      {/* ─── ABOUT ─── */ }
      <section section id = "about" style = {{ position: "relative", zIndex: 1 }
}>
  <div style={{ ...sectionStyle }}>
    <span style={subAccent}>// about_me</span>
    <h2 style={headingStyle}>Who Am I?</h2>
    <div style={{ width: 50, height: 2, background: "linear-gradient(90deg,#00d4ff,transparent)", marginBottom: "3rem" }} />

    <div className="about-grid" style={{ display: "flex", gap: "4rem", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <div style={{
          background: "rgba(255,255,255,0.025)", border: "1px solid rgba(0,212,255,0.1)",
          borderRadius: 16, padding: "2rem", backdropFilter: "blur(10px)",
          borderLeft: "2px solid rgba(0,212,255,0.4)",
        }}>
          <p style={{ margin: "0 0 1rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
            I'm <span style={{ color: "#00d4ff" }}>NullByte404</span>, a passionate frontend developer and UI designer who crafts digital experiences that are both beautiful and functional. With a deep love for the intersection of code and design, I transform ideas into sleek, performant web applications.
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85 }}>
            When I'm not pushing pixels or debugging code, I'm exploring new technologies, contributing to open-source projects, and constantly refining my craft. I believe great design is invisible — it just works.
          </p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        {[
          { label: "Experience", value: "3+ Years" },
          { label: "Projects Completed", value: "40+" },
          { label: "Technologies", value: "15+" },
          { label: "Open Source Contributions", value: "20+" },
        ].map((stat) => (
          <div key={stat.label} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "1rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>{stat.label}</span>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: "1rem", color: "#00d4ff", fontWeight: 700 }}>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
      </section >

  {/* ─── SKILLS ─── */ }
  < section id = "skills" style = {{ position: "relative", zIndex: 1, background: "rgba(0,212,255,0.015)" }}>
    <div style={{ ...sectionStyle }}>
      <span style={subAccent}>// skills.map()</span>
      <h2 style={headingStyle}>Technical Stack</h2>
      <div style={{ width: 50, height: 2, background: "linear-gradient(90deg,#00d4ff,transparent)", marginBottom: "3rem" }} />

      <div className="skills-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 4rem" }}>
        {SKILLS.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} delay={i * 100} />
        ))}
      </div>
    </div>
      </section >

  {/* ─── PROJECTS ─── */ }
  < section id = "projects" style = {{ position: "relative", zIndex: 1 }}>
    <div style={{ ...sectionStyle }}>
      <span style={subAccent}>// projects.filter(best)</span>
      <h2 style={headingStyle}>Featured Work</h2>
      <div style={{ width: 50, height: 2, background: "linear-gradient(90deg,#00d4ff,transparent)", marginBottom: "3rem" }} />

      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} i={i} />)}
      </div>
    </div>
      </section >

  {/* ─── SERVICES ─── */ }
  < section id = "services" style = {{ position: "relative", zIndex: 1, background: "rgba(124,58,237,0.02)" }}>
    <div style={{ ...sectionStyle }}>
      <span style={subAccent}>// services.offer()</span>
      <h2 style={headingStyle}>What I Do</h2>
      <div style={{ width: 50, height: 2, background: "linear-gradient(90deg,#00d4ff,transparent)", marginBottom: "3rem" }} />

      <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }}>
        {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} i={i} />)}
      </div>
    </div>
      </section >

  {/* ─── CONTACT ─── */ }
  < section id = "contact" style = {{ position: "relative", zIndex: 1 }}>
    <div style={{ ...sectionStyle }}>
      <span style={subAccent}>// contact.init()</span>
      <h2 style={headingStyle}>Get In Touch</h2>
      <div style={{ width: 50, height: 2, background: "linear-gradient(90deg,#00d4ff,transparent)", marginBottom: "3rem" }} />

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <div>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "2rem" }}>
            Have a project in mind or just want to connect? My inbox is always open. Whether you have a question or just want to say hello, I'll do my best to get back to you.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: "📧", label: "Email", value: "nullbyte404@dev.io" },
              { icon: "📍", label: "Location", value: "Digital Realm, Internet" },
              { icon: "⚡", label: "Status", value: "Available for work" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: "rgba(0,212,255,0.6)", letterSpacing: "0.2em", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.82rem", color: "#e2e8f0" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem" }}>
            {[
              { label: "GitHub", icon: "⌘", href: "https://github.com" },
              { label: "Facebook", icon: "◉", href: "https://facebook.com" },
              { label: "Telegram", icon: "◈", href: "https://telegram.org" },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8, padding: "0.6rem 1rem",
                  color: "rgba(255,255,255,0.6)", textDecoration: "none",
                  fontFamily: "'Courier New', monospace", fontSize: "0.75rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"; e.currentTarget.style.color = "#00d4ff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                <span>{social.icon}</span> {social.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16, padding: "2rem", backdropFilter: "blur(10px)",
        }}>
          <ContactForm />
        </div>
      </div>
    </div>
      </section >

  {/* ─── FOOTER ─── */ }
  < footer style = {{
  borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "2rem",
      display: "flex", justifyContent: "center", alignItems: "center",
        position: "relative", zIndex: 1,
      }}>
  <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
    © 2025 <span style={{ color: "#00d4ff" }}>NullByte404</span>. Built with React & passion.
  </div>
      </footer >

  {/* Scroll to top */ }
  < button
onClick = {() => window.scrollTo({ top: 0, behavior: "smooth" })}
style = {{
  position: "fixed", bottom: "2rem", right: "2rem", zIndex: 200,
    width: 44, height: 44, borderRadius: "50%",
      background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.4)",
        color: "#00d4ff", fontSize: "1rem", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
            opacity: showTop ? 1 : 0, pointerEvents: showTop ? "all" : "none",
              transition: "opacity 0.3s",
                boxShadow: "0 0 20px rgba(0,212,255,0.15)",
        }}>
        ↑
      </button >
    </>
  );
}