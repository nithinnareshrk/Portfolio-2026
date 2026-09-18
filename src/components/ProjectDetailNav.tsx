"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ChevronDown, Layers, Check } from "lucide-react";
import styles from "./ProjectDetailNav.module.css";

export interface ProjectItem {
  title: string;
  category: string;
  path: string;
  markerColor?: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    title: "Gear Guru",
    category: "Marketplace / Automotive",
    path: "/works/gear-guru",
    markerColor: "#005BC4",
  },
  {
    title: "Rehabilitation",
    category: "Concept / Health Platform",
    path: "/works/rehabilitation",
    markerColor: "#005BC4",
  },
  {
    title: "Workflow-Driven T&M System",
    category: "Linarc Works / Workflow Heavy",
    path: "/works/tnm",
    markerColor: "#FF9201",
  },
  {
    title: "The Journal",
    category: "Linarc Works / Daily Site Log",
    path: "/works/journal",
    markerColor: "#FF9201",
  },
  {
    title: "Single Object",
    category: "Linarc Works / Report Builder",
    path: "/works/single-object",
    markerColor: "#FF9201",
  },
  {
    title: "Marketplace",
    category: "Linarc Works / SaaS Integration",
    path: "/works/marketplace",
    markerColor: "#FF9201",
  },
  {
    title: "Toolbox Talk",
    category: "Linarc Works / Safety Execution",
    path: "/works/toolbox-talk",
    markerColor: "#FF9201",
  },
];

export default function ProjectDetailNav() {
  const pathname = usePathname();
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const currentProject = PORTFOLIO_PROJECTS.find(
    (project) => project.path === pathname
  );

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsSwitcherOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSwitcherOpen(false);
      }
    }

    if (isSwitcherOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSwitcherOpen]);

  // Close switcher on route change
  useEffect(() => {
    setIsSwitcherOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navInner}>
          {/* Left: Back to Works */}
          <Link href="/works" className={styles.backLink} aria-label="Back to Works">
            <div className={styles.backIconWrap}>
              <ArrowLeft size={16} strokeWidth={2.2} />
            </div>
            <span className={styles.backText}>Back to Works</span>
          </Link>

          {/* Right: Projects Switcher */}
          <div className={styles.switcherContainer} ref={switcherRef}>
            <button
              type="button"
              className={`${styles.switcherButton} ${isSwitcherOpen ? styles.activeButton : ""}`}
              onClick={() => setIsSwitcherOpen((prev) => !prev)}
              aria-expanded={isSwitcherOpen}
              aria-haspopup="listbox"
              aria-label="Toggle projects menu"
            >
              <div className={styles.switcherLeft}>
                <Layers size={14} className={styles.switcherIcon} />
                <span className={styles.switcherCurrentTitle}>
                  {currentProject ? currentProject.title : "Projects"}
                </span>
              </div>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${isSwitcherOpen ? styles.chevronRotated : ""}`}
              />
            </button>

            {/* Switcher Dropdown */}
            {isSwitcherOpen && (
              <>
                <div
                  className={styles.dropdownBackdrop}
                  onClick={() => setIsSwitcherOpen(false)}
                  aria-hidden="true"
                />
                <div className={styles.dropdown} role="listbox" tabIndex={-1}>
                <div className={styles.dropdownHeader}>
                  <span className={styles.dropdownHeading}>All Projects</span>
                  <span className={styles.projectCount}>
                    {PORTFOLIO_PROJECTS.length} Works
                  </span>
                </div>

                <div className={styles.dropdownList}>
                  {PORTFOLIO_PROJECTS.map((project) => {
                    const isCurrent = project.path === pathname;
                    return (
                      <Link
                        key={project.path}
                        href={project.path}
                        className={`${styles.projectRow} ${isCurrent ? styles.activeRow : ""}`}
                        role="option"
                        aria-selected={isCurrent}
                        onClick={() => setIsSwitcherOpen(false)}
                      >
                        <div className={styles.projectInfo}>
                          <div className={styles.titleRow}>
                            <span
                              className={styles.markerDot}
                              style={{
                                backgroundColor: project.markerColor || "#2563eb",
                              }}
                            />
                            <span className={styles.projectTitle}>
                              {project.title}
                            </span>
                          </div>
                          <span className={styles.projectCategory}>
                            {project.category}
                          </span>
                        </div>

                        {isCurrent && (
                          <div className={styles.currentBadge}>
                            <Check size={13} strokeWidth={2.5} />
                            <span>Current</span>
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </>
          )}
          </div>
        </div>
      </header>
      <div className={styles.navbarSpacer} aria-hidden="true" />
    </>
  );
}
