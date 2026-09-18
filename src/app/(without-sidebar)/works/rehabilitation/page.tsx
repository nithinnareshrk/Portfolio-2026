"use client";

import Image from "next/image";
import { Grid, Palette, Layers, Check } from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import ProjectSectionRail, { SectionItem } from "@/components/ProjectSectionRail";
import ProjectPagination from "@/components/ProjectPagination";

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "01. Context" },
  { id: "positioning", label: "02. Product Positioning" },
  { id: "core-challenge", label: "03. The Core Challenge" },
  { id: "principles", label: "04. Design Principles" },
  { id: "architecture", label: "05. Experience Architecture" },
  { id: "home-experience", label: "06. Home Experience" },
  { id: "exercise-experience", label: "07. Guided Exercise" },
  { id: "appointment-experience", label: "08. Appointment Care" },
  { id: "system-evolution", label: "09. System Evolution" },
  { id: "design-system", label: "10. Design System" },
  { id: "system-thinking", label: "11. System Thinking" },
  { id: "learnings", label: "12. Key Learnings" },
  { id: "closing", label: "13. Reflection" },
];

export default function RehabilitationPage() {
  return (
    <div className={styles.page}>
      <ProjectSectionRail sections={SECTIONS} />

      {/* ── 01. HERO SECTION ──────────────────────────────── */}
      <div className={styles.inner} id="overview">
        <div style={{ marginTop: "20px" }}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            MOBILE HEALTH &bull; REHABILITATION
          </div>

          <h1 className={styles.heroTitle}>
            Designing for recovery, not performance.
          </h1>

          <p className={styles.heroSub}>
            A structured rehabilitation experience that helps people move through recovery with clarity, confidence, and guided progression.
          </p>
        </div>

        {/* Project Metadata */}
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>ROLE</span>
            <span className={styles.metaValue}>Product Designer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>PLATFORM</span>
            <span className={styles.metaValue}>iOS Mobile Application</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>CONTEXT</span>
            <span className={styles.metaValue}>Company Assignment</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>REFINEMENT</span>
            <span className={styles.metaValue}>~1.5 Years</span>
          </div>
        </div>

        {/* Hero Visual Showcase: Focused Dual-Device Presentation */}
        <div className={styles.heroShowcase}>
          <div className={styles.heroShowcaseGrid}>
            <div className={styles.heroScreenCard}>
              <div className={styles.heroDeviceWrap}>
                <Image
                  src="/images/works/rehab/Section 5 start with clarity.jpg"
                  alt="Rehabilitation Home Dashboard Screen"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.heroDeviceLabel}>Daily Recovery Overview</span>
              <span className={styles.heroDeviceSub}>Pain check-in, scheduled routines, and day plan</span>
            </div>

            <div className={styles.heroScreenCard}>
              <div className={styles.heroDeviceWrap}>
                <Image
                  src="/images/works/rehab/section 5 Focus on Movement.jpg"
                  alt="Guided Movement and Pose Tracking Screen"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.heroDeviceLabel}>Guided Active Movement</span>
              <span className={styles.heroDeviceSub}>Real-time posture guidance, pacing, and vitals</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 02. CONTEXT ───────────────────────────────────── */}
      <div className={styles.sectionWarm} id="context">
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>01. Context</span>
          <div className={styles.contextGrid}>
            <div>
              <h2 className={styles.h2}>Bridging clinical guidance and daily life.</h2>
              <p className={styles.lead}>
                Recovery is not always a linear process. People need to understand their next step, follow the right exercises, monitor progress, and stay connected with their care journey. The product brings these activities into one structured mobile experience.
              </p>
              <p className={styles.body}>
                When recovering from physical injuries or surgeries, patients navigate a delicate space between clinical instructions and home compliance. Without structured guidance, patients struggle with uncertainty: wondering if they are doing an exercise safely, whether pain is an expected sensation, or when they should seek direct medical evaluation.
              </p>
            </div>
            <div>
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>
                  &ldquo;In recovery, uncertainty creates hesitation. The role of the interface is to replace guesswork with safe, guided progression.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 03. PRODUCT POSITIONING ───────────────────────── */}
      <div className={styles.inner} id="positioning">
        <span className={styles.sectionLabel}>02. Product Positioning</span>
        <h2 className={styles.h2}>This isn&apos;t a fitness app.</h2>
        <p className={styles.body}>
          Fitness applications thrive on aggressive gamification, streaks, and pushing personal limits. A rehabilitation platform requires the exact inverse: calm assurance, protective guardrails, and knowing when to stop.
        </p>

        <div className={styles.positioningGrid}>
          <div className={styles.comparisonList}>
            <div className={styles.comparisonItem}>
              <div className={styles.compBad}>Fitness &amp; Performance Apps</div>
              <div className={styles.compGood}>Rehabilitation Platform</div>
            </div>
            <div className={styles.comparisonItem}>
              <div className={styles.compBad}>Pushing limits &amp; intensity</div>
              <div className={styles.compGood}>
                <Check size={16} color="#2563eb" /> Safe progression &amp; rest
              </div>
            </div>
            <div className={styles.comparisonItem}>
              <div className={styles.compBad}>Excessive metrics &amp; noise</div>
              <div className={styles.compGood}>
                <Check size={16} color="#2563eb" /> Clear, essential instructions
              </div>
            </div>
            <div className={styles.comparisonItem}>
              <div className={styles.compBad}>Streaks &amp; motivational guilt</div>
              <div className={styles.compGood}>
                <Check size={16} color="#2563eb" /> Meaningful recovery progress
              </div>
            </div>
            <div className={styles.comparisonItem}>
              <div className={styles.compBad}>Social competition &amp; ranking</div>
              <div className={styles.compGood}>
                <Check size={16} color="#2563eb" /> Support, confidence, and care
              </div>
            </div>
          </div>

          <div>
            <div className={styles.positioningVisualWrap}>
              <Image
                src="/images/works/rehab/section 3 Free iPhone Air.jpg"
                alt="Recovery dashboard header emphasizing daily health condition"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className={styles.body} style={{ fontSize: "0.82rem", color: "#64748b", marginTop: "12px" }}>
              The interface opens with a daily pain evaluation prompt rather than step records or leaderboard standings.
            </p>
          </div>
        </div>
      </div>

      {/* ── 04. THE CORE CHALLENGE ────────────────────────── */}
      <div className={styles.sectionWarm} id="core-challenge">
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>03. The Core Challenge</span>
          <div className={styles.challengeGrid}>
            <div>
              <h2 className={styles.h2}>Reducing cognitive load during recovery.</h2>
              <p className={styles.body}>
                Patients recovering from injury or physical therapy often experience acute fatigue, heightened anxiety, and limited mental bandwidth. Navigating dense graphs or deciphering confusing navigation creates dangerous friction.
              </p>
              <p className={styles.body} style={{ marginTop: "16px" }}>
                The interface needed to answer four fundamental questions instantaneously:
              </p>

              <div className={styles.challengePillars}>
                <div className={styles.challengePillar}>
                  <span className={styles.challengePillarNum}>01</span>
                  <h3 className={styles.challengePillarTitle}>What to do next</h3>
                  <p className={styles.challengePillarDesc}>Immediate clarity on today&apos;s priority activity without triage.</p>
                </div>
                <div className={styles.challengePillar}>
                  <span className={styles.challengePillarNum}>02</span>
                  <h3 className={styles.challengePillarTitle}>How to perform</h3>
                  <p className={styles.challengePillarDesc}>Clear posture, equipment, and repetition guidelines.</p>
                </div>
                <div className={styles.challengePillar}>
                  <span className={styles.challengePillarNum}>03</span>
                  <h3 className={styles.challengePillarTitle}>Progress meaning</h3>
                  <p className={styles.challengePillarDesc}>Contextual health trends rather than raw, uninterpreted graphs.</p>
                </div>
                <div className={styles.challengePillar}>
                  <span className={styles.challengePillarNum}>04</span>
                  <h3 className={styles.challengePillarTitle}>When to seek care</h3>
                  <p className={styles.challengePillarDesc}>Seamless access to booking and clinical consultations.</p>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.challengeVisualCard}>
                <div className={styles.challengeVisualWrap}>
                  <Image
                    src="/images/works/rehab/Section 2 the problem.jpg"
                    alt="Cognitive vulnerability during patient recovery"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className={styles.challengeQuote}>
                  &ldquo;Make the next action clear, keep progress understandable, and introduce complexity only when it becomes useful.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 05. DESIGN PRINCIPLES ─────────────────────────── */}
      <div className={styles.sectionNavy} id="principles">
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>04. Design Principles</span>
          <h2 className={styles.h2}>System standards built for patient trust.</h2>
          <p className={styles.body}>
            Four foundational rules that guided every interaction, layout hierarchy, and data visualization decision across the application.
          </p>

          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <span className={styles.principleNum}>01</span>
              <h3 className={styles.principleTitle}>One primary action</h3>
              <p className={styles.principleDesc}>
                Help users understand the most important next step without competing visual calls to action.
              </p>
            </div>

            <div className={styles.principleCard}>
              <span className={styles.principleNum}>02</span>
              <h3 className={styles.principleTitle}>Data with context</h3>
              <p className={styles.principleDesc}>
                Show health and recovery metrics in a way that users can understand, translating raw biometrics into meaningful recovery states.
              </p>
            </div>

            <div className={styles.principleCard}>
              <span className={styles.principleNum}>03</span>
              <h3 className={styles.principleTitle}>Calm over stimulation</h3>
              <p className={styles.principleDesc}>
                Avoid unnecessary visual noise, excessive alerts, or performance-oriented patterns that evoke urgency or alarm.
              </p>
            </div>

            <div className={styles.principleCard}>
              <span className={styles.principleNum}>04</span>
              <h3 className={styles.principleTitle}>Progressive guidance</h3>
              <p className={styles.principleDesc}>
                Reveal additional information and safety-related actions only when they become relevant to the user&apos;s current task.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 06. EXPERIENCE ARCHITECTURE ───────────────────── */}
      <div className={styles.inner} id="architecture">
        <span className={styles.sectionLabel}>05. Experience Architecture</span>
        <div className={styles.archIntro}>
          <h2 className={styles.h2}>An experience built around the recovery journey.</h2>
          <p className={styles.body}>
            The system maps directly to the natural sequence of rehabilitation: from understanding daily status, to following therapeutic movement, assessing bodily response, and maintaining clinical continuity.
          </p>
        </div>

        <div className={styles.archGrid}>
          {/* Step 1: Home */}
          <div className={styles.archCard}>
            <div className={styles.archImgWrap}>
              <Image
                src="/images/works/rehab/Home A Calm Start.jpg"
                alt="Home Screen Architecture"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.archContent}>
              <span className={styles.archStepBadge}>STEP 01</span>
              <h3 className={styles.archCardTitle}>Home</h3>
              <p className={styles.archCardDesc}>
                A clear overview of the user&apos;s current recovery journey, daily condition check-in, and primary next action.
              </p>
            </div>
          </div>

          {/* Step 2: Exercise */}
          <div className={styles.archCard}>
            <div className={styles.archImgWrap}>
              <Image
                src="/images/works/rehab/Exercise Focus.jpg"
                alt="Exercise Preparation Screen Architecture"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.archContent}>
              <span className={styles.archStepBadge}>STEP 02</span>
              <h3 className={styles.archCardTitle}>Exercise</h3>
              <p className={styles.archCardDesc}>
                Guided instructions and clear demonstration that help users understand and prepare for their assigned routine.
              </p>
            </div>
          </div>

          {/* Step 3: Tracking */}
          <div className={styles.archCard}>
            <div className={styles.archImgWrap}>
              <Image
                src="/images/works/rehab/Tracking Clarity.jpg"
                alt="Active Tracking Screen Architecture"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.archContent}>
              <span className={styles.archStepBadge}>STEP 03</span>
              <h3 className={styles.archCardTitle}>Tracking</h3>
              <p className={styles.archCardDesc}>
                Real-time posture guidance and biometric monitoring that captures progress safely during execution.
              </p>
            </div>
          </div>

          {/* Step 4: Appointment */}
          <div className={styles.archCard}>
            <div className={styles.archImgWrap}>
              <Image
                src="/images/works/rehab/Booking No Friction.jpg"
                alt="Appointment Management Screen Architecture"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.archContent}>
              <span className={styles.archStepBadge}>STEP 04</span>
              <h3 className={styles.archCardTitle}>Appointment</h3>
              <p className={styles.archCardDesc}>
                A structured way to schedule consultations and manage care appointments directly within the recovery cycle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 07. HOME EXPERIENCE ───────────────────────────── */}
      <div className={styles.sectionWarm} id="home-experience">
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>06. Home Experience</span>
          <h2 className={styles.h2}>Making the next step visible.</h2>
          <p className={styles.body}>
            The Home dashboard serves as the central compass for recovery. Instead of presenting a dense wall of data, it structures information hierarchically to eliminate decision fatigue.
          </p>

          <div className={styles.featureSplit}>
            <div>
              <div className={styles.featureImageWrap}>
                <Image
                  src="/images/works/rehab/Section 5 start with clarity.jpg"
                  alt="High-resolution Home Dashboard Screen"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div>
              <div className={styles.featureDetailList}>
                <div className={styles.featureDetailItem}>
                  <div className={styles.featureDetailNum}>1</div>
                  <div>
                    <h3 className={styles.featureDetailTitle}>Daily Condition Check-in</h3>
                    <p className={styles.featureDetailDesc}>
                      A simple one-tap prompt (&ldquo;How is your knee pain today?&rdquo;) captures subjective wellness at the moment of engagement before prescribing any movement.
                    </p>
                  </div>
                </div>

                <div className={styles.featureDetailItem}>
                  <div className={styles.featureDetailNum}>2</div>
                  <div>
                    <h3 className={styles.featureDetailTitle}>Interpretable Recovery Trend</h3>
                    <p className={styles.featureDetailDesc}>
                      The pain graph summarizes historical trajectory simply with qualitative reinforcement (&ldquo;You&apos;re doing good&rdquo;) alongside milestone achievements.
                    </p>
                  </div>
                </div>

                <div className={styles.featureDetailItem}>
                  <div className={styles.featureDetailNum}>3</div>
                  <div>
                    <h3 className={styles.featureDetailTitle}>Upcoming Care Reminders</h3>
                    <p className={styles.featureDetailDesc}>
                      Time-sensitive routines like medication doses and scheduled physical therapy sessions are elevated with direct countdown visibility.
                    </p>
                  </div>
                </div>

                <div className={styles.featureDetailItem}>
                  <div className={styles.featureDetailNum}>4</div>
                  <div>
                    <h3 className={styles.featureDetailTitle}>Scheduled Daily Movement</h3>
                    <p className={styles.featureDetailDesc}>
                      Assigned exercises are presented sequentially with clear progress bars, allowing patients to complete their routine at a safe, self-directed pace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 08. GUIDED EXERCISE EXPERIENCE ────────────────── */}
      <div className={styles.inner} id="exercise-experience">
        <span className={styles.sectionLabel}>07. Guided Exercise Experience</span>
        <h2 className={styles.h2}>Guidance without overwhelming the user.</h2>
        <p className={styles.body}>
          During therapeutic exercises, patients cannot fiddle with complex controls. The exercise experience is split into two distinct modes: thorough preparation and hands-free guided execution.
        </p>

        <div className={styles.exerciseFlowGrid}>
          {/* Phase 1: Exercise Overview */}
          <div className={styles.exerciseCard}>
            <div className={styles.exerciseImgWrapOverview}>
              <Image
                src="/images/works/rehab/Exercise Focus.jpg"
                alt="Exercise Preparation and Instructions"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className={styles.exerciseCardLabel}>STAGE 01 &bull; PREPARATION</span>
            <h3 className={styles.exerciseCardTitle}>Clear Exercise Instructions</h3>
            <p className={styles.exerciseCardDesc}>
              Before movement begins, the patient reviews visual form, equipment prerequisites (&ldquo;No Equipment needed&rdquo;), recommended set counts (&ldquo;2 Sets of 4&rdquo;), and step-by-step posture guidance.
            </p>
          </div>

          {/* Phase 2: Active Movement & Pose Tracking */}
          <div className={styles.exerciseCard}>
            <div className={styles.exerciseImgWrapActive}>
              <Image
                src="/images/works/rehab/section 5 Focus on Movement.jpg"
                alt="Active Guided Pose Tracking and Vitals"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className={styles.exerciseCardLabel}>STAGE 02 &bull; EXECUTION</span>
            <h3 className={styles.exerciseCardTitle}>Adaptive Pose Tracking &amp; Vitals</h3>
            <p className={styles.exerciseCardDesc}>
              During execution, computer-vision tracking monitors joint alignment in real time with continuous accuracy feedback, active set timers, and non-intrusive vitals monitoring (Heart Rate, Blood Oxygen).
            </p>
          </div>
        </div>
      </div>

      {/* ── 09. APPOINTMENT EXPERIENCE ────────────────────── */}
      <div className={styles.sectionWarm} id="appointment-experience">
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>08. Appointment Experience</span>
          <h2 className={styles.h2}>Connecting daily recovery with care.</h2>
          <p className={styles.body}>
            Clinical check-ins are not an isolated feature—they are an essential pillar of recovery. When pain levels shift or routines need clinical adjustment, booking access must be immediate and transparent.
          </p>

          <div className={styles.appointmentFlowGrid}>
            <div className={styles.appointmentCard}>
              <div className={styles.appointmentImgWrap}>
                <Image
                  src="/images/works/rehab/Section 7 After - 2.jpg"
                  alt="Calendar and Specialist Directory"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.exerciseCardLabel}>STAGE 01 &bull; DIRECTORY &amp; SCHEDULE</span>
              <h3 className={styles.exerciseCardTitle}>Specialist Discovery &amp; Schedule</h3>
              <p className={styles.exerciseCardDesc}>
                Patients view daily clinical appointments alongside routine medication schedules, with filtered access to verified physiotherapists and specialists based on experience and reviews.
              </p>
            </div>

            <div className={styles.appointmentCard}>
              <div className={styles.appointmentImgWrap}>
                <Image
                  src="/images/works/rehab/Section 7 After - 1.jpg"
                  alt="Frictionless Slot Booking Selection"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.exerciseCardLabel}>STAGE 02 &bull; CONFIRMATION</span>
              <h3 className={styles.exerciseCardTitle}>Frictionless Slot Booking</h3>
              <p className={styles.exerciseCardDesc}>
                A clean date selector paired with clear time-slot pills removes booking hesitation. Available and booked states are immediately distinguishable, preventing scheduling errors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 10. SYSTEM EVOLUTION ──────────────────────────── */}
      <div className={styles.inner} id="system-evolution">
        <span className={styles.sectionLabel}>09. System Evolution</span>
        <div className={styles.evolutionIntro}>
          <h2 className={styles.h2}>Refining the experience over time.</h2>
          <p className={styles.body}>
            The product was refined over approximately 1.5 years. Through iterative product thinking, the design shifted from fragmented, visually noisy concepts into a mature, accessible rehabilitation platform.
          </p>
        </div>

        <div className={styles.evolutionGrid}>
          {/* Earlier Iterations */}
          <div className={styles.evolutionCol}>
            <div className={styles.evolutionHeader}>
              <span className={styles.evolutionBadgeBefore}>EARLIER ITERATIONS</span>
              <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Initial Concept</span>
            </div>

            <div className={styles.evolutionScreens}>
              <div className={styles.evolutionScreenWrapBefore}>
                <Image
                  src="/images/works/rehab/Section 7 before - 2.jpg"
                  alt="Earlier Calendar design with saturated colors"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.evolutionScreenWrapBefore}>
                <Image
                  src="/images/works/rehab/Section 7 before - 1.jpg"
                  alt="Earlier Appointment booking screen"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={styles.evolutionNotes}>
              <div className={styles.evolutionNoteItem}>
                <span className={styles.evolutionNoteBullet}>&bull;</span>
                <span><strong>High-saturation colors:</strong> Yellow, green, and pink card backgrounds induced visual fatigue and reduced clinical authority.</span>
              </div>
              <div className={styles.evolutionNoteItem}>
                <span className={styles.evolutionNoteBullet}>&bull;</span>
                <span><strong>Inconsistent container geometry:</strong> Asymmetrical pill borders and arbitrary card containers fragmented readability.</span>
              </div>
              <div className={styles.evolutionNoteItem}>
                <span className={styles.evolutionNoteBullet}>&bull;</span>
                <span><strong>Crowded slot controls:</strong> Slot booking lacked clear selected states, increasing cognitive burden during booking.</span>
              </div>
            </div>
          </div>

          {/* Refined System */}
          <div className={styles.evolutionCol}>
            <div className={styles.evolutionHeader}>
              <span className={styles.evolutionBadgeAfter}>REFINED SYSTEM</span>
              <span style={{ fontSize: "0.8rem", color: "#2563eb", fontWeight: 600 }}>System Maturity</span>
            </div>

            <div className={styles.evolutionScreens}>
              <div className={styles.evolutionScreenWrapAfter}>
                <Image
                  src="/images/works/rehab/Section 7 After - 2.jpg"
                  alt="Refined Calendar and Doctor directory"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.evolutionScreenWrapAfter}>
                <Image
                  src="/images/works/rehab/Section 7 After - 1.jpg"
                  alt="Refined Appointment slot selection"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={styles.evolutionNotes}>
              <div className={styles.evolutionNoteItem}>
                <span className={styles.evolutionNoteBullet}>&bull;</span>
                <span><strong>Calm tonal system:</strong> Clean white cards with subtle neutral borders and purposeful primary blue accents.</span>
              </div>
              <div className={styles.evolutionNoteItem}>
                <span className={styles.evolutionNoteBullet}>&bull;</span>
                <span><strong>Standardized components:</strong> Uniform card paddings, typographic hierarchies, and standardized elevation shadows.</span>
              </div>
              <div className={styles.evolutionNoteItem}>
                <span className={styles.evolutionNoteBullet}>&bull;</span>
                <span><strong>Predictable interaction states:</strong> Clear contrast between active, available, and disabled slot booking buttons.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 11. DESIGN SYSTEM ─────────────────────────────── */}
      <div className={styles.sectionWarm} id="design-system">
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>10. Design System</span>
          <h2 className={styles.h2}>Consistency across a sensitive experience.</h2>
          <p className={styles.body}>
            Because rehabilitation involves vulnerable emotional and physical states, interface behavior must be completely predictable. The design system enforces strict rhythm, accessibility, and clarity.
          </p>

          <div className={styles.systemGrid}>
            <div className={styles.systemCard}>
              <div className={styles.systemIconBox}>
                <Grid size={26} strokeWidth={2} />
              </div>
              <h3 className={styles.systemTitle}>8px Spatial Cadence</h3>
              <p className={styles.systemDesc}>
                Strict mathematical spacing rhythm creates predictable visual harmony, helping users scan and interact without disorientation across all screen sizes.
              </p>
            </div>

            <div className={styles.systemCard}>
              <div className={styles.systemIconBox}>
                <Palette size={26} strokeWidth={2} />
              </div>
              <h3 className={styles.systemTitle}>Calm Tonal Language</h3>
              <p className={styles.systemDesc}>
                Defining hierarchy through tonal contrast rather than high-chroma fills prevents alarmist reactions while meeting strict WCAG AA contrast guidelines.
              </p>
            </div>

            <div className={styles.systemCard}>
              <div className={styles.systemIconBox}>
                <Layers size={26} strokeWidth={2} />
              </div>
              <h3 className={styles.systemTitle}>Component Predictability</h3>
              <p className={styles.systemDesc}>
                Reusable atomic components—including metric chips, calendar pills, and guidance cards—maintain identical behavior across Home, Exercise, and Care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 12. SYSTEM THINKING ───────────────────────────── */}
      <div className={styles.inner} id="system-thinking">
        <span className={styles.sectionLabel}>11. System Thinking</span>
        <h2 className={styles.h2}>Designing beyond individual screens.</h2>
        <p className={styles.body}>
          A digital health platform cannot function as a loose collection of disparate features. The real product experience lies in how each touchpoint connects to the patient&apos;s holistic recovery loop.
        </p>

        <div className={styles.systemThinkingContainer}>
          <div className={styles.systemThinkingHero}>
            <Image
              src="/images/overview/Rehab Cover Photo (v).jpg"
              alt="Connected Rehabilitation Mobile Platform Experience"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.ecosystemFlowList}>
            <div className={styles.ecosystemFlowItem}>
              <span className={styles.ecosystemStep}>PHASE 01</span>
              <h3 className={styles.ecosystemTitle}>Orientation</h3>
              <p className={styles.ecosystemDesc}>Home checks pain status and highlights today&apos;s top priority.</p>
            </div>

            <div className={styles.ecosystemFlowItem}>
              <span className={styles.ecosystemStep}>PHASE 02</span>
              <h3 className={styles.ecosystemTitle}>Preparation</h3>
              <p className={styles.ecosystemDesc}>Exercise screens set expectations before physical exertion.</p>
            </div>

            <div className={styles.ecosystemFlowItem}>
              <span className={styles.ecosystemStep}>PHASE 03</span>
              <h3 className={styles.ecosystemTitle}>Safe Execution</h3>
              <p className={styles.ecosystemDesc}>Pose tracking guides safe form without cognitive overload.</p>
            </div>

            <div className={styles.ecosystemFlowItem}>
              <span className={styles.ecosystemStep}>PHASE 04</span>
              <h3 className={styles.ecosystemTitle}>Reflection</h3>
              <p className={styles.ecosystemDesc}>Movement records translate into understandable recovery trends.</p>
            </div>

            <div className={styles.ecosystemFlowItem}>
              <span className={styles.ecosystemStep}>PHASE 05</span>
              <h3 className={styles.ecosystemTitle}>Care Continuity</h3>
              <p className={styles.ecosystemDesc}>Specialist consultations align treatment with logged progress.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 13. KEY LEARNINGS ─────────────────────────────── */}
      <div className={styles.sectionWarm} id="learnings">
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>12. Key Learnings</span>
          <h2 className={styles.h2}>Principles forged through product design.</h2>
          <p className={styles.body}>
            Designing for health and rehabilitation demands deeper restraint than consumer apps. Key design takeaways from iterating on this platform:
          </p>

          <div className={styles.learningsGrid}>
            <div className={styles.learningCard}>
              <span className={styles.learningNum}>TAKEAWAY 01</span>
              <h3 className={styles.learningTitle}>Clarity Over Visual Stimulation</h3>
              <p className={styles.learningDesc}>
                When users are physically compromised or tired, decorative complexity becomes an obstacle. Restraint and clear spacing protect focus.
              </p>
            </div>

            <div className={styles.learningCard}>
              <span className={styles.learningNum}>TAKEAWAY 02</span>
              <h3 className={styles.learningTitle}>The Next Action Must Be Obvious</h3>
              <p className={styles.learningDesc}>
                A patient should never look at a health interface and wonder what to do next. Single, unambiguous primary actions build momentum and trust.
              </p>
            </div>

            <div className={styles.learningCard}>
              <span className={styles.learningNum}>TAKEAWAY 03</span>
              <h3 className={styles.learningTitle}>Data Needs Context to Be Useful</h3>
              <p className={styles.learningDesc}>
                Presenting raw physiological telemetry creates anxiety. Presenting numbers alongside relatable progress states turns data into empowerment.
              </p>
            </div>

            <div className={styles.learningCard}>
              <span className={styles.learningNum}>TAKEAWAY 04</span>
              <h3 className={styles.learningTitle}>Consistency Deepens as Products Grow</h3>
              <p className={styles.learningDesc}>
                As features like appointments, vitals, and routines are added, reusable component tokens prevent interface fragmentation.
              </p>
            </div>

            <div className={styles.learningCard}>
              <span className={styles.learningNum}>TAKEAWAY 05</span>
              <h3 className={styles.learningTitle}>Support Without Overwhelming</h3>
              <p className={styles.learningDesc}>
                True product support is calm and quiet. Good healthcare design guides users smoothly through their recovery without creating dependency or alarm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 14. FINAL POSITIONING ─────────────────────────── */}
      <div className={styles.closingSection} id="closing">
        <div className={styles.closingInner}>
          <p className={styles.closingQuote}>
            &ldquo;This project reinforced my belief that good product design is not always about adding more capability. Sometimes it is about making the right action clearer, reducing uncertainty, and helping people move forward with confidence.&rdquo;
          </p>
          <p className={styles.closingSub}>
            Structured recovery &bull; Safe, guided, and adaptive progression.
          </p>
        </div>
      </div>

      <ProjectPagination />
      <Footer />
    </div>
  );
}

