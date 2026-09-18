'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './ProjectPagination.module.css';

interface ProjectNavItem {
  title: string;
  category: string;
  path: string;
  markerColor: string;
}

const CASE_STUDIES: ProjectNavItem[] = [
  {
    title: 'Gear Guru',
    category: 'Marketplace / Automotive',
    path: '/works/gear-guru',
    markerColor: '#005BC4',
  },
  {
    title: 'Rehabilitation',
    category: 'Concept / Health Platform',
    path: '/works/rehabilitation',
    markerColor: '#005BC4',
  },
  {
    title: 'Workflow-Driven T&M System',
    category: 'Linarc Works / Workflow Heavy',
    path: '/works/tnm',
    markerColor: '#FF9201',
  },
  {
    title: 'The Journal',
    category: 'Linarc Works / Daily Site Log',
    path: '/works/journal',
    markerColor: '#FF9201',
  },
  {
    title: 'Single Object',
    category: 'Linarc Works / Report Builder',
    path: '/works/single-object',
    markerColor: '#FF9201',
  },
  {
    title: 'Marketplace',
    category: 'Linarc Works / SaaS Integration',
    path: '/works/marketplace',
    markerColor: '#FF9201',
  },
  {
    title: 'Toolbox Talk',
    category: 'Linarc Works / Safety Execution',
    path: '/works/toolbox-talk',
    markerColor: '#FF9201',
  },
];

export default function ProjectPagination() {
  const pathname = usePathname();
  const currentIndex = CASE_STUDIES.findIndex((item) => item.path === pathname);

  if (currentIndex === -1) return null;

  const prevIndex = (currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
  const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;

  const prevProject = CASE_STUDIES[prevIndex];
  const nextProject = CASE_STUDIES[nextIndex];

  return (
    <section className={styles.paginationSection} aria-label='Case study navigation'>
      <div className={styles.container}>
        <div className={styles.navGrid}>
          {/* Previous Project */}
          <Link href={prevProject.path} className={`${styles.navCard} ${styles.prevCard}`}>
            <div className={styles.iconCircle}>
              <ArrowLeft size={16} strokeWidth={2.2} />
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.directionLabel}>PREVIOUS PROJECT</span>
              <h4 className={styles.projectTitle}>{prevProject.title}</h4>
              <span className={styles.categoryTag}>{prevProject.category}</span>
            </div>
          </Link>

          {/* Next Project */}
          <Link href={nextProject.path} className={`${styles.navCard} ${styles.nextCard}`}>
            <div className={styles.cardInfo}>
              <span className={styles.directionLabel}>NEXT PROJECT</span>
              <h4 className={styles.projectTitle}>{nextProject.title}</h4>
              <span className={styles.categoryTag}>{nextProject.category}</span>
            </div>
            <div className={styles.iconCircle}>
              <ArrowRight size={16} strokeWidth={2.2} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
