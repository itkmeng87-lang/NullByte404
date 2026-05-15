// import { useState, useEffect, useRef } from "react";
// // import germinai from './assets/germinai.png';

// const skills = [
//   { name: "HTML5", icon: "🌐", level: 95, color: "from-orange-500 to-red-500" },
//   { name: "CSS3", icon: "🎨", level: 90, color: "from-blue-500 to-cyan-400" },
//   { name: "JavaScript", icon: "⚡", level: 85, color: "from-yellow-400 to-amber-500" },
//   { name: "Bootstrap", icon: "🅱", level: 88, color: "from-purple-500 to-violet-600" },
//   { name: "jQuery", icon: "💲", level: 82, color: "from-sky-400 to-blue-500" },
//   { name: "Tailwind CSS", icon: "🌊", level: 87, color: "from-teal-400 to-cyan-500" },
//   { name: "PHP", icon: "🐘", level: 80, color: "from-indigo-400 to-purple-500" },
//   { name: "React JS", icon: "⚛", level: 83, color: "from-cyan-400 to-sky-500" },
// ];

// const projects = [
//   { emoji: "🛒", title: "E-Commerce Platform", desc: "Full-stack online store with cart, payments, and admin dashboard.", tags: ["PHP", "Bootstrap", "jQuery"], bgLight: "from-violet-100 to-purple-100", bgDark: "from-violet-900/60 to-purple-900/60" },
//   { emoji: "📊", title: "Analytics Dashboard", desc: "Real-time data visualization with interactive charts and reports.", tags: ["React JS", "Tailwind CSS", "JS"], bgLight: "from-sky-100 to-blue-100", bgDark: "from-sky-900/60 to-blue-900/60" },
//   { emoji: "🍜", title: "Restaurant Booking", desc: "Online reservation system with menu display and management.", tags: ["PHP", "HTML5", "jQuery"], bgLight: "from-amber-100 to-orange-100", bgDark: "from-amber-900/60 to-orange-900/60" },
//   { emoji: "📚", title: "Learning Management", desc: "Educational platform for courses, quizzes, and student tracking.", tags: ["React JS", "PHP", "Tailwind"], bgLight: "from-emerald-100 to-teal-100", bgDark: "from-emerald-900/60 to-teal-900/60" },
//   { emoji: "💼", title: "Portfolio CMS", desc: "Dynamic portfolio CMS with an easy-to-use admin panel.", tags: ["PHP", "Bootstrap", "JS"], bgLight: "from-pink-100 to-rose-100", bgDark: "from-pink-900/60 to-rose-900/60" },
//   { emoji: "🌐", title: "Corporate Website", desc: "Responsive corporate site with animations and contact forms.", tags: ["HTML5", "CSS3", "Bootstrap"], bgLight: "from-slate-100 to-gray-100", bgDark: "from-slate-800/60 to-gray-900/60" },
// ];

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, inView];
// }

// function SunIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="5" />
//       <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
//       <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//       <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
//       <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//     </svg>
//   );
// }
// function MoonIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//     </svg>
//   );
// }

// function SkillCard({ skill, index, dark }) {
//   const [ref, inView] = useInView(0.1);
//   return (
//     <div
//       ref={ref}
//       className={`rounded-2xl p-5 text-center border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
//         ${dark
//           ? "bg-white/5 border-white/10 hover:border-violet-500/50 hover:shadow-violet-500/10"
//           : "bg-white border-slate-200 hover:border-violet-400/60 hover:shadow-violet-200/50 shadow-sm"}`}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(28px)",
//         transition: `opacity 0.5s ${index * 0.07}s ease, transform 0.5s ${index * 0.07}s ease, box-shadow 0.3s, border-color 0.3s`
//       }}
//     >
//       <div className="text-4xl mb-3">{skill.icon}</div>
//       <div className={`text-sm font-semibold mb-3 ${dark ? "text-white/90" : "text-slate-800"}`}>{skill.name}</div>
//       <div className={`h-1.5 rounded-full overflow-hidden ${dark ? "bg-white/10" : "bg-slate-100"}`}>
//         <div
//           className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
//           style={{ width: inView ? `${skill.level}%` : "0%", transitionDelay: `${index * 0.07 + 0.3}s` }}
//         />
//       </div>
//       <div className={`text-xs mt-2 ${dark ? "text-white/40" : "text-slate-400"}`}>{skill.level}%</div>
//     </div>
//   );
// }

