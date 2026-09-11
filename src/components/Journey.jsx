import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { journey } from "../data/portfolio";

export default function Journey() {
  return <section id="journey" className="section-shell section-muted"><div className="container"><SectionHeading eyebrow="04 / The Journey" title="Learning, building, progressing." /><div className="timeline">{journey.map((item, index) => <motion.article key={`${item.year}-${item.title}`} className="timeline-item" initial={{ opacity: 0, x: index % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}><span className="timeline-dot" /><div className="timeline-year">{item.year}</div><div className="timeline-content"><h3>{item.title}</h3><p>{item.text}</p></div></motion.article>)}</div></div></section>;
}
