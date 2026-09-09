import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  X,
} from "lucide-react";
import {
  aboutTabs,
  certificates,
  journey,
  profile,
  projects,
  skills,
  socialLinks,
} from "./data/portfolio";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];

const typeLines = [
  'String role = "Full Stack";',
  'String backend = "Java + Spring Boot";',
  'String frontend = "React";',
  'String database = "MySQL + MongoDB";',
  'String mindset = "Build. Learn. Improve.";',
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -62% 0px", threshold: [0.08, 0.2, 0.5] }
    );

    navItems.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <Navbar active={active} dark={dark} setDark={setDark} menuOpen={menuOpen} setMenuOpen={setMenuOpen} go={go} />
      <main>
        <Hero go={go} />
        <About />
        <Skills />
        <ProjectsSection />
        <Journey />
        <Certificates />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar({ active, dark, setDark, menuOpen, setMenuOpen, go }) {
  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <button className="brand" onClick={() => go("home")} aria-label="Go to home">
          Piyush Chaurasiya<span>.</span>
        </button>

        <div className="desktop-nav">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => go(id)} className={`nav-link ${active === id ? "nav-link-active" : ""}`}>
              {label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="icon-btn desktop-only" aria-label="GitHub">
            <Github size={18} />
          </a>
          <button className="icon-btn" onClick={() => setDark((value) => !value)} aria-label="Toggle dark mode">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn mobile-only" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => go(id)} className={active === id ? "mobile-active" : ""}>
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero({ go }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-orb orb-three" />

      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="availability"><span /> Available for opportunities</div>
          <p className="hello">Hi, I’m Piyush 👋</p>
          <h1>
            Java Full Stack
            <span>Developer.</span>
          </h1>
          <p className="hero-description">
            I build scalable web applications with Java, Spring Boot and React — turning ideas into practical, user-focused digital experiences.
          </p>

          <div className="hero-actions">
            <button onClick={() => go("projects")} className="primary-btn">View my work <ArrowRight size={17} /></button>
            <a href="/resume/Piyush_Resume.pdf" download className="secondary-btn"><Download size={17} /> Resume</a>
          </div>

          <div className="hero-points">
            <span><Code2 size={16} /> Full Stack Development</span>
            <span><Terminal size={16} /> Problem Solving</span>
            <span><Sparkles size={16} /> Continuous Learning</span>
          </div>

          <button className="gate-mini" onClick={() => document.getElementById("achievement")?.scrollIntoView({ behavior: "smooth" })}>
            <span className="gate-icon"><Trophy size={17} /></span>
            <span><b>GATE 2026 Qualified</b><small>A milestone in CS fundamentals & consistency</small></span>
            <ArrowRight size={16} />
          </button>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img src="/images/profile.jpeg" alt="Piyush Chaurasiya" />
            </div>
          </div>
          <DynamicCodeCard />
          <div className="floating-tag tag-top"><Sparkles size={14} /> Java + Spring Boot</div>
          <div className="floating-tag tag-bottom"><CheckCircle2 size={14} /> Building real projects</div>
        </motion.div>
      </div>

      <button className="scroll-hint" onClick={() => go("about")} aria-label="Scroll to about"><ArrowDown size={20} /></button>
    </section>
  );
}

