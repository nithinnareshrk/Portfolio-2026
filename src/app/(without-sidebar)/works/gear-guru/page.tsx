"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Gauge,
  Users,
  Car,
  Heart,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Share2,
  Bookmark,
  Sliders,
  MessageSquare,
  Sparkles,
  Layers,
  Wrench,
  Check,
  Repeat,
  CheckCheck,
} from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import ProjectSectionRail, { SectionItem } from "@/components/ProjectSectionRail";
import ProjectPagination from "@/components/ProjectPagination";
import ImageCompareSlider from "@/components/ImageCompareSlider";

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "01. The Problem" },
  { id: "identity", label: "02. Brand Identity" },
  { id: "competitors", label: "03. Competitor Landscape" },
  { id: "quant-research", label: "04. Quantitative Research" },
  { id: "archetypes", label: "05. User Archetypes" },
  { id: "architecture", label: "06. Card Sorting & IA" },
  { id: "flows", label: "07. Core Journeys & Wireframes" },
  { id: "design-system", label: "08. Design System & Playground" },
  { id: "final-experience", label: "09. Final Experience" },
  { id: "usability", label: "10. Usability Testing" },
  { id: "iterations", label: "11. Iterations (Before & After)" },
  { id: "impact", label: "12. Outcomes & Impact" },
  { id: "reflection", label: "13. Reflection & Takeaways" },
];

