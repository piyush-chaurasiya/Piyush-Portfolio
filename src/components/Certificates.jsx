import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 700 ? 1 : window.innerWidth < 1050 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const carouselCertificates = [...certificates, ...certificates.slice(0, visible)];

  useEffect(() => {
    if (hovered) return undefined;
    const timer = setInterval(() => setIndex((value) => value + 1), 3800);
    return () => clearInterval(timer);
  }, [hovered]);

  useEffect(() => {
    if (index < certificates.length) return undefined;
    const timer = setTimeout(() => {
      setTransitionEnabled(false);
      setIndex(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setTransitionEnabled(true)));
    }, 650);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const maxSafeIndex = Math.max(0, certificates.length - 1);
    if (index > certificates.length) setIndex(maxSafeIndex);
  }, [index]);

  const move = (direction) => {
    setTransitionEnabled(true);
    setIndex((value) => direction > 0 ? value + 1 : value === 0 ? certificates.length - 1 : value - 1);
  };

  return <section id="certificates" className="section-shell"><div className="container">
    <div className="section-row"><SectionHeading eyebrow="05 / Proof of Learning" title="Certificates & participation." description="A collection of certifications and learning milestones that reflect my continuous growth." /><div className="carousel-controls desktop-only"><button onClick={() => move(-1)} className="round-btn" aria-label="Previous certificate"><ChevronLeft /></button><button onClick={() => move(1)} className="round-btn" aria-label="Next certificate"><ChevronRight /></button></div></div>
    <div className="certificate-window" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="certificate-track" style={{ transform: `translateX(calc(-${index} * (var(--cert-width) + 1rem)))`, transition: transitionEnabled ? "transform .65s cubic-bezier(.2,.8,.2,1)" : "none" }}>
        {carouselCertificates.map((cert, i) => <a className="certificate-card" href={cert.file} target="_blank" rel="noreferrer" key={`${cert.title}-${i}`}>
          <div className="certificate-preview"><iframe src={`${cert.file}#page=1&view=FitH`} title={cert.title} /><div className="preview-overlay"><span>Open certificate</span><ExternalLink size={15} /></div></div>
          <div className="certificate-info"><p>{cert.issuer}</p><h3>{cert.title}</h3><span>{cert.meta}</span></div>
        </a>)}
      </div>
    </div>
    <div className="carousel-mobile-controls"><div><button onClick={() => move(-1)} className="round-btn" aria-label="Previous certificate"><ChevronLeft /></button><button onClick={() => move(1)} className="round-btn" aria-label="Next certificate"><ChevronRight /></button></div></div>
  </div></section>;
}
