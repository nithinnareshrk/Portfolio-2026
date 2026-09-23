"use client";

import React, { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectThumbnail from "./ProjectThumbnail";
import styles from "./WorksProjectCard.module.css";

interface WorksProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  markerColor: string;
  status?: string;
  aspectRatio?: "wide" | "square";
  external?: boolean;
}

export default function WorksProjectCard({
  title,
  description,
  imageUrl,
  tags,
  markerColor,
  status,
  aspectRatio = "wide",
  external = false,
}: WorksProjectCardProps) {
  const touchStartRef = useRef<{ time: number; x: number; y: number } | null>(null);
  const isLongPressRef = useRef(false);

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
    if (dx > 10 || dy > 10) {
      touchStartRef.current = null;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartRef.current) {
      const elapsed = Date.now() - touchStartRef.current.time;
      if (elapsed >= 500) {
        isLongPressRef.current = true;
      }
    }
    touchStartRef.current = null;
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLongPressRef.current) {
      e.preventDefault();
      e.stopPropagation();
      isLongPressRef.current = false;
    }
  };

  return (
    <div
      className={styles.card}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => {
        touchStartRef.current = null;
        isLongPressRef.current = false;
      }}
      onClickCapture={handleClickCapture}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        className={`${styles.imageContainer} ${aspectRatio === "square" ? styles.imageContainerSquare : ""}`}
      >
        <ProjectThumbnail
          title={title}
          imageUrl={imageUrl}
          aspectRatio={aspectRatio}
        />
      </div>

      <div className={styles.contentRow} style={{ borderLeftColor: markerColor }}>
        <div className={styles.textContent}>
          <div className={styles.headerRow}>
            <h3 className={styles.title}>{title}</h3>
            {status && <span className={styles.status}>{status}</span>}
          </div>

          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <React.Fragment key={tag}>
                <span className={styles.tagGroup}>{tag}</span>
                {index < tags.length - 1 && <span className={styles.dot}>•</span>}
              </React.Fragment>
            ))}
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.ctaWrapper}>
            <span className={styles.ctaButton}>
              <span>{external ? "View Project" : "View Case Study"}</span>
              {external ? (
                <ArrowUpRight size={14} className={styles.ctaArrow} />
              ) : (
                <ArrowRight size={14} className={styles.ctaArrow} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
