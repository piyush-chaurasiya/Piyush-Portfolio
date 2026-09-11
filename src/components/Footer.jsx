import { ArrowUp, Code2, Github, Linkedin, Mail } from "lucide-react";
import { navItems, profile, socialLinks } from "../data/portfolio";

export default function Footer({ go }) {
  return <footer className="site-footer"><div className="container footer-inner">
    <div className="footer-top">
      <div className="footer-brand"><button onClick={() => go("home")}><span>{profile.name}</span><b>.</b></button><p>Java Full Stack Developer building practical, scalable and user-focused digital experiences.</p></div>
      <div className="footer-column"><h4>Explore</h4>{navItems.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div>
      <div className="footer-column"><h4>Legal</h4><a href="#privacy-policy">Privacy Policy</a><a href="#terms">Terms & Conditions</a></div>
      <div className="footer-column"><h4>Connect</h4><a href={socialLinks.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href={socialLinks.email}><Mail size={15} /> Email</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span><span className="footer-tech"><Code2 size={14} /> Built with React • Java • Spring Boot</span><button onClick={() => go("home")} className="back-top">Back to top <ArrowUp size={14} /></button></div>
  </div></footer>;
}
