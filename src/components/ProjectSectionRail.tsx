"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./ProjectSectionRail.module.css";

export interface SectionItem {
  id: string;
  label: string;
}

interface ProjectSectionRailProps {
  sections?: SectionItem[];
}

export default function ProjectSectionRail({ sections: propSections }: ProjectSectionRailProps) {
  const [sections, setSections] = useState<SectionItem[]>(propSections || []);
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const railRef = useRef<HTMLDivElement>(null);
  const mobileRailRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-discover sections from DOM if not provided via props
  useEffect(() => {
    if (propSections && propSections.length > 0) {
      setSections(propSections);
      return;
    }

    const discovered: SectionItem[] = [];
    const elements = document.querySelectorAll<HTMLElement>("[data-section-title], [id].projectSection");
    
    elements.forEach((el) => {
      const id = el.id;
      const label = el.getAttribute("data-section-title") || el.innerText.split("\n")[0] || id;
      if (id && label) {
        discovered.push({ id, label });
      }
    });

    if (discovered.length > 0) {
      setSections(discovered);
    }
  }, [propSections]);

  // ScrollSpy to track currently active section
  const updateActiveSection = useCallback(() => {
    if (isScrollingRef.current || sections.length === 0) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const navbarOffset = 80;

    let currentActive = sections[0]?.id || "";

    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const top = el.offsetTop - navbarOffset;
        // Check if top of section has passed or is near the top third of viewport
        if (scrollY >= top - windowHeight * 0.2) {
          currentActive = sections[i].id;
        }
      }
    }

    // Check if at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
      currentActive = sections[sections.length - 1]?.id || currentActive;
    }

    setActiveSectionId(currentActive);
  }, [sections]);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  // Click outside to collapse if manually expanded
  useEffect(() => {
    if (!isExpanded) return;

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      const insideDesktop = railRef.current?.contains(target);
      const insideMobile = mobileRailRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setIsExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isExpanded]);

  const handleSectionClick = (id: string) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    setActiveSectionId(id);
    isScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const navbarOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });

    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      updateActiveSection();
    }, 800);

    // Keep closed after selecting
    setIsExpanded(false);
    setIsHovered(false);
  };

  if (sections.length === 0) return null;

    const activeIndex = sections.findIndex(
      (s, idx) => s.id === activeSectionId || (!activeSectionId && idx === 0)
    );
    const activeSection = sections[activeIndex >= 0 ? activeIndex : 0];
    const isOpen = isExpanded || isHovered;

    return (
      <>
        {/* Desktop / Tablet Side Rail */}
        <aside
          ref={railRef}
          className={`${styles.railContainer} ${isOpen ? styles.railExpanded : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Section navigation rail"
        >
          {/* ── Collapsed Dash Rail ───────────────────────────── */}
          <div 
            className={styles.dashTrack}
            onClick={() => setIsExpanded((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-label="Toggle section menu"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsExpanded((prev) => !prev);
              }
            }}
          >
            {sections.map((section, idx) => {
              const isActive = section.id === activeSectionId || (!activeSectionId && idx === 0);
              return (
                <div
                  key={section.id}
                  className={`${styles.dashItem} ${isActive ? styles.dashActive : ""}`}
                  title={section.label}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionClick(section.id);
                  }}
                >
                  <div className={styles.dashBar} />
                </div>
              );
            })}
          </div>

          {/* ── Expanded Readable Section Card ──────────────── */}
          <div className={styles.expandedPanel} aria-hidden={!isOpen}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Sections</span>
              <span className={styles.panelCount}>{sections.length}</span>
            </div>

            <nav className={styles.sectionNav}>
              {sections.map((section, index) => {
                const isActive = section.id === activeSectionId || (!activeSectionId && index === 0);
                return (
                  <button
                    key={section.id}
                    type="button"
                    className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                    onClick={() => handleSectionClick(section.id)}
                  >
                    <span className={styles.itemDash} />
                    <span className={styles.itemLabel}>{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Mobile Floating Quick-Jump Pill */}
        <div ref={mobileRailRef} className={styles.mobileFloatingRail}>
          <button
            type="button"
            className={styles.mobilePillBtn}
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-label="Jump to section"
          >
            <span className={styles.mobilePillIndex}>
              {(activeIndex >= 0 ? activeIndex + 1 : 1).toString().padStart(2, "0")}/{sections.length.toString().padStart(2, "0")}
            </span>
            <span className={styles.mobilePillLabel}>
              {activeSection?.label || "Sections"}
            </span>
            <span className={styles.mobilePillArrow}>▾</span>
          </button>

          {isExpanded && (
            <div
              className={styles.mobileDrawerBackdrop}
              onClick={() => setIsExpanded(false)}
            >
              <div
                className={styles.mobileDrawerCard}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.mobileDrawerHeader}>
                  <span className={styles.mobileDrawerTitle}>Table of Contents</span>
                  <button
                    type="button"
                    className={styles.mobileDrawerClose}
                    onClick={() => setIsExpanded(false)}
                  >
                    ✕
                  </button>
                </div>
                <div className={styles.mobileDrawerList}>
                  {sections.map((section, idx) => {
                    const isActive = section.id === activeSectionId || (!activeSectionId && idx === 0);
                    return (
                      <button
                        key={section.id}
                        type="button"
                        className={`${styles.mobileDrawerItem} ${isActive ? styles.mobileDrawerItemActive : ""}`}
                        onClick={() => handleSectionClick(section.id)}
                      >
                        <span className={styles.mobileItemIndex}>
                          {(idx + 1).toString().padStart(2, "0")}
                        </span>
                        <span className={styles.mobileItemLabel}>{section.label}</span>
                        {isActive && <span className={styles.mobileActiveDot}>•</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
