"use client";

import React, { useRef } from "react";
import styles from "./ProjectThumbnail.module.css";

interface ProjectThumbnailProps {
  title: string;
  imageUrl?: string;
  aspectRatio?: "wide" | "square" | "fill";
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
  const isRehab = normalizedTitle.includes("rehabilitation") || normalizedTitle.includes("rehab") || normalizedTitle.includes("recovery");
  const isDesignSystem = normalizedTitle.includes("design system");
  const isTnM = normalizedTitle.includes("t&m") || normalizedTitle.includes("time & material") || normalizedTitle.includes("time and material");
  const isJournal = normalizedTitle.includes("journal");
  const isSingleObject = normalizedTitle.includes("single object");
  const isMarketplace = normalizedTitle.includes("market");
  const isToolbox = normalizedTitle.includes("toolbox") || normalizedTitle.includes("safty") || normalizedTitle.includes("safety");

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

  let aspectClass = styles.aspectWide;
  if (aspectRatio === "square") {
    aspectClass = styles.aspectSquare;
  } else if (aspectRatio === "fill") {
    aspectClass = styles.aspectFill;
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.thumbnailWrapper} ${variantClass} ${aspectClass}`}
      onMouseMove={handleMouseMove}
    >
      {/* Interactive blue radial glow & sweep */}
      <div className={styles.radialGlow} aria-hidden="true" />
      <div className={styles.lightSweep} aria-hidden="true" />
      <div className={styles.bgMeshGrid} aria-hidden="true" />

      {/* ── PROJECT-SPECIFIC COMPOSITION (STRICTLY FROM CASE STUDY SCREENS) ── */}
      {isGearGuru && (
        <div className={styles.compositionGearGuru}>
          <div className={styles.gearGuruBackPhone}>
            <img
              src="/images/gear-guru/final-store-home.png"
              alt="Gear Guru Store"
              draggable={false}
            />
          </div>
          <div className={styles.gearGuruFrontPhone}>
            <img
              src="/images/gear-guru/final-community-feed.png"
              alt={title}
              draggable={false}
            />
          </div>
          <div className={styles.gearGuruPill}>
            <span className={styles.pillDot} /> Community &amp; Marketplace
          </div>
        </div>
      )}

      {isRehab && (
        <div className={styles.compositionRehab}>
          <div className={styles.rehabCardLeft}>
            <img src="/images/works/rehab/Section 5 start with clarity.jpg" alt={title} draggable={false} />
          </div>
          <div className={styles.rehabCardRight}>
            <img src="/images/works/rehab/section 5 Focus on Movement.jpg" alt="" draggable={false} />
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
              <img src="/images/works/design system thumbnail.jpg" alt={title} draggable={false} />
            </div>
          </div>
          <div className={styles.dsTokenBadgeLeft}>TOKENS & COMPONENTS</div>
          <div className={styles.dsTokenBadgeRight}>SCALABLE SAAS</div>
        </div>
      )}

      {isTnM && (
        <div className={styles.compositionTnM}>
          <div className={styles.tnmBackSheet}>
            <img src="/images/t-and-m/review_approval.png" alt="" draggable={false} />
          </div>
          <div className={styles.tnmMainFrame}>
            <img src="/images/t-and-m/tnm_complete_overview.png" alt={title} draggable={false} />
          </div>
          <div className={styles.tnmTag}>T&M WORKFLOW</div>
        </div>
      )}

      {isJournal && (
        <div className={styles.compositionJournal}>
          <div className={styles.journalCardSecondary}>
            <img src="/images/journal/journal-03-climate.png" alt="" draggable={false} />
          </div>
          <div className={styles.journalCardPrimary}>
            <img src="/images/journal/journal-01-full-view.png" alt={title} draggable={false} />
          </div>
        </div>
      )}

      {isSingleObject && (
        <div className={styles.compositionSingleObject}>
          <div className={styles.soWorkflowSide}>
            <img src="/images/single-object/old_generated_report.png" alt="" draggable={false} />
          </div>
          <div className={styles.soEditorMain}>
            <img src="/images/single-object/sectionized_editor.png" alt={title} draggable={false} />
          </div>
        </div>
      )}

      {isMarketplace && (
        <div className={styles.compositionMarketplace}>
          <div className={styles.mpMappingLayer}>
            <img src="/images/marketplace/marketplace-03-mapping.png" alt="" draggable={false} />
          </div>
          <div className={styles.mpEcosystemMain}>
            <img src="/images/marketplace/marketplace-01-ecosystem.png" alt={title} draggable={false} />
          </div>
        </div>
      )}

      {isToolbox && (
        <div className={styles.compositionToolbox}>
          <div className={styles.toolboxWebMain}>
            <img src="/images/toolbox-talk/01-overview.png" alt={title} draggable={false} />
          </div>
          <div className={styles.toolboxMobileFloating}>
            <img src="/images/toolbox-talk/04-mobile-attendance.png" alt="" draggable={false} />
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
            <img src={imageUrl} alt={title} className={styles.defaultImg} draggable={false} />
          </div>
        )}
    </div>
  );
}
