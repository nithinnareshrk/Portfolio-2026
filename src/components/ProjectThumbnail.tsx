"use client";

import React, { useRef, useEffect } from "react";
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
  const touchStartRef = useRef<{ time: number; x: number; y: number } | null>(null);
  const isLongPressRef = useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    containerRef.current.style.setProperty("--mouse-x", `${x.toFixed(1)}%`);
    containerRef.current.style.setProperty("--mouse-y", `${y.toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.removeProperty("--mouse-x");
    containerRef.current.style.removeProperty("--mouse-y");
  };

  // Prevent iOS native lift and accidental navigation on long-press
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      time: Date.now(),
      x: touch.clientX,
      y: touch.clientY,
    };
    isLongPressRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current) return;
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - touchStartRef.current.x);
    const dy = Math.abs(touch.clientY - touchStartRef.current.y);
    // If finger moves more than 10px, it's a scroll gesture - cancel long-press tracking
    if (dx > 10 || dy > 10) {
      touchStartRef.current = null;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartRef.current) {
      const elapsed = Date.now() - touchStartRef.current.time;
      if (elapsed >= 500) {
        // Held for >= 500ms without scrolling -> mark as long-press
        isLongPressRef.current = true;
      }
    }
    touchStartRef.current = null;
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLongPressRef.current) {
      // Long press release must NOT trigger project navigation
      e.preventDefault();
      e.stopPropagation();
      isLongPressRef.current = false;
    }
  };

  // Restore normal resting state on orientation change, viewport resize, or bfcache navigation
  useEffect(() => {
    const handleReset = () => {
      touchStartRef.current = null;
      isLongPressRef.current = false;
      if (containerRef.current) {
        containerRef.current.style.removeProperty("--mouse-x");
        containerRef.current.style.removeProperty("--mouse-y");
      }
    };

    window.addEventListener("orientationchange", handleReset);
    window.addEventListener("resize", handleReset);
    window.addEventListener("pageshow", handleReset);

    return () => {
      window.removeEventListener("orientationchange", handleReset);
      window.removeEventListener("resize", handleReset);
      window.removeEventListener("pageshow", handleReset);
    };
  }, []);

  const normalizedTitle = title.toLowerCase().trim();

  const isGearGuru = normalizedTitle.includes("gear guru") || normalizedTitle.includes("gearguru");
  const isRehab = normalizedTitle.includes("rehabilitation") || normalizedTitle.includes("rehab") || normalizedTitle.includes("recovery");
  const isDesignSystem = normalizedTitle.includes("design system");
  const isTnM = normalizedTitle.includes("t&m") || normalizedTitle.includes("time & material") || normalizedTitle.includes("time and material");
  const isJournal = normalizedTitle.includes("journal");
  const isSingleObject = normalizedTitle.includes("single object") || normalizedTitle.includes("report");
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
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => {
        touchStartRef.current = null;
        isLongPressRef.current = false;
      }}
      onClickCapture={handleClickCapture}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
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