// function ProjectCard({ project, index, dark }) {
//   const [ref, inView] = useInView(0.1);
//   const bg = dark ? project.bgDark : project.bgLight;
//   return (
//     <div
//       ref={ref}
//       className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
//         ${dark
//           ? "bg-white/5 border-white/10 hover:border-violet-500/40 hover:shadow-black/40"
//           : "bg-white border-slate-200 hover:border-violet-400/50 hover:shadow-violet-100 shadow-sm"}`}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(28px)",
//         transition: `opacity 0.5s ${index * 0.1}s ease, transform 0.5s ${index * 0.1}s ease, box-shadow 0.3s, border-color 0.3s`
//       }}
//     >
//       <div className={`h-40 flex items-center justify-center text-6xl bg-gradient-to-br border-b ${bg} ${dark ? "border-white/5" : "border-slate-100"}`}>
//         {project.emoji}
//       </div>
//       <div className="p-5">
//         <div className="flex flex-wrap gap-1.5 mb-3">
//           {project.tags.map(t => (
//             <span key={t} className={`text-xs px-2.5 py-0.5 rounded-full border
//               ${dark ? "bg-violet-500/15 text-violet-300 border-violet-500/20" : "bg-violet-50 text-violet-600 border-violet-200"}`}>
//               {t}
//             </span>
//           ))}
//         </div>
//         <h3 className={`font-bold text-base mb-1.5 ${dark ? "text-white" : "text-slate-800"}`}>{project.title}</h3>
//         <p className={`text-sm leading-relaxed ${dark ? "text-white/50" : "text-slate-500"}`}>{project.desc}</p>
//       </div>
//     </div>
//   );
// }

// function Section({ id, children, className = "" }) {
//   const [ref, inView] = useInView(0.06);
//   return (
//     <section id={id} ref={ref} className={className}
//       style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
//       {children}
//     </section>
//   );
// }

// export default function Portfolio() {
//   const [dark, setDark] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   const navLinks = ["About", "Skills", "Projects", "Contact"];

//   // Theme token map
//   const d = dark;
//   const bg = d ? "bg-[#080811]" : "bg-slate-50";
//   const bg2 = d ? "bg-[#0c0c18]" : "bg-white";
//   const textMain = d ? "text-white" : "text-slate-900";
//   const muted = d ? "text-white/50" : "text-slate-500";
//   const label = d ? "text-violet-400" : "text-violet-600";
//   const borderC = d ? "border-white/5" : "border-slate-200";
//   const navBg = scrolled ? (d ? "bg-[#080811]/90 backdrop-blur-xl border-slate-800" : "bg-white/90 backdrop-blur-xl border-slate-200") : "border-transparent";
//   const navShadow = scrolled ? (d ? "shadow-xl shadow-black/30" : "shadow-md shadow-slate-200/80") : "";
//   const navLink = d ? "text-white/50 hover:text-white" : "text-slate-500 hover:text-slate-900";
//   const toggleBtn = d ? "bg-white/10 border-white/10 text-yellow-300 hover:bg-white/20" : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200";
//   const outlineBtn = d ? "border-white/10 text-white/70 hover:border-violet-500/50 hover:text-violet-300" : "border-slate-300 text-slate-600 hover:border-violet-400 hover:text-violet-600";
//   const tagline = d ? "bg-violet-500/10 border-violet-500/20 text-violet-300" : "bg-violet-50 border-violet-200 text-violet-600";
//   const blob1 = d ? "bg-violet-600/20" : "bg-violet-300/30";
//   const blob2 = d ? "bg-fuchsia-600/15" : "bg-fuchsia-300/20";
//   const avatarBg = d ? "bg-[#0c0c18]" : "bg-slate-50";
//   const avatarIn = d ? "from-[#1a1030] to-[#0c0c22]" : "from-violet-50 to-fuchsia-50";
//   const aboutText = d ? "text-white/55" : "text-slate-600";
//   const aboutName = d ? "text-white font-semibold" : "text-slate-900 font-semibold";
//   const statCard = d ? "bg-white/5 border-white/8" : "bg-slate-50 border-slate-200";
//   const contactCard = d ? "bg-white/5 border-white/8 hover:border-violet-500/40 hover:shadow-violet-500/10" : "bg-white border-slate-200 hover:border-violet-400/50 hover:shadow-violet-100 shadow-sm";
//   const contactLbl = d ? "text-white/35" : "text-slate-400";
//   const contactVal = d ? "text-white/80 group-hover:text-violet-300" : "text-slate-700 group-hover:text-violet-600";
//   const socialBtn = d ? "border-white/10 text-white/40 hover:border-violet-500/50 hover:text-violet-300" : "border-slate-200 text-slate-400 hover:border-violet-400 hover:text-violet-600";
//   const footerCopy = d ? "text-white/30" : "text-slate-400";
//   const gridColor = d ? "rgba(139,92,246,.05)" : "rgba(139,92,246,.08)";
//   const mobileMenuBg = d ? "bg-[#0e0e1a]/95 backdrop-blur-xl border-white/5" : "bg-white/95 backdrop-blur-xl border-slate-100";
//   const mobileLink = d ? "text-white/70 hover:text-white" : "text-slate-600 hover:text-slate-900";
//   const hamburger = d ? "bg-white" : "bg-slate-800";

