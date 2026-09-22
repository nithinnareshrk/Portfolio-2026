'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Building2, Layers, ChevronDown } from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail';
import styles from './ThingsICareAbout.module.css';

interface FeaturedProject {
  tag: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  summary: string;
}

interface CareTheme {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  coreStatement: string;
  explanation: string;
  focusPoints: string[];
  projects: FeaturedProject[];
}

const THEMES: CareTheme[] = [
  {
    id: 'clarity',
    number: '01',
    title: 'Clarity',
    subtitle: 'Structured operational flow',
    icon: <Layers size={18} strokeWidth={2.2} />,
    coreStatement: 'Transforming complex, high-velocity information into actionable records.',
    explanation:
      'In high-velocity field operations, information overload leads to missed details and costly operational mistakes. Clarity means organizing dense streams of daily activity into an intuitive chronological structure. By structuring field notes, weather impacts, safety flags, and photo evidence into a clear hierarchy, the Journal ensures teams immediately understand what happened on site and what needs attention next.',
    focusPoints: [
      'Transforming scattered field updates into unified daily logs',
      'Clear chronological timeline and explainable delay tagging',
      'Reducing cognitive fatigue with structured, scannable summaries'
    ],
    projects: [
      {
        tag: 'Daily Site Journal — Field Ops',
        title: 'The Daily Site Journal',
        href: '/works/journal',
        image: '/images/works/Journal Thumbnail.jpg',
        imageAlt: 'The Daily Site Journal Case Study',
        summary:
          'Structuring scattered daily logs, contractor notes, and delay evidence into one clean, actionable record of what happened on site.'
      }
    ]
  },
  {
    id: 'business',
    number: '02',
    title: 'Business',
    subtitle: 'Operational transparency',
    icon: <Building2 size={18} strokeWidth={2.2} />,
    coreStatement: 'Bringing clarity to complex construction workflows.',
    explanation:
      'Construction projects involve multiple contractors, teams, costs, and approvals working together. T&M brings these moving parts into a structured workflow, helping teams track time and materials, manage contractor information, and keep project decisions connected from the field to the office.',
    focusPoints: [
      'Structuring multi-tier contractor logs and approval chains',
      'Tracking time, materials, and cost decisions from field to office',
      'Connecting field operations with centralized project management'
    ],
    projects: [
      {
        tag: 'T&M — Linarc',
        title: 'T&M — Linarc',
        href: '/works/tnm',
        image: '/images/works/T&M thumbnail.jpg',
        imageAlt: 'T&M — Linarc Case Study',
        summary:
          'Digitizing contractor tracking and multi-tier approval chains into a structured field management workflow.'
      }
    ]
  },
  {
    id: 'people',
    number: '03',
    title: 'People',
    subtitle: 'Empathy & cognitive relief',
    icon: <Heart size={18} strokeWidth={2.2} />,
    coreStatement: 'Designing for human circumstances, emotional states, and cognitive relief.',
    explanation:
      'Design is fundamentally about understanding people—their physical limitations, stress levels, and emotional contexts. In rehabilitation, individuals are navigating discomfort, fatigue, and recovery uncertainty. Rather than treating users as clinical data points, design should create a calm, predictable environment with generous spacing, clear hierarchy, and unhurried progression that builds confidence step by step.',
    focusPoints: [
      'Empathetic cognitive pacing with reduced interface density',
      'Clear structuring of guided exercise routines and rest intervals',
      'Calm visual feedback over intimidating clinical metrics'
    ],
    projects: [
      {
        tag: 'Virtual Recovery — Health & Wellness',
        title: 'Virtual Recovery & Rehabilitation',
        href: '/works/rehabilitation',
        image: '/images/works/Rehab Thumbnail.jpg',
        imageAlt: 'Virtual Recovery and Rehabilitation Case Study',
        summary:
          'An early design exploration structuring guided physical therapy, pain reporting, and recovery milestones into a reassuring, low-friction mobile experience.'
      }
    ]
  }
];

