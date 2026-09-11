import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";

const content = {
  "privacy-policy": {
    icon: ShieldCheck,
    eyebrow: "Legal / Privacy",
    title: "Privacy Policy",
    intro:
      "This portfolio is a personal website created to showcase Piyush Chaurasiya’s projects, skills, achievements and professional profile.",
    sections: [
      ["Information", "The site does not intentionally collect sensitive personal information. If you contact Piyush by email or another linked service, the information you provide is used only to respond to your message or opportunity."],
      ["External links", "This website contains links to services such as GitHub, LinkedIn and LeetCode. Their own privacy policies and terms apply when you visit those services."],
      ["Cookies and local storage", "The portfolio may use browser local storage for preferences such as the selected theme. This information stays in your browser and is not used to identify you."],
      ["Updates", "This policy may be updated when the portfolio or its features change."]
    ]
  },
  terms: {
    icon: FileText,
    eyebrow: "Legal / Terms",
    title: "Terms & Conditions",
    intro:
      "By using this portfolio, you agree to use its content for lawful and reasonable purposes.",
    sections: [
      ["Portfolio content", "Project descriptions, written content, design elements and personal portfolio materials are provided for professional and informational purposes. Please do not copy or republish them as your own work."],
      ["Project links", "Some projects may link to external repositories or demonstrations. Availability and functionality of external services are outside the control of this portfolio."],
      ["No warranty", "The portfolio and its external project links are provided for informational purposes. No guarantee is made regarding the uninterrupted availability or future functionality of linked services."],
      ["Contact", "For questions about portfolio content or permitted use, please contact Piyush through the contact information provided on the website."]
    ]
  }
};

export default function LegalPage({ type }) {
  const page = content[type] || content["privacy-policy"];
  const Icon = page.icon;

  const backToPortfolio = () => {
    if (window.location.hash) {
      window.history.back();
    } else {
      window.location.hash = "";
    }
  };

  return (
    <main className="legal-page">
      <div className="container">
        <button className="legal-back" onClick={backToPortfolio}>
          <ArrowLeft size={16} /> Back to portfolio
        </button>

        <article className="legal-card legal-page-card">
          <div className="legal-page-icon"><Icon size={24} /></div>
          <p className="section-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="legal-intro">{page.intro}</p>

          {page.sections.map(([heading, text]) => (
            <section className="legal-block" key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}

          <button className="secondary-btn legal-return" onClick={backToPortfolio}>
            <ArrowLeft size={16} /> Return to portfolio
          </button>
        </article>
      </div>
    </main>
  );
}
