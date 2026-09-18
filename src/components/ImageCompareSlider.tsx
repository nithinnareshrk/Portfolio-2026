"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ImageCompareSlider.module.css";

interface ImageCompareSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  badgeId?: string;
  purpose?: string;
  aspectRatio?: string;
}

export default function ImageCompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before iteration",
  afterAlt = "After iteration",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  badgeId,
  purpose,
  aspectRatio = "480 / 996",
}: ImageCompareSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    setIsDragging(false);
  };

  return (
    <div className={styles.sliderWrapper}>
      {(badgeId || purpose) && (
        <div className={styles.imageHeader}>
          {badgeId && <span className={styles.imageIdBadge}>{badgeId}</span>}
          {purpose && <span className={styles.imagePurpose}>{purpose}</span>}
        </div>
      )}

      <div
        ref={containerRef}
        className={styles.sliderContainer}
        style={{ aspectRatio }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* AFTER Image (Bottom Layer) */}
        <div className={styles.imageLayer}>
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            unoptimized
            priority
            className={styles.sliderImage}
          />
          <div className={`${styles.sliderBadge} ${styles.sliderBadgeRight}`}>
            {afterLabel}
          </div>
        </div>

        {/* BEFORE Image (Top Layer clipped) */}
        <div
          className={`${styles.imageLayer} ${styles.clipLayer}`}
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            unoptimized
            priority
            className={styles.sliderImage}
          />
          <div className={`${styles.sliderBadge} ${styles.sliderBadgeLeft}`}>
            {beforeLabel}
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className={styles.dividerHandle}
          style={{ left: `${sliderPos}%` }}
        >
          <div className={styles.dividerButton}>
            <ChevronLeft size={14} />
            <ChevronRight size={14} style={{ marginLeft: "-4px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
