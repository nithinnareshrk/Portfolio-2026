"use client";

import React, { useRef } from "react";
import styles from "./ProjectThumbnail.module.css";

interface ProjectThumbnailProps {
  title: string;
  imageUrl: string;
  aspectRatio?: "wide" | "square";
}

export default function ProjectThumbnail({
  title,
  imageUrl,
  aspectRatio = "wide",
}: ProjectThumbnailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    containerRef.current.style.setProperty("--mouse-x", `${x.toFixed(1)}%`);
    containerRef.current.style.setProperty("--mouse-y", `${y.toFixed(1)}%`);
  };

  const normalizedTitle = title.toLowerCase().trim();

  const isGearGuru = normalizedTitle.includes("gear guru") || normalizedTitle.includes("gearguru");
  const isRehab = normalizedTitle.includes("rehabilitation") || normalizedTitle.includes("rehab");
  const isDesignSystem = normalizedTitle.includes("design system");
  const isTnM = normalizedTitle.includes("t&m") || normalizedTitle.includes("time and material");
  const isJournal = normalizedTitle.includes("journal");
  const isSingleObject = normalizedTitle.includes("single object");
  const isMarketplace = normalizedTitle.includes("market");
  const isToolbox = normalizedTitle.includes("toolbox") || normalizedTitle.includes("safty");

  // Determine specific variant class for project-tailored blue gradients
  let variantClass = styles.variantDefault;
  if (isGearGuru) variantClass = styles.variantGearGuru;
  else if (isRehab) variantClass = styles.variantRehab;
  else if (isDesignSystem) variantClass = styles.variantDesignSystem;
  else if (isTnM) variantClass = styles.variantTnM;
  else if (isJournal) variantClass = styles.variantJournal;
  else if (isSingleObject) variantClass = styles.variantSingleObject;
  else if (isMarketplace) variantClass = styles.variantMarketplace;
  else if (isToolbox) variantClass = styles.variantToolbox;

  return (
    <div
      ref={containerRef}
      className={`${styles.thumbnailWrapper} ${variantClass} ${
        aspectRatio === "square" ? styles.aspectSquare : styles.aspectWide
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Interactive blue radial glow & sweep */}
      <div className={styles.radialGlow} aria-hidden="true" />
      <div className={styles.lightSweep} aria-hidden="true" />
      <div className={styles.bgMeshGrid} aria-hidden="true" />

      {/* ── PROJECT-SPECIFIC COMPOSITION ── */}
      {isGearGuru && (
        <div className={styles.compositionGearGuru}>
          <div className={styles.backCard}>
            <img src="/images/gear-guru/final-garage-showcase.png" alt="" />
          </div>
          <div className={styles.mainPhoneMockup}>
            <div className={styles.phoneHeaderBar}>
              <span className={styles.phoneSpeaker} />
            </div>
            <img src="/images/gear-guru/final-community-feed.png" alt={title} />
          </div>
          <div className={styles.sideCard}>
            <img src="/images/gear-guru/final-store-home.png" alt="" />
          </div>
        </div>
      )}

      {isRehab && (
        <div className={styles.compositionRehab}>
          <div className={styles.rehabCardLeft}>
            <img src="/images/rehab/Home A Calm Start.jpg" alt={title} />
          </div>
          <div className={styles.rehabCardRight}>
            <img src="/images/rehab/Tracking Clarity.jpg" alt="" />
          </div>
          <div className={styles.rehabFloatingPill}>
            <span className={styles.pillDot} /> Recovery Tracker
          </div>
        </div>
      )}

      {isDesignSystem && (
        <div className={styles.compositionDesignSystem}>
          <div className={styles.dsSpecFrame}>
            <div className={styles.dsHeaderBar}>
              <span className={styles.dsDotRed} />
              <span className={styles.dsDotYellow} />
              <span className={styles.dsDotGreen} />
              <span className={styles.dsTitleTag}>ATOMIC_SYSTEM_V2.0</span>
            </div>
            <div className={styles.dsImageHolder}>
              <img src="/images/works/design system thumbnail.jpg" alt={title} />
            </div>
          </div>
          <div className={styles.dsTokenBadgeLeft}>TOKENS & COMPONENTS</div>
          <div className={styles.dsTokenBadgeRight}>SCALABLE SAAS</div>
        </div>
      )}

      {isTnM && (
        <div className={styles.compositionTnM}>
          <div className={styles.tnmBackSheet}>
            <img src="/images/t-and-m/cost_record.png" alt="" />
          </div>
          <div className={styles.tnmMainFrame}>
            <img src="/images/t-and-m/tnm_flow_composite.png" alt={title} />
          </div>
          <div className={styles.tnmTag}>T&M WORKFLOW</div>
        </div>
      )}

      {isJournal && (
        <div className={styles.compositionJournal}>
          <div className={styles.journalCardSecondary}>
            <img src="/images/journal/journal-03-climate.png" alt="" />
          </div>
          <div className={styles.journalCardPrimary}>
            <img src="/images/journal/journal-01-full-view.png" alt={title} />
          </div>
        </div>
      )}

      {isSingleObject && (
        <div className={styles.compositionSingleObject}>
          <div className={styles.soWorkflowSide}>
            <img src="/images/single-object/section_workflow.png" alt="" />
          </div>
          <div className={styles.soEditorMain}>
            <img src="/images/single-object/sectionized_editor.png" alt={title} />
          </div>
        </div>
      )}

      {isMarketplace && (
        <div className={styles.compositionMarketplace}>
          <div className={styles.mpMappingLayer}>
            <img src="/images/marketplace/marketplace-03-mapping.png" alt="" />
          </div>
          <div className={styles.mpEcosystemMain}>
            <img src="/images/marketplace/marketplace-01-ecosystem.png" alt={title} />
          </div>
        </div>
      )}

      {isToolbox && (
        <div className={styles.compositionToolbox}>
          <div className={styles.toolboxWebMain}>
            <img src="/images/toolbox-talk/01-overview.png" alt={title} />
          </div>
          <div className={styles.toolboxMobileFloating}>
            <img src="/images/toolbox-talk/04-mobile-attendance.png" alt="" />
          </div>
        </div>
      )}

      {/* Fallback for any standard single image fallback */}
      {!isGearGuru &&
        !isRehab &&
        !isDesignSystem &&
        !isTnM &&
        !isJournal &&
        !isSingleObject &&
        !isMarketplace &&
        !isToolbox && (
          <div className={styles.compositionDefault}>
            <img src={imageUrl} alt={title} className={styles.defaultImg} />
          </div>
        )}
    </div>
  );
}
