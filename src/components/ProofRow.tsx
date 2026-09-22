'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Workflow,
  LayoutGrid,
  Rocket,
  Monitor,
  Zap
} from 'lucide-react';
import styles from './ProofRow.module.css';

interface MetricCardProps {
  stat?: string;
  numericTarget?: number;
  suffix?: string;
  prefix?: string;
  heading: string;
  caption: string;
  icon: React.ReactNode;
  variantClass: string;
  isVisible: boolean;
}

function MetricCard({
  stat,
  numericTarget,
  suffix = '',
  prefix = '',
  heading,
  caption,
  icon,
  variantClass,
  isVisible
}: MetricCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible || numericTarget === undefined) return;

    // Honor prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setCount(numericTarget);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 520; // Fast & snappy motion under 600ms

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.round(easeOutCubic(progress) * numericTarget);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(numericTarget);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, numericTarget]);

  const displayValue =
    numericTarget !== undefined
      ? `${prefix}${count}${suffix}`
      : stat;

  return (
    <div className={`${styles.card} ${variantClass}`}>
      <div className={styles.cardTop}>
        <div className={styles.iconBox}>{icon}</div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.statValue}>{displayValue}</div>
        <h3 className={styles.statHeading}>{heading}</h3>
        <p className={styles.statCaption}>{caption}</p>
      </div>
    </div>
  );
}

export default function ProofRow() {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = rowRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Triggers once on scroll-into-view
        }
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-label="Impact at a Glance">
      <div className={styles.container} ref={rowRef}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>BY THE NUMBERS</span>
          <h2 className={styles.headline}>Impact at a Glance</h2>
          <p className={styles.subheadline}>
            End-to-end product design across 0-to-1 enterprise workflows, cross-platform systems, and pilot customer delivery.
          </p>
        </div>

        {/* 5 Metric Cards */}
        <div className={styles.cardsGrid}>
          {/* Card 1: 0 → 1 */}
          <MetricCard
            stat="0 → 1"
            heading="Requirements to Production"
            caption="Architected greenfield feature flows from raw ambiguity to live releases."
            icon={<Workflow size={18} strokeWidth={2.2} />}
            variantClass={styles.cardBlue}
            isVisible={isVisible}
          />

          {/* Card 2: 5 */}
          <MetricCard
            numericTarget={5}
            heading="Core Enterprise Modules"
            caption="Document, Quality, Field, Finance, and Admin."
            icon={<LayoutGrid size={18} strokeWidth={2.2} />}
            variantClass={styles.cardAmber}
            isVisible={isVisible}
          />

          {/* Card 3: 7+ */}
          <MetricCard
            numericTarget={7}
            suffix="+"
            heading="Production Features Shipped"
            caption="High-velocity releases validated directly with early enterprise pilot users."
            icon={<Rocket size={18} strokeWidth={2.2} />}
            variantClass={styles.cardEmerald}
            isVisible={isVisible}
          />

          {/* Card 4: 3 */}
          <MetricCard
            numericTarget={3}
            heading="Platforms Unified"
            caption="Responsive Web, Tablet, and Mobile workflows designed for both field and office teams."
            icon={<Monitor size={18} strokeWidth={2.2} />}
            variantClass={styles.cardIndigo}
            isVisible={isVisible}
          />

          {/* Card 5: 1.3 Years */}
          <MetricCard
            stat="1.3 Years"
            heading="Startup Execution"
            caption="High-velocity execution within a lean 3-person design team partnering directly with founders."
            icon={<Zap size={18} strokeWidth={2.2} />}
            variantClass={styles.cardNavy}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}
