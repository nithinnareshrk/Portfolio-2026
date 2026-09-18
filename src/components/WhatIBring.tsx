'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Network,
  Layers,
  LayoutGrid,
  GitCommit,
  Boxes,
  Component,
  CheckCircle2,
  Maximize2,
  Target,
  Scale,
  Zap,
  ShieldCheck,
  Cpu,
  Code2,
  RefreshCw,
  Rocket
} from 'lucide-react';
import styles from './WhatIBring.module.css';

interface StepItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface CaseStudyFeature {
  title: string;
  tag: string;
  href: string;
  image: string;
  imageAlt: string;
  reason: string;
}

interface Pillar {
  id: string;
  number: string;
  title: string;
  description: string;
  sectionTitle: string;
  steps: StepItem[];
  caseStudy: CaseStudyFeature;
}

const PILLARS: Pillar[] = [
  {
    id: 'structure',
    number: '01',
    title: 'Structure',
    description:
      'Enterprise SaaS begins by mapping hidden domain logic, multi-role permissions, and operational bottlenecks before drawing a single UI line. Structure brings order to inherent complexity.',
    sectionTitle: 'HOW I STRUCTURE COMPLEXITY',
    steps: [
      {
        num: '01',
        title: 'Understand Operational Flow',
        desc: 'Map how work actually happens across roles, permissions, and multi-tier systems.',
        icon: <Network size={16} color='#2563eb' />
      },
      {
        num: '02',
        title: 'Break Down Complex Workflows',
        desc: 'Identify decision points, edge cases, system dependencies, and friction areas.',
        icon: <Layers size={16} color='#2563eb' />
      },
      {
        num: '03',
        title: 'Design Clear Information Architecture',
        desc: 'Organize information in a way that\'s logical, scalable, and role-based.',
        icon: <LayoutGrid size={16} color='#2563eb' />
      },
      {
        num: '04',
        title: 'Create Intuitive User Journeys',
        desc: 'Build journeys that are predictable, efficient, and easy for teams to adopt.',
        icon: <GitCommit size={16} color='#2563eb' />
      }
    ],
    caseStudy: {
      title: 'Toolbox Talk & Safety',
      tag: 'Safety Management Module',
      href: '/works/toolbox-talk',
      image: '/images/works/Safty thumbnail.jpg',
      imageAlt: 'Toolbox Talk & Safety App',
      reason:
        'Digitized paper-heavy site logs into a structured, multi-tier safety workflow improving compliance and field visibility.'
    }
  },
  {
    id: 'systems',
    number: '02',
    title: 'Systems',
    description:
      'Building resilient design tokens and component libraries that ensure visual consistency, accelerate feature velocity, and eliminate technical debt across scaling products.',
    sectionTitle: 'HOW I BUILD FOR SCALE',
    steps: [
      {
        num: '01',
        title: 'Identify Reusable Patterns',
        desc: 'Audit recurring UI interactions and unify redundant component structures.',
        icon: <Boxes size={16} color='#2563eb' />
      },
      {
        num: '02',
        title: 'Define Component Logic',
        desc: 'Establish strict tokens, props, variants, elevation scales, and state rules.',
        icon: <Component size={16} color='#2563eb' />
      },
      {
        num: '03',
        title: 'Build for Consistency',
        desc: 'Ensure visual alignment, accessibility compliance, and theme integrity.',
        icon: <CheckCircle2 size={16} color='#2563eb' />
      },
      {
        num: '04',
        title: 'Scale Across the Product',
        desc: 'Maintain design system integrity across expanding enterprise product suites.',
        icon: <Maximize2 size={16} color='#2563eb' />
      }
    ],
    caseStudy: {
      title: 'Single Object Framework',
      tag: 'Design System & Component Hierarchy',
      href: '/works/single-object',
      image: '/images/works/Single Object thumbnail.jpg',
      imageAlt: 'Single Object Framework',
      reason:
        'Architected a unified design token engine and component hierarchy powering 12+ enterprise suite applications.'
    }
  },
  {
    id: 'product-thinking',
    number: '03',
    title: 'Product Thinking',
    description:
      'Framing design decisions around measurable business outcomes, technical feasibility, and real operational constraints to ship software that delivers long-term value.',
    sectionTitle: 'HOW I MAKE PRODUCT DECISIONS',
    steps: [
      {
        num: '01',
        title: 'Understand Business Goals',
        desc: 'Align user experience strategies directly with core business outcomes.',
        icon: <Target size={16} color='#2563eb' />
      },
      {
        num: '02',
        title: 'Balance User & Business Needs',
        desc: 'Evaluate user friction points against technical feasibility and build effort.',
        icon: <Scale size={16} color='#2563eb' />
      },
      {
        num: '03',
        title: 'Prioritize High-Impact Problems',
        desc: 'Focus iterations on features that unlock maximum operational value.',
        icon: <Zap size={16} color='#2563eb' />
      },
      {
        num: '04',
        title: 'Design Practical Solutions',
        desc: 'Deliver pragmatically structured features built for real-world field constraints.',
        icon: <ShieldCheck size={16} color='#2563eb' />
      }
    ],
    caseStudy: {
      title: 'Time & Materials Tracking',
      tag: 'Enterprise SaaS Approval Workflow',
      href: '/works/tnm',
      image: '/images/works/T&M thumbnail.jpg',
      imageAlt: 'Time & Materials Tracking System',
      reason:
        'Transformed paper-heavy contractor site logs into a structured multi-role approval system with real-time field tracking.'
    }
  },
  {
    id: 'execution',
    number: '04',
    title: 'Execution',
    description:
      'Crafting pixel-perfect, highly responsive interfaces with thoughtful micro-interactions, accessibility compliance, and seamless engineering handoffs for production delivery.',
    sectionTitle: 'HOW I DELIVER',
    steps: [
      {
        num: '01',
        title: 'Prototype Early',
        desc: 'Test interactive flows early to validate usability and catch edge cases.',
        icon: <Cpu size={16} color='#2563eb' />
      },
      {
        num: '02',
        title: 'Collaborate with Engineering',
        desc: 'Partner closely with developers from token handoff to production deployment.',
        icon: <Code2 size={16} color='#2563eb' />
      },
      {
        num: '03',
        title: 'Iterate from Feedback',
        desc: 'Refine UI micro-interactions, visual contrast, and spacing telemetry.',
        icon: <RefreshCw size={16} color='#2563eb' />
      },
      {
        num: '04',
        title: 'Ship with Confidence',
        desc: 'Deliver high-fidelity, accessible interfaces ready for enterprise launch.',
        icon: <Rocket size={16} color='#2563eb' />
      }
    ],
    caseStudy: {
      title: 'Gear Guru Marketplace',
      tag: 'Automotive E-Commerce Platform',
      href: '/works/gear-guru',
      image: '/images/works/Gear Guru thumbnail.jpg',
      imageAlt: 'Gear Guru Marketplace',
      reason:
        'Delivered a high-performance marketplace featuring fluid multi-attribute filtering and responsive dark-mode micro-interactions.'
    }
  }
];

