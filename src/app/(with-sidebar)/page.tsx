import { ArrowRight, LayoutTemplate, Calendar, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhatIBring from "@/components/WhatIBring";
import ThingsICareAbout from "@/components/ThingsICareAbout";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        {/* Animated radial orbs */}
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />
        <div className={styles.heroOrb3} aria-hidden="true" />

        <div className={styles.availabilityWrapper}>
          <div className={styles.availabilityBadge}>
            <span>BASED IN CHENNAI</span>
            <span className={styles.dot}>•</span>
            <span className={styles.liveStatusGroup}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>OPEN TO WORK</span>
            </span>
          </div>
        </div>
        
        <h1 className={styles.heroHeading}>
          Turning operational <br />
          <span className={styles.textHighlight}>complexity</span> <br />
          into intuitive products.
        </h1>
        
        <p className={styles.heroSubtext}>
          Product Designer specializing in enterprise SaaS, workflow systems, and scalable digital products—transforming operational complexity into intuitive experiences through structure and systems thinking.
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.iconBox}>
                <Calendar size={20} strokeWidth={2} />
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statTitle}>Experience</span>
                <span className={styles.statValue}>1.3 years</span>
              </div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.iconBox}>
                <Folder size={20} strokeWidth={2} />
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statTitle}>Works - 10+</span>
                <span className={styles.statValue}>SaaS / Web / Mobile</span>
              </div>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.iconBox}>
                <LayoutTemplate size={20} strokeWidth={2} />
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statTitle}>Focus</span>
                <span className={styles.statValue}>Enterprise SaaS</span>
              </div>
            </div>
          </div>
        </div>

        <Link href="/about" className={styles.ctaButton}>
          More about me
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      </section>

      {/* ── 02. DESIGN IN PRACTICE SECTION ── */}
      <WhatIBring />

      {/* ── 03. THINGS I CARE ABOUT SECTION ── */}
      <ThingsICareAbout />

      {/* ── 04. WRITINGS SECTION ── */}
      <section className={styles.journalSection}>
        <div className={styles.journalHeader}>
          <h2 className={styles.journalTitle}>Writings</h2>
          <div className={styles.journalLine}></div>
        </div>
        
        <div className={styles.journalCard}>
          <div className={styles.journalDarkContent}>
            <div className={styles.journalMeta}>LATEST ARTICLE • MAR 2024</div>
            <h3 className={styles.journalHeading}>
              The Psychology<br/>of Minimalist<br/>Interfaces
            </h3>
            <p className={styles.journalText}>
              Exploring how cognitive load is reduced through the intentional use of whitespace and tonal shifts.
            </p>
            <a href="https://www.linkedin.com/posts/nithinnaresh-r-k-55a553274_uxdesign-universaldesign-accessibility-ugcPost-7422272716080193537-GL43/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMAKFYByKCGqaR-JP6qxTTzXxaNJW5wFHo" target="_blank" rel="noopener noreferrer" className={styles.readPostBtn}>
              READ POST
            </a>
          </div>
          <div className={styles.journalImageArea}>
            <Image src="/images/overview/Frame 2.jpg" alt="Journal Feature" fill style={{ objectFit: 'cover' }} />
            <div className={styles.journalImageOverlay} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}

const TOOLS = [
  { name: 'Figma', color: '#F24E1E', image: '/images/overview/Figma.jpg' },
  { name: 'Miro', color: '#FFD02F', image: '/images/overview/miro.jpg' },
  { name: 'Notion', color: '#000000', image: '/images/overview/notion.jpg' },
  { name: 'JetBrains', color: '#000000', image: '/images/overview/youtack.jpg' },
  { name: 'Cursor', color: '#000000', image: '/images/overview/cursor.jpg' },
  { name: 'ChatGPT', color: '#10A37F', image: '/images/overview/chatgpt.jpg' },
  { name: 'Lovable', color: '#FF4D4D', image: '/images/overview/loveable.jpg' },
  { name: 'Claude', color: '#D97757', image: '/images/overview/claude.jpg' }
];

// Simple SVG Icons to match design stats block
function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}

function ModulesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  );
}
