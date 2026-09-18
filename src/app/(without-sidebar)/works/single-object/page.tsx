"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import ProjectSectionRail, { SectionItem } from "@/components/ProjectSectionRail";
import ProjectPagination from "@/components/ProjectPagination";

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "01. The Context" },
  { id: "signal", label: "02. The Signal" },
  { id: "constraint", label: "03. The Constraint" },
  { id: "shift", label: "04. The Shift" },
  { id: "experience", label: "05. The Experience" },
  { id: "detail", label: "06. The Detail" },
  { id: "ownership", label: "07. The Ownership" },
  { id: "direction", label: "08. The Direction" },
  { id: "transformation", label: "09. The Transformation" },
];

export default function SingleObjectPage() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    setIsDragging(false);
  };

  return (
    <div className={styles.page}>
      <ProjectSectionRail sections={SECTIONS} />

      {/* ── HERO / OVERVIEW ──────────────────────────────── */}
      <div className={styles.inner} id="overview">
        <div style={{ marginTop: "20px" }}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            LINARC WORKS • REPORT SYSTEM
          </div>

          <h1 className={styles.heroTitle}>
            Single Object — Moving Report Customization Out of Code
          </h1>

          <p className={styles.heroSub}>
            Turning hardcoded, developer-defined reports into a structured, customer-controlled template experience without building a document editor from scratch.
          </p>

          <p className={styles.heroAccent}>
            We gave the report a structure so customers could customize their documents without having to design them from a blank canvas.
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
            <span className={styles.metaValue}>Web Application</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>TIMELINE</span>
            <span className={styles.metaValue}>Fast Iteration</span>
          </div>
        </div>
      </div>

      {/* ── 01. THE CONTEXT ──────────────────────────────── */}
      <div className={styles.sectionWarm} id="context">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>01. THE CONTEXT</div>
          <h2 className={styles.h2}>We were still figuring out what reports could become.</h2>

          <div className={styles.body}>
            <p>
              At this point, we were still very early with the product. We had only a handful of customers, and reports were something we had built primarily to get the job done.
            </p>
            <p>
              When a user generated a report, the system simply generated the report we had designed.
            </p>
            <p>
              There was no report editor or template management experience for customers. The structure and design were defined by us and hardcoded into the product.
            </p>
            <p style={{ fontWeight: 600, color: "#1f2937" }}>
              That worked for getting the first version out, but it also meant that every company was essentially getting the same report experience.
            </p>
          </div>

          {/* Visual 01 — Sectionized editor (swapped) */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>VISUAL_01_EXISTING_EXPERIENCE</span>
              <span className={styles.imagePurpose}>Existing experience • Product output</span>
            </div>
            <div className={styles.imageViewport}>
              <Image
                src="/images/single-object/sectionized_editor.png"
                alt="Visual 01 — Existing Experience"
                width={1920}
                height={1080}
                unoptimized
                priority
                className={styles.productImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 02. THE SIGNAL ───────────────────────────────── */}
      <div className={styles.inner} id="signal">
        <div className={styles.sectionLabel}>02. THE SIGNAL</div>
        <h2 className={styles.h2}>
          One customer asking for customization made us look at the problem differently.
        </h2>

        <div className={styles.body}>
          <p>
            We didn&apos;t have a formal customization-request workflow at this point.
          </p>
          <p>
            One of our customers simply gave us feedback that they wanted to customize their reports.
          </p>
          <p>
            It sounded like a straightforward request.
          </p>
          <p>
            But when we looked at what that would actually require, we realized there was no way for a customer to make those changes themselves.
          </p>
          <p>
            The report was generated from what we had already defined in code.
          </p>
          <p style={{ fontWeight: 600, color: "#1f2937" }}>
            So the request wasn&apos;t really about adding one more setting. It exposed an opportunity to change who gets to decide what a report looks like.
          </p>
        </div>

        {/* Visual 02 — Flowchart: The Old Customization Reality */}
        <div className={styles.flowChartContainer}>
          <div className={styles.flowRow}>
            <div className={styles.flowCard}>
              <span className={styles.flowStepNum}>STEP 01</span>
              <span className={styles.flowStepText}>Customer uses the product</span>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={styles.flowCard}>
              <span className={styles.flowStepNum}>STEP 02</span>
              <span className={styles.flowStepText}>Generates a report</span>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={styles.flowCard}>
              <span className={styles.flowStepNum}>STEP 03</span>
              <span className={styles.flowStepText}>Wants to customize report</span>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={`${styles.flowCard} ${styles.flowCardAlert}`}>
              <span className={styles.flowStepNum}>STEP 04</span>
              <span className={styles.flowStepText}>No customization option</span>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={`${styles.flowCard} ${styles.flowCardDev}`}>
              <span className={styles.flowStepNum}>STEP 05</span>
              <span className={styles.flowStepText}>Developer intervention</span>
            </div>
          </div>

          <div className={styles.flowRealityBox}>
            <span className={styles.flowRealityLabel}>Underlying Code Reality</span>
            <div className={styles.flowRealityNodes}>
              <span>Report</span>
              <ArrowRight size={16} color="#94a3b8" />
              <span>Hardcoded in Code</span>
              <ArrowRight size={16} color="#94a3b8" />
              <span style={{ color: "#b45309", fontWeight: 700 }}>Developer Changes Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 03. THE CONSTRAINT ───────────────────────────── */}
      <div className={styles.sectionNavy} id="constraint">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>03. THE CONSTRAINT</div>
          <h2 className={styles.h2}>
            We wanted to give customers control, but we didn&apos;t want to build a document editor from scratch.
          </h2>

          <div className={styles.body}>
            <p>
              Our first thought was naturally an open-ended editor.
            </p>
            <p>
              Something where users could place elements wherever they wanted, resize them, adjust alignment, add pages, work with headers and footers, and essentially design the report themselves.
            </p>
            <p>
              We had some of that thinking in the existing editor direction already, with controls for text, images, shapes, dynamic fields, positioning, alignment, typography, pages and other document elements.
            </p>
            <p>
              But building a truly flexible editor from scratch would take considerable time. And we had a customer problem we wanted to solve now.
            </p>
            <p style={{ fontWeight: 600, color: "#1f2937", marginTop: "24px" }}>
              So rather than trying to build the perfect document editor first, we asked:
            </p>
          </div>

          <p className={styles.lead} style={{ marginTop: "16px", color: "#2563eb" }}>
            &ldquo;What is the simplest editing model that gives customers meaningful control over our reports?&rdquo;
          </p>

          {/* Visual 03 — Product Evolution / Roadmap */}
          <div className={styles.roadmapGrid}>
            <div className={styles.roadmapCard}>
              <span className={styles.roadmapStage}>STAGE 01</span>
              <h3 className={styles.roadmapTitle}>Hardcoded Reports</h3>
              <p className={styles.roadmapDesc}>
                Existing state defined in code. Zero customer control, 100% developer dependency.
              </p>
              <span className={styles.roadmapPill}>Initial Baseline</span>
            </div>

            <div className={`${styles.roadmapCard} ${styles.roadmapCardActive}`}>
              <span className={`${styles.roadmapStage} ${styles.roadmapStageActive}`}>STAGE 02 · REALISTIC STEP</span>
              <h3 className={styles.roadmapTitle}>Sectionized Editor</h3>
              <p className={styles.roadmapDesc}>
                Structured Header, Body, and Footer sections designed around Linarc report objects.
              </p>
              <span className={`${styles.roadmapPill} ${styles.roadmapPillActive}`}>Built &amp; Delivered</span>
            </div>

            <div className={styles.roadmapCard}>
              <span className={styles.roadmapStage}>STAGE 03</span>
              <h3 className={styles.roadmapTitle}>Customer-Controlled</h3>
              <p className={styles.roadmapDesc}>
                Immediate outcome: customers customize fields without worrying about layout margins.
              </p>
              <span className={styles.roadmapPill}>Immediate Outcome</span>
            </div>

            <div className={styles.roadmapCard}>
              <span className={styles.roadmapStage}>STAGE 04</span>
              <h3 className={styles.roadmapTitle}>More Flexible Editor</h3>
              <p className={styles.roadmapDesc}>
                Longer-term direction: open-ended canvas controls added incrementally over time.
              </p>
              <span className={styles.roadmapPill}>Future Roadmap</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 04. THE SHIFT ────────────────────────────────── */}
      <div className={styles.inner} id="shift">
        <div className={styles.sectionLabel}>04. THE SHIFT</div>
        <h2 className={styles.h2}>
          Instead of giving users a blank canvas, we gave the report a structure.
        </h2>

        <div className={styles.body}>
          <p>
            That question led us to the sectionized editor.
          </p>
          <p>
            Rather than treating the report as one completely open space, we broke it into meaningful sections—header, body and footer, with the report-specific content living inside that structure.
          </p>
          <p>
            The editor could then work with the things that actually mattered for our reports: dynamic fields, RFI details, questions and answers, workflow information, attachments and other report objects.
          </p>
          <p>
            This wasn&apos;t meant to be a stripped-down version of a traditional document editor.
          </p>
          <p style={{ fontWeight: 600, color: "#1f2937" }}>
            It was designed around our product and the kind of reports our system already generated.
          </p>
        </div>

        {/* Visual 04 — Old generated report (swapped) */}
        <div className={styles.imageContainer}>
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>VISUAL_04_SECTIONIZED_STRUCTURE</span>
            <span className={styles.imagePurpose}>Sectionized structure • Report details</span>
          </div>
          <div className={styles.imageViewport}>
            <Image
              src="/images/single-object/old_generated_report.png"
              alt="Visual 04 — Sectionized Structure"
              width={1920}
              height={1080}
              unoptimized
              className={styles.productImage}
            />
          </div>
        </div>
      </div>

      {/* ── 05. THE EXPERIENCE ───────────────────────────── */}
      <div className={styles.sectionWhite} id="experience">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>05. THE EXPERIENCE</div>
          <h2 className={styles.h2}>
            We wanted users to customize the report without making them responsible for the layout.
          </h2>

          <div className={styles.body}>
            <p>
              Once we had the report divided into sections, we could take care of some of the complexity ourselves.
            </p>
            <p>
              Each section has its own margins and boundaries.
            </p>
            <p>
              That meant users could work within a predictable structure instead of constantly thinking about where everything should sit on the page.
            </p>
            <p>
              And we deliberately didn&apos;t make the editing view a perfect representation of the final printed document.
            </p>
            <p style={{ fontWeight: 600, color: "#1f2937" }}>
              The editor was there to make customization easy. The final report was where everything came together.
            </p>
          </div>
        </div>
      </div>

      {/* ── 06. THE DETAIL ───────────────────────────────── */}
      <div className={styles.inner} id="detail">
        <div className={styles.sectionLabel}>06. THE DETAIL</div>
        <h2 className={styles.h2}>
          The sections stay structured while editing, then come together as one report.
        </h2>

        <div className={styles.body}>
          <p>
            This was one of the important decisions behind the sectionized approach.
          </p>
          <p>
            The header, body and footer are treated as separate areas while the user is editing, but we don&apos;t expect the user to manually align those areas with one another.
          </p>
          <p>
            The system has dedicated margins for each section.
          </p>
          <p>
            Then, when the user previews or publishes the report, those sections come together into the final output.
          </p>
          <p>
            So we could give users structure while editing without making that structure visible as a limitation in the final report.
          </p>
          <p style={{ fontWeight: 700, color: "#1f2937", marginTop: "24px" }}>
            The user works with sections. The customer receives one report.
          </p>
        </div>
      </div>

      {/* ── 07. THE OWNERSHIP ────────────────────────────── */}
      <div className={styles.sectionWarm} id="ownership">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>07. THE OWNERSHIP</div>
          <h2 className={styles.h2}>
            The real change was moving report customization out of code.
          </h2>

          <div className={styles.body}>
            <p>Before this, the relationship was simple:</p>
          </div>

          <div className={styles.relationBox}>
            <div className={styles.relationRow}>
              <span className={styles.relationLabel}>BEFORE</span>
              <span className={styles.relationNode}>We designed the report</span>
              <ArrowRight size={16} color="#94a3b8" />
              <span className={styles.relationNode}>The system generated it</span>
              <ArrowRight size={16} color="#94a3b8" />
              <span className={styles.relationNode}>The customer used it</span>
            </div>

            <div className={styles.relationRow}>
              <span className={styles.relationLabel}>AFTER</span>
              <span className={styles.relationNode}>We provide the structure</span>
              <ArrowRight size={16} color="#2563eb" />
              <span className={styles.relationNodeActive}>The customer customizes it</span>
              <ArrowRight size={16} color="#2563eb" />
              <span className={styles.relationNode}>The system generates report</span>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              That was the real value of the work.
            </p>
            <p>
              We weren&apos;t just making the report editor nicer.
            </p>
            <p style={{ fontWeight: 600, color: "#1f2937" }}>
              We were turning something that had been defined by developers into something a customer could actually shape.
            </p>
          </div>
        </div>
      </div>

      {/* ── 08. THE DIRECTION ────────────────────────────── */}
      <div className={styles.inner} id="direction">
        <div className={styles.sectionLabel}>08. THE DIRECTION</div>
        <h2 className={styles.h2}>
          We didn&apos;t need to solve the entire editor problem in the first version.
        </h2>

        <div className={styles.body}>
          <p>
            We still saw a more flexible, open-ended editor as a longer-term direction.
          </p>
          <p>
            But given where we were as a product and how quickly we needed to respond to the feedback, building that entire system upfront didn&apos;t make sense.
          </p>
          <p>
            The sectionized model gave us a practical first step.
          </p>
          <p>
            It solved the immediate problem, gave customers meaningful customization, and gave us a structure that we could continue making more flexible later.
          </p>
          <p style={{ marginTop: "24px" }}>So the decision wasn&apos;t:</p>
          <p style={{ fontStyle: "italic", fontWeight: 600, color: "#64748b" }}>
            &ldquo;Open-ended is bad.&rdquo;
          </p>
          <p>It was:</p>
          <p style={{ fontStyle: "italic", fontWeight: 700, color: "#2563eb", fontSize: "18px" }}>
            &ldquo;Open-ended is a bigger problem than we need to solve today.&rdquo;
          </p>
        </div>
      </div>

      {/* ── 09. THE TRANSFORMATION ───────────────────────── */}
      <div className={styles.sectionWhite} id="transformation">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>09. THE TRANSFORMATION</div>
          <h2 className={styles.h2}>
            We turned a report customers could only receive into one they could make their own.
          </h2>

          <div className={styles.body}>
            <p>
              The difference between the two experiences is ultimately about ownership.
            </p>
            <p>
              Before, the report was something we had already designed for the customer.
            </p>
            <p>
              After, the customer had a way to shape that report themselves.
            </p>
            <p style={{ fontWeight: 600, color: "#1f2937" }}>
              And that&apos;s what made this more than an editor redesign.
            </p>
          </div>

          {/* Visual 05 — Interactive Before / After Slider */}
          <div className={styles.sliderWrapper}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>VISUAL_05_BEFORE_AFTER_COMPARISON</span>
              <span className={styles.imagePurpose}>Drag divider horizontally to compare</span>
            </div>

            <div
              ref={containerRef}
              className={styles.sliderContainer}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {/* AFTER Image (Base Layer) */}
              <Image
                src="/images/single-object/old_generated_report.png"
                alt="AFTER"
                fill
                unoptimized
                className={styles.sliderImage}
              />
              <div className={`${styles.sliderBadge} ${styles.sliderBadgeRight}`}>
                AFTER
              </div>

              {/* BEFORE Image (Clipped Layer) */}
              <div className={styles.clipLayer} style={{ width: `${sliderPos}%` }}>
                <div
                  className={styles.clipInner}
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                  }}
                >
                  <Image
                    src="/images/single-object/sectionized_editor.png"
                    alt="BEFORE"
                    fill
                    unoptimized
                    className={styles.sliderImage}
                  />
                </div>
                <div className={`${styles.sliderBadge} ${styles.sliderBadgeLeft}`}>
                  BEFORE
                </div>
              </div>

              {/* Draggable Divider */}
              <div className={styles.dividerHandle} style={{ left: `${sliderPos}%` }}>
                <div className={styles.dividerButton}>
                  <ChevronLeft size={16} />
                  <ChevronRight size={16} style={{ marginLeft: "-6px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectPagination />
      <Footer />
    </div>
  );
}