export default function WhatIBring() {
  const [activePillarId, setActivePillarId] = useState<string>('structure');

  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>DESIGN IN PRACTICE</span>
          <h2 className={styles.headline}>
            How I approach product design in complex SaaS environments.
          </h2>
          <p className={styles.subheadline}>
            A disciplined design approach rooted in systems thinking, clear information architecture, and production-ready execution.
          </p>
        </div>

        {/* -- DESKTOP BALANCED TWO-COLUMN LAYOUT (50% / 50%) -- */}
        <div className={styles.grid}>
          {/* Left Column: 4 Equal Interactive Cards (50% Width) */}
          <div className={styles.pillarsNav}>
            {PILLARS.map((pillar) => {
              const isActive = activePillarId === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`${styles.pillarCard} ${
                    isActive ? styles.pillarCardActive : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActivePillarId(pillar.id);
                    }
                  }}
                  aria-selected={isActive}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardMeta}>
                      <span className={styles.pillarNum}>{pillar.number}</span>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    </div>
                    <div className={styles.arrowBox}>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  <p className={styles.pillarDescription}>{pillar.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Flow Panel */}
          <div className={styles.panelWrapper}>
            <div key={activePillar.id} className={styles.fadeAnimation}>
              <div className={styles.sectionBlock}>
                <div className={styles.blockHeader}>
                  <span className={styles.blockLabel}>{activePillar.sectionTitle}</span>
                </div>

                <div className={styles.editorialFlowList}>
                  {activePillar.steps.map((step, idx) => (
                    <div key={step.num} className={styles.editorialStepRow}>
                      <div className={styles.stepTitleRow}>
                        <span className={styles.stepNumBadge}>{step.num}</span>
                        <h4 className={styles.editorialStepTitle}>{step.title}</h4>
                      </div>
                      <p className={styles.editorialStepDesc}>{step.desc}</p>
                      {idx < activePillar.steps.length - 1 && (
                        <div className={styles.stepSubtleDivider} aria-hidden='true' />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.panelDivider} />

              <div className={styles.appliedInBlock}>
                <span className={styles.blockLabel}>APPLIED IN</span>

                <div className={styles.caseStudyCard}>
                  <div className={styles.caseStudyImageWrapper}>
                    <Image
                      src={activePillar.caseStudy.image}
                      alt={activePillar.caseStudy.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes='220px'
                    />
                  </div>
                  <div className={styles.caseStudyContent}>
                    <h4 className={styles.caseStudyTitle}>
                      {activePillar.caseStudy.title}
                    </h4>
                    <span className={styles.caseStudyTagPill}>
                      {activePillar.caseStudy.tag}
                    </span>
                    <p className={styles.caseStudyReason}>
                      {activePillar.caseStudy.reason}
                    </p>
                    <Link
                      href={activePillar.caseStudy.href}
                      className={styles.caseStudyCta}
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={14} className={styles.ctaArrow} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -- MOBILE & TABLET TOUCH-FIRST SEGMENTED SHOWCASE -- */}
        <div className={styles.mobileShowcase}>
          {/* Horizontal Touch Pill Navigator */}
          <div className={styles.pillarTabsScroller}>
            <div className={styles.pillarTabsTrack} role='tablist'>
              {PILLARS.map((pillar) => {
                const isActive = activePillarId === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`${styles.pillarTabBtn} ${isActive ? styles.pillarTabBtnActive : ""}`}
                  >
                    <span className={styles.tabNum}>{pillar.number}</span>
                    <span className={styles.tabTitle}>{pillar.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pillar Editorial Card */}
          <div className={styles.mobilePillarCard}>
            <div key={activePillar.id} className={styles.fadeAnimation}>
              <div className={styles.mobileCardHeader}>
                <div className={styles.cardMeta}>
                  <span className={styles.pillarNum}>{activePillar.number}</span>
                  <h3 className={styles.mobilePillarTitle}>{activePillar.title}</h3>
                </div>
                <p className={styles.mobilePillarDesc}>{activePillar.description}</p>
              </div>

              <div className={styles.mobileSectionDivider} />

              <div className={styles.sectionBlock}>
                <span className={styles.blockLabel}>{activePillar.sectionTitle}</span>

                <div className={styles.editorialFlowList}>
                  {activePillar.steps.map((step, idx) => (
                    <div key={step.num} className={styles.editorialStepRow}>
                      <div className={styles.stepTitleRow}>
                        <span className={styles.stepNumBadge}>{step.num}</span>
                        <h4 className={styles.editorialStepTitle}>{step.title}</h4>
                      </div>
                      <p className={styles.editorialStepDesc}>{step.desc}</p>
                      {idx < activePillar.steps.length - 1 && (
                        <div className={styles.stepSubtleDivider} aria-hidden='true' />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.panelDivider} />

              <div className={styles.appliedInBlock}>
                <span className={styles.blockLabel}>APPLIED IN</span>

                <div className={styles.caseStudyCard}>
                  <div className={styles.caseStudyImageWrapper}>
                    <Image
                      src={activePillar.caseStudy.image}
                      alt={activePillar.caseStudy.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes='(max-width: 768px) 100vw, 300px'
                    />
                  </div>
                  <div className={styles.caseStudyContent}>
                    <h4 className={styles.caseStudyTitle}>
                      {activePillar.caseStudy.title}
                    </h4>
                    <span className={styles.caseStudyTagPill}>
                      {activePillar.caseStudy.tag}
                    </span>
                    <p className={styles.caseStudyReason}>
                      {activePillar.caseStudy.reason}
                    </p>
                    <Link
                      href={activePillar.caseStudy.href}
                      className={styles.caseStudyCta}
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={14} className={styles.ctaArrow} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