function DynamicCodeCard() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = typeLines[lineIndex];
    const delay = deleting ? 32 : 58;
    const timer = setTimeout(() => {
      if (!deleting && displayed.length < target.length) {
        setDisplayed(target.slice(0, displayed.length + 1));
      } else if (!deleting && displayed.length === target.length) {
        setTimeout(() => setDeleting(true), 900);
      } else if (deleting && displayed.length > 0) {
        setDisplayed(target.slice(0, displayed.length - 1));
      } else {
        setDeleting(false);
        setLineIndex((value) => (value + 1) % typeLines.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [displayed, deleting, lineIndex]);

  return (
    <motion.div className="code-card" animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
      <div className="code-head"><span>developer.java</span><div><i /><i /><i /></div></div>
      <div className="code-body">
        <div className="code-line muted-code">public class Developer {'{'}</div>
        <div className="code-line">&nbsp;&nbsp;{displayed}<span className="cursor" /></div>
        <div className="code-line muted-code">{'}'}</div>
      </div>
    </motion.div>
  );
}

function About() {
  const [tab, setTab] = useState("summary");
  const current = useMemo(() => aboutTabs.find((item) => item.id === tab), [tab]);

  return (
    <section id="about" className="section-shell">
      <div className="container">
        <SectionHeading eyebrow="01 / Behind the Code" title="A developer who likes to build." description="A quick look at my background, journey and the way I approach development." />
        <div className="about-card">
          <div className="about-tabs">
            {aboutTabs.map((item) => (
              <button key={item.id} onClick={() => setTab(item.id)} className={tab === item.id ? "about-tab active" : "about-tab"}>
                {item.label}
              </button>
            ))}
          </div>
          <motion.div key={current.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="about-content">
            <p>{current.content}</p>
            {tab === "academic" && (
              <div className="metrics"><div><strong>8.25</strong><span>CGPA / 10</span></div><div><strong>2027</strong><span>Graduation</span></div><div><strong>B.Tech</strong><span>CSE</span></div></div>
            )}
            {tab === "why" && (
              <div className="feature-grid">{["Java + Spring Boot", "React & modern UI", "Real-world projects", "Problem solving"].map((item) => <div className="feature-chip" key={item}><CheckCircle2 size={17} />{item}</div>)}</div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    ["01", "Languages", skills.languages],
    ["02", "Frontend", skills.frontend],
    ["03", "Backend", skills.backend],
    ["04", "Database", skills.database],
    ["05", "Developer Tools", skills.tools],
  ];

  return (
    <section id="skills" className="section-shell section-muted">
      <div className="container">
        <SectionHeading eyebrow="02 / What I Build With" title="My technical toolkit." description="A practical stack focused on full-stack web development and backend engineering." />
        <div className="skill-grid">
          {groups.map(([number, title, items]) => (
            <motion.article key={title} className="skill-card" whileHover={{ y: -7 }} transition={{ duration: 0.2 }}>
              <div className="skill-top"><span>{number}</span><Code2 size={18} /></div>
              <h3>{title}</h3>
              <div className="pill-wrap">{items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (hovered) return undefined;
    timerRef.current = setInterval(() => setIndex((value) => (value + 1) % projects.length), 3000);
    return () => clearInterval(timerRef.current);
  }, [hovered]);

  const move = (direction) => setIndex((value) => (value + direction + projects.length) % projects.length);

  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <div className="section-row">
          <SectionHeading eyebrow="03 / Selected Work" title="Things I’ve built." description="Real projects that show how I approach interfaces, backend systems and real-time functionality." />
          <div className="carousel-controls desktop-only"><button onClick={() => move(-1)} className="round-btn"><ChevronLeft /></button><button onClick={() => move(1)} className="round-btn"><ChevronRight /></button></div>
        </div>

        <div className="carousel-window" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="project-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-label"><Code2 size={16} /> FULL STACK PROJECT</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="pill-wrap project-pills">{project.stack.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}</div>
                <div className="project-links">
                  <a href={project.github} target={project.github === "#" ? undefined : "_blank"} rel="noreferrer"> <Github size={16} /> GitHub</a>
                  <a href={project.live} target={project.live === "#" ? undefined : "_blank"} rel="noreferrer">Live Demo <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="carousel-mobile-controls"><span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><div><button onClick={() => move(-1)} className="round-btn"><ChevronLeft /></button><button onClick={() => move(1)} className="round-btn"><ChevronRight /></button></div></div>
        <p className="auto-note">Auto-scrolling · hover to pause</p>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section-shell section-muted">
      <div className="container">
        <SectionHeading eyebrow="04 / The Journey" title="Learning, building, progressing." />
        <div className="timeline">
          {journey.map((item, index) => (
            <motion.article key={`${item.year}-${item.title}`} className="timeline-item" initial={{ opacity: 0, x: index % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
              <span className="timeline-dot" />
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content"><h3>{item.title}</h3><p>{item.text}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 700 ? 1 : window.innerWidth < 1050 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const max = Math.max(0, certificates.length - visible);

  useEffect(() => {
    if (hovered) return undefined;
    const timer = setInterval(() => setIndex((value) => (value >= max ? 0 : value + 1)), 3000);
    return () => clearInterval(timer);
  }, [hovered, max]);

  useEffect(() => {
    if (index > max) setIndex(0);
  }, [max, index]);

  const move = (direction) => setIndex((value) => (value + direction > max ? 0 : value + direction < 0 ? max : value + direction));

  return (
    <section id="certificates" className="section-shell">
      <div className="container">
        <div className="section-row">
          <SectionHeading eyebrow="05 / Proof of Learning" title="Certificates & participation." description="Swipe, drag or let the showcase move automatically. Hover over it to pause." />
          <div className="carousel-controls desktop-only"><button onClick={() => move(-1)} className="round-btn"><ChevronLeft /></button><button onClick={() => move(1)} className="round-btn"><ChevronRight /></button></div>
        </div>

        <div className="certificate-window" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="certificate-track" style={{ transform: `translateX(calc(-${index} * (var(--cert-width) + 1rem)))` }}>
            {certificates.map((cert) => (
              <a className="certificate-card" href={cert.file} target="_blank" rel="noreferrer" key={cert.title}>
                <div className="certificate-preview">
                  <iframe src={`${cert.file}#page=1&view=FitH`} title={cert.title} />
                  <div className="preview-overlay"><span>Open certificate</span><ExternalLink size={15} /></div>
                </div>
                <div className="certificate-info"><p>{cert.issuer}</p><h3>{cert.title}</h3><span>{cert.meta}</span></div>
              </a>
            ))}
          </div>
        </div>
        <div className="carousel-mobile-controls"><span>{index + 1} / {Math.max(1, max + 1)}</span><div><button onClick={() => move(-1)} className="round-btn"><ChevronLeft /></button><button onClick={() => move(1)} className="round-btn"><ChevronRight /></button></div></div>
        <p className="auto-note">Auto-scrolling · pauses while you explore</p>
      </div>
    </section>
  );
}

function Achievement() {
  return (
    <section id="achievement" className="achievement-section">
      <div className="achievement-card">
        <div className="achievement-pattern" />
        <div className="achievement-content">
          <div className="achievement-copy">
            <p className="section-eyebrow light-eyebrow">06 / Major Achievement</p>
            <div className="achievement-title"><span>GATE</span><strong>2026</strong><em>QUALIFIED</em></div>
            <p>Qualified GATE 2026 — a major academic milestone that represents consistent preparation, problem solving and strong computer science fundamentals.</p>
            <div className="achievement-tags"><span><Trophy size={15} /> Academic milestone</span><span><Award size={15} /> Computer Science</span><span><CheckCircle2 size={15} /> Qualified</span></div>
          </div>
          <div className="achievement-badge"><div><Trophy size={44} /><b>GATE</b><strong>2026</strong><small>QUALIFIED</small></div></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="container">
        <SectionHeading eyebrow="07 / Let’s Connect" title="Have an opportunity in mind?" description="I’m open to conversations about development, projects, internships and meaningful opportunities." />
        <div className="contact-grid">
          <div className="contact-card main-contact">
            <div className="contact-icon"><Mail /></div>
            <h3>Let’s build something useful.</h3>
            <p>Drop me an email and let’s talk about what we can create together.</p>
            <a href={socialLinks.email} className="primary-btn">Email Piyush <ArrowRight size={17} /></a>
          </div>
          <div className="contact-list">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin /><span><b>LinkedIn</b><small>Connect professionally</small></span><ArrowRight className="contact-arrow" /></a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="contact-link"><Github /><span><b>GitHub</b><small>Explore my code</small></span><ArrowRight className="contact-arrow" /></a>
            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer" className="contact-link"><Code2 /><span><b>LeetCode</b><small>See my problem solving</small></span><ArrowRight className="contact-arrow" /></a>
            <a href={socialLinks.phone} className="contact-link"><Phone /><span><b>{profile.phone}</b><small>Call / connect</small></span><ArrowRight className="contact-arrow" /></a>
            <div className="contact-link static"><MapPin /><span><b>{profile.location}</b><small>{profile.education}</small></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Piyush Chaurasiya. Built with React & Tailwind CSS.</p>
        <div><a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={socialLinks.leetcode} target="_blank" rel="noreferrer">LeetCode</a></div>
      </div>
    </footer>
  );
}

export default App;
