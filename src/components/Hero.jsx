import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, CheckCircle2, Code2, Download, Sparkles, Terminal, Trophy } from "lucide-react";
import profileImage from "../assets/images/profile.jpeg";
import { profile } from "../data/portfolio";

const typeLines = [
  'String role = "Full Stack";',
  'String backend = "Java + Spring Boot";',
  'String frontend = "React";',
  'String database = "MySQL + MongoDB";',
  'String mindset = "Build. Learn. Improve.";',
];

function DynamicCodeCard() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = typeLines[lineIndex];
    const delay = deleting ? 30 : 55;
    const timer = setTimeout(() => {
      if (!deleting && displayed.length < target.length) {
        setDisplayed(target.slice(0, displayed.length + 1));
      } else if (!deleting && displayed.length === target.length) {
        setDeleting(true);
      } else if (deleting && displayed.length > 0) {
        setDisplayed(target.slice(0, displayed.length - 1));
      } else {
        setDeleting(false);
        setLineIndex((value) => (value + 1) % typeLines.length);
      }
    }, !deleting && displayed.length === target.length ? 1000 : delay);
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

export default function Hero({ go }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-orb orb-three" />
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="availability"><span /> Available for opportunities</div>
          <p className="hello">Hi, I’m Piyush 👋</p>
          <h1>Java Full Stack<span>Developer.</span></h1>
          <p className="hero-description">I build scalable web applications with Java, Spring Boot and React — turning ideas into practical, user-focused digital experiences.</p>
          <div className="hero-actions">
            <button onClick={() => go("projects")} className="primary-btn">View my work <ArrowRight size={17} /></button>
            <a href={`${import.meta.env.BASE_URL}resume/Piyush_Resume.pdf`} download className="secondary-btn"><Download size={17} /> Resume</a>
          </div>
          <div className="hero-points">
            <span><Code2 size={16} /> Full Stack Development</span>
            <span><Terminal size={16} /> Problem Solving</span>
            <span><Sparkles size={16} /> Continuous Learning</span>
          </div>
          <button className="gate-mini" onClick={() => document.getElementById("achievement")?.scrollIntoView({ behavior: "smooth" })}>
            <span className="gate-icon"><Trophy size={19} /></span>
            <span><b>GATE 2026 Qualified</b><small>A milestone in CS fundamentals & consistency</small></span>
            <ArrowRight size={18} />
          </button>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <div className="portrait-frame"><img src={profileImage} alt={profile.name} /></div>
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
