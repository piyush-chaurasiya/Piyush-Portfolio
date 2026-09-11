import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

export default function Skills() {
  const groups = [["01", "Languages", skills.languages], ["02", "Frontend", skills.frontend], ["03", "Backend", skills.backend], ["04", "Database", skills.database], ["05", "Developer Tools", skills.tools]];
  return (
    <section id="skills" className="section-shell section-muted">
      <div className="container">
        <SectionHeading eyebrow="02 / What I Build With" title="My technical toolkit." description="A practical stack focused on full-stack web development and backend engineering." />
        <div className="skill-grid">
          {groups.map(([number, title, items]) => <motion.article key={title} className="skill-card" whileHover={{ y: -7 }} transition={{ duration: 0.2 }}>
            <div className="skill-top"><span>{number}</span><Code2 size={18} /></div>
            <h3>{title}</h3>
            <div className="pill-wrap">{items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}
