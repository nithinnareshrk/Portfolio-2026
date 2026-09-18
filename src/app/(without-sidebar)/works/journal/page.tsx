"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import ProjectSectionRail, { SectionItem } from "@/components/ProjectSectionRail";
import ProjectPagination from "@/components/ProjectPagination";

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "01. The Context" },
  { id: "problem", label: "02. The Problem" },
  { id: "insight", label: "03. The Insight" },
  { id: "daily-view", label: "04. Daily View" },
  { id: "delays", label: "05. Explainable Delays" },
  { id: "evidence", label: "06. Bringing Evidence" },
  { id: "connecting-work", label: "07. Connecting Work" },
  { id: "decisions", label: "08. Design Decisions" },
  { id: "detail-view", label: "09. The Detail View" },
  { id: "impact", label: "10. Impact" },
];

export default function JournalPage() {
  return (
    <div className={styles.page}>
      <ProjectSectionRail sections={SECTIONS} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className={styles.inner} id="overview">
        <div style={{ marginTop: '20px' }}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            LINARC WORKS • DAILY SITE LOG
          </div>

          <h1 className={styles.heroTitle}>
            The Journal — Turning a Day on Site Into a Clear Record of What Happened
          </h1>

          <p className={styles.heroSub}>
            Construction teams already knew what they had planned for the day.
            The harder part was understanding what actually happened — what was delayed, what caused it, what changed on site, and what needed attention next.
          </p>

          <p className={styles.heroAccent}>
            I designed the Journal to turn scattered daily activity into one clear, actionable record.
          </p>
        </div>

        <div className={styles.metaDivider} />

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>ROLE</span>
            <span className={styles.metaValue}>Product Design</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>CONTEXT</span>
            <span className={styles.metaValue}>Linarc Platform</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>SCOPE</span>
            <span className={styles.metaValue}>Web &amp; Mobile</span>
          </div>
        </div>
      </div>

      {/* ── 01. THE CONTEXT ──────────────────────────────── */}
      <div className={styles.sectionWarm} id="context">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>01. THE CONTEXT</div>
          <h2 className={styles.h2}>A construction day doesn&apos;t follow the plan.</h2>

          <div className={styles.body}>
            <p>
              A typical day on site can involve inspections, subcontractor work, deliveries, equipment usage, incidents, delays, visitors, notes and photo evidence — all happening at the same time.
            </p>
            <p>
              The information existed, but it was spread across different activities and workflows.
            </p>
            <p style={{ fontWeight: 600, color: '#1f2937' }}>
              The Journal needed to bring that context together without making the daily record harder to maintain.
            </p>
          </div>

          {/* Image 01 — Full daily dashboard, single centered tablet */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>JOURNAL_DAILY_VIEW</span>
              <span className={styles.imagePurpose}>Full daily dashboard • Climate → Summary → Activities → Schedule</span>
            </div>
            <div className={styles.imageViewport}>
              <div className={styles.tabletFrame}>
                <div className={styles.tabletScreen}>
                  <Image
                    src="/images/journal/journal-01-full-view.png"
                    alt="Full View — The Journal daily dashboard on tablet"
                    width={2048}
                    height={2732}
                    unoptimized
                    priority
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 02. THE PROBLEM ──────────────────────────────── */}
      <div className={styles.inner} id="problem">
        <div className={styles.sectionLabel}>02. THE PROBLEM</div>
        <h2 className={styles.h2}>
          The problem wasn&apos;t a lack of information.<br />
          It was the lack of context around it.
        </h2>

        <div className={styles.body}>
          <p>
            A delay by itself doesn&apos;t tell a project manager much. Neither does an incident, a delivery, or a progress update.
          </p>
          <p>The useful question is:</p>
        </div>

        <div className={styles.questionBox}>
          <p className={styles.questionText}>
            &ldquo;What happened, why did it happen, and what did it affect?&rdquo;
          </p>
        </div>

        <div className={styles.body}>
          <p>
            The existing workflow captured individual events, but connecting those events back to the day&apos;s work required jumping between different parts of the product.
          </p>
        </div>

        {/* Image 02 — Detail view, single centered tablet */}
        <div className={styles.imageContainer}>
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>JOURNAL_DETAIL</span>
            <span className={styles.imagePurpose}>Event detail • Tabs → Metadata → QR → Attendees → Attachments</span>
          </div>
          <div className={styles.imageViewport}>
            <div className={styles.tabletFrame}>
              <div className={styles.tabletScreen}>
                <Image
                  src="/images/journal/journal-02-detail.png"
                  alt="Detail View — Single site event and investigation"
                  width={2048}
                  height={2732}
                  unoptimized
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 03. THE INSIGHT ──────────────────────────────── */}
      <div className={styles.sectionWhite} id="insight">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>03. THE INSIGHT</div>
          <h2 className={styles.h2}>
            A daily journal should tell the story of the site — not just store its events.
          </h2>

          <div className={styles.body}>
            <p>
              That changed how I approached the design.
            </p>
            <p>
              Instead of creating another activity log, I treated the Journal as a <strong>daily layer of context</strong> sitting across the rest of the construction workflow.
            </p>
            <p style={{ marginTop: '24px', fontWeight: 600, color: '#1f2937' }}>
              A project manager should be able to open one day and quickly understand:
            </p>
          </div>

          <div className={styles.checklistGrid}>
            {[
              "What was planned",
              "What was completed",
              "What was delayed",
              "What went wrong",
              "What resources were used",
              "What evidence was captured",
              "What needs attention",
            ].map((item, index) => (
              <div key={index} className={styles.checklistItem}>
                <span className={styles.checkDot} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.body} style={{ marginTop: '24px' }}>
            <p style={{ fontWeight: 600, color: '#1f2937' }}>
              That became the foundation for the experience.
            </p>
          </div>
        </div>
      </div>

      {/* ── 04. DESIGNING THE DAILY VIEW ─────────────────── */}
      <div className={styles.inner} id="daily-view">
        <div className={styles.sectionLabel}>04. DESIGNING THE DAILY VIEW</div>
        <h2 className={styles.h2}>From scattered activity to one daily picture</h2>

        <p className={styles.lead}>
          The Journal brings together the most important activity from across the project into a single, scannable view. Rather than treating every event equally, I grouped information according to how teams actually review a day on site.
        </p>

        <div className={styles.dailyCardsGrid}>
          <div className={styles.dailyCard}>
            <h3 className={styles.dailyCardTitle}>Planned work</h3>
            <p className={styles.dailyCardDesc}>
              Inspections, walkthroughs and scheduled activities show what was supposed to happen.
            </p>
          </div>

          <div className={styles.dailyCard}>
            <h3 className={styles.dailyCardTitle}>Work &amp; progress</h3>
            <p className={styles.dailyCardDesc}>
              Project tasks and crew activity provide context around ongoing work.
            </p>
          </div>

          <div className={styles.dailyCard}>
            <h3 className={styles.dailyCardTitle}>Problems &amp; delays</h3>
            <p className={styles.dailyCardDesc}>
              Delays are captured with a reason and location, making the cause easier to understand later.
            </p>
          </div>

          <div className={styles.dailyCard}>
            <h3 className={styles.dailyCardTitle}>Site activity</h3>
            <p className={styles.dailyCardDesc}>
              Deliveries, equipment usage and visitors document what physically happened on site.
            </p>
          </div>

          <div className={styles.dailyCard}>
            <h3 className={styles.dailyCardTitle}>Evidence</h3>
            <p className={styles.dailyCardDesc}>
              Notes, images and signatures provide the supporting record.
            </p>
          </div>
        </div>

        {/* Image 03 — Climate component, clean component frame */}
        <div className={styles.imageContainer}>
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>CLIMATE_CONDITIONS</span>
            <span className={styles.imagePurpose}>Site conditions • Temperature → Humidity → Wind → Precipitation</span>
          </div>
          <div className={styles.imageViewport}>
            <div className={styles.componentFrame}>
              <Image
                src="/images/journal/journal-03-climate.png"
                alt="Climate and site environmental conditions card"
                width={1600}
                height={800}
                unoptimized
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        <div className={styles.body} style={{ marginTop: '24px' }}>
          <p style={{ fontWeight: 600, color: '#1f2937' }}>
            The goal was simple: make the day&apos;s story understandable without opening ten different screens.
          </p>
        </div>
      </div>

      {/* ── 05. MAKING DELAYS EXPLAINABLE ─────────────────── */}
      <div className={styles.sectionWarm} id="delays">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>05. MAKING DELAYS EXPLAINABLE</div>
          <h2 className={styles.h2}>A delay is only useful when you know why it happened.</h2>

          <div className={styles.body}>
            <p>
              Instead of recording a generic &ldquo;delay,&rdquo; the Journal captures the <strong>type, reason and affected activity/location</strong>.
            </p>
            <p>For example:</p>
          </div>

          <div className={styles.delayExamplesGrid}>
            <div className={styles.delayCard}>
              <div className={styles.delayType}>Weather Delay</div>
              <div className={styles.delayReason}>Icy Conditions</div>
            </div>
            <div className={styles.delayCard}>
              <div className={styles.delayType}>Material Drop</div>
              <div className={styles.delayReason}>Unloading Zone Assignment</div>
            </div>
            <div className={styles.delayCard}>
              <div className={styles.delayType}>Network Outage</div>
              <div className={styles.delayReason}>Clear communication</div>
            </div>
          </div>

          {/* Image 04 — Create Delay flow, single centered tablet */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>CREATE_DELAY</span>
              <span className={styles.imagePurpose}>Delay creation • Type → Title → Location → Reason → Contractor</span>
            </div>
            <div className={styles.imageViewport}>
              <div className={styles.tabletFrame}>
                <div className={styles.tabletScreen}>
                  <Image
                    src="/images/journal/journal-05-delay.png"
                    alt="Create Delay flow with type, location, and reason"
                    width={2048}
                    height={2732}
                    unoptimized
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.body} style={{ marginTop: '28px' }}>
            <p>
              This turns an isolated event into something that can be reviewed and understood later.
            </p>
            <p>
              And when the delay is connected back to scheduled work, the context becomes even stronger.
            </p>
          </div>

          <div className={styles.chainFormulaBox}>
            <span className={styles.chainFormulaNode}>What happened</span>
            <ArrowRight size={18} className={styles.chainFormulaArrow} />
            <span className={styles.chainFormulaNode}>Why it happened</span>
            <ArrowRight size={18} className={styles.chainFormulaArrow} />
            <span className={styles.chainFormulaNode}>What it affected</span>
          </div>
        </div>
      </div>

      {/* ── 06. BRINGING EVIDENCE INTO THE RECORD ─────────── */}
      <div className={styles.inner} id="evidence">
        <div className={styles.sectionLabel}>06. BRINGING EVIDENCE INTO THE RECORD</div>
        <h2 className={styles.h2}>Some things are easier to show than explain.</h2>

        <div className={styles.body}>
          <p>
            Construction teams deal with physical work, changing site conditions and issues that are difficult to capture through text alone.
          </p>
          <p>So the Journal also brings together:</p>
        </div>

        <div className={styles.checklistGrid}>
          {[
            "Site images",
            "Notes",
            "Attachments",
            "Signatures",
            "Supporting records",
          ].map((item, idx) => (
            <div key={idx} className={styles.checklistItem}>
              <span className={styles.checkDot} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className={styles.body} style={{ marginTop: '24px' }}>
          <p style={{ fontWeight: 600, color: '#1f2937' }}>
            The result is a daily record that isn&apos;t just descriptive — <strong>it can also be evidence.</strong>
          </p>
        </div>
      </div>

      {/* ── 07. CONNECTING THE DAY BACK TO THE WORK ───────── */}
      <div className={styles.sectionNavy} id="connecting-work">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>07. CONNECTING THE DAY BACK TO THE WORK</div>
          <h2 className={styles.h2}>The Journal shouldn&apos;t become another isolated module.</h2>

          <div className={styles.workflowChainList}>
            <div className={styles.workflowChainItem}>
              <strong>A delay</strong> might affect a schedule.
            </div>
            <div className={styles.workflowChainItem}>
              <strong>An incident</strong> might involve a crew.
            </div>
            <div className={styles.workflowChainItem}>
              <strong>A delivery</strong> might support a specific activity.
            </div>
            <div className={styles.workflowChainItem}>
              <strong>Equipment usage</strong> can explain resource consumption.
            </div>
            <div className={styles.workflowChainItem}>
              <strong>A T&amp;M ticket</strong> can explain additional work.
            </div>
          </div>

          <div className={styles.body}>
            <p>
              The Journal therefore acts as a <strong>context layer across the project</strong>, connecting daily events back to the workflows where they originated.
            </p>
          </div>

          {/* Image 05 — Filter modules, single centered tablet */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>MODULE_FILTER</span>
              <span className={styles.imagePurpose}>Cross-module filter • Toolbox Talks → T&amp;M → Punchlist → Schedule → Delivery</span>
            </div>
            <div className={styles.imageViewport}>
              <div className={styles.tabletFrame}>
                <div className={styles.tabletScreen}>
                  <Image
                    src="/images/journal/journal-04-filter.png"
                    alt="Filter connecting project modules and workflows"
                    width={2048}
                    height={2732}
                    unoptimized
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.body} style={{ marginTop: '24px' }}>
            <p>
              The detail view reinforces this by allowing teams to move from the daily record into the underlying activity.
            </p>
          </div>
        </div>
      </div>

      {/* ── 08. THE DESIGN DECISIONS ──────────────────────── */}
      <div className={styles.inner} id="decisions">
        <div className={styles.sectionLabel}>08. THE DESIGN DECISIONS</div>
        <h2 className={styles.h2}>Design Decisions</h2>

        <p className={styles.body} style={{ marginBottom: '24px' }}>
          Specific architectural decisions that defined the user experience and systems structure:
        </p>

        <div className={styles.decisionsGrid}>
          <div className={styles.decisionCard}>
            <div className={styles.decisionNum}>01 — ONE DAY, ONE VIEW</div>
            <h3 className={styles.decisionTitle}>One day, one view</h3>
            <p className={styles.decisionDesc}>
              The Journal starts with the day rather than a single workflow. This gives project teams a quick way to understand the overall state of the site before diving into individual records.
            </p>
          </div>

          <div className={styles.decisionCard}>
            <div className={styles.decisionNum}>02 — GROUP BY WHAT HAPPENED</div>
            <h3 className={styles.decisionTitle}>Group by what happened</h3>
            <p className={styles.decisionDesc}>
              Activities are organised into meaningful categories — inspections, delays, incidents, deliveries, equipment, visitors, notes and evidence. This reduces the effort required to scan a busy construction day.
            </p>
          </div>

          <div className={styles.decisionCard}>
            <div className={styles.decisionNum}>03 — KEEP CONTEXT CLOSE</div>
            <h3 className={styles.decisionTitle}>Keep the context close</h3>
            <p className={styles.decisionDesc}>
              Important details such as location, reason, status, creator and linked activity stay close to the event instead of being buried in another screen.
            </p>
          </div>

          <div className={styles.decisionCard}>
            <div className={styles.decisionNum}>04 — RECORD ONCE, USE LATER</div>
            <h3 className={styles.decisionTitle}>Record once, use later</h3>
            <p className={styles.decisionDesc}>
              The same daily information can become useful beyond today&apos;s review — for project reporting, investigation, accountability and resolving disputes.
            </p>
          </div>
        </div>
      </div>

      {/* ── 09. THE DETAIL VIEW ───────────────────────────── */}
      <div className={styles.sectionWhite} id="detail-view">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>09. THE DETAIL VIEW</div>
          <h2 className={styles.h2}>From &ldquo;something happened&rdquo; to &ldquo;here&apos;s what happened.&rdquo;</h2>

          <p className={styles.lead}>
            The Journal&apos;s detail flows let users move from a high-level daily summary into the actual record.
          </p>

          <div className={styles.detailBreakdownGrid}>
            <div className={styles.detailBreakdownCard}>
              <div className={styles.detailBreakdownLabel}>INCIDENT PROGRESSION</div>
              <div className={styles.flowChainRow}>
                <span className={styles.flowBadge}>Date</span>
                <span className={styles.flowArrow}>&rarr;</span>
                <span className={styles.flowBadge}>People involved</span>
                <span className={styles.flowArrow}>&rarr;</span>
                <span className={styles.flowBadge}>Severity</span>
                <span className={styles.flowArrow}>&rarr;</span>
                <span className={styles.flowBadge}>Treatment</span>
                <span className={styles.flowArrow}>&rarr;</span>
                <span className={styles.flowBadge}>Notes</span>
                <span className={styles.flowArrow}>&rarr;</span>
                <span className={styles.flowBadge}>Images</span>
              </div>
            </div>

            <div className={styles.detailBreakdownCard}>
              <div className={styles.detailBreakdownLabel}>DELAY PROGRESSION</div>
              <div className={styles.flowChainRow}>
                <span className={styles.flowBadge}>Delay type</span>
                <span className={styles.flowArrow}>&rarr;</span>
                <span className={styles.flowBadge}>Reason</span>
                <span className={styles.flowArrow}>&rarr;</span>
                <span className={styles.flowBadge}>Affected activity</span>
                <span className={styles.flowArrow}>&rarr;</span>
                <span className={styles.flowBadge}>Supporting evidence</span>
              </div>
            </div>
          </div>

          <div className={styles.body} style={{ marginTop: '28px' }}>
            <p>This makes the Journal useful at two levels:</p>
          </div>

          <div className={styles.scanInvestigateBox}>
            <div className={styles.scanBoxItem}>Scan the day quickly.</div>
            <div className={styles.scanBoxItem}>Investigate when necessary.</div>
          </div>

          {/* Image 06 — Signature flow, single centered tablet */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>SIGNATURE_RECORD</span>
              <span className={styles.imagePurpose}>Evidence capture • Signature → Saved record → Submit</span>
            </div>
            <div className={styles.imageViewport}>
              <div className={styles.tabletFrame}>
                <div className={styles.tabletScreen}>
                  <Image
                    src="/images/journal/journal-06-signature.png"
                    alt="Add signature and verify site record"
                    width={2048}
                    height={2732}
                    unoptimized
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 10. IMPACT ───────────────────────────────────── */}
      <div className={styles.inner} id="impact">
        <div className={styles.sectionLabel}>10. IMPACT</div>
        <h2 className={styles.h2}>A clearer record of the work behind the work.</h2>

        <p className={styles.lead}>
          The Journal brought together daily site activity that previously needed to be understood across separate workflows. It made it easier to:
        </p>

        <div className={styles.impactGrid}>
          {[
            "See what happened across an entire day",
            "Understand the reasons behind delays",
            "Connect problems back to scheduled work",
            "Preserve visual and written evidence",
            "Review incidents with their surrounding context",
            "Maintain a reliable project record",
          ].map((text, idx) => (
            <div key={idx} className={styles.impactCard}>
              <CheckCircle2 className={styles.impactIcon} size={22} />
              <span className={styles.impactText}>{text}</span>
            </div>
          ))}
        </div>

        <div className={styles.impactShiftBox}>
          <div className={styles.impactShiftText}>
            The bigger shift was from recording activity to understanding it.
          </div>
        </div>
      </div>

      {/* ── CLOSING ──────────────────────────────────────── */}
      <div className={styles.closingSection}>
        <div className={styles.closingInner}>
          <h2 className={styles.closingTitle}>
            A construction day is more than what got completed.
          </h2>
          <p className={styles.closingBody}>
            <strong>The Journal captures everything around the work — the delays, decisions, people, resources and evidence that explain how the day actually unfolded.</strong>
            <br /><br />
            That makes the daily record useful not only at the end of the day, but long after it.
          </p>
        </div>
      </div>

      <ProjectPagination />
      <Footer />
    </div>
  );
}
