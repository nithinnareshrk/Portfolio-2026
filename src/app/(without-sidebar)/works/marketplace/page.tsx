"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import ProjectSectionRail, { SectionItem } from "@/components/ProjectSectionRail";
import ProjectPagination from "@/components/ProjectPagination";

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "Overview" },
  { id: "the-idea", label: "01. The Idea" },
  { id: "the-reality", label: "02. The Reality" },
  { id: "the-shift", label: "03. The Shift" },
  { id: "edge-cases", label: "04. Edge Cases" },
  { id: "the-outcome", label: "05. The Outcome" },
  { id: "decisions", label: "06. Design Decisions" },
  { id: "impact", label: "07. Impact" },
];

export default function MarketplacePage() {
  return (
    <div className={styles.page}>
      <ProjectSectionRail sections={SECTIONS} />

      {/* ── HERO / OVERVIEW ──────────────────────────────── */}
      <div className={styles.inner} id="overview">
        <div style={{ marginTop: "20px" }}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            LINARC WORKS • INTEGRATION ENGINE
          </div>

          <h1 className={styles.heroTitle}>
            Marketplace — Designing the Translation Layer Between Fragmented Tools
          </h1>

          <p className={styles.heroSub}>
            Construction teams don&apos;t work in one system. Linarc manages field operations, Google Drive &amp; SharePoint store drawings, and QuickBooks tracks finances. 
          </p>

          <p className={styles.heroAccent}>
            We built Marketplace so teams can connect their existing tools directly into Linarc, translating complex data schemas into clear, human-understandable workflows.
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
            <span className={styles.metaLabel}>INTEGRATIONS</span>
            <span className={styles.metaValue}>QuickBooks, Google Drive, SharePoint</span>
          </div>
        </div>
      </div>

      {/* ── 01. THE IDEA ─────────────────────────────────── */}
      <div className={styles.sectionWarm} id="the-idea">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>01. THE IDEA</div>
          <h2 className={styles.h2}>Where all the pieces finally start talking to each other.</h2>

          <div className={styles.body}>
            <p>
              Construction teams don&apos;t really work in one system. There&apos;s Linarc for managing the project, Google Drive or SharePoint for drawings, QuickBooks for financial information, and a whole bunch of other tools that become part of the workflow over time.
            </p>
            <p>
              And that&apos;s fine. The problem starts when people have to constantly move between all of them just to understand what&apos;s happening.
            </p>
            <p style={{ fontWeight: 600, color: "#1f2937" }}>
              We wanted Linarc to work with the tools construction teams already depended on, rather than asking them to change the way they worked.
            </p>
          </div>

          <div className={styles.questionBox}>
            <p className={styles.questionText}>
              &ldquo;If the information already exists somewhere else, why should the user have to leave Linarc to get it?&rdquo;
            </p>
          </div>

          <div className={styles.body}>
            <p>
              Google Drive and SharePoint were the first obvious connections—giving teams a way to bring their project files directly into the same experience with automated background synchronization and clear health status.
            </p>
          </div>

          {/* Image 01 — Storage Providers Dashboard */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>EXTERNAL_STORAGE_PROVIDERS</span>
              <span className={styles.imagePurpose}>Storage ecosystem • Google Drive &amp; SharePoint sync hub</span>
            </div>
            <div className={styles.imageViewport}>
              <div className={styles.browserFrame}>
                <Image
                  src="/images/marketplace/marketplace-01-ecosystem.png"
                  alt="External Drive Providers dashboard showing Google Drive and SharePoint"
                  width={2400}
                  height={1600}
                  unoptimized
                  priority
                  className={styles.productImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 02. THE REALITY ──────────────────────────────── */}
      <div className={styles.inner} id="the-reality">
        <div className={styles.sectionLabel}>02. THE REALITY</div>
        <h2 className={styles.h2}>Bringing systems together created a different problem.</h2>

        <div className={styles.body}>
          <p>
            At first, integration sounds like a straightforward problem: Connect an account, Authorize it, and you&apos;re Done.
          </p>
          <p>
            Because Marketplace was intended to be configured by people managing real project systems—not software engineers writing code—we structured the onboarding journey into a predictable, guided 4-step wizard.
          </p>
        </div>

        {/* 4-Step Connection Flowchart */}
        <div className={styles.flowChartContainer}>
          <div className={styles.flowRow}>
            <div className={styles.flowCard}>
              <span className={styles.flowStepNum}>STEP 01</span>
              <span className={styles.flowStepText}>Select ERP</span>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={styles.flowCard}>
              <span className={styles.flowStepNum}>STEP 02</span>
              <span className={styles.flowStepText}>Configure</span>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={`${styles.flowCard} ${styles.flowCardActive}`}>
              <span className={styles.flowStepNum}>STEP 03</span>
              <span className={styles.flowStepText}>Authorize OAuth</span>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={styles.flowCard}>
              <span className={styles.flowStepNum}>STEP 04</span>
              <span className={styles.flowStepText}>Setup &amp; Map</span>
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <p>
            But the moment we started thinking about what actually happens after that connection, it became clear that the difficult part wasn&apos;t the connection itself.
          </p>
          <p style={{ fontWeight: 600, color: "#1f2937" }}>
            It was the information moving through it.
          </p>
          <p>
            Two systems might both know about an employee, a company, a vendor, or an invoice, but they don&apos;t describe that information in the same way. One system calls something <code>emp_first_name</code>, while another calls it <code>Given Name</code>.
          </p>
          <p>
            That was the point where Marketplace stopped being just an integrations feature for us. We were really designing the relationship between two different systems.
          </p>
        </div>

        {/* Image 02 — ERP Connection Wizard */}
        <div className={styles.imageContainer}>
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>ERP_INTEGRATION_WIZARD</span>
            <span className={styles.imagePurpose}>4-step onboarding • OAuth authorization &amp; permission clarity</span>
          </div>
          <div className={styles.imageViewport}>
            <div className={styles.browserFrame}>
              <Image
                src="/images/marketplace/marketplace-02-connection.png"
                alt="ERP Integration connection screen with QuickBooks Online"
                width={2400}
                height={1600}
                unoptimized
                className={styles.productImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 03. THE SHIFT ────────────────────────────────── */}
      <div className={styles.sectionNavy} id="the-shift">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>03. THE SHIFT</div>
          <h2 className={styles.h2}>We had to make the invisible part visible.</h2>

          <div className={styles.body}>
            <p>
              The biggest shift was realizing that users shouldn&apos;t have to trust that the integration was doing the right thing in the dark. They should be able to see it.
            </p>
            <p>
              That&apos;s why we introduced the <strong>Object-Mapping Layer</strong>.
            </p>
            <p>
              Instead of simply saying that QuickBooks was connected, the experience showed an administrator what was actually being connected and how every attribute corresponded between the two systems.
            </p>
          </div>

          {/* Matrix Schema Comparison */}
          <div className={styles.matrixContainer}>
            <div className={styles.matrixHeader}>
              <span>Linarc Attribute</span>
              <span style={{ textAlign: "center" }}>Direction</span>
              <span>QuickBooks Online Attribute</span>
            </div>
            <div className={styles.matrixRow}>
              <span className={styles.matrixColLeft}>emp_first_name *</span>
              <span className={styles.matrixColMid}>← Pull</span>
              <span className={styles.matrixColRight}>
                Given Name <span className={styles.matrixBadgeOk}>Mapped</span>
              </span>
            </div>
            <div className={styles.matrixRow}>
              <span className={styles.matrixColLeft}>emp_last_name *</span>
              <span className={styles.matrixColMid}>← Pull</span>
              <span className={styles.matrixColRight}>
                Family Name <span className={styles.matrixBadgeOk}>Mapped</span>
              </span>
            </div>
            <div className={styles.matrixRow}>
              <span className={styles.matrixColLeft}>emp_id *</span>
              <span className={styles.matrixColMid}>← Pull</span>
              <span className={styles.matrixColRight}>
                Employee Number <span className={styles.matrixBadgeOk}>Mapped</span>
              </span>
            </div>
            <div className={styles.matrixRow}>
              <span className={styles.matrixColLeft}>emp_address</span>
              <span className={styles.matrixColMid}>← Pull</span>
              <span className={styles.matrixColRight}>
                Address <span className={styles.matrixBadgeWarn}>Missing Attribute</span>
              </span>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              You&apos;re no longer asking the user to trust a black box. You&apos;re giving them a model they can understand:
            </p>
          </div>

          <div className={styles.checklistGrid}>
            {[
              "This is what we have in Linarc",
              "This is where it corresponds in QuickBooks",
              "This is the direction the data moves",
              "This is what doesn't match and needs resolution",
            ].map((text, idx) => (
              <div key={idx} className={styles.checklistItem}>
                <span className={styles.checkDot} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Image 03 — Object Mapping Table */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>OBJECT_MAPPING_MATRIX</span>
              <span className={styles.imagePurpose}>Schema translation • 1:1 attribute mapping &amp; contextual rules</span>
            </div>
            <div className={styles.imageViewport}>
              <div className={styles.browserFrame}>
                <Image
                  src="/images/marketplace/marketplace-03-mapping.png"
                  alt="Object mapping interface showing Linarc attributes mapped to QuickBooks"
                  width={2400}
                  height={1600}
                  unoptimized
                  className={styles.productImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 04. THE EDGE CASES ───────────────────────────── */}
      <div className={styles.inner} id="edge-cases">
        <div className={styles.sectionLabel}>04. THE EDGE CASES</div>
        <h2 className={styles.h2}>The awkward cases were actually the important ones.</h2>

        <div className={styles.body}>
          <p>
            Of course, things don&apos;t always line up perfectly. An object can fail, an attribute can be missing, or a connected system might not have the information Linarc expects.
          </p>
          <p>
            We could have treated those as errors and stopped there. But that would have brought us right back to the same problem: ambiguity.
          </p>
          <p>
            Instead, we wanted Marketplace to tell the user what was happening:
          </p>
        </div>

        <div className={styles.checklistGrid}>
          {[
            "If an attribute was missing, make it visible with warning states",
            "If something couldn't be mapped, explain why clearly",
            "Give admins an inline modal to bind custom fields and data types",
            "Allow users to define string lengths and rules on the fly",
          ].map((item, idx) => (
            <div key={idx} className={styles.checklistItem}>
              <span className={styles.checkDot} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className={styles.body} style={{ marginTop: "24px" }}>
          <p style={{ fontWeight: 600, color: "#1f2937" }}>
            The idea wasn&apos;t to make integrations magically perfect. It was to make them understandable and resolvable when they weren&apos;t.
          </p>
        </div>

        {/* Image 04 — Add Custom Field Modal */}
        <div className={styles.imageContainer}>
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>CUSTOM_FIELD_RESOLUTION</span>
            <span className={styles.imagePurpose}>Resolving gaps • Inline modal for custom fields &amp; data types</span>
          </div>
          <div className={styles.imageViewport}>
            <div className={styles.browserFrame}>
              <Image
                src="/images/marketplace/marketplace-04-custom-field.png"
                alt="Add Custom Field modal resolving missing attribute mapping"
                width={2400}
                height={1600}
                unoptimized
                className={styles.productImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 05. THE OUTCOME ──────────────────────────────── */}
      <div className={styles.sectionWhite} id="the-outcome">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>05. THE OUTCOME</div>
          <h2 className={styles.h2}>And eventually, the integration should become invisible.</h2>

          <div className={styles.body}>
            <p>
              That&apos;s really where we wanted Marketplace to end up. A project team shouldn&apos;t have to think about whether a file came from Google Drive or whether project financials originated in QuickBooks.
            </p>
            <p>
              They should simply be able to work in Linarc.
            </p>
            <p>
              To maintain absolute confidence over time, we built complete observability into the system with real-time sync metrics and an **ERP Data Transaction Audit Ledger**.
            </p>
          </div>

          {/* Image 05 — Transaction History & Audit Ledger */}
          <div className={styles.imageContainer}>
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>DATA_TRANSACTION_AUDIT</span>
              <span className={styles.imagePurpose}>Auditability • Execution logs, duration tracking &amp; one-click retries</span>
            </div>
            <div className={styles.imageViewport}>
              <div className={styles.browserFrame}>
                <Image
                  src="/images/marketplace/marketplace-05-transaction.png"
                  alt="ERP Data Transaction history screen with status badges and retry actions"
                  width={2400}
                  height={1600}
                  unoptimized
                  className={styles.productImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.body} style={{ marginTop: "24px" }}>
            <p>
              The connected systems still do what they&apos;re good at. QuickBooks continues being the financial system. Google Drive continues being the place teams keep their files. But Linarc becomes the place where the project comes together.
            </p>
          </div>
        </div>
      </div>

      {/* ── 06. DESIGN DECISIONS ─────────────────────────── */}
      <div className={styles.inner} id="decisions">
        <div className={styles.sectionLabel}>06. THE DESIGN DECISIONS</div>
        <h2 className={styles.h2}>Design Decisions</h2>

        <p className={styles.body} style={{ marginBottom: "24px" }}>
          Key principles that guided the translation engine and administrative workflows:
        </p>

        <div className={styles.decisionsGrid}>
          <div className={styles.decisionCard}>
            <div className={styles.decisionNum}>01 — TURN DOCUMENTATION INTO UI</div>
            <h3 className={styles.decisionTitle}>Turn documentation into UI</h3>
            <p className={styles.decisionDesc}>
              Instead of forcing users to read external developer docs, we embedded service account setup guides and contextual FAQs directly into the configuration panels.
            </p>
          </div>

          <div className={styles.decisionCard}>
            <div className={styles.decisionNum}>02 — MAKE SCHEMAS VISIBLE</div>
            <h3 className={styles.decisionTitle}>Make schemas visible</h3>
            <p className={styles.decisionDesc}>
              We replaced opaque background syncs with side-by-side object mapping, clearly displaying mandatory fields, data types, and synchronization directions.
            </p>
          </div>

          <div className={styles.decisionCard}>
            <div className={styles.decisionNum}>03 — RECOVER OVER FAILING</div>
            <h3 className={styles.decisionTitle}>Design for inline recovery</h3>
            <p className={styles.decisionDesc}>
              Missing attributes and unmapped fields are treated as actionable recovery opportunities with custom field creation rather than destructive blocking errors.
            </p>
          </div>

          <div className={styles.decisionCard}>
            <div className={styles.decisionNum}>04 — COMPLETE AUDITABILITY</div>
            <h3 className={styles.decisionTitle}>Total transactional clarity</h3>
            <p className={styles.decisionDesc}>
              Every record transfer is logged with exact execution duration and status badges, providing one-click retry triggers right where failures occur.
            </p>
          </div>
        </div>
      </div>

      {/* ── 07. IMPACT ───────────────────────────────────── */}
      <div className={styles.sectionWarm} id="impact">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>07. IMPACT</div>
          <h2 className={styles.h2}>Bridging back-office finance and field execution.</h2>

          <p className={styles.lead}>
            Marketplace unified fragmented enterprise systems without demanding engineering intervention for every client setup.
          </p>

          <div className={styles.impactGrid}>
            {[
              "Eliminated manual double-entry between accounting and site operations",
              "Provided self-serve integration setup for non-technical project admins",
              "Gave complete visibility over data translation and schema bindings",
              "Reduced sync-related support tickets through contextual recovery",
              "Unified cloud file storage with project-level document access",
              "Established a scalable architectural foundation for future ERPs",
            ].map((text, idx) => (
              <div key={idx} className={styles.impactCard}>
                <CheckCircle2 className={styles.impactIcon} size={22} />
                <span className={styles.impactText}>{text}</span>
              </div>
            ))}
          </div>

          <div className={styles.impactShiftBox}>
            <div className={styles.impactShiftText}>
              Not to give teams another system to manage, but to make the systems they already use feel like part of the same one.
            </div>
          </div>
        </div>
      </div>

      {/* ── CLOSING ──────────────────────────────────────── */}
      <div className={styles.closingSection}>
        <div className={styles.closingInner}>
          <h2 className={styles.closingTitle}>
            The systems stay connected. The information keeps moving.
          </h2>
          <p className={styles.closingBody}>
            <strong>Integration UX is not about buttons—it is about mental models. When users can see how data flows and understand what happens when something doesn&apos;t line up, trust is built.</strong>
            <br /><br />
            And the complexity stays underneath the experience.
          </p>
        </div>
      </div>

      <ProjectPagination />
      <Footer />
    </div>
  );
}
