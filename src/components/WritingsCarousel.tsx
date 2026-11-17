import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './WritingsCarousel.module.css';

interface WritingItem {
  id: string;
  meta: string;
  title: string;
  summary: string;
  href: string;
  type: 'poster' | 'image';
  posterTitle?: string;
  posterFooter?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const WRITINGS: WritingItem[] = [
  {
    id: 'trust-and-safety',
    meta: 'LATEST ARTICLE • Oct 2026',
    title: 'Designing trust and safety for people, not patterns',
    summary:
      'What happens when a system built to protect users disrupts how they naturally use the product, using WhatsApp restrictions as the example.',
    href: 'https://lnkd.in/p/gtXkGMbR',
    type: 'poster',
    posterTitle: 'Designing Trust & Safety.\nFor People, Not Patterns.',
    posterFooter: 'A UX observation',
  },
  {
    id: 'minimalist-interfaces',
    meta: 'LATEST ARTICLE • Feb 2026',
    title: 'The Psychology of Minimalist Interfaces',
    summary:
      'Exploring how cognitive load is reduced through the intentional use of whitespace and tonal shifts.',
    href: 'https://www.linkedin.com/posts/nithinnaresh-r-k-55a553274_uxdesign-universaldesign-accessibility-ugcPost-7422272716080193537-GL43/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMAKFYByKCGqaR-JP6qxTTzXxaNJW5wFHo',
    type: 'image',
    imageSrc: '/images/overview/Frame 2.jpg',
    imageAlt: 'Daily Site Log Feature',
  },
];

export default function WritingsCarousel() {
  return (
    <section className={styles.journalSection} aria-label="Writings">
      <div className={styles.journalHeader}>
        <h2 className={styles.journalTitle}>Writings</h2>
        <div className={styles.journalLine} />
      </div>

      <div className={styles.cardsGrid}>
        {WRITINGS.map((item) => (
          <article key={item.id} className={styles.journalCard}>
            {item.type === 'poster' ? (
              <div className={`${styles.cardVisual} ${styles.posterArea}`}>
                <div className={styles.posterContent}>
                  <h4 className={styles.posterTitle}>
                    {item.posterTitle?.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h4>
                  <div className={styles.posterFooter}>
                    <span>{item.posterFooter}</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
                <div className={styles.cardImageOverlay} />
              </div>
            ) : (
              <div className={styles.cardVisual}>
                <Image
                  src={item.imageSrc!}
                  alt={item.imageAlt || item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.cardImageOverlay} />
              </div>
            )}

            <div className={styles.cardContent}>
              <div className={styles.journalMeta}>{item.meta}</div>
              <h3 className={styles.journalHeading}>{item.title}</h3>
              <p className={styles.journalText}>{item.summary}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readPostBtn}
              >
                <span>READ POST</span>
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