export default function GearGuruPage() {
  // ── Interactive Playground States ──────────────────
  const [activeSandboxTab, setActiveSandboxTab] = useState<"switch" | "product" | "chips" | "post">("switch");

  // Component 1: Switcher
  const [activeSwitch, setActiveSwitch] = useState<"store" | "community">("store");

  // Component 2: Product Card
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [selectedFinish, setSelectedFinish] = useState<"raw" | "matte">("raw");

  // Component 3: Filter Chips
  const [selectedChips, setSelectedChips] = useState<string[]>(["all", "bolt-on"]);
  const toggleChip = (id: string) => {
    setSelectedChips((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Component 4: Community Post
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(256);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className={styles.page}>
      <ProjectSectionRail sections={SECTIONS} />

      {/* ── HERO / OVERVIEW ──────────────────────────────── */}
      <div className={styles.inner} id="overview">
        <div style={{ marginTop: "20px" }}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            PROJECT IDENTITY
          </div>

          <h1 className={styles.heroTitle}>
            GearGuru — A Community-Driven Marketplace for Car Enthusiasts
          </h1>

          <p className={styles.heroSub}>
            Car enthusiasts don&apos;t just buy parts; they research, validate fitment, seek peer advice, and build identity. Today, that journey is fragmented across Instagram, YouTube, and generic retailers.
          </p>

          <p className={styles.heroAccent}>
            GearGuru unifies performance aftermarket commerce with a dedicated enthusiast social network—connecting real-world builds directly to verified parts.
          </p>
        </div>

        <div className={styles.metaDivider} />

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>ROLE</span>
            <span className={styles.metaValue}>End-to-End Product Design</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>DURATION</span>
            <span className={styles.metaValue}>6 Weeks</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>SCOPE</span>
            <span className={styles.metaValue}>90+ Screens &amp; Design System</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>PLATFORM</span>
            <span className={styles.metaValue}>iOS Mobile Application</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/images/gear-guru/hero-showcase.png"
              alt="GearGuru High Fidelity Mobile Screens Overview"
              fill
              unoptimized
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* ── 01. THE PROBLEM ──────────────────────────────── */}
      <div className={styles.sectionWarm} id="problem">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>01. THE PROBLEM</div>
          <h2 className={styles.h2}>The friction of upgrading: why buying automotive parts feels broken.</h2>

          <div className={styles.body}>
            <p>
              Automotive modification is inherently high-stakes. Parts are expensive, fitment is strictly vehicle-specific, and an incorrect purchase results in costly downtime or installation failure.
            </p>
            <p>
              Through initial field exploration and enthusiast discussions, three core breakdowns emerged in the current market journey:
            </p>
          </div>

          <div className={styles.challengesGrid}>
            <div className={styles.challengeCard}>
              <span className={styles.challengeNum}>BREAKDOWN 01</span>
              <h3 className={styles.challengeTitle}>The Trust Gap in Purchasing</h3>
              <p className={styles.challengeDesc}>
                Online parts catalogs lack verified fitment data, real-world sound/performance clips, and honest long-term reviews from everyday drivers. Buyers hesitate because they cannot verify how a part performs on their specific chassis.
              </p>
            </div>

            <div className={styles.challengeCard}>
              <span className={styles.challengeNum}>BREAKDOWN 02</span>
              <h3 className={styles.challengeTitle}>Fragmented Discovery Channels</h3>
              <p className={styles.challengeDesc}>
                Enthusiasts constantly bounce between disconnected apps: discovering builds on Instagram, watching dyno runs on YouTube, asking fitment questions in WhatsApp groups, and finally hunting down parts on generic e-commerce sites.
              </p>
            </div>

            <div className={styles.challengeCard}>
              <span className={styles.challengeNum}>BREAKDOWN 03</span>
              <h3 className={styles.challengeTitle}>No Dedicated Build Tracking</h3>
              <p className={styles.challengeDesc}>
                Car owners lack a dedicated home to document their vehicle&apos;s modification timeline, record installed parts with verified horsepower gains, and share their automotive identity with fellow builders.
              </p>
            </div>
          </div>

          <div className={styles.questionBox}>
            <p className={styles.questionText}>
              &ldquo;How might we bring parts discovery, peer validation, purchasing, and the user&apos;s build journey into one connected automotive experience?&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── 02. IDENTITY & APP MARK ──────────────────────── */}
      <div className={styles.inner} id="identity">
        <div className={styles.sectionLabel}>02. BRAND IDENTITY &amp; APP MARK</div>
        <h2 className={styles.h2}>Crafting a mark that balances mechanical precision and social community.</h2>

        <div className={styles.body}>
          <p>
            Before defining screen layouts, the brand required an identity that felt native to automotive mechanics while remaining crisp, legible, and app-icon ready on high-density displays.
          </p>
        </div>

        <div className={styles.identityRow}>
          <div className={styles.identityCard}>
            <h3 className={styles.h3}>Symbolism Behind the Glyph</h3>
            <p className={styles.body}>
              The GearGuru mark synthesizes three core mechanical and community attributes into a single continuous vector:
            </p>

            <div className={styles.identityPoints}>
              <div className={styles.identityPoint}>
                <span className={styles.identityBullet}>1</span>
                <div>
                  <strong style={{ color: "#111827", display: "block" }}>The Outer Chain Loop</strong>
                  <span className={styles.body} style={{ fontSize: "13px" }}>
                    Represents automotive components, timing chains, gears, and hardware reliability.
                  </span>
                </div>
              </div>

              <div className={styles.identityPoint}>
                <span className={styles.identityBullet}>2</span>
                <div>
                  <strong style={{ color: "#111827", display: "block" }}>The Unbroken Circle</strong>
                  <span className={styles.body} style={{ fontSize: "13px" }}>
                    Symbolizes the continuous, self-reinforcing connection of an active peer-to-peer community.
                  </span>
                </div>
              </div>

              <div className={styles.identityPoint}>
                <span className={styles.identityBullet}>3</span>
                <div>
                  <strong style={{ color: "#111827", display: "block" }}>The Core Lowercase &lsquo;g&rsquo;</strong>
                  <span className={styles.body} style={{ fontSize: "13px" }}>
                    Embeds the initial letter of GearGuru in an aerodynamic, fluid letterform.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.identityShowcaseCard}>
            <div className={styles.identityVisualGrid}>
              {/* Vector Logo Mark Display */}
              <div className={styles.glyphDisplayBox}>
                <div className={styles.glyphWrap}>
                  <Image
                    src="/images/gear-guru/gearguru-mark.png"
                    alt="GearGuru Vector Mark"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* iOS App Icon Display */}
              <div className={styles.appIconDisplayBox}>
                <div className={styles.iosAppIcon}>
                  <div style={{ position: "relative", width: "54px", height: "54px" }}>
                    <Image
                      src="/images/gear-guru/gearguru-mark.png"
                      alt="GearGuru iOS App Icon Mark"
                      fill
                      unoptimized
                      className={styles.whiteGlyph}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Color Psychology & Engineering Trust */}
            <div className={styles.iconRationaleBox}>
              <div className={styles.iconRationaleTitle}>Color Psychology &amp; Icon Design</div>
              <p className={styles.iconRationaleText}>
                The app icon incorporates an aerodynamic blue-cyan gradient (#1A73E8 to #00D2FF)—psychologically associated with open spaces, speed, technical intuition, and engineering confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 03. COMPETITOR LANDSCAPE ─────────────────────── */}
      <div className={styles.sectionWhite} id="competitors">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>03. COMPETITOR LANDSCAPE</div>
          <h2 className={styles.h2}>Benchmarking the industry: why e-commerce tools ignore enthusiast culture.</h2>

          <div className={styles.body}>
            <p>
              I evaluated 8 platforms across the commerce and community spectrum: pure e-commerce giants (AutoZone, Summit Racing, Amazon), media and forums (Instagram, YouTube, Reddit), specialized fitment stores (Fitment Industries), and GearGuru.
            </p>
          </div>

          <div className={styles.matrixWrapper}>
            <div className={styles.tableScroll}>
              <table className={styles.customTable}>
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Type</th>
                    <th>Primary Focus</th>
                    <th>Parts Inventory</th>
                    <th>Community Features</th>
                    <th>Build Tracking</th>
                    <th>Educational Content</th>
                    <th>User Support</th>
                    <th>Trust Signals</th>
                    <th className={styles.highlightHeader}>GearGuru</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>AutoZone</strong></td>
                    <td>E-commerce</td>
                    <td>OEM &amp; aftermarket</td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td className={styles.highlightCol}><strong>Ecosystem</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Summit Racing</strong></td>
                    <td>E-commerce</td>
                    <td>Performance parts</td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td className={styles.highlightCol}>Parts + Community</td>
                  </tr>
                  <tr>
                    <td><strong>Amazon</strong></td>
                    <td>E-commerce</td>
                    <td>Mass auto parts</td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td className={styles.highlightCol}><span className={styles.dotGreen} /> In-depth catalog</td>
                  </tr>
                  <tr>
                    <td><strong>Instagram</strong></td>
                    <td>Social Media</td>
                    <td>Visual inspiration</td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td className={styles.highlightCol}><span className={styles.dotGreen} /> Dedicated feed</td>
                  </tr>
                  <tr>
                    <td><strong>YouTube</strong></td>
                    <td>Content</td>
                    <td>Video tutorials</td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td className={styles.highlightCol}><span className={styles.dotGreen} /> Turbo Snaps</td>
                  </tr>
                  <tr>
                    <td><strong>Reddit</strong></td>
                    <td>Forum</td>
                    <td>Advice &amp; discussion</td>
                    <td><span className={styles.dotGray} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td className={styles.highlightCol}><span className={styles.dotGreen} /> Paddock channels</td>
                  </tr>
                  <tr>
                    <td><strong>Fitment Ind.</strong></td>
                    <td>Niche E-com</td>
                    <td>Wheel fitment &amp; gallery</td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td><span className={styles.dotYellow} /></td>
                    <td><span className={styles.dotGreen} /></td>
                    <td className={styles.highlightCol}><strong>All-in-One Hub</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ── 04. QUANTITATIVE RESEARCH ────────────────────── */}
      <div className={styles.sectionWarm} id="quant-research">
        <div className={styles.inner}>
        <div className={styles.sectionLabel}>04. QUANTITATIVE RESEARCH</div>
        <h2 className={styles.h2}>Validating user habits across 17+ car enthusiasts.</h2>

        <div className={styles.body}>
          <p>
            To ground the platform in real automotive purchase behaviors, I surveyed 17+ active car enthusiasts over 3 days using 16 focused questions covering parts replacement, upgrade budgets, and trust triggers.
          </p>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statBig}>17+</div>
            <div className={styles.statSub}>Enthusiasts Surveyed</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statBig}>16</div>
            <div className={styles.statSub}>Targeted Questions</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statBig}>3 Days</div>
            <div className={styles.statSub}>Research Duration</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statBig}>82%</div>
            <div className={styles.statSub}>Peer Trust Factor</div>
          </div>
        </div>

        <div className={styles.challengesGrid}>
          <div className={styles.challengeCard}>
            <span className={styles.challengeNum}>INSIGHT 01</span>
            <h3 className={styles.challengeTitle}>Ownership Duration Dictates Upgrades</h3>
            <p className={styles.challengeDesc}>
              Owners in years 1–2 focus on bolt-on aesthetics; owners beyond 3 years prioritize engine remapping, coilover handling, and high-spec brakes.
            </p>
          </div>

          <div className={styles.challengeCard}>
            <span className={styles.challengeNum}>INSIGHT 02</span>
            <h3 className={styles.challengeTitle}>Brand Trust Drives Purchase Confidence</h3>
            <p className={styles.challengeDesc}>
              Over 80% stated they abandon purchases if technical specs, chassis codes, and verified reviews from identical car trims are absent.
            </p>
          </div>

          <div className={styles.challengeCard}>
            <span className={styles.challengeNum}>INSIGHT 03</span>
            <h3 className={styles.challengeTitle}>Growing Demand for Sustainable Alternatives</h3>
            <p className={styles.challengeDesc}>
              A notable segment actively expressed interest in remanufactured performance parts, eco-friendly lubricants, and recyclable hardware.
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* ── 05. USER ARCHETYPES ──────────────────────────── */}
      <div className={styles.sectionWhite} id="archetypes">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>05. USER ARCHETYPES</div>
          <h2 className={styles.h2}>Three distinct perspectives: from daily utility to track-ready builds.</h2>

          <div className={styles.body}>
            <p>
              I conducted 1:1 semi-structured interviews with 3 participants across 3 distinct vehicle owner profiles to understand daily driving habits, mechanical comfort levels, and purchase anxieties.
            </p>
          </div>

          <div className={styles.archetypesGrid}>
            {/* Archetype 1 */}
            <div className={styles.archetypeCard}>
              <span className={`${styles.archetypeBadge} ${styles.archetypeBlue}`}>
                <Car size={14} /> Archetype 01
              </span>
              <h3 className={styles.h3}>The Cab Driver</h3>
              <p className={styles.archetypeQuote}>
                &ldquo;I like to get advice from other high-mileage car owners before I spend on anything.&rdquo;
              </p>

              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Goal</span>
                Maintain a reliable, cost-effective vehicle with minimum shop downtime.
              </div>
              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Key Pain Point</span>
                Hard to know which aftermarket parts are genuinely durable vs. cheap knockoffs.
              </div>
              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Design Response</span>
                Integrated community feed with discussion-driven reliability ratings.
              </div>
            </div>

            {/* Archetype 2 */}
            <div className={styles.archetypeCard}>
              <span className={`${styles.archetypeBadge} ${styles.archetypePurple}`}>
                <Users size={14} /> Archetype 02
              </span>
              <h3 className={styles.h3}>Family Car Owner</h3>
              <p className={styles.archetypeQuote}>
                &ldquo;I&apos;m not very technical, so I prefer simple guidance and trusted reviews.&rdquo;
              </p>

              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Goal</span>
                Keep the car safe, comfortable, and reliable for family travel.
              </div>
              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Key Pain Point</span>
                Overwhelmed by technical jargon and fears purchasing incompatible trims.
              </div>
              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Design Response</span>
                Simplified onboarding wizard with prominent vehicle compatibility badges.
              </div>
            </div>

            {/* Archetype 3 */}
            <div className={styles.archetypeCard}>
              <span className={`${styles.archetypeBadge} ${styles.archetypeGreen}`}>
                <Gauge size={14} /> Archetype 03
              </span>
              <h3 className={styles.h3}>The Power Seeker</h3>
              <p className={styles.archetypeQuote}>
                &ldquo;I&apos;m always looking for the next performance upgrade. I want the best specs.&rdquo;
              </p>

              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Goal</span>
                Maximize horsepower, track handling, and vehicle exclusivity.
              </div>
              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Key Pain Point</span>
                Limited access to niche parts and zero dyno-verified proof from sellers.
              </div>
              <div className={styles.archetypeDetailItem}>
                <span className={styles.archetypeDetailLabel}>Design Response</span>
                Advanced mechanical filtering, live dyno WHP calculators, and build showcases.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 06. ARCHITECTURE & CARD SORTING ──────────────── */}
      <div className={styles.inner} id="architecture">
        <div className={styles.sectionLabel}>06. CARD SORTING &amp; ARCHITECTURE</div>
        <h2 className={styles.h2}>From 22 feature cards to 5 unified product pillars.</h2>

        <div className={styles.body}>
          <p>
            To prevent feature creep across 90+ screens, I conducted an open card sorting exercise with 5 remote participants using 22 core platform cards. The results achieved an 82% average agreement rate.
          </p>
        </div>

        <div className={styles.clustersGrid}>
          <div className={styles.clusterCol}>
            <div className={styles.clusterTitle}>Marketplace</div>
            <div className={styles.clusterSubtitle}>Parts &amp; Purchasing</div>
            <div className={styles.clusterCardList}>
              <span className={styles.clusterCardItem}>Search Parts</span>
              <span className={styles.clusterCardItem}>Filter by Brand</span>
              <span className={styles.clusterCardItem}>Product Details</span>
              <span className={styles.clusterCardItem}>Add to Cart</span>
              <span className={styles.clusterCardItem}>Fitment Guarantee</span>
            </div>
          </div>

          <div className={styles.clusterCol}>
            <div className={styles.clusterTitle}>Community</div>
            <div className={styles.clusterSubtitle}>Social &amp; Exchange</div>
            <div className={styles.clusterCardList}>
              <span className={styles.clusterCardItem}>Community Feed</span>
              <span className={styles.clusterCardItem}>Post a Build</span>
              <span className={styles.clusterCardItem}>Comments &amp; Q&amp;A</span>
              <span className={styles.clusterCardItem}>Turbo Snaps</span>
              <span className={styles.clusterCardItem}>Paddock Chats</span>
            </div>
          </div>

          <div className={styles.clusterCol}>
            <div className={styles.clusterTitle}>User Profiles</div>
            <div className={styles.clusterSubtitle}>Garage &amp; Identity</div>
            <div className={styles.clusterCardList}>
              <span className={styles.clusterCardItem}>Add My Car</span>
              <span className={styles.clusterCardItem}>Track Modifications</span>
              <span className={styles.clusterCardItem}>Showcase Gallery</span>
              <span className={styles.clusterCardItem}>Followers / Following</span>
              <span className={styles.clusterCardItem}>Verified Pilot Badge</span>
            </div>
          </div>

          <div className={styles.clusterCol}>
            <div className={styles.clusterTitle}>Knowledge</div>
            <div className={styles.clusterSubtitle}>Learn &amp; Troubleshoot</div>
            <div className={styles.clusterCardList}>
              <span className={styles.clusterCardItem}>DIY Guides</span>
              <span className={styles.clusterCardItem}>Verified Reviews</span>
              <span className={styles.clusterCardItem}>Maintenance Tips</span>
              <span className={styles.clusterCardItem}>Dyno Comparisons</span>
            </div>
          </div>

          <div className={styles.clusterCol}>
            <div className={styles.clusterTitle}>Support</div>
            <div className={styles.clusterSubtitle}>Orders &amp; Account</div>
            <div className={styles.clusterCardList}>
              <span className={styles.clusterCardItem}>Track Orders</span>
              <span className={styles.clusterCardItem}>Returns &amp; Warranty</span>
              <span className={styles.clusterCardItem}>Help Center / FAQs</span>
              <span className={styles.clusterCardItem}>Account Security</span>
            </div>
          </div>
        </div>

        <div className={styles.questionBox} style={{ marginTop: "40px" }}>
          <p className={styles.questionText}>
            &ldquo;With the structure in place, the next challenge was understanding how users would actually move through it.&rdquo;
          </p>
        </div>

        {/* Full IA Tree Visual */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: "16px", overflow: "hidden", border: "1px solid #e5e7eb", background: "#ffffff", marginTop: "24px" }}>
          <Image
            src="/images/gear-guru/gearguru-ia-tree.png"
            alt="GearGuru Complete Information Architecture Tree"
            fill
            unoptimized
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* ── 07. CORE JOURNEYS & WIREFRAMES ───────────────── */}
      <div className={styles.sectionWhite} id="flows">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>07. CORE JOURNEYS &amp; WIREFRAMES</div>
          <h2 className={styles.h2}>Translating architecture into frictionless user flows and low-fi wireframes.</h2>

          {/* ── FLOW 01: COMMERCE ──────────────────────────── */}
          <div className={styles.flowSection}>
            <span className={styles.sectionLabel}>FLOW 01 — COMMERCE &amp; CHECKOUT</span>
            <h3 className={styles.h3}>A streamlined journey from discovery to vehicle-verified purchase.</h3>
            <p className={styles.body}>
              To prevent fitment errors, the commerce journey verifies the user&apos;s active vehicle before checkout and provides clear shipping tracking to local motorsports hubs.
            </p>

            <div className={styles.flowDiagramCard}>
              <div className={styles.flowDiagramWrapper}>
                <Image
                  src="/images/gear-guru/flow-01-commerce.png"
                  alt="Flow 01: Commerce and Checkout Journey"
                  fill
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className={styles.wireframesGrid}>
              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-store-home.png"
                    alt="Wireframe: Store Home & Vehicle Switcher"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Store Home &amp; Catalog</div>
                  <div className={styles.wireframeDesc}>Vehicle profile toggle, flash sales, and module categories.</div>
                </div>
              </div>

              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-product-details.png"
                    alt="Wireframe: Product Details & Fitment"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Product Details</div>
                  <div className={styles.wireframeDesc}>Direct bolt-on tags, finish selection, and dyno-ready pricing.</div>
                </div>
              </div>

              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-checkout.png"
                    alt="Wireframe: 3-Step Checkout"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Checkout Stepper</div>
                  <div className={styles.wireframeDesc}>Fitment confirmation banner and pit-bay shipping details.</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FLOW 02: COMMUNITY ─────────────────────────── */}
          <div className={styles.flowSection}>
            <span className={styles.sectionLabel}>FLOW 02 — COMMUNITY &amp; DISCOVERY</span>
            <h3 className={styles.h3}>Connect, share builds, and exchange technical advice.</h3>
            <p className={styles.body}>
              Enthusiasts browse live paddock statuses, inspect tagged parts inside builds, and transition directly into discussions or 1:1 technical chats.
            </p>

            <div className={styles.flowDiagramCard}>
              <div className={styles.flowDiagramWrapper}>
                <Image
                  src="/images/gear-guru/flow-02-community.png"
                  alt="Flow 02: Community and Social Flow"
                  fill
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className={styles.wireframesGrid}>
              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-paddock-hub.png"
                    alt="Wireframe: Community Paddock Hub"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Paddock Hub</div>
                  <div className={styles.wireframeDesc}>Live status stories, discover channels, and direct paddock chats.</div>
                </div>
              </div>

              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-thread-details.png"
                    alt="Wireframe: Thread Details & Specs"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Thread Details</div>
                  <div className={styles.wireframeDesc}>Verified build tags, expandable chassis setup specs drawer.</div>
                </div>
              </div>

              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-paddock-chat.png"
                    alt="Wireframe: Paddock Chat & Telemetry"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Paddock Direct Chat</div>
                  <div className={styles.wireframeDesc}>Embedded rich part cards and audio dyno spool telemetry.</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FLOW 03: PROFILE & GARAGE ──────────────────── */}
          <div className={styles.flowSection}>
            <span className={styles.sectionLabel}>FLOW 03 — PROFILE &amp; GARAGE</span>
            <h3 className={styles.h3}>Your cars, your modifications, and your build journey.</h3>
            <p className={styles.body}>
              Users track their vehicle collection, input engine/chassis specs, log installed mods with horsepower gains, and showcase their build progress.
            </p>

            <div className={styles.flowDiagramCard}>
              <div className={styles.flowDiagramWrapper}>
                <Image
                  src="/images/gear-guru/flow-03-garage.png"
                  alt="Flow 03: Profile and Garage Journey"
                  fill
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className={styles.wireframesGrid}>
              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-garage-showcase.png"
                    alt="Wireframe: Garage Showcase"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Virtual Garage</div>
                  <div className={styles.wireframeDesc}>Mechanical spec tiles (WHP, Engine, Mileage) and cover gallery.</div>
                </div>
              </div>

              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-build-catalog.png"
                    alt="Wireframe: Existing Modifications"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Existing Modifications</div>
                  <div className={styles.wireframeDesc}>Estimated delta WHP calculator, mod category jump pills.</div>
                </div>
              </div>

              <div className={styles.wireframeCard}>
                <div className={styles.wireframeWrapper}>
                  <Image
                    src="/images/gear-guru/wireframe-edit-profile.png"
                    alt="Wireframe: Edit Profile"
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.wireframeCaption}>
                  <div className={styles.wireframeTitle}>Enthusiast Profile</div>
                  <div className={styles.wireframeDesc}>Motorsport affiliations, track status, and active vehicles link.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 08. DESIGN SYSTEM & PLAYGROUND ───────────────── */}
      <div className={styles.inner} id="design-system">
        <div className={styles.sectionLabel}>08. GEARGURU DESIGN SYSTEM</div>
        <h2 className={styles.h2}>The visual foundations and interactive component architecture.</h2>

        <div className={styles.body}>
          <p>
            Reverse-engineered directly from the final production screens, the GearGuru Design System balances motorsport energy (#EB5A28 orange) with technical legibility and high contrast.
          </p>
        </div>

        {/* Foundations: Colors */}
        <div className={styles.dsSection}>
          <div className={styles.dsCategoryTitle}>01 — Color Foundations</div>
          <div className={styles.colorSwatchesGrid}>
            <div className={styles.colorSwatchCard}>
              <div className={styles.swatchPreview} style={{ background: "#EB5A28" }} />
              <div className={styles.swatchMeta}>
                <span className={styles.swatchName}>Brand Orange</span>
                <span className={styles.swatchHex}>#EB5A28</span>
                <span className={styles.swatchUsage}>Primary CTAs &amp; Active Toggles</span>
              </div>
            </div>

            <div className={styles.colorSwatchCard}>
              <div className={styles.swatchPreview} style={{ background: "#FFF3EE", borderBottom: "1px solid #f1f5f9" }} />
              <div className={styles.swatchMeta}>
                <span className={styles.swatchName}>Orange Tint</span>
                <span className={styles.swatchHex}>#FFF3EE</span>
                <span className={styles.swatchUsage}>Promo Banners &amp; Active Badges</span>
              </div>
            </div>

            <div className={styles.colorSwatchCard}>
              <div className={styles.swatchPreview} style={{ background: "#10B981" }} />
              <div className={styles.swatchMeta}>
                <span className={styles.swatchName}>Fitment Green</span>
                <span className={styles.swatchHex}>#10B981</span>
                <span className={styles.swatchUsage}>Verified Fitment &amp; In-Stock</span>
              </div>
            </div>

            <div className={styles.colorSwatchCard}>
              <div className={styles.swatchPreview} style={{ background: "#0F172A" }} />
              <div className={styles.swatchMeta}>
                <span className={styles.swatchName}>Deep Slate</span>
                <span className={styles.swatchHex}>#0F172A</span>
                <span className={styles.swatchUsage}>Hero Cards &amp; Media Overlays</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Component Playground */}
        <div className={styles.dsSection}>
          <div className={styles.dsCategoryTitle}>02 — Interactive Components Playground</div>
          <p className={styles.body}>
            Test the 4 core reusable components in real time. Each component reflects the exact states, micro-interactions, and visual tokens used across the final interface.
          </p>

          <div className={styles.sandboxCard}>
            <div className={styles.sandboxTabs}>
              <button
                className={`${styles.sandboxTabBtn} ${activeSandboxTab === "switch" ? styles.sandboxTabBtnActive : ""}`}
                onClick={() => setActiveSandboxTab("switch")}
              >
                1. Commerce / Community Switch
              </button>
              <button
                className={`${styles.sandboxTabBtn} ${activeSandboxTab === "product" ? styles.sandboxTabBtnActive : ""}`}
                onClick={() => setActiveSandboxTab("product")}
              >
                2. Product Card
              </button>
              <button
                className={`${styles.sandboxTabBtn} ${activeSandboxTab === "chips" ? styles.sandboxTabBtnActive : ""}`}
                onClick={() => setActiveSandboxTab("chips")}
              >
                3. Filter Chips
              </button>
              <button
                className={`${styles.sandboxTabBtn} ${activeSandboxTab === "post" ? styles.sandboxTabBtnActive : ""}`}
                onClick={() => setActiveSandboxTab("post")}
              >
                4. Community Post &amp; Spotlight
              </button>
            </div>

            <div className={styles.playgroundContainer}>
              {/* COMPONENT 1: SWITCHER */}
              {activeSandboxTab === "switch" && (
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "16px", textTransform: "uppercase", fontWeight: 700 }}>
                    Click either tab to toggle active state
                  </p>
                  <div className={styles.switchContainer}>
                    <button
                      className={`${styles.switchBtn} ${activeSwitch === "store" ? styles.switchBtnActive : ""}`}
                      onClick={() => setActiveSwitch("store")}
                    >
                      <ShoppingBag size={16} />
                      Store
                      {activeSwitch === "store" && <span className={styles.liveDotBadge}>LIVE</span>}
                    </button>
                    <button
                      className={`${styles.switchBtn} ${activeSwitch === "community" ? styles.switchBtnActive : ""}`}
                      onClick={() => setActiveSwitch("community")}
                    >
                      <MessageSquare size={16} />
                      Community
                      {activeSwitch === "community" && <span className={styles.liveDotBadge}>FEED</span>}
                    </button>
                  </div>

                  <div style={{ marginTop: "24px", padding: "14px 20px", background: "#ffffff", borderRadius: "10px", border: "1px solid #e2e8f0", display: "inline-block", fontSize: "13px", color: "#334155" }}>
                    Active View: <strong>{activeSwitch === "store" ? "Commerce Marketplace & Active Rig" : "Paddock Live Status & Community Posts"}</strong>
                  </div>
                </div>
              )}

              {/* COMPONENT 2: PRODUCT CARD */}
              {activeSandboxTab === "product" && (
                <div className={styles.interactiveProductCard}>
                  <div className={styles.productCardImgArea}>
                    <span className={styles.saveBadge}>SAVE 15%</span>
                    <span className={styles.fitmentGuaranteeTag}>
                      <CheckCircle2 size={12} /> GUARANTEED FIT • EVO X
                    </span>
                    <button
                      onClick={() => setIsFavorited(!isFavorited)}
                      style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(15,23,42,0.7)", border: "none", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: isFavorited ? "#ef4444" : "#ffffff" }}
                    >
                      <Heart size={16} fill={isFavorited ? "#ef4444" : "none"} />
                    </button>
                  </div>

                  <div className={styles.productCardBody}>
                    <span className={styles.productEngineeringTag}>GEARGURU ENGINEERING</span>
                    <h4 className={styles.productTitleText}>Stainless Air Intake Shield Rev 2</h4>

                    <div className={styles.ratingRow}>
                      <span>★ 4.9</span>
                      <span style={{ color: "#64748b", fontWeight: 400 }}>(138 Track Reviews)</span>
                    </div>

                    {/* Finish Selector */}
                    <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
                      <button
                        type="button"
                        onClick={() => setSelectedFinish("raw")}
                        style={{ flex: 1, padding: "8px 6px", minHeight: "36px", fontSize: "11px", fontWeight: 700, borderRadius: "6px", border: selectedFinish === "raw" ? "2px solid #EB5A28" : "1px solid #cbd5e1", background: selectedFinish === "raw" ? "#FFF3EE" : "#ffffff", color: "#111827", cursor: "pointer", WebkitTapHighlightColor: "transparent" }}
                      >
                        Raw Steel
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedFinish("matte")}
                        style={{ flex: 1, padding: "8px 6px", minHeight: "36px", fontSize: "11px", fontWeight: 700, borderRadius: "6px", border: selectedFinish === "matte" ? "2px solid #EB5A28" : "1px solid #cbd5e1", background: selectedFinish === "matte" ? "#FFF3EE" : "#ffffff", color: "#111827", cursor: "pointer", WebkitTapHighlightColor: "transparent" }}
                      >
                        Matte Black (+₹250)
                      </button>
                    </div>

                    <div className={styles.priceAddRow}>
                      <div className={styles.priceAmount}>
                        {selectedFinish === "raw" ? "₹4,400" : "₹4,650"}
                      </div>
                      <button
                        className={`${styles.addPartBtn} ${isAddedToCart ? styles.addPartBtnActive : ""}`}
                        onClick={() => setIsAddedToCart(!isAddedToCart)}
                      >
                        {isAddedToCart ? (
                          <>
                            <Check size={14} /> Added!
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={14} /> Add Part
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* COMPONENT 3: FILTER CHIPS */}
              {activeSandboxTab === "chips" && (
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "20px", textTransform: "uppercase", fontWeight: 700 }}>
                    Click chips to toggle multiple active filters
                  </p>
                  <div className={styles.chipsContainer}>
                    {[
                      { id: "all", label: "All Systems" },
                      { id: "bolt-on", label: "Direct Bolt-on" },
                      { id: "intake", label: "Cold Air Intake" },
                      { id: "exhaust", label: "Titanium Exhaust" },
                      { id: "track", label: "Track-Tested" },
                      { id: "carbon", label: "Aero Carbon" },
                    ].map((chip) => {
                      const isActive = selectedChips.includes(chip.id);
                      return (
                        <button
                          key={chip.id}
                          className={`${styles.filterChipBtn} ${isActive ? styles.filterChipBtnActive : ""}`}
                          onClick={() => toggleChip(chip.id)}
                        >
                          {isActive && <Check size={14} />}
                          {chip.label}
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ marginTop: "24px", fontSize: "12px", color: "#64748b" }}>
                    Active Filters Selected: <strong>{selectedChips.length}</strong>
                  </div>
                </div>
              )}

              {/* COMPONENT 4: COMMUNITY POST */}
              {activeSandboxTab === "post" && (
                <div className={styles.interactivePostCard}>
                  <div className={styles.postHeader}>
                    <div className={styles.authorRow}>
                      <div className={styles.avatarCircle}>JJ</div>
                      <div>
                        <div className={styles.authorName}>@jake2436</div>
                        <div className={styles.authorSub}>2012 BMW E92 M3</div>
                      </div>
                    </div>
                    <button
                      className={`${styles.followPillBtn} ${isFollowing ? styles.followPillBtnActive : ""}`}
                      onClick={() => setIsFollowing(!isFollowing)}
                    >
                      {isFollowing ? "Following" : "+ Follow"}
                    </button>
                  </div>

                  <div className={styles.postMediaBox}>
                    <button
                      className={styles.partSpotlightTag}
                      onClick={() => setShowSpotlight(!showSpotlight)}
                    >
                      <Sparkles size={12} color="#EB5A28" />
                      Part Spotlight {showSpotlight ? "(Expanded)" : "(Tap to view)"}
                    </button>
                  </div>

                  {showSpotlight && (
                    <div style={{ background: "#FFF3EE", padding: "10px 14px", borderBottom: "1px solid #fed7aa", fontSize: "11px", color: "#9A3412" }}>
                      <strong>Equipped:</strong> KW Clubsport Coilovers + 12mm Spacers • <span style={{ textDecoration: "underline", cursor: "pointer", fontWeight: 700 }}>View in Store</span>
                    </div>
                  )}

                  <div className={styles.postActionsBar}>
                    <div className={styles.actionBtnGroup}>
                      <button
                        className={`${styles.postActionBtn} ${isLiked ? styles.postActionBtnLiked : ""}`}
                        onClick={handleLikeToggle}
                      >
                        <Heart size={16} fill={isLiked ? "#ef4444" : "none"} />
                        {likeCount}
                      </button>
                      <button className={styles.postActionBtn}>
                        <MessageSquare size={16} /> 45
                      </button>
                      <button className={styles.postActionBtn}>
                        <Repeat size={16} /> 13
                      </button>
                    </div>
                    <Bookmark size={16} color="#64748b" />
                  </div>

                  <div className={styles.telemetryBadgeRow}>
                    <span>Tested 0–60 mph in 3.9s</span>
                    <span className={styles.telemetryGreen}>VERIFIED RUN</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── 09. FINAL EXPERIENCE ─────────────────────────── */}
      <div className={styles.sectionWhite} id="final-experience">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>09. THE FINAL PRODUCT EXPERIENCE</div>
          <h2 className={styles.h2}>High-fidelity screens across the three core product pillars (19 screens).</h2>

          {/* Pillar 1: Commerce */}
          <div style={{ marginTop: "40px" }}>
            <h3 className={styles.h3}>Pillar 01 — Commerce &amp; Precision Parts Shopping (5 Screens)</h3>
            <p className={styles.body}>
              Chassis-specific parts discovery, dyno-ready pricing, and frictionless 3-step checkout with direct fitment guarantees.
            </p>

            <div className={styles.finalGrid}>
              {/* 1. Store Home */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-store-home.png" alt="Final UI: Store Home" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Commerce Hub</div>
                  <div className={styles.finalCardTitle}>Store Home &amp; Vehicle Profile</div>
                  <div className={styles.finalCardDesc}>Active vehicle switcher with flash sales and module categories.</div>
                </div>
              </div>

              {/* 2. Browse Parts */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-browse-parts.png" alt="Final UI: Browse Parts" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Catalog Navigation</div>
                  <div className={styles.finalCardTitle}>Chassis Parts Catalog</div>
                  <div className={styles.finalCardDesc}>Multi-tier mechanical subsystem filters and stock availability.</div>
                </div>
              </div>

              {/* 3. Product Details */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-product-details.png" alt="Final UI: Product Details" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Fitment Validation</div>
                  <div className={styles.finalCardTitle}>Product Specs &amp; Finish</div>
                  <div className={styles.finalCardDesc}>3D angle viewer, chassis compatibility badge, and finish selector.</div>
                </div>
              </div>

              {/* 4. Shopping Cart */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-shopping-cart.png" alt="Final UI: Shopping Cart" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Order Summary</div>
                  <div className={styles.finalCardTitle}>Cart &amp; Fitment Check</div>
                  <div className={styles.finalCardDesc}>Automated vehicle fitment confirmation and promo discounts.</div>
                </div>
              </div>

              {/* 5. Checkout */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-checkout.png" alt="Final UI: 3-Step Checkout" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Frictionless Checkout</div>
                  <div className={styles.finalCardTitle}>3-Step Pit-Bay Checkout</div>
                  <div className={styles.finalCardDesc}>Step-by-step progress with pit-bay logistics delivery routing.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Community */}
          <div style={{ marginTop: "64px" }}>
            <h3 className={styles.h3}>Pillar 02 — Community &amp; Peer Telemetry (8 Screens)</h3>
            <p className={styles.body}>
              Rich build logs, in-video parts tagging, live paddock telemetry, direct parts messaging, and event radar.
            </p>

            <div className={styles.finalGrid}>
              {/* 6. Community Feed */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-community-feed.png" alt="Final UI: Community Feed" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Enthusiast Feed</div>
                  <div className={styles.finalCardTitle}>Verified Build Posts</div>
                  <div className={styles.finalCardDesc}>Interactive Part Spotlight overlays and verified 0-60 run telemetry.</div>
                </div>
              </div>

              {/* 7. Turbo Snap */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-turbosnap.png" alt="Final UI: Turbo Snap" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Short-Form Media</div>
                  <div className={styles.finalCardTitle}>Turbo Snap &amp; Sound Spool</div>
                  <div className={styles.finalCardDesc}>In-video equipped part shopping pill and boost telemetry tags.</div>
                </div>
              </div>

              {/* 8. Paddock Hub */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-paddock-hub.png" alt="Final UI: Paddock Hub" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Community Hub</div>
                  <div className={styles.finalCardTitle}>Live Paddock Hub</div>
                  <div className={styles.finalCardDesc}>Live stories, active channel discovery, and community updates.</div>
                </div>
              </div>

              {/* 9. Paddock Chat */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-paddock-chat.png" alt="Final UI: Paddock Chat" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Direct Messaging</div>
                  <div className={styles.finalCardTitle}>Rich In-Chat Parts</div>
                  <div className={styles.finalCardDesc}>Directly shareable coilover cards with corner weights and store links.</div>
                </div>
              </div>

              {/* 10. Thread Details */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-thread-details.png" alt="Final UI: Thread Details" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Technical Q&amp;A</div>
                  <div className={styles.finalCardTitle}>Thread Details &amp; Specs</div>
                  <div className={styles.finalCardDesc}>Expandable chassis setup drawer, dyno sheets, and verified advice.</div>
                </div>
              </div>

              {/* 11. Discover Events */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-discover-events.png" alt="Final UI: Discover Events" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Event Radar</div>
                  <div className={styles.finalCardTitle}>Track Meets &amp; Events</div>
                  <div className={styles.finalCardDesc}>Geolocated automotive meets, track day registration, and attendee lists.</div>
                </div>
              </div>

              {/* 12. Create Meet */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-create-meet.png" alt="Final UI: Create Meet" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Event Organization</div>
                  <div className={styles.finalCardTitle}>Create Community Meet</div>
                  <div className={styles.finalCardDesc}>Custom route planning, vehicle criteria filters, and invite links.</div>
                </div>
              </div>

              {/* 13. Community Profile */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-community-profile.png" alt="Final UI: Community Profile" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Peer Profile</div>
                  <div className={styles.finalCardTitle}>Public Builder Profile</div>
                  <div className={styles.finalCardDesc}>Followers, active garage builds, shared video clips, and reputation.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Profile & Garage */}
          <div style={{ marginTop: "64px" }}>
            <h3 className={styles.h3}>Pillar 03 — Virtual Garage &amp; Build Tracking (6 Screens)</h3>
            <p className={styles.body}>
              Dynamic vehicle profile management, dyno verification progress, and live estimated WHP gain calculations.
            </p>

            <div className={styles.finalGrid}>
              {/* 14. Garage Showcase */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-garage-showcase.png" alt="Final UI: Garage Showcase" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Vehicle Portfolio</div>
                  <div className={styles.finalCardTitle}>Garage Showcase Gallery</div>
                  <div className={styles.finalCardDesc}>420 WHP spec tile trio, multi-photo angles, and dyno status.</div>
                </div>
              </div>

              {/* 15. Build Catalog */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-build-catalog.png" alt="Final UI: Build Catalog" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Modification Tracker</div>
                  <div className={styles.finalCardTitle}>Live WHP Delta Calculator</div>
                  <div className={styles.finalCardDesc}>Estimated +28 WHP gain tracker with verified parts checklist.</div>
                </div>
              </div>

              {/* 16. Add Car Specs */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-add-car-specs.png" alt="Final UI: Add Car Specs" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Vehicle Onboarding</div>
                  <div className={styles.finalCardTitle}>Chassis &amp; Engine Specs</div>
                  <div className={styles.finalCardDesc}>Chassis code validation, engine trim configuration, and factory baselines.</div>
                </div>
              </div>

              {/* 17. Add Car Gallery */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-add-car-gallery.png" alt="Final UI: Add Car Gallery" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Visual Documentation</div>
                  <div className={styles.finalCardTitle}>Multi-Angle Build Photos</div>
                  <div className={styles.finalCardDesc}>Structured photo upload wizard for engine bay, exterior, and cockpit.</div>
                </div>
              </div>

              {/* 18. Own Profile */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-own-profile.png" alt="Final UI: Enthusiast Profile" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Enthusiast Identity</div>
                  <div className={styles.finalCardTitle}>Pilot Profile &amp; Build Count</div>
                  <div className={styles.finalCardDesc}>Verified pilot badges, 14 builds counter, and track affiliations.</div>
                </div>
              </div>

              {/* 19. Edit Profile */}
              <div className={styles.finalCard}>
                <div className={styles.finalImageWrap}>
                  <Image src="/images/gear-guru/final-edit-profile.png" alt="Final UI: Edit Profile" fill unoptimized style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.finalCardMeta}>
                  <div className={styles.finalCardCategory}>Account Settings</div>
                  <div className={styles.finalCardTitle}>Pilot Identity &amp; Preferences</div>
                  <div className={styles.finalCardDesc}>Driving skill level, favorite racetracks, and privacy controls.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 10. USABILITY TESTING ─────────────────────────── */}
      <div className={styles.sectionWarm} id="usability">
        <div className={styles.inner}>
        <div className={styles.sectionLabel}>10. USABILITY TESTING</div>
        <h2 className={styles.h2}>Stress-testing the prototype with 7 participants on Maze.</h2>

        <div className={styles.body}>
          <p>
            I conducted moderated usability testing sessions with 7 active automotive enthusiasts to validate task completion rates across onboarding, checkout, and community engagement.
          </p>
        </div>

        <div className={styles.testingStatsRow}>
          <div className={styles.testingStatCard}>
            <div className={styles.testingStatNum}>7</div>
            <div className={styles.testingStatLabel}>Enthusiast Testers</div>
          </div>
          <div className={styles.testingStatCard}>
            <div className={styles.testingStatNum}>3</div>
            <div className={styles.testingStatLabel}>Core Evaluated Tasks</div>
          </div>
          <div className={styles.testingStatCard}>
            <div className={styles.testingStatNum}>85.7%</div>
            <div className={styles.testingStatLabel}>Unaided Task Completion</div>
          </div>
        </div>

        <div className={styles.findingsGrid}>
          <div className={styles.findingCard}>
            <div className={styles.findingHeader}>
              <span className={styles.findingBadge}>FINDING 01</span>
              <h4 className={styles.findingTitle}>Onboarding Hesitation</h4>
            </div>
            <p className={styles.findingText}>
              3 of 7 participants hesitated for over 8 seconds during initial vehicle setup, unsure if entering engine trim codes was required immediately.
            </p>
          </div>

          <div className={styles.findingCard}>
            <div className={styles.findingHeader}>
              <span className={styles.findingBadge}>FINDING 02</span>
              <h4 className={styles.findingTitle}>Need for Deeper Technical Filters</h4>
            </div>
            <p className={styles.findingText}>
              Power seekers requested specific multi-select toggles for engine codes (e.g. S65 vs. 4B11T) and material grades rather than generic categories.
            </p>
          </div>

          <div className={styles.findingCard}>
            <div className={styles.findingHeader}>
              <span className={styles.findingBadge}>FINDING 03</span>
              <h4 className={styles.findingTitle}>Checkout Fitment Reassurance</h4>
            </div>
            <p className={styles.findingText}>
              While 6 of 7 completed checkout unaided, 2 participants paused on the payment screen looking for explicit confirmation that the part matched their saved car.
            </p>
          </div>

          <div className={styles.findingCard}>
            <div className={styles.findingHeader}>
              <span className={styles.findingBadge}>FINDING 04</span>
              <h4 className={styles.findingTitle}>Social Interaction Feedback</h4>
            </div>
            <p className={styles.findingText}>
              Following creators and saving builds lacked immediate visual feedback, causing users to tap the button multiple times.
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* ── 11. ITERATIONS (BEFORE & AFTER SLIDERS) ───────── */}
      <div className={styles.sectionWhite} id="iterations">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>11. ITERATIONS &amp; REFINEMENTS</div>
          <h2 className={styles.h2}>Measuring design evolution: 6 interactive Before &amp; After comparisons.</h2>

          <div className={styles.body}>
            <p>
              Drag the interactive sliders below to compare the original designs against the final refined screens across all three product pillars. Each pair represents key iterative pivots within that flow.
            </p>
          </div>

          {/* ── FLOW 01: COMMERCE & CHECKOUT ───────────────── */}
          <div className={styles.iterationFlowBlock}>
            <div className={styles.iterationFlowHeader}>
              <span className={styles.sectionLabel}>FLOW 01 — COMMERCE &amp; CHECKOUT</span>
              <h3 className={styles.h3}>From Hidden Menus &amp; Plain Forms to an Integrated Motorsport Store</h3>
            </div>

            <div className={styles.iterationPairGrid}>
              {/* Commerce Slider 1 */}
              <div className={styles.iterationSliderCard}>
                <div className={styles.iterationSliderWrapper}>
                  <ImageCompareSlider
                    beforeSrc="/images/gear-guru/before-store-home.png"
                    afterSrc="/images/gear-guru/final-store-home.png"
                    beforeLabel="V1"
                    afterLabel="FINAL"
                    badgeId="01 — STORE DISCOVERY"
                    aspectRatio="480 / 996"
                  />
                </div>
                <div className={styles.iterationSliderContent}>
                  <h4 className={styles.iterationSliderTitle}>Store Home &amp; Vehicle Profile</h4>
                  <div className={styles.iterationComparisonCols}>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleBefore}`}>Before (V1)</span>
                      <p className={styles.rationaleText}>
                        Navigation hidden in generic hamburger menu. Deep purple theme lacked motorsport identity, with zero active vehicle fitment.
                      </p>
                    </div>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleAfter}`}>After (Final)</span>
                      <p className={styles.rationaleText}>
                        Prominent Store/Community switcher, active chassis switcher, flash deals, and bold `#EB5A28` brand hierarchy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commerce Slider 2 */}
              <div className={styles.iterationSliderCard}>
                <div className={styles.iterationSliderWrapper}>
                  <ImageCompareSlider
                    beforeSrc="/images/gear-guru/before-checkout.png"
                    afterSrc="/images/gear-guru/final-checkout.png"
                    beforeLabel="V1"
                    afterLabel="FINAL"
                    badgeId="02 — CHECKOUT STEPPER"
                    aspectRatio="480 / 996"
                  />
                </div>
                <div className={styles.iterationSliderContent}>
                  <h4 className={styles.iterationSliderTitle}>3-Step Pit-Bay Checkout</h4>
                  <div className={styles.iterationComparisonCols}>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleBefore}`}>Before (V1)</span>
                      <p className={styles.rationaleText}>
                        Barebones card with vague line items, typos (&ldquo;Delivery Cahrge&rdquo;), and a blunt &ldquo;Pay now&rdquo; CTA that caused drop-off.
                      </p>
                    </div>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleAfter}`}>After (Final)</span>
                      <p className={styles.rationaleText}>
                        3-step progress stepper, green `FITMENT CONFIRMED` badge, itemized pricing, and local pit-bay logistics delivery routing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FLOW 02: COMMUNITY & DISCOVERY ─────────────── */}
          <div className={styles.iterationFlowBlock}>
            <div className={styles.iterationFlowHeader}>
              <span className={styles.sectionLabel}>FLOW 02 — COMMUNITY &amp; DISCOVERY</span>
              <h3 className={styles.h3}>From Generic Photo Sharing to Verified Telemetry Feeds</h3>
            </div>

            <div className={styles.iterationPairGrid}>
              {/* Community Slider 1 */}
              <div className={styles.iterationSliderCard}>
                <div className={styles.iterationSliderWrapper}>
                  <ImageCompareSlider
                    beforeSrc="/images/gear-guru/before-community-feed.png"
                    afterSrc="/images/gear-guru/final-community-feed.png"
                    beforeLabel="V1"
                    afterLabel="FINAL"
                    badgeId="03 — COMMUNITY FEED"
                    aspectRatio="480 / 996"
                  />
                </div>
                <div className={styles.iterationSliderContent}>
                  <h4 className={styles.iterationSliderTitle}>Enthusiast Feed &amp; Build Posts</h4>
                  <div className={styles.iterationComparisonCols}>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleBefore}`}>Before (V1)</span>
                      <p className={styles.rationaleText}>
                        Generic social clone with standard likes/comments and zero mechanical depth. Posts had no links to marketplace parts or builds.
                      </p>
                    </div>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleAfter}`}>After (Final)</span>
                      <p className={styles.rationaleText}>
                        Enthusiast-tailored feed with `E92 M3 BUILD` tags, interactive `PART SPOTLIGHT` overlays, and verified 0–60 run telemetry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Slider 2 */}
              <div className={styles.iterationSliderCard}>
                <div className={styles.iterationSliderWrapper}>
                  <ImageCompareSlider
                    beforeSrc="/images/gear-guru/before-turbosnap.png"
                    afterSrc="/images/gear-guru/final-turbosnap.png"
                    beforeLabel="V1"
                    afterLabel="FINAL"
                    badgeId="04 — TURBO SNAP"
                    aspectRatio="480 / 996"
                  />
                </div>
                <div className={styles.iterationSliderContent}>
                  <h4 className={styles.iterationSliderTitle}>Turbo Snap &amp; Sound Attribution</h4>
                  <div className={styles.iterationComparisonCols}>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleBefore}`}>Before (V1)</span>
                      <p className={styles.rationaleText}>
                        Basic video container with static likes. Missing automotive sound attribution, engine specs, and commerce linkages.
                      </p>
                    </div>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleAfter}`}>After (Final)</span>
                      <p className={styles.rationaleText}>
                        Full-bleed video player with in-video `EQUIPPED PART` pill, turbo spool audio credit, and expandable telemetry specs drawer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FLOW 03: VIRTUAL GARAGE & PROFILE ───────────── */}
          <div className={styles.iterationFlowBlock}>
            <div className={styles.iterationFlowHeader}>
              <span className={styles.sectionLabel}>FLOW 03 — VIRTUAL GARAGE &amp; BUILD TRACKING</span>
              <h3 className={styles.h3}>From Static Photo Grid to Mechanical Automotive Portfolio</h3>
            </div>

            <div className={styles.iterationPairGrid}>
              {/* Garage Slider 1 */}
              <div className={styles.iterationSliderCard}>
                <div className={styles.iterationSliderWrapper}>
                  <ImageCompareSlider
                    beforeSrc="/images/gear-guru/before-garage-showcase.png"
                    afterSrc="/images/gear-guru/final-garage-showcase.png"
                    beforeLabel="V1"
                    afterLabel="FINAL"
                    badgeId="05 — VIRTUAL GARAGE"
                    aspectRatio="480 / 996"
                  />
                </div>
                <div className={styles.iterationSliderContent}>
                  <h4 className={styles.iterationSliderTitle}>Garage Showcase Gallery</h4>
                  <div className={styles.iterationComparisonCols}>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleBefore}`}>Before (V1)</span>
                      <p className={styles.rationaleText}>
                        Simple &ldquo;CARS&rdquo; screen with 4 uncaptioned photos and zero performance context (missing horsepower, trim, or dyno stats).
                      </p>
                    </div>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleAfter}`}>After (Final)</span>
                      <p className={styles.rationaleText}>
                        Comprehensive garage portfolio with active project switcher, 420 WHP spec tile trio, multi-photo angles, and dyno stamp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garage Slider 2 */}
              <div className={styles.iterationSliderCard}>
                <div className={styles.iterationSliderWrapper}>
                  <ImageCompareSlider
                    beforeSrc="/images/gear-guru/before-build-catalog.png"
                    afterSrc="/images/gear-guru/final-build-catalog.png"
                    beforeLabel="V1"
                    afterLabel="FINAL"
                    badgeId="06 — BUILD TRACKER"
                    aspectRatio="480 / 996"
                  />
                </div>
                <div className={styles.iterationSliderContent}>
                  <h4 className={styles.iterationSliderTitle}>Live WHP Delta Calculator</h4>
                  <div className={styles.iterationComparisonCols}>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleBefore}`}>Before (V1)</span>
                      <p className={styles.rationaleText}>
                        Static text list with typos (&ldquo;Breaks kit&rdquo;) and gray boxes with no performance feedback or dyno gain validation.
                      </p>
                    </div>
                    <div className={styles.iterationCol}>
                      <span className={`${styles.rationaleLabel} ${styles.rationaleAfter}`}>After (Final)</span>
                      <p className={styles.rationaleText}>
                        Live `ESTIMATED DELTA +28 WHP` calculator, quick-jump category pills, verified mod badges, and granular valvetrain readouts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 12. OUTCOMES & IMPACT ────────────────────────── */}
      <div className={styles.inner} id="impact">
        <div className={styles.sectionLabel}>12. OUTCOMES &amp; IMPACT</div>
        <h2 className={styles.h2}>Measurable gains in purchase confidence and community connection.</h2>

        <div className={styles.body}>
          <p>
            Retesting the iterated GearGuru prototype demonstrated substantial improvements across conversion velocity, onboarding friction, and community engagement:
          </p>
        </div>

        <div className={styles.impactGrid}>
          <div className={styles.impactCard}>
            <div className={styles.impactMetric}>100%</div>
            <div className={styles.impactTitle}>Onboarding Completion</div>
            <p className={styles.impactDesc}>
              Zero user drop-off during vehicle trim selection following the implementation of progressive onboarding.
            </p>
          </div>

          <div className={styles.impactCard}>
            <div className={styles.impactMetric}>-42%</div>
            <div className={styles.impactTitle}>Checkout Duration</div>
            <p className={styles.impactDesc}>
              Average checkout time decreased from 1m 45s to 1m 01s thanks to clear vehicle-matching confirmation banners.
            </p>
          </div>

          <div className={styles.impactCard}>
            <div className={styles.impactMetric}>2.4x</div>
            <div className={styles.impactTitle}>Community-to-Cart Conversion</div>
            <p className={styles.impactDesc}>
              Users who discovered parts through community build posts visited product pages 2.4x more often than catalog searchers.
            </p>
          </div>
        </div>
      </div>

      {/* ── 13. REFLECTION & TAKEAWAYS ───────────────────── */}
      <div className={styles.sectionDark} id="reflection">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>13. REFLECTION &amp; DESIGN LEARNINGS</div>
          <h2 className={styles.h2}>Designing for passion: why trust beats friction reduction.</h2>

          <div className={styles.body}>
            <p>
              In conventional e-commerce, the golden rule is often &ldquo;fewer clicks to buy.&rdquo; But automotive modification is fundamentally different. When a user buys a ₹84,000 coilover suspension, their biggest fear isn&apos;t checkout friction—it&apos;s purchasing the wrong component.
            </p>
            <p>
              <strong>Community validation is the primary driver of purchase confidence.</strong> When an enthusiast sees another driver running that exact coilover setup at Kari Motor Speedway, with real telemetry numbers and positive discussion, the purchase decision transforms from anxiety to certainty.
            </p>
          </div>

          {/* The Complete Experience Loop */}
          <div className={styles.ecosystemLoopBox}>
            <h3 className={styles.h3White}>The Closed-Loop Ecosystem</h3>
            <p className={styles.bodyWhite} style={{ fontSize: "14px" }}>
              Every touchpoint in GearGuru feeds into the next, creating a self-sustaining cycle between content and commerce:
            </p>

            <div className={styles.ecosystemSteps}>
              <div className={styles.ecosystemStep}>1. Discover in Feed</div>
              <span className={styles.ecosystemArrow}>➔</span>
              <div className={styles.ecosystemStep}>2. See on Real Build</div>
              <span className={styles.ecosystemArrow}>➔</span>
              <div className={styles.ecosystemStep}>3. Read Paddock Q&amp;A</div>
              <span className={styles.ecosystemArrow}>➔</span>
              <div className={styles.ecosystemStep}>4. Verify Fitment &amp; Specs</div>
              <span className={styles.ecosystemArrow}>➔</span>
              <div className={styles.ecosystemStep}>5. Buy with Confidence</div>
              <span className={styles.ecosystemArrow}>➔</span>
              <div className={styles.ecosystemStep}>6. Log Mod in Garage</div>
            </div>
          </div>

          <div className={styles.body}>
            <p style={{ fontWeight: 600, color: "#111827" }}>
              The most effective commerce journey isn&apos;t just the fewest clicks to checkout—it&apos;s establishing the confidence that leads to the purchase.
            </p>
          </div>
        </div>
      </div>

      <ProjectPagination />
      <Footer />
    </div>
  );
}
