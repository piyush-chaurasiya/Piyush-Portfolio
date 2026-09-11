import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import Journey from "./components/Journey";
import Certificates from "./components/Certificates";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LegalPage from "./pages/LegalPage";
import { navItems } from "./data/portfolio";

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [legalPage, setLegalPage] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return hash === "privacy-policy" || hash === "terms" ? hash : null;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setLegalPage(hash === "privacy-policy" || hash === "terms" ? hash : null);
      if (!hash) setActive("home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-28% 0px -62% 0px", threshold: [0.08, 0.2, 0.5] });
    navItems.forEach(([, id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  if (legalPage) {
    return <div className="app-shell legal-app">
      <LegalPage type={legalPage} />
    </div>;
  }

  return <div className="app-shell">
    <Navbar active={active} dark={dark} setDark={setDark} menuOpen={menuOpen} setMenuOpen={setMenuOpen} go={go} />
    <main>
      <Hero go={go} /><About /><Skills /><ProjectsSection /><Journey /><Certificates /><Achievement /><Contact />
    </main>
    <Footer go={go} />
  </div>;
}

export default App;