//   return (
//     <div className={`min-h-screen ${bg} ${textMain} overflow-x-hidden transition-colors duration-500`}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
//         * { font-family: 'DM Sans', sans-serif; }
//         .font-display { font-family: 'Outfit', sans-serif !important; }
//         @keyframes float  { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-24px) scale(1.04)} }
//         @keyframes float2 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(20px) scale(1.06)} }
//         @keyframes spin-ring { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes pulse-glow { 0%,100%{opacity:.15} 50%{opacity:.4} }
//         @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
//         .blob1 { animation: float 9s ease-in-out infinite; }
//         .blob2 { animation: float2 11s ease-in-out infinite; }
//         .spin-ring { animation: spin-ring 18s linear infinite; }
//         .pulse-dot { animation: pulse-glow 2s ease-in-out infinite; }
//         .hero-fadein { animation: fadeUp 0.8s ease both; }
//       `}</style>

//       {/* ── NAV ── */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${navBg} ${navShadow}`}>
//         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//           <button onClick={() => scrollTo("home")} className="font-display font-black text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent tracking-tight">
//             VK
//           </button>
//           <ul className="hidden md:flex gap-8">
//             {navLinks.map(l => (
//               <li key={l}>
//                 <button onClick={() => scrollTo(l.toLowerCase())} className={`text-sm tracking-widest uppercase font-medium transition-colors ${navLink}`}>{l}</button>
//               </li>
//             ))}
//           </ul>
//           <div className="flex items-center gap-3">
//             {/* Theme toggle */}
//             <button onClick={() => setDark(!dark)}
//               className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${toggleBtn}`}
//               title={dark ? "Light mode" : "Dark mode"}>
//               {dark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <button onClick={() => scrollTo("contact")} className="hidden md:inline-flex bg-violet-600 hover:bg-violet-500 text-white transition-colors px-5 py-2 rounded-full text-sm font-semibold">
//               Hire Me
//             </button>
//             <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
//               <span className={`block w-6 h-0.5 transition-all ${hamburger} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
//               <span className={`block w-6 h-0.5 transition-all ${hamburger} ${menuOpen ? "opacity-0" : ""}`} />
//               <span className={`block w-6 h-0.5 transition-all ${hamburger} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//             </button>
//           </div>
//         </div>
//         {menuOpen && (
//           <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 ${mobileMenuBg}`}>
//             {navLinks.map(l => (
//               <button key={l} onClick={() => scrollTo(l.toLowerCase())} className={`text-left text-sm uppercase tracking-widest font-medium py-1 transition-colors ${mobileLink}`}>{l}</button>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* ── HERO ── */}
//       <div id="home" className="relative min-h-screen flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none" style={{
//           backgroundImage: `linear-gradient(${gridColor} 1px,transparent 1px),linear-gradient(90deg,${gridColor} 1px,transparent 1px)`,
//           backgroundSize: "56px 56px",
//           maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)"
//         }} />
//         <div className={`blob1 absolute top-[-120px] right-[-80px] w-96 h-96 rounded-full blur-[90px] pointer-events-none ${blob1}`} />
//         <div className={`blob2 absolute bottom-16 left-[-60px] w-72 h-72 rounded-full blur-[80px] pointer-events-none ${blob2}`} />

