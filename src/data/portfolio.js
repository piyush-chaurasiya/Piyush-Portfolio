export const navItems = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Journey", "journey"], ["Contact", "contact"],
];

export const profile = {
  name: "Piyush Chaurasiya",
  title: "Java Full Stack Developer",
  subtitle: "Web Developer · Programmer · Learner",
  location: "Greater Noida, India",
  email: "piyushchaurasiyaa@gmail.com",
  phone: "+91 9621480250",
  education: "B.Tech CSE · Greater Noida Institute of Technology",
  graduation: "2027",
  cgpa: "8.25/10",
};

export const socialLinks = {
  github: "https://github.com/piyush-chaurasiya",
  linkedin: "https://www.linkedin.com/in/piyushchaurasiya",
  leetcode: "https://leetcode.com/u/piyush_chaurasiya_/",
  email: "mailto:piyushchaurasiyaa@gmail.com",
  phone: "tel:+919621480250",
};

export const projects = [
  { title: "Campus Recruitment Portal", description: "A role-based recruitment platform for Students, Recruiters, Placement Officers and Admins with authentication, job postings, applications and recruitment workflows.", stack: ["React", "Tailwind CSS", "Spring Boot", "JWT", "MySQL"], github: "https://github.com/piyush-chaurasiya/Campus-Recruitment-Portal", live: "#" },
  { title: "Reality Check", description: "A Chrome extension that helps classify selected news as real or fake using trusted data sources, external APIs and multilingual content analysis.", stack: ["HTML", "CSS", "JavaScript", "Spring Boot", "Maven"], github: "https://github.com/Palakshrivas/Fake-News-Dectector-Extension", live: "#" },
  { title: "Brain Battle", description: "A multiplayer quiz game where multiple players connect over Wi-Fi and play together with synchronized real-time gameplay.", stack: ["React", "Tailwind CSS", "Spring Boot", "WebSocket", "Java"], github: "https://github.com/piyush-chaurasiya/first-multiplayer-game", live: "#" },
];

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
export const certificates = [
  { title: "Python Programming Internship", issuer: "EISYSTEMS TECHNOLOGIES / Robokwik", file: asset("certificates/python-internship.pdf"), meta: "June – August 2026" },
  { title: "Data Structures and Algorithms Design", issuer: "NPTEL · IIT Kanpur", file: asset("certificates/nptel-dsa.pdf"), meta: "NPTEL Online Certification" },
  { title: "Generative AI Literacy", issuer: "FutureSkills Prime · NASSCOM", file: asset("certificates/gen-ai-literacy.pdf"), meta: "Certificate of Learning" },
  { title: "i-Hack Gaming Hackathon", issuer: "E-Cell · IIT Bombay", file: asset("certificates/i-hack-gaming.pdf"), meta: "E-Summit participation" },
  { title: "GfG 160 Days of Problem Solving", issuer: "GeeksforGeeks", file: asset("certificates/gfg-160-days.pdf"), meta: "160 Days Challenge" },
  { title: "Summer Analytics 2025", issuer: "Consulting & Analytics Club · IIT Guwahati", file: asset("certificates/iit-guwahati-summer-analytics.pdf"), meta: "Data Science & ML program" },
];

export const skills = { languages: ["Java", "Python", "C++", "Go"], frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS"], backend: ["Spring Boot", "Hibernate", "Spring Data JPA", "REST APIs", "WebSocket", "JWT"], database: ["SQL", "MySQL", "MongoDB"], tools: ["Git", "GitHub", "Docker", "Maven", "VS Code"] };

export const journey = [
  { year: "2023", title: "B.Tech CSE", text: "Started Bachelor of Technology in Computer Science and Engineering at Greater Noida Institute of Technology." },
  { year: "2025", title: "DSA & Analytics", text: "Completed NPTEL Data Structures and Algorithms Design and participated in IIT Guwahati Summer Analytics." },
  { year: "2026", title: "Industry Training", text: "Pursued Java Full Stack Training and Python Programming Internship with hands-on application development and practical assignments." },
  { year: "2026", title: "GATE Qualified", text: "Qualified GATE 2026 — a major academic milestone reflecting consistent preparation and strong computer science fundamentals." },
  { year: "2027", title: "Graduation Goal", text: "Targeting graduation with a strong full-stack project portfolio and a career in Java Full Stack Development." },
];

export const aboutTabs = [
  { id: "summary", label: "Quick Summary", content: "I’m a B.Tech Computer Science student focused on Java Full Stack Development. I work with Java, Spring Boot, React, REST APIs, and databases to build scalable and user-focused web applications. I enjoy turning ideas into practical solutions while continuously improving my development and problem-solving skills." },
  { id: "journey", label: "Professional Journey", content: "I started my journey with programming fundamentals and gradually moved toward full-stack development through continuous learning, internships, and project-based experience. Building applications has helped me understand not just how to write code, but how different technologies come together to solve real-world problems." },
  { id: "academic", label: "Academic Background", content: "B.Tech in Computer Science and Engineering at Greater Noida Institute of Technology, with a current CGPA of 8.25/10 and expected graduation in 2027." },
  { id: "why", label: "Why Me?", content: "I combine backend fundamentals, modern frontend development, problem solving and a learning mindset. My goal is not just to write code, but to build complete experiences that solve real problems." },
];
