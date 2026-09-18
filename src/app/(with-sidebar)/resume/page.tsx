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
    period: "Sep 2024 – Dec 2025",
    location: "Chennai, Tamil Nadu",
    bullets: [
      "Led end-to-end design for 6+ interconnected B2B SaaS modules including Safety, Equipment Management, Single Object, and Checklists.",
      "Mapped ambiguous operational workflows into documented IA and interaction specs before handoff, reducing mid-development design clarifications across 6+ modules.",
      "Established reusable UI patterns (20+ components) and foundational design logic to support cross-module scalability.",
      "Facilitated stakeholder workshops to surface conflicting requirements early, aligning product, design, and engineering on feature scope before development began.",
      "Collaborated closely with engineering to align usability goals with technical feasibility during implementation cycles.",
      "Managed parallel feature streams while maintaining product-wide interaction consistency.",
      "Integrated AI-assisted tools into early design workflows to rapidly prototype variations and refine complex interaction patterns."
    ]
  }
];

const SKILL_CATEGORIES = [
  {
    title: "Design",
    skills: ["UX Research", "Interaction Design", "User Flows", "Information Architecture", "Wireframing", "Prototyping", "Design Systems", "Component Architecture"]
  },
  {
    title: "Tools",
    skills: ["Figma", "FigJam", "Miro", "Adobe CC (Photoshop, Illustrator)", "Maze"]
  },
  {
    title: "AI-Assisted Prototyping",
    skills: ["Cursor", "Loveable"]
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
              Product Designer specializing in workflow-heavy B2B SaaS platforms. Experienced in structuring ambiguous operational problems into scalable systems, reusable interaction patterns, and cross-module product experiences.
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