//         <div className="relative z-10 max-w-3xl">
//           <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs tracking-widest uppercase mb-8 font-medium hero-fadein ${tagline}`}
//             style={{ animationDelay: "0.2s" }}>
//             <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block pulse-dot`} />
//             Available for work
//           </div>
//           <h1 className="font-display font-black leading-[0.88] tracking-tight mb-6 hero-fadein"
//             style={{ fontSize: "clamp(3.5rem,10vw,8.5rem)", animationDelay: "0.35s" }}>
//             <span className={`block ${d ? "text-white/90" : "text-slate-900"}`}>Vun</span>
//             <span className="block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Khemra</span>
//           </h1>
//           <p className={`text-lg leading-relaxed max-w-lg mb-10 hero-fadein ${muted}`} style={{ animationDelay: "0.5s" }}>
//             Full-Stack Developer & UI Designer crafting beautiful, performant web experiences with clean code and creative vision.
//           </p>
//           <div className="flex flex-wrap gap-4 hero-fadein" style={{ animationDelay: "0.65s" }}>
//             <button onClick={() => scrollTo("projects")} className="bg-violet-600 hover:bg-violet-500 text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30 px-7 py-3 rounded-full font-semibold text-sm">
//               View My Work →
//             </button>
//             <button onClick={() => scrollTo("contact")} className={`border transition-all hover:-translate-y-1 px-7 py-3 rounded-full font-semibold text-sm ${outlineBtn}`}>
//               Get In Touch
//             </button>
//           </div>
//         </div>
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hero-fadein" style={{ animationDelay: "1.5s" }}>
//           <span className={`text-xs tracking-widest uppercase ${muted}`}>Scroll</span>
//           <div className="w-px h-10 bg-gradient-to-b from-violet-400 to-transparent" />
//         </div>
//       </div>

//       {/* ── ABOUT ── */}
//       <Section id="about" className={`${bg2} py-24 px-6 md:px-16 lg:px-24 transition-colors duration-500`}>
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div className="flex justify-center">
//             <div className="relative w-64 h-64 md:w-80 md:h-80">
//               <div className={`spin-ring absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 p-[2px]`}>
//                 <div className={`w-full h-full rounded-full ${avatarBg} transition-colors duration-500`} />
//               </div>
//               <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${avatarIn} flex items-center justify-center transition-all duration-500`}>
//                 <span className="font-display font-black text-6xl bg-gradient-to-br from-violet-400 to-fuchsia-400 bg-clip-text text-transparent select-none">VK</span>
//               </div>
//               <div className="spin-ring absolute inset-[-12px] rounded-full border border-dashed border-violet-500/20" style={{ animationDuration: "12s", animationDirection: "reverse" }}>
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
//               </div>
//             </div>
//           </div>
//           <div>
//             <p className={`text-xs tracking-widest uppercase mb-3 font-semibold ${label}`}>About Me</p>
//             <h2 className="font-display font-black text-3xl md:text-4xl leading-tight mb-6 tracking-tight">
//               Passionate about<br /><span className="text-violet-500">great interfaces</span>
//             </h2>
//             <div className={`space-y-4 leading-relaxed text-[0.95rem] ${aboutText}`}>
//               <p>Hi! I'm <span className={aboutName}>Vun Khemra</span>, a full-stack web developer based in Cambodia. I love building things for the web — from pixel-perfect UIs to robust backend systems.</p>
//               <p>With a strong foundation in both front-end and back-end technologies, I bring ideas to life with clean, efficient, and scalable code.</p>
//               <p>When I'm not coding, you'll find me exploring new design trends, contributing to open source, or leveling up my skills.</p>
//             </div>
//             <div className="mt-8 grid grid-cols-3 gap-4">
//               {[["3+", "Years Exp."], ["20+", "Projects"], ["100%", "Passion"]].map(([n, l]) => (
//                 <div key={l} className={`border rounded-xl p-4 text-center transition-colors duration-500 ${statCard}`}>
//                   <div className="font-display font-black text-2xl text-violet-500">{n}</div>
//                   <div className={`text-xs mt-1 ${muted}`}>{l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* ── SKILLS ── */}
//       <Section id="skills" className={`${bg} py-24 px-6 md:px-16 lg:px-24 transition-colors duration-500`}>
//         <div className="max-w-6xl mx-auto">
//           <p className={`text-xs tracking-widest uppercase mb-3 font-semibold ${label}`}>What I Know</p>
//           <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-3">My Tech Stack</h2>
//           <p className={`mb-12 max-w-md leading-relaxed text-sm ${muted}`}>Technologies I work with to build modern, responsive, and performant web applications.</p>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//             {skills.map((s, i) => <SkillCard key={s.name} skill={s} index={i} dark={dark} />)}
//           </div>
//         </div>
//       </Section>

