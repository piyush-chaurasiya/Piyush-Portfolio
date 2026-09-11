import { Award, CheckCircle2, Trophy } from "lucide-react";

export default function Achievement() {
  return <section id="achievement" className="achievement-section"><div className="achievement-card"><div className="achievement-pattern" /><div className="achievement-content"><div className="achievement-copy"><p className="section-eyebrow light-eyebrow">06 / Major Achievement</p><div className="achievement-title"><span>GATE</span><strong>2026</strong><em>QUALIFIED</em></div><p>Qualified GATE 2026 — a major academic milestone that represents consistent preparation, problem solving and strong computer science fundamentals.</p><div className="achievement-tags"><span><Trophy size={15} /> Academic milestone</span><span><Award size={15} /> Computer Science</span><span><CheckCircle2 size={15} /> Qualified</span></div></div><div className="achievement-badge"><div><Trophy size={44} /><b>GATE</b><strong>2026</strong><small>QUALIFIED</small></div></div></div></div></section>;
}
