# Piyush Chaurasiya Portfolio

A professional Java Full Stack Developer portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── assets/
│   └── images/
│       └── profile.jpeg
├── components/
│   ├── About.jsx
│   ├── Achievement.jsx
│   ├── Certificates.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Journey.jsx
│   ├── Navbar.jsx
│   ├── ProjectsSection.jsx
│   ├── SectionHeading.jsx
│   └── Skills.jsx
├── data/
│   └── portfolio.js
├── pages/
│   └── LegalPage.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx

public/
├── certificates/
└── resume/
```

## Main features

- Responsive portfolio layout
- Light/dark mode
- GitHub + LinkedIn header actions
- Dynamic developer code-card typing animation
- Auto-scrolling project carousel with forward looping
- Auto-scrolling certificate carousel with forward looping
- Hover-to-pause carousel behavior
- GATE 2026 achievement highlight
- Professional footer
- Privacy Policy and Terms & Conditions sections
- GitHub Pages deployment workflow

## Update your details

Edit `src/data/portfolio.js` to update profile information, social links, projects, certificates, skills and journey content.

Replace the files inside `public/resume/` and `public/certificates/` when you want to update the resume or certificates.


## Local development (important)

Always open the **extracted project folder** (the folder containing `package.json`) in VS Code. Do not edit files inside the ZIP.

Run:

```bash
npm install
npm run dev
```

Then open the `localhost` URL printed by Vite.

Vite is configured for reliable Hot Module Replacement (HMR). Source edits under `src/` should update the localhost page automatically. If an old page is still shown, stop the server with `Ctrl+C` and run `npm run dev` again.

The Vite base path is `/` during local development and `/Piyush-Portfolio/` only for production/GitHub Pages, so local assets resolve independently from the deployed site.