//       {/* ── PROJECTS ── */}
//       <Section id="projects" className={`${bg2} py-24 px-6 md:px-16 lg:px-24 transition-colors duration-500`}>
//         <div className="max-w-6xl mx-auto">
//           <p className={`text-xs tracking-widest uppercase mb-3 font-semibold ${label}`}>My Work</p>
//           <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-3">Featured Projects</h2>
//           <p className={`mb-12 max-w-md leading-relaxed text-sm ${muted}`}>A selection of projects I've built — from landing pages to full-stack web applications.</p>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} dark={dark} />)}
//           </div>
//         </div>
//       </Section>

//       {/* ── FOOTER / CONTACT ── */}
//       <footer id="contact" className={`${bg} py-24 px-6 md:px-16 lg:px-24 border-t transition-colors duration-500 ${borderC}`}>
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <p className={`text-xs tracking-widest uppercase mb-4 font-semibold ${label}`}>Get In Touch</p>
//           <h2 className="font-display font-black leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(2rem,6vw,4.5rem)" }}>
//             Let's build something<br />
//             <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">amazing together</span>
//           </h2>
//           <p className={`text-base max-w-md mx-auto leading-relaxed ${muted}`}>Whether you have a project in mind or just want to say hello, my inbox is always open.</p>
//         </div>
//         <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
//           {[
//             { icon: "📧", label: "Email", val: "vunkhemra@gmail.com", href: "mailto:vunkhemra@gmail.com" },
//             { icon: "📱", label: "Phone", val: "+855 12 345 678", href: "tel:+85512345678" },
//             { icon: "📍", label: "Location", val: "Phnom Penh, KH", href: "#" },
//             { icon: "💻", label: "GitHub", val: "github.com/vunkhemra", href: "#" },
//           ].map(c => (
//             <a key={c.label} href={c.href}
//               className={`border rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-xl transition-all group ${contactCard}`}>
//               <span className="text-2xl">{c.icon}</span>
//               <div>
//                 <div className={`text-[10px] uppercase tracking-widest font-medium ${contactLbl}`}>{c.label}</div>
//                 <div className={`text-sm font-medium mt-0.5 transition-colors ${contactVal}`}>{c.val}</div>
//               </div>
//             </a>
//           ))}
//         </div>
//         <div className={`max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t ${borderC}`}>
//           <span className={`text-sm ${footerCopy}`}>© 2026 Vun Khemra. Crafted with ❤️ in Cambodia.</span>
//           <div className="flex gap-3">
//             {["GH", "in", "𝕏", "✈"].map((s, i) => (
//               <button key={i} className={`w-9 h-9 rounded-full border text-xs flex items-center justify-center transition-all ${socialBtn}`}>{s}</button>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }






import { useState, useEffect, useRef } from "react";
import germinai from './assets/germinai.jpg';

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
                    src={germinai}
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