"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import ProjectSectionRail, { SectionItem } from "@/components/ProjectSectionRail";
import ProjectPagination from "@/components/ProjectPagination";

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "01. The Context" },
  { id: "friction", label: "02. The Friction" },
  { id: "challenge", label: "03. Real Challenge" },
  { id: "opportunity", label: "04. The Opportunity" },
  { id: "field-experience", label: "05. Field Experience" },
  { id: "making-time", label: "06. Making Time" },
  { id: "materials-equipment", label: "07. Materials & Equip." },
  { id: "approval", label: "08. Field to Approval" },
  { id: "workflow", label: "09. The Workflow" },
  { id: "system-config", label: "10. System Config" },
  { id: "modes", label: "11. System Modes" },
  { id: "inside-experience", label: "12. Inside Experience" },
  { id: "system-thinking", label: "13. System Thinking" },
  { id: "contributions", label: "14. Contributions" },
  { id: "outcome", label: "15. The Outcome" },
];

export default function TandMPage() {
  return (
    <div className={styles.page}>
      <ProjectSectionRail sections={SECTIONS} />

      {/* ── HERO / OVERVIEW ──────────────────────────────── */}
      <div className={styles.inner} id="overview">
        <div style={{ marginTop: '20px' }}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            PRODUCT DESIGN • WORKFLOW SYSTEM • MOBILE &amp; WEB
          </div>

          <h1 className={styles.heroTitle}>
            Designing a T&amp;M workflow that connects field work to project control
          </h1>

          <p className={styles.heroAccent}>
            Turning unplanned work into a traceable record of labor, materials, equipment, and approvals.
          </p>

          <p className={styles.heroSub}>
            Construction rarely follows the original plan. When additional work happens on site, someone has to capture what was done, who did it, what was used, how long it took, and ultimately get it approved.
          </p>
          <p className={styles.heroSub}>
            I designed the Time &amp; Material experience to connect those moments into one workflow — from the field team&apos;s first entry to the final project-level sign-off.
          </p>
        </div>
      </div>

      {/* ── 01. THE CONTEXT ──────────────────────────────── */}
      <div className={styles.sectionWarm} id="context">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>01. THE CONTEXT</div>
          <h2 className={styles.h2}>When the work changes, the record has to change with it.</h2>

          <p className={styles.lead}>
            Time &amp; Material work sits outside the predictable rhythm of a construction schedule.
          </p>

          <div className={styles.body}>
            <p>A crew might spend six hours on a task.</p>
            <p>Additional material might be consumed.</p>
            <p>Equipment might be brought in.</p>
            <p>The work needs to be documented and eventually reviewed against its cost.</p>
          </div>

          <div className={styles.body} style={{ marginTop: '24px' }}>
            <p>The challenge wasn&apos;t simply capturing more data.</p>
            <p>It was making sure that every piece of information collected in the field could continue through the workflow without losing its context.</p>
          </div>

          <p className={styles.body} style={{ marginTop: '32px', fontWeight: 600, color: '#1f2937' }}>
            The T&amp;M flow had to connect:
          </p>
          <div className={styles.chainRow}>
            <span className={styles.chainNode}>Work</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>People</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Time</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Materials</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Equipment</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Cost</span>
            <span className={styles.chainArrow}>→</span>
            <span className={`${styles.chainNode} ${styles.chainNodeActive}`}>Approval</span>
          </div>

          <p className={styles.body} style={{ marginTop: '24px' }}>
            The resource shows these elements coming together inside a single ticket, rather than treating labor, material and equipment as disconnected records.
          </p>
        </div>
      </div>

      {/* ── 02. THE FRICTION ─────────────────────────────── */}
      <div className={styles.inner} id="friction">
        <div className={styles.sectionLabel}>02. THE FRICTION</div>
        <h2 className={styles.h2}>A T&amp;M ticket is more than a form</h2>

        <p className={styles.body}>At first glance, creating a T&amp;M ticket looks straightforward:</p>

        <div className={styles.chainRow} style={{ maxWidth: '560px' }}>
          <span className={styles.chainNode}>Name</span>
          <span className={styles.chainArrow}>→</span>
          <span className={styles.chainNode}>Crew</span>
          <span className={styles.chainArrow}>→</span>
          <span className={styles.chainNode}>Duration</span>
          <span className={styles.chainArrow}>→</span>
          <span className={styles.chainNode}>Cost</span>
          <span className={styles.chainArrow}>→</span>
          <span className={`${styles.chainNode} ${styles.chainNodeActive}`}>Submit</span>
        </div>

        <div className={styles.body}>
          <p>But the actual workflow is much deeper.</p>
          <p>The field team needs to create the ticket around the work they&apos;re doing. Once the work starts, the ticket becomes a container for everything that happened:</p>
        </div>

        <ul className={styles.bulletList} style={{ margin: '24px 0' }}>
          {[
            "Crew members and hours worked",
            "Materials consumed",
            "Equipment used",
            "Attachments and related items",
            "Planned vs. actual work",
            "Cost information",
            "Completion",
            "Signatures",
            "Approval history",
          ].map((item, i) => (
            <li key={i} className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.body}>
          <p>The same ticket then needs to make sense to someone who wasn&apos;t standing on the site.</p>
          <p>That created the central design question:</p>
        </div>

        <div className={styles.centralQuestionBox}>
          <p className={styles.centralQuestionText}>
            &ldquo;How do you preserve the reality of field work while making it structured enough for someone else to review and approve?&rdquo;
          </p>
        </div>
      </div>

      {/* ── 03. THE REAL CHALLENGE ───────────────────────── */}
      <div className={styles.sectionWhite} id="challenge">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>03. THE REAL CHALLENGE</div>
          <h2 className={styles.h2}>Two environments. One record.</h2>

          <p className={styles.lead}>
            The people creating T&amp;M records aren&apos;t necessarily the people approving them.
          </p>

          <div className={styles.comparisonGrid}>
            {/* Field */}
            <div className={styles.comparisonCol}>
              <span className={styles.comparisonBadgeField}>ON SITE</span>
              <h3 className={styles.comparisonTitle}>In the field</h3>
              <div className={styles.comparisonTagline}>A foreman needs to work quickly.</div>
              <p className={styles.body} style={{ maxWidth: 'none' }}>
                They create the ticket, define the task, assign the crew and capture what is happening on site. The flow also supports adding materials and equipment directly to the work record.
              </p>
            </div>

            {/* Office */}
            <div className={styles.comparisonCol}>
              <span className={styles.comparisonBadgeOffice}>PROJECT CONTROL</span>
              <h3 className={styles.comparisonTitle}>In the office</h3>
              <div className={styles.comparisonTagline}>The GC / Site Superintendent needs a different level of detail.</div>
              <p className={styles.body} style={{ maxWidth: 'none', marginBottom: '16px' }}>They need to understand:</p>
              <ul className={styles.bulletList}>
                {[
                  "What work was performed?",
                  "Who performed it?",
                  "How many hours were spent?",
                  "What materials were used?",
                  "What equipment was involved?",
                  "What was estimated?",
                  "What actually happened?",
                  "Is the record ready to approve?",
                ].map((item, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.body}>
            <p>The interface therefore couldn&apos;t simply be a smaller version of the desktop experience.</p>
            <p>The information had to remain consistent while the interaction changed depending on who was using it.</p>
          </div>
        </div>
      </div>

      {/* ── 04. THE OPPORTUNITY & IMAGE 01 ───────────────── */}
      <div className={styles.inner} id="opportunity">
        <div className={styles.sectionLabel}>04. THE OPPORTUNITY</div>
        <h2 className={styles.h2}>Turn the ticket into a living record of the work</h2>

        <p className={styles.lead}>
          Instead of designing T&amp;M as a single submission form, I approached the ticket as a progressive record.
        </p>

        <div className={styles.body}>
          <p>It starts with an estimate.</p>
          <p>Then it gains evidence.</p>
          <p>Then it becomes an actual record.</p>
          <p>Then it moves through approval.</p>
        </div>

        {/* 5-State Lifecycle */}
        <div className={styles.lifecycleRow}>
          <div className={styles.lifecycleCard}>
            <div className={styles.lifecycleStepNum}>STAGE 01</div>
            <div className={styles.lifecycleStepTitle}>Draft</div>
            <p className={styles.lifecycleStepDesc}>Define the work and expected resources.</p>
          </div>
          <div className={styles.lifecycleCard}>
            <div className={styles.lifecycleStepNum}>STAGE 02</div>
            <div className={styles.lifecycleStepTitle}>In Progress</div>
            <p className={styles.lifecycleStepDesc}>Track the crew, hours, materials and equipment actually involved.</p>
          </div>
          <div className={styles.lifecycleCard}>
            <div className={styles.lifecycleStepNum}>STAGE 03</div>
            <div className={styles.lifecycleStepTitle}>Work Done</div>
            <p className={styles.lifecycleStepDesc}>Review the completed work and actual usage.</p>
          </div>
          <div className={styles.lifecycleCard}>
            <div className={styles.lifecycleStepNum}>STAGE 04</div>
            <div className={styles.lifecycleStepTitle}>Waiting for Approval</div>
            <p className={styles.lifecycleStepDesc}>Move the record to the responsible reviewer.</p>
          </div>
          <div className={styles.lifecycleCard}>
            <div className={styles.lifecycleStepNum}>STAGE 05</div>
            <div className={styles.lifecycleStepTitle}>Closed</div>
            <p className={styles.lifecycleStepDesc}>Capture the final approved record and signature.</p>
          </div>
        </div>

        <p className={styles.body}>
          The product already represented these states explicitly across the ticket experience, so the design opportunity was to make that lifecycle easier to understand and act upon.
        </p>

        {/* IMAGE 01 */}
        <div className={styles.imageContainer} id="IMAGE_01_TNM_FLOW">
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>IMAGE_01_TNM_FLOW</span>
            <span className={styles.imagePurpose}>T&amp;M Flow • Create → Track Work → Review → Approve → Closed</span>
          </div>
          <div className={styles.imageViewport}>
            <Image
              src="/images/t-and-m/tnm_flow.png"
              alt="T&M Lifecycle Flow: Create, Track Work, Review, Approve, Closed"
              width={4096}
              height={944}
              unoptimized
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ── 05. THE FIELD EXPERIENCE & IMAGE 02 ──────────── */}
      <div className={styles.sectionWarm} id="field-experience">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>05. THE FIELD EXPERIENCE</div>
          <h2 className={styles.h2}>Capture the work where the work happens</h2>

          <div className={styles.body}>
            <p>The field experience starts with the foreman.</p>
            <p>Instead of asking them to navigate through multiple modules, the T&amp;M flow brings the essential information into the ticket:</p>
          </div>

          <div className={styles.chainRow} style={{ maxWidth: '640px' }}>
            <span className={styles.chainNode}>Task</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Crew</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Materials</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Equipment</span>
            <span className={styles.chainArrow}>→</span>
            <span className={`${styles.chainNode} ${styles.chainNodeActive}`}>Evidence</span>
          </div>

          <p className={styles.body}>
            A ticket can begin with a task such as Module Cleaning and Inspection, with an estimated crew of two and an expected duration. From there, the foreman can add the people involved and later record their actual hours.
          </p>

          <h3 className={styles.h3} style={{ marginTop: '32px' }}>The important shift</h3>
          <div className={styles.body}>
            <p>The ticket isn&apos;t finished when it is created.</p>
            <p>Creation is only the beginning of the record.</p>
            <p>As work progresses, the ticket becomes richer.</p>
          </div>

          {/* IMAGE 02 */}
          <div className={styles.imageContainer} id="IMAGE_02_FIELD_EXPERIENCE">
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>IMAGE_02_FIELD_EXPERIENCE</span>
              <span className={styles.imagePurpose}>Field Experience • Create Ticket + Crew &amp; Time</span>
            </div>
            <div className={styles.imageViewport}>
              <Image
                src="/images/t-and-m/field_experience.png"
                alt="Field Experience: Create T&M Ticket and Crew & Time tracking"
                width={4096}
                height={2728}
                unoptimized
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 06. MAKING TIME PART OF THE RECORD ───────────── */}
      <div className={styles.inner} id="making-time">
        <div className={styles.sectionLabel}>06. MAKING TIME PART OF THE RECORD</div>
        <h2 className={styles.h2}>From estimated hours to actual hours</h2>

        <p className={styles.lead}>
          One of the key parts of T&amp;M is the difference between what was expected and what actually happened.
        </p>

        <div className={styles.body}>
          <p>The flow connects T&amp;M tasks with the foreman&apos;s timecard experience.</p>
          <p>Crew members can be selected against a task, with shift timing and total hours recorded. Those hours then become part of the T&amp;M record rather than existing as a separate piece of information.</p>
        </div>

        <p className={styles.body} style={{ marginTop: '24px', fontWeight: 600, color: '#1f2937' }}>For example:</p>
        <div className={styles.timeExampleBox}>
          <div className={styles.timeExampleItem}>
            <span className={styles.timeName}>Thomas Elsom</span>
            <span className={styles.timeHours}>6 hours</span>
          </div>
          <div className={styles.timeExampleItem}>
            <span className={styles.timeName}>Nikki Murray</span>
            <span className={styles.timeHours}>6 hours</span>
          </div>
        </div>

        <div className={styles.body}>
          <p>The ticket can then surface the total work hours alongside the crew members.</p>
          <p>That relationship matters because the number isn&apos;t just a timesheet value anymore.</p>
          <p style={{ fontWeight: 600, color: '#1f2937' }}>It explains the cost of the work.</p>
        </div>
      </div>

      {/* ── 07. MATERIALS & EQUIPMENT & IMAGE 03 ─────────── */}
      <div className={styles.sectionWhite} id="materials-equipment">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>07. MATERIALS &amp; EQUIPMENT</div>
          <h2 className={styles.h2}>Cost isn&apos;t one number</h2>

          <p className={styles.lead}>Labor is only one part of the picture.</p>

          <p className={styles.body}>The resource shows T&amp;M records being broken down into separate cost categories:</p>

          <div className={styles.costCategoryGrid}>
            <div className={styles.costCategoryCard}>
              <h3 className={styles.costCategoryTitle}>Labor</h3>
              <p className={styles.costCategoryDesc}>Crew, rates, estimated hours and actual hours.</p>
            </div>
            <div className={styles.costCategoryCard}>
              <h3 className={styles.costCategoryTitle}>Materials</h3>
              <p className={styles.costCategoryDesc}>Material code, quantity, unit of measurement, estimated and actual quantities and cost.</p>
            </div>
            <div className={styles.costCategoryCard}>
              <h3 className={styles.costCategoryTitle}>Equipment</h3>
              <p className={styles.costCategoryDesc}>Equipment, hours used, cost per hour and actual usage.</p>
            </div>
          </div>

          <div className={styles.body}>
            <p>For example, the ticket can record materials such as structural steel and steel tubes alongside their quantities and unit costs. Equipment such as bulldozers and cranes can be tracked separately by hours and cost.</p>
            <p>This gave the ticket a much more useful structure:</p>
          </div>

          <div className={styles.focusStatement}>
            What did the work cost — and why?
          </div>

          {/* IMAGE 03 */}
          <div className={styles.imageContainer} id="IMAGE_03_COST_RECORD">
            <div className={styles.imageHeader}>
              <span className={styles.imageIdBadge}>IMAGE_03_COST_RECORD</span>
              <span className={styles.imagePurpose}>Cost Details • Labor, Materials, Equipment Breakdown</span>
            </div>
            <div className={styles.imageViewport}>
              <Image
                src="/images/t-and-m/cost_record.png"
                alt="Cost Details: Labor, Materials, and Equipment breakdown"
                width={4096}
                height={2728}
                unoptimized
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 08. FROM FIELD RECORD TO APPROVAL & IMAGE 04 ─── */}
      <div className={styles.inner} id="approval">
        <div className={styles.sectionLabel}>08. FROM FIELD RECORD TO APPROVAL</div>
        <h2 className={styles.h2}>The handoff shouldn&apos;t break the story</h2>

        <div className={styles.body}>
          <p>This was where the workflow became more interesting.</p>
          <p>A field worker and a GC Superintendent aren&apos;t looking at the same thing for the same reason.</p>
        </div>

        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCol}>
            <div className={styles.comparisonTagline}>The field team is asking:</div>
            <p className={styles.h3} style={{ margin: 0, fontStyle: 'italic' }}>&ldquo;Did we capture what happened?&rdquo;</p>
          </div>
          <div className={styles.comparisonCol}>
            <div className={styles.comparisonTagline}>The reviewer is asking:</div>
            <p className={styles.h3} style={{ margin: 0, fontStyle: 'italic' }}>&ldquo;Can I verify and approve this?&rdquo;</p>
          </div>
        </div>

        <div className={styles.body}>
          <p>So rather than creating a separate approval object, the design keeps the reviewer inside the same record.</p>
          <p>They can see the ticket details, cost breakdown, workflow, activity and signature information together.</p>
          <p>That continuity is important.</p>
          <p>The reviewer isn&apos;t approving an abstract dollar amount.</p>
          <p style={{ fontWeight: 600, color: '#1f2937' }}>They&apos;re approving the work behind it.</p>
        </div>

        {/* IMAGE 04 */}
        <div className={styles.imageContainer} id="IMAGE_04_REVIEW_APPROVAL">
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>IMAGE_04_REVIEW_APPROVAL</span>
            <span className={styles.imagePurpose}>Review &amp; Approval • Verification + Signature</span>
          </div>
          <div className={styles.imageViewport}>
            <Image
                src="/images/t-and-m/review_approval.png"
                alt="Review and Approval Workflow with Signature"
                width={4096}
                height={2728}
                unoptimized
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
          </div>
        </div>
      </div>

      {/* ── 09. THE WORKFLOW ─────────────────────────────── */}
      <div className={styles.sectionNavy} id="workflow">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>09. THE WORKFLOW</div>
          <h2 className={styles.h2}>From creation to closure</h2>

          <div className={styles.body}>
            <p>The T&amp;M workflow is explicitly role-based.</p>
            <p>A typical flow moves through:</p>
          </div>

          <div className={styles.chainRow} style={{ maxWidth: '520px' }}>
            <span className={styles.chainNode}>Create</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Respond</span>
            <span className={styles.chainArrow}>→</span>
            <span className={styles.chainNode}>Review</span>
            <span className={styles.chainArrow}>→</span>
            <span className={`${styles.chainNode} ${styles.chainNodeActive}`}>Close</span>
          </div>

          <div className={styles.body}>
            <p>The resource also shows configurable workflows such as T&amp;M GC Superintendent Review and T&amp;M Subcontractor Review, with steps, responsible users and time allocations defined as part of the configuration.</p>
            <p>That meant the experience wasn&apos;t just about designing screens.</p>
            <p>I was designing how responsibility moves through the system.</p>
          </div>

          <p className={styles.body} style={{ marginTop: '24px', fontWeight: 600, color: '#1f2937' }}>
            Every transition needed to answer:
          </p>
          <ul className={styles.bulletList} style={{ marginTop: '16px' }}>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              Who owns this now?
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              What do they need to do?
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletDot} />
              What information do they need to make that decision?
            </li>
          </ul>
        </div>
      </div>

      {/* ── 10. DESIGNING THE SYSTEM BEHIND THE WORKFLOW ──── */}
      <div className={styles.inner} id="system-config">
        <div className={styles.sectionLabel}>10. DESIGNING THE SYSTEM BEHIND THE WORKFLOW</div>
        <h2 className={styles.h2}>The workflow starts before the ticket</h2>

        <div className={styles.body}>
          <p>One of the more interesting parts of the project was realizing that T&amp;M couldn&apos;t work through ticket UI alone.</p>
          <p>The project manager needs to configure the system beforehand.</p>
          <p>That includes:</p>
        </div>

        <div className={styles.configGrid}>
          <div className={styles.configCard}>
            <h3 className={styles.configCardTitle}>Reviewers</h3>
            <p className={styles.configCardDesc}>Who is responsible for reviewing T&amp;M work?</p>
          </div>
          <div className={styles.configCard}>
            <h3 className={styles.configCardTitle}>Distribution</h3>
            <p className={styles.configCardDesc}>Who needs to be notified or included in the workflow?</p>
          </div>
          <div className={styles.configCard}>
            <h3 className={styles.configCardTitle}>Workflow</h3>
            <p className={styles.configCardDesc}>What steps does a T&amp;M record move through?</p>
          </div>
          <div className={styles.configCard}>
            <h3 className={styles.configCardTitle}>Custom fields</h3>
            <p className={styles.configCardDesc}>What additional information does this project require?</p>
          </div>
          <div className={styles.configCard}>
            <h3 className={styles.configCardTitle}>Limits</h3>
            <p className={styles.configCardDesc}>What is the maximum value allowed per ticket or across T&amp;M?</p>
          </div>
        </div>

        <div className={styles.body}>
          <p>The resource shows contractor-level configuration including reviewers, ticket limits, T&amp;M limits and distribution lists.</p>
          <p>This became an important product-design insight:</p>
        </div>

        <blockquote className={styles.quoteBlock}>
          &ldquo;The simplest field experience depends on a lot of invisible configuration behind it.&rdquo;
        </blockquote>
      </div>

      {/* ── 11. ONE SYSTEM, DIFFERENT MODES ──────────────── */}
      <div className={styles.sectionWhite} id="modes">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>11. ONE SYSTEM, DIFFERENT MODES</div>
          <h2 className={styles.h2}>Designing for the field without compromising the office</h2>

          <p className={styles.body}>The same T&amp;M record needs to work in two very different environments.</p>

          <div className={styles.comparisonGrid}>
            {/* Field */}
            <div className={styles.comparisonCol}>
              <span className={styles.comparisonBadgeField}>FIELD MODE</span>
              <h3 className={styles.comparisonTitle}>Field</h3>
              <div className={styles.comparisonTagline}>Fast. Focused. Action-oriented.</div>
              <ul className={styles.bulletList}>
                {[
                  "Create a ticket.",
                  "Assign crew.",
                  "Log time.",
                  "Add material.",
                  "Complete the work.",
                ].map((item, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div className={styles.comparisonCol}>
              <span className={styles.comparisonBadgeOffice}>OFFICE MODE</span>
              <h3 className={styles.comparisonTitle}>Office</h3>
              <div className={styles.comparisonTagline}>Detailed. Verifiable. Review-oriented.</div>
              <ul className={styles.bulletList}>
                {[
                  "Inspect costs.",
                  "Compare estimated and actual usage.",
                  "Review activity.",
                  "Check workflow.",
                  "Sign off.",
                ].map((item, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.body}>
            <p>The goal wasn&apos;t to make both experiences look identical.</p>
            <p>It was to make them feel like two parts of the same system.</p>
          </div>
        </div>
      </div>

      {/* ── 12. INSIDE THE EXPERIENCE & IMAGE 05 ─────────── */}
      <div className={styles.inner} id="inside-experience">
        <div className={styles.sectionLabel}>12. INSIDE THE EXPERIENCE</div>
        <h2 className={styles.h2}>Inside the Experience</h2>

        <div className={styles.experienceGrid}>
          <div className={styles.experienceItem}>
            <h3 className={styles.experienceItemTitle}>Ticket creation</h3>
            <p className={styles.experienceItemBody}>Show the actual Create Ticket screens.</p>
            <div className={styles.experienceItemFocus}>
              Design focus: Reduce the initial ticket to the information required to define the work without overwhelming the field user.
            </div>
          </div>
          <div className={styles.experienceItem}>
            <h3 className={styles.experienceItemTitle}>Crew &amp; time</h3>
            <p className={styles.experienceItemBody}>Show the crew selection + timecard flow.</p>
            <div className={styles.experienceItemFocus}>
              Design focus: Connect individual work hours back to the T&amp;M task.
            </div>
          </div>
          <div className={styles.experienceItem}>
            <h3 className={styles.experienceItemTitle}>Materials &amp; equipment</h3>
            <p className={styles.experienceItemBody}>Show the cost detail screens.</p>
            <div className={styles.experienceItemFocus}>
              Design focus: Separate labor, material and equipment while keeping them attached to the same work record.
            </div>
          </div>
          <div className={styles.experienceItem}>
            <h3 className={styles.experienceItemTitle}>Review</h3>
            <p className={styles.experienceItemBody}>Show the GC Superintendent view.</p>
            <div className={styles.experienceItemFocus}>
              Design focus: Give reviewers enough context to validate the record without hunting through separate modules.
            </div>
          </div>
          <div className={styles.experienceItem}>
            <h3 className={styles.experienceItemTitle}>Signature</h3>
            <p className={styles.experienceItemBody}>Show the signature flow.</p>
            <div className={styles.experienceItemFocus}>
              Design focus: Make approval the final step of the same record rather than a disconnected action.
            </div>
          </div>
        </div>

        <p className={styles.body}>
          The actual resource supports this end-to-end progression from creation through crew/time, materials/equipment, completion and signature.
        </p>

        {/* IMAGE 05 */}
        <div className={styles.imageContainer} id="IMAGE_05_COMPLETE_EXPERIENCE">
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>IMAGE_05_COMPLETE_EXPERIENCE</span>
            <span className={styles.imagePurpose}>Complete Experience • End-to-End Product Showcase</span>
          </div>
          <div className={styles.imageViewport}>
            <Image
              src="/images/t-and-m/tnm_complete_overview.png"
              alt="Complete T&M Experience: end-to-end product overview"
              width={4096}
              height={1780}
              unoptimized
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ── 13. SYSTEM THINKING ──────────────────────────── */}
      <div className={styles.sectionNavy} id="system-thinking">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>13. SYSTEM THINKING</div>
          <h2 className={styles.h2}>The ticket became the connective tissue</h2>

          <div className={styles.body}>
            <p>The strongest part of the solution wasn&apos;t a particular screen.</p>
            <p>It was the relationship between them.</p>
          </div>

          <div className={styles.systemChain}>
            {[
              { label: "FIELD WORK", highlight: false },
              { label: "T&M TICKET", highlight: true },
              { label: "CREW + TIME", highlight: false },
              { label: "MATERIALS + EQUIPMENT", highlight: false },
              { label: "ACTUAL COST", highlight: false },
              { label: "REVIEW", highlight: false },
              { label: "SIGNATURE", highlight: false },
              { label: "CLOSED RECORD", highlight: true },
            ].map((item, i, arr) => (
              <div key={i}>
                <div className={`${styles.systemChainNode} ${item.highlight ? styles.systemChainNodeHighlight : ''}`}>
                  {item.label === "T&M TICKET" ? <>T&amp;M TICKET</> : item.label}
                </div>
                {i < arr.length - 1 && (
                  <div className={styles.systemChainArrow}>↓</div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.body}>
            <p>Each stage adds information without breaking the connection to the original work.</p>
            <p>That makes the final record more than a form submission.</p>
            <p style={{ fontWeight: 600, color: '#f8fafc' }}>It becomes an explanation of what happened on site.</p>
          </div>
        </div>
      </div>

      {/* ── 14. WHAT I CONTRIBUTED ───────────────────────── */}
      <div className={styles.sectionWarm} id="contributions">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>14. WHAT I CONTRIBUTED</div>
          <h2 className={styles.h2}>Designing the workflow, not just the interface</h2>

          <p className={styles.lead}>
            I worked across the T&amp;M experience from the field entry point through project-level review.
          </p>

          <p className={styles.body}>My focus was on:</p>

          <div className={styles.contributionsGrid}>
            {[
              "Mapping the end-to-end T&M lifecycle",
              "Structuring the ticket around real construction work",
              "Designing field-oriented interactions",
              "Connecting crew and time tracking to T&M",
              "Structuring labor, material and equipment costs",
              "Designing review and approval states",
              "Supporting role-based workflows",
              "Designing configuration for reviewers and distribution",
            ].map((item, i) => (
              <div key={i} className={styles.contributionCard}>
                <Check className={styles.contributionCheck} />
                <span>{item.includes("T&M") ? item.replace(/T&M/g, "T\u0026M") : item}</span>
              </div>
            ))}
            <div className={`${styles.contributionCard} ${styles.contributionFull}`}>
              <Check className={styles.contributionCheck} />
              <span>Maintaining consistency between mobile and web experiences</span>
            </div>
          </div>

          <p className={styles.body}>
            The work required thinking about workflow, permissions, information hierarchy and interaction patterns together, rather than treating each screen as an isolated UI problem.
          </p>
        </div>
      </div>

      {/* ── 15. THE OUTCOME ──────────────────────────────── */}
      <div className={styles.inner} id="outcome">
        <div className={styles.sectionLabel}>15. THE OUTCOME</div>
        <h2 className={styles.h2}>From a record of work to a record of accountability</h2>

        <div className={styles.outcomeBox}>
          <p className={styles.lead} style={{ marginBottom: '16px' }}>
            The final experience creates a continuous thread between what happened in the field and what gets reviewed in the office.
          </p>

          <ul className={styles.bulletList} style={{ margin: '24px 0' }}>
            {[
              "A foreman can create and complete the work record.",
              "Crew hours can become part of that record.",
              "Materials and equipment can be attached to it.",
              "A reviewer can inspect the resulting cost and context.",
              "And the completed record can carry its approval and signature with it.",
            ].map((item, i) => (
              <li key={i} className={styles.bulletItem}>
                <span className={styles.bulletDot} />
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.outcomeStatements}>
            <div className={styles.outcomeStatement}>
              The result wasn&apos;t simply a better T&amp;M form.
            </div>
            <div className={`${styles.outcomeStatement} ${styles.outcomeStatementBlue}`}>
              It was a more coherent way to move real-world work through a construction organization.
            </div>
          </div>
        </div>
      </div>

      {/* ── FINAL REFLECTION ─────────────────────────────── */}
      <div className={styles.reflectionSection}>
        <div className={styles.reflectionInner}>
          <div className={styles.sectionLabel} style={{ color: '#9ca3af' }}>FINAL REFLECTION</div>

          <h2 className={styles.reflectionQuote}>
            Good enterprise design isn&apos;t about making every workflow simple.
          </h2>

          <div className={styles.reflectionBody}>
            <p>
              It&apos;s about making complexity understandable — and giving every person exactly what they need at the moment they need it.
            </p>
            <p>
              T&amp;M taught me that the most important part of a complex product isn&apos;t always the screen the user sees.
            </p>
            <p>
              Sometimes it&apos;s the relationship between screens, roles, states and responsibilities.
            </p>
          </div>

          <div className={styles.reflectionHighlight}>
            And that&apos;s where product design starts becoming system design.
          </div>
        </div>
      </div>

      <ProjectPagination />
      <Footer />
    </div>
  );
}
