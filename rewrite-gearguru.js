const fs = require('fs');
const path = require('path');

const pageTsxPath = path.join(__dirname, 'src/app/(without-sidebar)/works/gear-guru/page.tsx');
const pageCssPath = path.join(__dirname, 'src/app/(without-sidebar)/works/gear-guru/page.module.css');

const pageTsxContent = `"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, MessageSquare, ShoppingBag, ShieldCheck, Tag, TrendingUp, Car, Users, Gauge, CheckCircle2 } from "lucide-react";
import styles from "./page.module.css";

export default function GearGuruPage() {
  return (
    <div className={styles.page}>

      {/* ── HEADER ─────────────────────────────────────── */}
      <div className={styles.inner}>
        <div className={styles.breadcrumbRow}>
          <span className={styles.backPillText}>MARKETPLACE / AUTOMOTIVE</span>
        </div>

        <h1 className={styles.pageTitle}>GearGuru.</h1>
        <p className={styles.pageSubtitle}>
          A community-driven marketplace for car enthusiasts
        </p>
        <p className={styles.pageDesc}>
          Discover, validate, and upgrade performance parts — all in one place.
        </p>

        <div className={styles.metaDivider} />

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>SERVICE</span>
            <span className={styles.metaValue}>Product Design</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>DURATION</span>
            <span className={styles.metaValue}>6 Weeks</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>SCOPE</span>
            <span className={styles.metaValue}>90+ Screens</span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ─────────────────────────────────── */}
      <div className={styles.inner}>
        <div className={styles.heroImg}>
          <Image
            src="/images/gear-guru/Hero section.jpg"
            alt="Gear Guru — App Hero"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* ── PROBLEM / OPPORTUNITY ──────────────────────── */}
      <div className={styles.inner}>
        <div className={styles.twoCol}>
          <div className={styles.col}>
            <h2 className={styles.h2}>The Problem</h2>
            <p className={styles.body}>
              Car enthusiasts don’t just buy parts — they research, validate, and build identity. But today, this journey is fragmented across multiple platforms: Instagram for inspiration, YouTube for reviews, WhatsApp groups for advice, E-commerce for purchases. This disconnect creates friction and reduces purchase confidence.
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.opportunityCard}>
              <h3 className={styles.h3Blue}>Opportunity</h3>
              <p className={styles.body}>
                What if discovery, validation, and purchasing existed in one seamless experience? GearGuru brings commerce and community together — enabling users to make confident upgrade decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── WORKSHOP IMAGE ─────────────────────────────── */}
      <div className={styles.inner}>
        <div className={styles.workshopImg}>
          <Image
            src="/images/gear-guru/Automotive workshop.jpg"
            alt="Automotive workshop"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* ── UNDERSTANDING USER BEHAVIOR ────────────────── */}
      <div className={styles.inner}>
        <h2 className={styles.smallCapsTitle} style={{ marginTop: '80px', marginBottom: '40px' }}>UNDERSTANDING USER BEHAVIOR</h2>
        
        <div className={styles.behaviorStatsRow}>
          <div className={styles.behaviorStat}>
            <span className={styles.statNumBig}>17+</span>
            <span className={styles.statLabelSmall}>USERS SURVEYED</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.behaviorStat}>
            <span className={styles.statNumBig}>3</span>
            <span className={styles.statLabelSmall}>IN-DEPTH INTERVIEWS</span>
          </div>
        </div>

        <div className={styles.dividerLine} style={{ margin: '40px 0' }} />

        <div className={styles.behaviorCardsRow}>
          <div className={styles.behaviorCard}>
            <ShieldCheck className={styles.behaviorIcon} />
            <h4 className={styles.behaviorCardTitle}>PEER VALIDATION</h4>
            <p className={styles.behaviorCardDesc}>Users rely heavily on peer validation before purchasing.</p>
          </div>
          <div className={styles.behaviorCard}>
            <Tag className={styles.behaviorIcon} />
            <h4 className={styles.behaviorCardTitle}>BRAND TRUST</h4>
            <p className={styles.behaviorCardDesc}>Brand trust significantly impacts decisions.</p>
          </div>
          <div className={styles.behaviorCard}>
            <TrendingUp className={styles.behaviorIcon} />
            <h4 className={styles.behaviorCardTitle}>LONG-TERM VALUE</h4>
            <p className={styles.behaviorCardDesc}>Long-term owners invest more in quality upgrades.</p>
          </div>
          <div className={styles.behaviorCard}>
            <MessageSquare className={styles.behaviorIcon} />
            <h4 className={styles.behaviorCardTitle}>COMMUNITY DESIRE</h4>
            <p className={styles.behaviorCardDesc}>Strong desire for community interaction.</p>
          </div>
        </div>
      </div>

      {/* ── WHO ARE WE DESIGNING FOR ───────────────────── */}
      <div className={styles.darkHub}>
        <div className={styles.inner}>
          <h2 className={styles.darkTitle}>Who Are We Designing For?</h2>
          <div className={styles.hubCards}>
            <div className={styles.personaCard}>
              <div className={styles.personaIconWrap}>
                <Car size={24} color="#fff" />
              </div>
              <h4 className={styles.personaCardTitle}>Cab Driver</h4>
              <p className={styles.personaCardDesc}>Prioritizing reliability and maintenance efficiency.</p>
            </div>
            <div className={styles.personaCard}>
              <div className={styles.personaIconWrap}>
                <Users size={24} color="#fff" />
              </div>
              <h4 className={styles.personaCardTitle}>Family Car Owner</h4>
              <p className={styles.personaCardDesc}>Seeking safety and comfort-enhancing upgrades.</p>
            </div>
            <div className={styles.personaCard}>
              <div className={styles.personaIconWrap}>
                <Gauge size={24} color="#fff" />
              </div>
              <h4 className={styles.personaCardTitle}>Power Seeker</h4>
              <p className={styles.personaCardDesc}>Focused on performance metrics and technical validation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FROM RESEARCH TO STRUCTURE ─────────────────── */}
      <div className={styles.inner}>
        <h2 className={styles.h2} style={{ marginTop: '100px' }}>From Research to Structure</h2>
        <p className={styles.body} style={{ maxWidth: '800px' }}>
          To organize the platform, I conducted card sorting to understand how users group features. Key Outcome: Users naturally formed 5 pillars: Marketplace, Community, Profile, Knowledge, Support.
        </p>

        <div className={styles.architectureBox}>
          <p className={styles.architectureLabel}>PLATFORM ARCHITECTURE</p>
          <div className={styles.architecturePills}>
            <div className={styles.archPill}><span className={styles.archPillBlue}>PILLAR 01</span> Marketplace</div>
            <div className={styles.archPill}><span className={styles.archPillBlue}>PILLAR 02</span> Community</div>
            <div className={styles.archPill}><span className={styles.archPillBlue}>PILLAR 03</span> Profile</div>
            <div className={styles.archPill}><span className={styles.archPillBlue}>PILLAR 04</span> Knowledge</div>
            <div className={styles.archPill}><span className={styles.archPillBlue}>PILLAR 05</span> Support</div>
          </div>
          <p className={styles.architectureDesc}>
            This structure ensures clear separation while enabling seamless navigation between commerce and community.
          </p>
        </div>

        <h2 className={styles.h2} style={{ marginTop: '80px' }}>Designing the Core Experience</h2>
        
        <div className={styles.coreExpList}>
          <div className={styles.coreExpItem}>
            <div className={styles.coreExpNum}>01</div>
            <div>
              <h4 className={styles.coreExpTitle}>Discovery &amp; Social Validation</h4>
              <p className={styles.coreExpDesc}>Users explore community-driven content before making decisions.</p>
            </div>
          </div>
          <div className={styles.coreExpItem}>
            <div className={styles.coreExpNum}>02</div>
            <div>
              <h4 className={styles.coreExpTitle}>Commerce &amp; Checkout</h4>
              <p className={styles.coreExpDesc}>Simplified browsing and purchasing with strong trust signals.</p>
            </div>
          </div>
          <div className={styles.coreExpItem}>
            <div className={styles.coreExpNum}>03</div>
            <div>
              <h4 className={styles.coreExpTitle}>Identity &amp; Engagement</h4>
              <p className={styles.coreExpDesc}>Personalized garage and profile for long-term engagement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── EXPLORING EARLY CONCEPTS ───────────────────── */}
      <div className={styles.inner}>
        <h2 className={styles.h2} style={{ marginTop: '100px' }}>Exploring Early Concepts</h2>
        <p className={styles.body} style={{ marginBottom: "48px" }}>
          Translated structure into task-focused flows.
        </p>
        <div className={styles.wireframesBg}>
          <div className={styles.wireframesGrid}>
            <div className={styles.wireframeWrap}>
              <Image src="/images/gear-guru/Explore Early Concept 01.jpg" alt="Early concept 1" fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.wireframeWrap}>
              <Image src="/images/gear-guru/Explore Early Concept 02.jpg" alt="Early concept 2" fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.wireframeWrap}>
              <Image src="/images/gear-guru/Explore Early Concept 03.jpg" alt="Early concept 3" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── BUILDING A SCALABLE SYSTEM ─────────────────── */}
      <div className={styles.inner}>
        <h2 className={styles.h2} style={{ marginTop: '100px' }}>Building a Scalable System</h2>
        <p className={styles.body} style={{ marginBottom: "64px" }}>
          Designed a modular system to maintain consistency across flows.
        </p>
        
        <div className={styles.systemRow}>
          <div className={styles.systemLeft}>
            <p className={styles.systemLabel}>COLORS &amp; TYPOGRAPHY</p>
            <div className={styles.colorCircles}>
              <div className={styles.colorCircle} style={{ background: '#111' }} />
              <div className={styles.colorCircle} style={{ background: '#2563EB' }} />
              <div className={styles.colorCircle} style={{ background: '#FFF', border: '1px solid #E5E7EB' }} />
              <div className={styles.colorCircle} style={{ background: '#E5E7EB' }} />
            </div>
            <h3 className={styles.fontBig}>Manrope Bold</h3>
            <h4 className={styles.fontMed}>Inter Medium</h4>
            <p className={styles.fontSmall}>System Accessibility Standard: AA</p>
          </div>
          
          <div className={styles.systemRight}>
            <div className={styles.componentsCard}>
              <p className={styles.systemLabel}>COMPONENTS</p>
              <div className={styles.compField}>
                <div className={styles.compDotBlue} />
                <div className={styles.compLine} />
              </div>
              <div className={styles.compField}>
                <div className={styles.compDotGray} />
                <div className={styles.compLine} />
              </div>
              <div className={styles.compButton}>
                <div className={styles.compLineBlue} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FINAL EXPERIENCE ───────────────────────────── */}
      <div className={styles.inner}>
        <h2 className={styles.massiveTitle} style={{ marginTop: '120px' }}>Final Experience.</h2>

        <div className={styles.finalCardLightBlue}>
          <div className={styles.finalImgWrap}>
            <Image src="/images/gear-guru/01 -  Discovery - Social Hub.jpg" alt="Social Hub" fill style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.finalText}>
            <span className={styles.pillTextBlue}>01 — DISCOVERY</span>
            <h3 className={styles.finalH3}>Social Hub</h3>
            <ul className={styles.finalListCheck}>
              <li><CheckCircle2 className={styles.checkIcon} /> Rich media integration for build inspiration.</li>
              <li><CheckCircle2 className={styles.checkIcon} /> Verified owner badges to ensure review authenticity.</li>
            </ul>
          </div>
        </div>

        <div className={styles.finalCardGrey}>
          <div className={styles.finalText}>
            <span className={styles.pillTextBlue}>02 — COMMERCE</span>
            <h3 className={styles.finalH3}>Streamlined Conversion</h3>
            <ul className={styles.finalListCheck}>
              <li><CheckCircle2 className={styles.checkIcon} /> Technical spec-to-performance comparison</li>
              <li><CheckCircle2 className={styles.checkIcon} /> One-tap checkout with compatibility verification.</li>
            </ul>
          </div>
          <div className={styles.finalImgWrap}>
            <Image src="/images/gear-guru/02- Commerce - Stramlined conversation.jpg" alt="Commerce" fill style={{ objectFit: "contain" }} />
          </div>
        </div>

        <div className={styles.finalCardDarkBlue}>
          <div className={styles.finalImgWrap}>
            <Image src="/images/gear-guru/03 - Identity - Personalizaed Garage.jpg" alt="Garage" fill style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.finalTextWhite}>
            <span className={styles.pillTextLightBlue}>03 — IDENTITY</span>
            <h3 className={styles.finalH3White}>Personalized Garage</h3>
            <ul className={styles.finalListCheckWhite}>
              <li><CheckCircle2 className={styles.checkIconWhite} /> Custom build logs to track upgrade history.</li>
              <li><CheckCircle2 className={styles.checkIconWhite} /> Engagement rewards for community contribution.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── VALIDATING THE EXPERIENCE ──────────────────── */}
      <div className={styles.inner}>
        <div className={styles.validationRow}>
          <div className={styles.validationLeft}>
            <h2 className={styles.h2}>Validating the<br />Experience</h2>
            
            <p className={styles.smallCapsTitle} style={{ marginTop: '40px', marginBottom: '20px' }}>KEY FINDINGS</p>
            <p className={styles.body}>
              Users found the "Garage" feature most compelling for long-term use.
            </p>
            <p className={styles.body}>
              Navigation between community posts and product listings needed better visual cues.
            </p>

            <p className={styles.smallCapsTitle} style={{ marginTop: '40px', marginBottom: '20px' }}>ITERATIONS</p>
            <ul className={styles.iterationList}>
              <li>Refined global search for better part-discovery.</li>
              <li>Improved contrast on technical spec labels.</li>
            </ul>
          </div>
          
          <div className={styles.validationRight}>
            <div className={styles.outcomeCard}>
              <h3 className={styles.h3Card}>Outcome</h3>
              <div className={styles.outcomeList}>
                <div className={styles.outcomeItem}>
                  <TrendingUp className={styles.outcomeIcon} />
                  <span>Improved onboarding clarity</span>
                </div>
                <div className={styles.outcomeItem}>
                  <TrendingUp className={styles.outcomeIcon} />
                  <span>Reduced checkout friction</span>
                </div>
                <div className={styles.outcomeItem}>
                  <TrendingUp className={styles.outcomeIcon} />
                  <span>Stronger community-commerce integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT I LEARNED ─────────────────────────────── */}
      <div className={styles.inner}>
        <div className={styles.learnedWrap}>
          <h2 className={styles.h2}>What I Learned</h2>
          <p className={styles.bodyBig}>
            Community validation is not a secondary feature — it directly influences purchase confidence. Balancing structured commerce with social engagement requires clear hierarchy, strong IA, and thoughtful integration.
          </p>
          <div className={styles.quoteBlock}>
            <p className={styles.quoteText}>
              GearGuru demonstrates how community and commerce can work together to create more confident and engaging product experiences.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
\`;

fs.writeFileSync(pageTsxPath, pageTsxContent);
console.log('page.tsx written.');

const oldCss = fs.readFileSync(pageCssPath, 'utf8');

const additionalCss = \`
/* --- NEW STYLES FROM OVERHAUL --- */
.backPillText {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #6b7280;
  background-color: #f3f4f6;
  padding: 6px 12px;
  border-radius: 100px;
  display: inline-block;
  margin-bottom: 24px;
}

.pageDesc {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 48px;
  max-width: 600px;
  line-height: 1.5;
}

.smallCapsTitle {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #6b7280;
  text-transform: uppercase;
}

.behaviorStatsRow {
  display: flex;
  align-items: flex-end;
  gap: 40px;
}
.behaviorStat {
  display: flex;
  flex-direction: column;
}
.statNumBig {
  font-size: 64px;
  font-weight: 800;
  color: #111;
  line-height: 1;
}
.statLabelSmall {
  font-size: 12px;
  font-weight: 700;
  color: #6b7280;
  margin-top: 8px;
  letter-spacing: 1px;
}
.statDivider {
  width: 1px;
  height: 60px;
  background-color: #e5e7eb;
  margin-bottom: 10px;
}
.dividerLine {
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
}

.behaviorCardsRow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.behaviorCard {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.03);
}
.behaviorIcon {
  color: #2563EB;
  width: 24px;
  height: 24px;
  margin-bottom: 24px;
}
.behaviorCardTitle {
  font-size: 14px;
  font-weight: 700;
  color: #111;
  margin-bottom: 12px;
}
.behaviorCardDesc {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.5;
}

.personaCard {
  background: #1f1f1f;
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  flex: 1;
}
.personaIconWrap {
  width: 56px;
  height: 56px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
}
.personaCardTitle {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}
.personaCardDesc {
  font-size: 16px;
  color: #9ca3af;
  line-height: 1.6;
}

.architectureBox {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 64px;
  text-align: center;
  margin-top: 64px;
}
.architectureLabel {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #64748b;
  margin-bottom: 40px;
}
.architecturePills {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.archPill {
  background: #fff;
  padding: 16px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  color: #111;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.archPillBlue {
  color: #2563EB;
  font-size: 12px;
  font-weight: 700;
}
.architectureDesc {
  color: #64748b;
  font-size: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.coreExpList {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 48px;
}
.coreExpItem {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}
.coreExpNum {
  font-size: 48px;
  font-weight: 800;
  color: #e2e8f0;
  line-height: 1;
}
.coreExpTitle {
  font-size: 22px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
}
.coreExpDesc {
  font-size: 16px;
  color: #6b7280;
}

.systemRow {
  display: flex;
  gap: 64px;
}
.systemLeft {
  flex: 1;
}
.systemRight {
  flex: 1;
}
.systemLabel {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #6b7280;
  margin-bottom: 24px;
}
.colorCircles {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}
.colorCircle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.fontBig {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 12px;
}
.fontMed {
  font-size: 20px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 16px;
}
.fontSmall {
  font-size: 14px;
  color: #6b7280;
}
.componentsCard {
  background: #fafafa;
  border: 1px solid #f3f4f6;
  border-radius: 20px;
  padding: 40px;
}
.compField {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  margin-bottom: 16px;
}
.compDotBlue { width: 12px; height: 12px; border-radius: 50%; background: #2563EB; }
.compDotGray { width: 12px; height: 12px; border-radius: 50%; background: #e5e7eb; }
.compLine { height: 6px; width: 64px; background: #f3f4f6; border-radius: 4px; }
.compButton { background: #005ce6; height: 48px; border-radius: 8px; width: 160px; display: flex; align-items: center; justify-content: center; }
.compLineBlue { height: 6px; width: 48px; background: rgba(255,255,255,0.3); border-radius: 4px; }

.pillTextBlue {
  color: #2563EB;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: inline-block;
}
.pillTextLightBlue {
  color: #60a5fa;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: inline-block;
}
.finalListCheck {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.finalListCheck li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #4b5563;
}
.finalListCheckWhite {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.finalListCheckWhite li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #d1d5db;
}
.checkIcon { color: #2563EB; width: 20px; height: 20px; flex-shrink: 0; }
.checkIconWhite { color: #2563EB; width: 20px; height: 20px; flex-shrink: 0; }
.finalCardLightBlue {
  display: flex;
  background-color: #f1f5f9;
  border-radius: 24px;
  padding: 64px 80px;
  align-items: center;
  gap: 64px;
  margin-bottom: 40px;
}
.finalCardDarkBlue {
  display: flex;
  background-color: #1e1b4b;
  border-radius: 24px;
  padding: 64px 80px;
  align-items: center;
  gap: 64px;
  margin-bottom: 40px;
}

.validationRow { display: flex; gap: 80px; }
.validationLeft { flex: 1; }
.validationRight { flex: 1; }
.iterationList {
  list-style: none;
  padding: 0;
}
.iterationList li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 16px;
  color: #4b5563;
  font-size: 16px;
}
.iterationList li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background-color: #2563EB;
  border-radius: 50%;
}
.outcomeCard {
  background: #f8fafc;
  border-radius: 24px;
  padding: 48px;
  height: 100%;
}
.outcomeList {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}
.outcomeItem {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  color: #111;
  font-weight: 500;
}
.outcomeIcon {
  color: #10B981;
  width: 24px;
  height: 24px;
}

.learnedWrap {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}
.bodyBig {
  font-size: 20px;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 48px;
}
.quoteBlock {
  border-left: 4px solid #2563EB;
  padding-left: 24px;
}
.quoteText {
  font-size: 18px;
  color: #6b7280;
  font-style: normal;
}
\`;

fs.writeFileSync(pageCssPath, oldCss + '\\n' + additionalCss);
console.log('page.module.css written.');