export default function ThingsICareAbout() {
  const [activeThemeId, setActiveThemeId] = useState<string | null>('clarity');

  const activeTheme = THEMES.find((t) => t.id === activeThemeId) || THEMES[0];

  const handleThemeToggle = (id: string) => {
    setActiveThemeId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} id="things-i-care-about">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>THINGS I CARE ABOUT</span>
          <h2 className={styles.headline}>What Actually Shapes My Design Decisions</h2>
          <p className={styles.subheadline}>
            Three dimensions of how I approach product design—grounded in real user circumstances, platform ecosystems, and operational clarity.
          </p>
        </div>

        {/* ── DESKTOP VIEW (Tabs Grid + Bottom Display Panel) ── */}
        <div className={styles.desktopView}>
          {/* Three Equal Selectable Controls */}
          <div className={styles.themeControls} role="tablist" aria-label="Things I Care About themes">
            {THEMES.map((theme) => {
              const isActive = activeThemeId === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveThemeId(theme.id)}
                  className={`${styles.themeTabBtn} ${isActive ? styles.themeTabBtnActive : ''}`}
                >
                  <div className={styles.tabTop}>
                    <span className={styles.tabNum}>{theme.number}</span>
                    <span className={styles.tabIcon}>{theme.icon}</span>
                  </div>
                  <div className={styles.tabInfo}>
                    <h3 className={styles.tabTitle}>{theme.title}</h3>
                    <p className={styles.tabTagline}>{theme.subtitle}</p>
                  </div>
                  <div className={styles.activeIndicator} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          {/* Dynamic Explanation & Grounded Case Study */}
          <div className={styles.contentDisplayWrapper}>
            <div key={activeTheme.id} className={styles.fadeAnimation}>
              <div className={styles.displayGrid}>
                {/* Left Column: Dimension Details & Intent */}
                <div className={styles.narrativeCol}>
                  <div className={styles.dimensionBadgeWrapper}>
                    <span className={styles.dimensionBadge}>
                      DIMENSION {activeTheme.number} • {activeTheme.title.toUpperCase()}
                    </span>
                  </div>

                  <h3 className={styles.dimensionTitle}>{activeTheme.coreStatement}</h3>

                  <p className={styles.narrativeText}>{activeTheme.explanation}</p>

                  <div className={styles.focusBlock}>
                    <span className={styles.focusLabel}>DESIGN FOCUS &amp; INTENTION</span>
                    <ul className={styles.focusList}>
                      {activeTheme.focusPoints.map((point, idx) => (
                        <li key={idx} className={styles.focusItem}>
                          <span className={styles.focusBullet} aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Grounded Project Card(s) */}
                <div className={styles.projectCol}>
                  <div className={styles.projectCardWrapper}>
                    <div className={styles.projectCardHeader}>
                      <span className={styles.projectCardOverline}>
                        {activeTheme.projects.length > 1 ? 'GROUNDED IN PROJECTS' : 'GROUNDED IN PROJECT'}
                      </span>
                      <div className={styles.projectTagsGroup}>
                        {activeTheme.projects.map((proj) => (
                          <span key={proj.tag} className={styles.projectTagPill}>
                            {proj.tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={activeTheme.projects.length > 1 ? styles.projectsListMulti : styles.projectsListSingle}>
                      {activeTheme.projects.map((proj) => (
                        <Link
                          key={proj.href}
                          href={proj.href}
                          className={activeTheme.projects.length > 1 ? styles.projectCardCompact : styles.projectCard}
                        >
                          <div
                            className={
                              activeTheme.projects.length > 1
                                ? styles.projectImageWrapperCompact
                                : styles.projectImageWrapper
                            }
                          >
                            <ProjectThumbnail
                              title={proj.title}
                              imageUrl={proj.image}
                              aspectRatio={activeTheme.projects.length > 1 ? "square" : "wide"}
                            />
                          </div>

                          <div
                            className={
                              activeTheme.projects.length > 1
                                ? styles.projectCardBodyCompact
                                : styles.projectCardBody
                            }
                          >
                            <div>
                              <span className={styles.cardTagSmall}>{proj.tag}</span>
                              <h4 className={styles.projectTitle}>{proj.title}</h4>
                              <p className={styles.projectSummary}>{proj.summary}</p>
                            </div>
                            
                            <div className={styles.projectLinkRow}>
                              <span>Explore Case Study</span>
                              <ArrowRight size={13} className={styles.linkArrow} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE & TOUCH VIEW (Accordion Stream: Smooth Collapsible under each button) ── */}
        <div className={styles.mobileAccordionView}>
          {THEMES.map((theme) => {
            const isExpanded = activeThemeId === theme.id;
            return (
              <div
                key={theme.id}
                className={`${styles.accordionCard} ${isExpanded ? styles.accordionCardActive : ''}`}
              >
                <button
                  type="button"
                  onClick={() => handleThemeToggle(theme.id)}
                  className={styles.accordionHeaderBtn}
                  aria-expanded={isExpanded}
                >
                  <div className={styles.accordionHeaderLeft}>
                    <div className={styles.tabTopMobile}>
                      <span className={styles.tabNum}>{theme.number}</span>
                      <span className={styles.tabIcon}>{theme.icon}</span>
                    </div>
                    <div className={styles.tabInfo}>
                      <h3 className={styles.tabTitle}>{theme.title}</h3>
                      <p className={styles.tabTagline}>{theme.subtitle}</p>
                    </div>
                  </div>
                  <div className={`${styles.accordionChevron} ${isExpanded ? styles.accordionChevronOpen : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div className={`${styles.accordionCollapse} ${isExpanded ? styles.accordionCollapseOpen : ''}`}>
                  <div className={styles.accordionInner}>
                    <div className={styles.accordionBody}>
                      <div className={styles.accordionDivider} />
                      
                      <div className={styles.dimensionBadgeWrapper}>
                        <span className={styles.dimensionBadge}>
                          DIMENSION {theme.number} • {theme.title.toUpperCase()}
                        </span>
                      </div>

                      <h3 className={styles.dimensionTitle}>{theme.coreStatement}</h3>

                      <p className={styles.narrativeText}>{theme.explanation}</p>

                      <div className={styles.focusBlock}>
                        <span className={styles.focusLabel}>DESIGN FOCUS &amp; INTENTION</span>
                        <ul className={styles.focusList}>
                          {theme.focusPoints.map((point, idx) => (
                            <li key={idx} className={styles.focusItem}>
                              <span className={styles.focusBullet} aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.mobileProjectSection}>
                        <div className={styles.projectCardHeader}>
                          <span className={styles.projectCardOverline}>GROUNDED IN PROJECT</span>
                          <div className={styles.projectTagsGroup}>
                            {theme.projects.map((proj) => (
                              <span key={proj.tag} className={styles.projectTagPill}>
                                {proj.tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className={styles.mobileProjectsList}>
                          {theme.projects.map((proj) => (
                            <Link
                              key={proj.href}
                              href={proj.href}
                              className={styles.projectCard}
                            >
                              <div className={styles.projectImageWrapper}>
                                <ProjectThumbnail
                                  title={proj.title}
                                  imageUrl={proj.image}
                                  aspectRatio="wide"
                                />
                              </div>

                              <div className={styles.projectCardBody}>
                                <div>
                                  <h4 className={styles.projectTitle}>{proj.title}</h4>
                                  <p className={styles.projectSummary}>{proj.summary}</p>
                                </div>
                                
                                <div className={styles.projectLinkRow}>
                                  <span>Explore Case Study</span>
                                  <ArrowRight size={13} className={styles.linkArrow} />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
