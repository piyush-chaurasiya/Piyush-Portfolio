import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutTabs } from "../data/portfolio";

export default function About() {
  const [tab, setTab] = useState("summary");
  const current = useMemo(() => aboutTabs.find((item) => item.id === tab), [tab]);
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <SectionHeading eyebrow="01 / Behind the Code" title="A developer who likes to build." description="A quick look at my background, journey and the way I approach development." />
        <div className="about-card">
          <div className="about-tabs">
            {aboutTabs.map((item) => <button key={item.id} onClick={() => setTab(item.id)} className={tab === item.id ? "about-tab active" : "about-tab"}>{item.label}</button>)}
          </div>
          <motion.div key={current.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="about-content">
            <p>{current.content}</p>
            {tab === "academic" && <div className="metrics"><div><strong>8.25</strong><span>CGPA / 10</span></div><div><strong>2027</strong><span>Graduation</span></div><div><strong>B.Tech</strong><span>CSE</span></div></div>}
            {tab === "why" && <div className="feature-grid">{["Java + Spring Boot", "React & modern UI", "Real-world projects", "Problem solving"].map((item) => <div className="feature-chip" key={item}><CheckCircle2 size={17} />{item}</div>)}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
