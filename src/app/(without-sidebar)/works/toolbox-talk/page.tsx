"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import ProjectSectionRail, { SectionItem } from "@/components/ProjectSectionRail";
import ProjectPagination from "@/components/ProjectPagination";

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "Overview" },
  { id: "starting-point", label: "01. The Starting Point" },
  { id: "shift", label: "02. The Shift" },
  { id: "foundation", label: "03. The Foundation" },
  { id: "connection", label: "04. The Connection" },
  { id: "site", label: "05. The Site" },
  { id: "proof", label: "06. The Proof" },
  { id: "result", label: "07. The Result" },
];

export default function ToolboxTalkPage() {
  return (
    <div className={styles.page}>
      <ProjectSectionRail sections={SECTIONS} />

      {/* ── HERO / OVERVIEW ──────────────────────────────── */}
      <div className={styles.inner} id="overview">
        <div style={{ marginTop: "20px" }}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            LINARC WORKS • FIELD SAFETY WORKFLOW
          </div>

          <h1 className={styles.heroTitle}>
            Toolbox Talks — Safety Happens in the Middle of the Work
          </h1>

          <p className={styles.heroSub}>
            Toolbox talks are an essential daily ritual on a construction job site, but they are easy to overlook when designing large-scale project management software.
          </p>

          <p className={styles.heroAccent}>
            Instead of designing another form for safety documentation, I designed the actual workflow around how safety happens in the field.
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
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>FOCUS</span>
            <span className={styles.metaValue}>Field Safety Routine</span>
          </div>
        </div>
      </div>

      {/* ── 01. THE STARTING POINT ───────────────────────── */}
      <div className={styles.sectionWarm} id="starting-point">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>01. THE STARTING POINT</div>
          <h2 className={styles.h2}>Safety happens in the middle of the work</h2>

          <div className={styles.body}>
            <p>
              Toolbox talks are one of those things that happen regularly on a construction site, but they&apos;re easy to overlook when you&apos;re designing the larger project-management system. They&apos;re short, repetitive, and usually happen right before the crew gets on with the actual work. But behind that simple conversation is a lot that still needs to be planned, communicated, and documented.
            </p>
            <p>
              When I looked at the existing Toolbox Talks experience, it felt like the product was treating the talk primarily as a record to be created and stored. There was a topic, a date, a host, attendees, signatures, and a few supporting details. Everything was there, but the experience didn&apos;t really follow the way a toolbox talk happens in the real world.
            </p>
            <p style={{ fontWeight: 600, color: "#1f2937", marginTop: "24px" }}>
              That became the starting point for me: instead of designing another form for safety documentation, how could I design the actual workflow around the talk?
            </p>
          </div>

          {/* Image 01 — Overview */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>01 — OVERVIEW</span>
              <span className={styles.imagePurpose}>Toolbox Talks Hub • Upcoming, Past, and Templates</span>
            </div>
            <div className={styles.imageViewport}>
              <Image
                src="/images/toolbox-talk/01-overview.png"
                alt="Toolbox Talks Overview Table"
                width={2880}
                height={1800}
                unoptimized
                priority
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 02. THE SHIFT ────────────────────────────────── */}
      <div className={styles.inner} id="shift">
        <div className={styles.sectionLabel}>02. THE SHIFT</div>
        <h2 className={styles.h2}>From a safety record to a safety routine</h2>

        <div className={styles.body}>
          <p>
            Once I looked at it that way, the flow started to make more sense. A toolbox talk isn&apos;t really a single action. Someone first needs to decide what the crew needs to hear, prepare the material, schedule the session, bring the right people together, conduct the talk, and then capture what happened.
          </p>
          <p>
            That also made me question why the experience started with a blank event every time. Many of these conversations are built around recurring safety topics, so there&apos;s very little reason for someone to repeatedly enter the same information.
          </p>
          <p>
            I separated templates from events. Templates became the reusable knowledge behind the talks—topics, sources, references, and supporting material—while the event became the actual instance happening on a specific project and date.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarTag}>THE TEMPLATE</div>
            <h3 className={styles.pillarTitle}>Reusable Knowledge</h3>
            <p className={styles.pillarDesc}>
              Standardized safety topics, OSHA references, background guides, and key points created and maintained once for the entire organization.
            </p>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarTag}>THE EVENT</div>
            <h3 className={styles.pillarTitle}>Project Instance</h3>
            <p className={styles.pillarDesc}>
              The live site activity tied to a specific project, host, date, time, location, trade crew, and verified attendance roster.
            </p>
          </div>
        </div>
      </div>

      {/* ── 03. THE FOUNDATION ───────────────────────────── */}
      <div className={styles.sectionNavy} id="foundation">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>03. THE FOUNDATION</div>
          <h2 className={styles.h2}>Don&apos;t start from scratch</h2>

          <div className={styles.body}>
            <p>
              The template library became the starting point rather than something buried somewhere in the system.
            </p>
            <p>
              A safety director could maintain topics such as PPE, fall protection, fire safety, lockout/tagout, confined spaces, or heat and cold stress, along with their supporting references. When a project needed a talk, the team could start with one of those existing topics instead of rebuilding the content each time.
            </p>
            <p>
              That small change had a bigger impact than I expected. It shifted the interaction from &ldquo;create a toolbox talk&rdquo; to &ldquo;choose what this crew needs to know.&rdquo;
            </p>
            <p style={{ fontWeight: 600, color: "#1f2937", marginTop: "24px" }}>
              The system was no longer just storing safety information; it was helping people reuse it.
            </p>
          </div>

          {/* Image 02 — Templates */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>02 — TEMPLATES</span>
              <span className={styles.imagePurpose}>Template Library • Pre-vetted topics, guidelines, and materials</span>
            </div>
            <div className={styles.imageViewport}>
              <Image
                src="/images/toolbox-talk/02-templates.png"
                alt="Toolbox Talk Templates Library"
                width={2880}
                height={1800}
                unoptimized
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 04. THE CONNECTION ───────────────────────────── */}
      <div className={styles.inner} id="connection">
        <div className={styles.sectionLabel}>04. THE CONNECTION</div>
        <h2 className={styles.h2}>A topic becomes a moment on site</h2>

        <div className={styles.body}>
          <p>
            From there, the event creation flow became much more about context.
          </p>
          <p>
            Once a topic was selected, the rest of the information was specific to the project: where the talk was happening, when it was happening, how long it would take, who was hosting it, and who needed to attend.
          </p>
          <p>
            I wanted that distinction to stay clear. The template answers &ldquo;what are we talking about?&rdquo; The event answers &ldquo;when, where, and with whom is this happening?&rdquo;
          </p>
          <p style={{ fontWeight: 600, color: "#1f2937" }}>
            That separation made the experience easier to understand and also meant the same safety topic could be reused across different projects without duplicating the underlying information.
          </p>
        </div>

        {/* Image 03 — Create Event */}
        <div className={styles.imageContainer}>
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>03 — CREATE EVENT</span>
            <span className={styles.imagePurpose}>Event Creation Flow • Linking template knowledge to site context</span>
          </div>
          <div className={styles.imageViewport}>
            <Image
              src="/images/toolbox-talk/03-create-event.png"
              alt="Create Toolbox Talk Event"
              width={2880}
              height={1800}
              unoptimized
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* ── 05. THE SITE ─────────────────────────────────── */}
      <div className={styles.sectionWhite} id="site">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>05. THE SITE</div>
          <h2 className={styles.h2}>The workflow leaves the screen</h2>

          <div className={styles.body}>
            <p>
              This was also where the context of construction mattered most.
            </p>
            <p>
              The person creating the event might be sitting at a desk, but the actual toolbox talk happens somewhere completely different—on the job site, with people standing around, limited time, and very little patience for navigating through a complicated system.
            </p>
            <p>
              That&apos;s why I kept looking for ways to make the transition from the digital workflow to the physical site simpler. The QR code became one of those bridges. Instead of making the crew search for the right event, the talk could have a simple physical entry point that could be shared on site.
            </p>
          </div>

          <div className={styles.calloutBox}>
            <p className={styles.calloutText}>
              &ldquo;It sounds like a small interaction, but it reinforced something important about the product: not every part of a construction workflow should require someone to sit in front of the application.&rdquo;
            </p>
          </div>

          {/* Image 04 — Mobile Attendance */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>04 — MOBILE ATTENDANCE</span>
              <span className={styles.imagePurpose}>On-Site Sign-In • Scan QR → Verify Talk → Add Details &amp; Signature → Done</span>
            </div>
            <div className={styles.imageViewport}>
              <Image
                src="/images/toolbox-talk/04-mobile-attendance.png"
                alt="Mobile Attendance and QR Code Flow"
                width={2880}
                height={1800}
                unoptimized
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 06. THE PROOF ────────────────────────────────── */}
      <div className={styles.inner} id="proof">
        <div className={styles.sectionLabel}>06. THE PROOF</div>
        <h2 className={styles.h2}>What happened matters as much as what was planned</h2>

        <div className={styles.body}>
          <p>
            The other thing I didn&apos;t want to lose was the record of participation.
          </p>
          <p>
            Creating a talk doesn&apos;t mean the talk happened. The system still needs to capture who attended and who signed off. So rather than treating attendance and signatures as a separate administrative step, I kept them connected to the event itself.
          </p>
          <p>
            That meant the same record could move from an upcoming talk to a completed one while retaining the people, signatures, supporting material, and event information around it.
          </p>
          <p style={{ fontWeight: 600, color: "#1f2937", marginTop: "24px" }}>
            This made the completion state feel meaningful. It wasn&apos;t simply changing a status from Open to Closed; it was showing that a real activity had taken place and had been documented.
          </p>
        </div>

        {/* Image 05 — Completed Record */}
        <div className={styles.imageContainer}>
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>05 — COMPLETED RECORD</span>
            <span className={styles.imagePurpose}>Completed State • Verified attendee signatures, materials, and audit log</span>
          </div>
          <div className={styles.imageViewport}>
            <Image
              src="/images/toolbox-talk/05-completed-record.png"
              alt="Completed Toolbox Talk Record"
              width={2880}
              height={1800}
              unoptimized
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* ── 07. THE RESULT (WRITTEN CONCLUSION — NO IMAGE) ── */}
      <div className={styles.sectionWarm} id="result">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>07. THE RESULT</div>
          <h2 className={styles.h2}>A workflow that follows the work</h2>

          <div className={styles.body}>
            <p>
              What started as a fairly straightforward safety-management feature ended up being more about connecting a few different moments that were previously treated separately.
            </p>
          </div>

          <div className={styles.chainRow}>
            <span className={styles.chainNode}>Choose Topic</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Prepare Talk</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Schedule</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Bring Crew Together</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Conduct</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Capture Attendance</span>
            <span className={styles.chainArrow}>→</span>
            <span className={`${styles.chainNode} ${styles.chainNodeActive}`}>Close Out</span>
          </div>

          <div className={styles.body} style={{ marginTop: "28px" }}>
            <p>
              The design became less about adding more information to the system and more about putting the right information at the right moment. Templates support preparation, events provide context, QR codes help take the experience onto the site, and attendance closes the loop.
            </p>
          </div>
        </div>
      </div>

      {/* ── CLOSING SECTION ──────────────────────────────── */}
      <div className={styles.closingSection}>
        <div className={styles.closingInner}>
          <h2 className={styles.closingTitle}>
            Safety isn&apos;t just documentation. It&apos;s a routine that lives on site.
          </h2>
          <p className={styles.closingBody}>
            <strong>Toolbox turned safety from an administrative filing chore into an active, connected field workflow.</strong>
            <br /><br />
            Templates organize knowledge, events capture local context, and on-site sign-ins provide verifiable proof of safety in action.
          </p>
        </div>
      </div>

      <ProjectPagination />
      <Footer />
    </div>
  );
}

