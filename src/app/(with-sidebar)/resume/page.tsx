import { Briefcase, GraduationCap, Layers } from "lucide-react";
import Footer from "@/components/Footer";
import ResumeHeaderActions from "@/components/ResumeHeaderActions";
import styles from "./page.module.css";

export const metadata = {
  title: "Resume | Nithinnaresh - Product Designer",
  description: "Product Designer specializing in enterprise SaaS, workflow systems, and scalable design systems.",
};

const EXPERIENCE = [
  {
    role: "Product Designer",
    company: "Linarc",
    period: "Sep 2024 - Dec 2025",
    location: "Chennai, Tamil Nadu",
    bullets: [
      "Led end-to-end design for 6+ interconnected B2B SaaS modules, including Safety, Equipment Management, a single and multi-object report generator, and Checklists.",
      "Mapped ambiguous workflows into IA and interaction specs before handoff, reducing mid-development clarifications.",
      "Built a reusable UI pattern library (20+ components) for cross-module scalability.",
      "Ran stakeholder workshops to surface conflicting requirements early, and aligned scope with engineering feasibility.",
      "Managed parallel feature streams while keeping interaction patterns consistent, using AI tools to prototype variations early."
    ]
  }
];

const INDEPENDENT_WORK = {
  role: "Independent design work",
  period: "Dec 2025 - Present",
  summary: "RupeTap, a new design system, and two refreshed case studies.",
  selectedProjects: [
    {
      name: "RupeTap (concept, 2026)",
      description: "Two-app tap-to-pay concept so a shopkeeper's own phone can accept contactless payments, designed around the moment both sides need to be sure the payment landed."
    },
    {
      name: "Design System (2026)",
      description: "Atomic framework with 24+ components, 220+ variants and scalable tokens."
    },
    {
      name: "GearGuru (refreshed 2026)",
      description: "Restructured discovery and checkout around peer trust signals after finding community validation drives purchase confidence; validated with 17 users."
    },
    {
      name: "Structured Recovery (refreshed 2026)",
      description: "Adaptive rehabilitation platform prioritizing cognitive clarity and progressive safety; re-architected dashboard and booking flows over a 1.5-year evolution."
    }
  ]
};

const SKILL_CATEGORIES = [
  {
    title: "Design",
    skills: ["UX Research", "Interaction Design", "User Flows", "IA", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    title: "Tools",
    skills: ["Figma", "FigJam", "Miro", "Adobe CC (Photoshop, Illustrator)", "Maze"]
  },
  {
    title: "AI tools",
    skills: ["Cursor", "Stitch", "Claude", "Antigravity"]
  }
];

const EDUCATION = [
  {
    degree: "PG Program in UI/UX Design",
    school: "ICAT Design & Media College",
    year: "2023 – 2024"
  },
  {
    degree: "B.Sc Visual Communication",
    school: "Dr. GRD College",
    year: "2019 – 2022"
  }
];

export default function ResumePage() {
  return (
    <div className={styles.resumePage}>
      <div className={styles.container}>
        {/* ── HEADER ── */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.labelBadge}>Curriculum Vitae</span>
            <h1 className={styles.title}>
              Nithinnaresh <span className={styles.roleHighlight}>R K</span>
            </h1>
            <p className={styles.summary}>
              Product designer for workflow-heavy B2B SaaS, turning ambiguous operations into scalable systems and reusable patterns. I make complex flows feel simple, from enterprise modules to a mobile tap-to-pay concept, and prototype with AI tools.
            </p>
          </div>

          <ResumeHeaderActions />
        </header>

        {/* ── EXPERIENCE ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Briefcase size={22} color="#2563eb" />
            <span>Experience</span>
          </h2>

          <div className={styles.experienceList}>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className={styles.expCard}>
                <div className={styles.expHeader}>
                  <div className={styles.expRoleGroup}>
                    <h3 className={styles.expRole}>{exp.role}</h3>
                    <span className={styles.expCompany}>{exp.company}</span>
                  </div>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>{exp.period}</span>
                    <span className={styles.expLocation}>{exp.location}</span>
                  </div>
                </div>

                <ul className={styles.expBullets}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.expCard}>
              <div className={styles.expHeader}>
                <div className={styles.expRoleGroup}>
                  <h3 className={styles.expRole}>{INDEPENDENT_WORK.role}</h3>
                  <span className={styles.summary}>{INDEPENDENT_WORK.summary}</span>
                </div>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>{INDEPENDENT_WORK.period}</span>
                </div>
              </div>

              <h4 className={styles.skillCategoryTitle}>Selected Projects</h4>
              <ul className={styles.expBullets}>
                {INDEPENDENT_WORK.selectedProjects.map((proj, pIdx) => (
                  <li key={pIdx}>
                    <strong>{proj.name}:</strong> {proj.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SKILLS MATRIX ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Layers size={22} color="#2563eb" />
            <span>Core Competencies</span>
          </h2>

          <div className={styles.skillsGrid}>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className={styles.skillCard}>
                <h3 className={styles.skillCategoryTitle}>{cat.title}</h3>
                <div className={styles.skillPills}>
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className={styles.skillPill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <GraduationCap size={22} color="#2563eb" />
            <span>Education</span>
          </h2>

          <div className={styles.eduGrid}>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className={styles.eduCard}>
                <div>
                  <h3 className={styles.eduDegree}>{edu.degree}</h3>
                  <p className={styles.eduSchool}>{edu.school}</p>
                </div>
                <span className={styles.eduYear}>{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
