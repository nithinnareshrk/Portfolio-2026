import React from "react";
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
  return (
    <div className={styles.card}>
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
