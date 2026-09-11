import { useEffect, useRef, useState } from "react";
import { Code2, ChevronLeft, ChevronRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const timerRef = useRef(null);
  const carouselProjects = [...projects, projects[0]];

  useEffect(() => {
    if (hovered) return undefined;
    timerRef.current = setInterval(() => setIndex((value) => value + 1), 3600);
    return () => clearInterval(timerRef.current);
  }, [hovered]);

  useEffect(() => {
    if (index !== projects.length) return undefined;
    const timer = setTimeout(() => {
      setTransitionEnabled(false);
      setIndex(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setTransitionEnabled(true)));
    }, 600);
    return () => clearTimeout(timer);
  }, [index]);

  const move = (direction) => {
    setTransitionEnabled(true);
    setIndex((value) => {
      if (direction > 0) return value + 1;
      return value === 0 ? projects.length - 1 : value - 1;
    });
  };

  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <div className="section-row">
          <SectionHeading eyebrow="03 / Selected Work" title="Things I’ve built." description="Real projects that show how I approach interfaces, backend systems and real-time functionality." />
          <div className="carousel-controls desktop-only"><button onClick={() => move(-1)} className="round-btn" aria-label="Previous project"><ChevronLeft /></button><button onClick={() => move(1)} className="round-btn" aria-label="Next project"><ChevronRight /></button></div>
        </div>
        <div className="carousel-window" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="project-track" style={{ transform: `translateX(-${index * 100}%)`, transition: transitionEnabled ? "transform .6s cubic-bezier(.2,.8,.2,1)" : "none" }}>
            {carouselProjects.map((project, i) => <article className="project-card" key={`${project.title}-${i}`}>
              <div className="project-label"><Code2 size={16} /> FULL STACK PROJECT</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="pill-wrap project-pills">{project.stack.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}</div>
              <div className="project-links">
                <a href={project.github} target={project.github === "#" ? undefined : "_blank"} rel="noreferrer"><Github size={16} /> GitHub</a>
                <a href={project.live} target={project.live === "#" ? undefined : "_blank"} rel="noreferrer">Live Demo <ChevronRight size={16} /></a>
              </div>
            </article>)}
          </div>
        </div>
        <div className="carousel-mobile-controls"><div><button onClick={() => move(-1)} className="round-btn" aria-label="Previous project"><ChevronLeft /></button><button onClick={() => move(1)} className="round-btn" aria-label="Next project"><ChevronRight /></button></div></div>
      </div>
    </section>
  );
}
