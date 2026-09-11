import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, socialLinks } from "../data/portfolio";

export default function Navbar({ active, dark, setDark, menuOpen, setMenuOpen, go }) {
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
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
            <Linkedin size={18} />
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
            <div className="mobile-socials">
              <a href={socialLinks.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
