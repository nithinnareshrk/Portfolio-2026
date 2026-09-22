"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import WorksProjectCard from "@/components/WorksProjectCard";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

// ── sessionStorage keys ───────────────────────────────
const SS_FILTER = "works_activeFilter";
const SS_SCROLL = "works_scrollY";

const WORKS_DATA = [
  {
    title: "Workflow-Driven T&M System",
    description: "A streamlined T&M workflow that simplifies site tracking, approvals, and reporting across teams.",
    imageUrl: "/images/works/T&M thumbnail.jpg",
    link: "/works/tnm",
    tags: ["LINARC WORKS", "WEB & MOBILE", "WORKFLOW HEAVY"],
    markerColor: "#FF9201",
    category: "LINARC WORKS",
  },
  {
    title: "The Journal",
    description: "A unified Journal workflow that centralizes daily site updates, tracking, and reporting for better visibility and control.",
    imageUrl: "/images/works/Journal Thumbnail.jpg",
    link: "/works/journal",
    tags: ["LINARC WORKS", "WEB & MOBILE"],
    markerColor: "#FF9201",
    category: "LINARC WORKS",
  },
  {
    title: "Report Generator",
    description: "Streamlined report generator for clear, structured document creation.",
    imageUrl: "/images/works/Single Object thumbnail.jpg",
    link: "/works/single-object",
    tags: ["LINARC WORKS", "WEB"],
    markerColor: "#FF9201",
    category: "LINARC WORKS",
  },
  {
    title: "Market place",
    description: "A simplified Marketplace workflow for integrations and data mapping.",
    imageUrl: "/images/works/Marketplace Thumbnail.jpg",
    link: "/works/marketplace",
    tags: ["LINARC WORKS", "WEB"],
    markerColor: "#FF9201",
    category: "LINARC WORKS",
  },
  {
    title: "Toolbox Talk",
    description: "Toolbox transforms safety from documents and checklists into real, trackable on-site actions.",
    imageUrl: "/images/works/Safty thumbnail.jpg",
    link: "/works/toolbox-talk",
    tags: ["LINARC WORKS", "WEB & MOBILE"],
    markerColor: "#FF9201",
    status: "STATUS: SCALING",
    category: "LINARC WORKS",
  },
  {
    title: "Design System",
    description: "Modular system that scaled design consistency across software.",
    imageUrl: "/images/works/design system thumbnail.jpg",
    link: "https://www.behance.net/gallery/244966603/Atomic-Design-System",
    tags: ["PERSONAL PROJECT", "DESIGN SYSTEM"],
    markerColor: "#7900C4",
    category: "DESIGN SYSTEM",
    external: true,
  },
  {
    title: "Rehabilitation",
    description: "Tracking recovery progress and managing rehabilitation routines.",
    imageUrl: "/images/works/Rehab Thumbnail.jpg",
    link: "/works/rehabilitation",
    tags: ["PERSONAL PROJECT", "CASE STUDY"],
    markerColor: "#005BC4",
    category: "PERSONAL PROJECTS",
  },
  {
    title: "Gear Guru",
    description: "A community-driven marketplace for discovering and upgrading performance car parts.",
    imageUrl: "/images/overview/gear-guru-wide.png",
    link: "/works/gear-guru",
    tags: ["PERSONAL PROJECT", "CASE STUDY", "2024"],
    markerColor: "#005BC4",
    category: "PERSONAL PROJECTS",
  },
];

const FILTERS = ["ALL PROJECTS", "LINARC WORKS", "DESIGN SYSTEM", "PERSONAL PROJECTS"];

// Safe storage helpers (guards against iOS Safari SecurityError in Private Browsing)
function safeGetItem(key: string): string | null {
  try {
    return typeof window !== "undefined" ? sessionStorage.getItem(key) : null;
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window !== "undefined") sessionStorage.setItem(key, value);
  } catch {}
}

function safeRemoveItem(key: string): void {
  try {
    if (typeof window !== "undefined") sessionStorage.removeItem(key);
  } catch {}
}

export default function WorksPage() {
  const scrollRestoredRef = useRef(false);

  // ── Restore filter from sessionStorage on mount ───────
  const [activeFilter, setActiveFilter] = useState<string>(() => {
    return safeGetItem(SS_FILTER) ?? "ALL PROJECTS";
  });

  // ── Restore scroll position after paint ───────────────
  useEffect(() => {
    if (scrollRestoredRef.current) return;
    scrollRestoredRef.current = true;

    const savedY = safeGetItem(SS_SCROLL);
    if (savedY !== null) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: parseInt(savedY, 10), behavior: "auto" });
          safeRemoveItem(SS_SCROLL);
          safeRemoveItem(SS_FILTER);
        });
      });
    }
  }, []);

  // ── Save state before navigating to a detail page ─────
  const handleCardClick = useCallback((link: string) => {
    safeSetItem(SS_FILTER, activeFilter);
    safeSetItem(SS_SCROLL, String(Math.round(window.scrollY)));
  }, [activeFilter]);

  const displayedWorks =
    activeFilter === "ALL PROJECTS"
      ? WORKS_DATA
      : WORKS_DATA.filter(
          (work) =>
            work.category === activeFilter || work.tags.includes(activeFilter)
        );

  return (
    <>
      <div className={styles.worksPageContainer}>
        <div className={styles.heroSection}>
          <div className={styles.pillBadge}>SELECTED WORKS</div>
          <h1 className={styles.massiveTitle}>
            Architectural<br />Digital Precision.
          </h1>
          <p className={styles.pageSubtext}>
            A collection of high-density product interfaces, focused on structural
            integrity and the surgical application of minimalist principles.
          </p>
        </div>

        <div className={styles.filtersContainer}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {displayedWorks.map((work, index) => {
            const isWide = index % 4 === 0 || index % 4 === 3;
            const isExternal = work.external || work.link.startsWith("http");

            if (isExternal) {
              return (
                <a
                  key={work.title}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gridItem}
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                  aria-label={`${work.title} (opens in new tab)`}
                >
                  <WorksProjectCard
                    title={work.title}
                    description={work.description}
                    imageUrl={work.imageUrl}
                    link={work.link}
                    tags={work.tags}
                    markerColor={work.markerColor}
                    status={work.status}
                    aspectRatio={isWide ? "wide" : "square"}
                    external={true}
                  />
                </a>
              );
            }

            return (
              <Link
                key={work.title}
                href={work.link}
                onClick={() => handleCardClick(work.link)}
                className={styles.gridItem}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <WorksProjectCard
                  title={work.title}
                  description={work.description}
                  imageUrl={work.imageUrl}
                  link={work.link}
                  tags={work.tags}
                  markerColor={work.markerColor}
                  status={work.status}
                  aspectRatio={isWide ? "wide" : "square"}
                  external={false}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
