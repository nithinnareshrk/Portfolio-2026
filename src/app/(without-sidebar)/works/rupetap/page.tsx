"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  CreditCard,
  QrCode,
  Wifi,
  WifiOff,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  X,
  ExternalLink,
  Layers,
  HelpCircle,
  Lock,
  RefreshCw,
  PhoneOff,
  Building,
  Check,
} from "lucide-react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import ProjectSectionRail, { SectionItem } from "@/components/ProjectSectionRail";
import ProjectPagination from "@/components/ProjectPagination";

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "01. Overview" },
  { id: "the-problem", label: "02. The Problem" },
  { id: "constraints", label: "03. Constraints" },
  { id: "product-shape", label: "04. Product Shape" },
  { id: "design-decisions", label: "05. Design Decisions" },
  { id: "the-screens", label: "06. The Screens" },
  { id: "validation", label: "07. What I Haven't Validated" },
  { id: "reflection", label: "08. Reflection" },
];

const CUSTOMER_SCREENS = [
  {
    num: "01",
    title: "Bank discovery",
    caption: "Bank discovery: Automatic detection of linked bank accounts via mobile registration",
    image: "/images/rupetap/customer/c-01-select-primary-bank.png",
    width: 804,
    height: 1748,
    decision: "Discovers existing bank accounts via registered phone number",
  },
  {
    num: "02",
    title: "NFC not available",
    caption: "NFC not available: Clear indicator when device hardware lacks contactless tap support",
    image: "/images/rupetap/customer/c-02-tap-not-available.png",
    width: 804,
    height: 1764,
    decision: "Explains hardware absence without blocking QR payment usage",
  },
  {
    num: "03",
    title: "Add card (Contactless tag)",
    caption: "Add card with Contactless not enabled tag: Guidance to turn on tap inside bank app",
    image: "/images/rupetap/customer/c-03-add-card.png",
    width: 804,
    height: 1748,
    decision: "Tags card status honestly before the customer reaches the counter",
  },
  {
    num: "04",
    title: "Home card linked",
    caption: "Home card linked: Tap to Pay prioritized as the hero top action",
    image: "/images/rupetap/customer/c-04-home-card-linked.png",
    width: 804,
    height: 2140,
    decision: "Prioritizes contactless tap card when card verification is active",
  },
  {
    num: "05",
    title: "Home card skipped",
    caption: "Home card skipped: Scan QR promoted to hero with empty-state card prompt",
    image: "/images/rupetap/customer/c-05-home-card-skipped.png",
    width: 804,
    height: 2704,
    decision: "Defaults to QR scanner hero when card addition was skipped",
  },
  {
    num: "06",
    title: "Tap ready overlay",
    caption: "Tap ready overlay: Floating bottom sheet holding cart context during payment hold",
    image: "/images/rupetap/customer/c-06-tap-ready-overlay.png",
    width: 804,
    height: 1748,
    decision: "Lightweight floating card keeps shopping context visible while tapping",
  },
  {
    num: "07",
    title: "Checking your transaction",
    caption: "Checking your transaction: Prevents repeated tapping during signal drops",
    image: "/images/rupetap/customer/c-10-checking-transaction.png",
    width: 804,
    height: 1748,
    decision: "Locks retry and card switching to prevent duplicate charges",
  },
  {
    num: "08",
    title: "Payment successful",
    caption: "Payment successful with Verified merchant badge: Confirmation showing merchant trade name",
    image: "/images/rupetap/customer/c-07-payment-success.png",
    width: 804,
    height: 1776,
    decision: "Trust mark verified against real merchant onboarding credentials",
  },
  {
    num: "09",
    title: "Wasn't charged",
    caption: "Wasn't charged: Reassuring status confirming customer account was not debited",
    image: "/images/rupetap/customer/c-09-not-charged.png",
    width: 804,
    height: 1764,
    decision: "Direct reassurance when network disconnects before reaching ledger",
  },
  {
    num: "10",
    title: "Payment declined (Switch card)",
    caption: "Payment declined with switch card: Specific decline reason with inline card switch",
    image: "/images/rupetap/customer/c-08-payment-not-completed.png",
    width: 804,
    height: 1664,
    decision: "Identifies bank limit reached with instant alternative card payment",
  },
];

const MERCHANT_SCREENS = [
  {
    num: "01",
    title: "No NFC phone",
    caption: "No NFC phone: Clean QR baseline with dismissible reader reference",
    image: "/images/rupetap/merchant/m-01-no-nfc-phone.png",
    width: 804,
    height: 1748,
    decision: "Gracefully switches to fast QR terminal without aggressive upsells",
  },
  {
    num: "02",
    title: "Home with amount",
    caption: "Home with amount: Direct amount keypad focused strictly on transaction initiation",
    image: "/images/rupetap/merchant/m-02-home-amount-entered.png",
    width: 804,
    height: 1748,
    decision: "Zero bloat keypad designed for swift counter operation",
  },
  {
    num: "03",
    title: "Tap ready",
    caption: "Tap ready: Clear proximity prompt showing where customer card should tap",
    image: "/images/rupetap/merchant/m-03-tap-ready.png",
    width: 804,
    height: 1748,
    decision: "Displays antenna target zone for customer card proximity",
  },
  {
    num: "04",
    title: "Tap confirming",
    caption: "Tap confirming: Visual lock holding payment state during bank settlement check",
    image: "/images/rupetap/merchant/m-04-tap-confirming.png",
    width: 804,
    height: 1748,
    decision: "Animated feedback keeps shopkeeper and customer waiting together calmly",
  },
  {
    num: "05",
    title: "Payment received tap",
    caption: "Payment received tap: Clear audio and visual success state with amount confirmation",
    image: "/images/rupetap/merchant/m-05-payment-received-tap.png",
    width: 804,
    height: 1748,
    decision: "Unambiguous green confirmation removing reliance on noisy soundboxes",
  },
  {
    num: "06",
    title: "Payment failed",
    caption: "Payment failed: Definite failure indicator releasing terminal for next customer",
    image: "/images/rupetap/merchant/m-06-payment-failed.png",
    width: 804,
    height: 1748,
    decision: "Definitive stop releasing the counter line immediately",
  },
  {
    num: "07",
    title: "Still checking",
    caption: "Still checking: Graceful background polling state without blocking counter queue",
    image: "/images/rupetap/merchant/m-07-still-checking.png",
    width: 804,
    height: 1748,
    decision: "Pushes pending resolution to background without freezing terminal",
  },
  {
    num: "08",
    title: "Settlements",
    caption: "Settlements: Direct view of funds batched to verified bank account",
    image: "/images/rupetap/merchant/m-08-settlements.png",
    width: 804,
    height: 2292,
    decision: "Straightforward settlement ledger with automatic daily payouts",
  },
  {
    num: "09",
    title: "Sign-in help",
    caption: "Sign-in help: Multi-factor identity options bypassing lost SMS dependency",
    image: "/images/rupetap/merchant/m-09-sign-in-help.png",
    width: 804,
    height: 1748,
    decision: "PAN, bank last 4, and DigiLocker login options for lost SIMs",
  },
  {
    num: "10",
    title: "Lost phone turned off",
    caption: "Lost phone turned off: Remote device deactivation confirming money remains safe",
    image: "/images/rupetap/merchant/m-10-lost-phone-turned-off.png",
    width: 804,
    height: 1748,
    decision: "Confirmation that lost phone is locked while bank account stays intact",
  },
];

export default function RupeTapPage() {
  const [activeGalleryTab, setActiveGalleryTab] = useState<"customer" | "merchant">("customer");
  const [isAllScreensModalOpen, setIsAllScreensModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <ProjectSectionRail sections={SECTIONS} />

      {/* ── 01. OVERVIEW / HERO ───────────────────────────── */}
      <div className={styles.inner} id="overview">
        <div style={{ marginTop: "20px" }}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            SELF-INITIATED CONCEPT • NOT SHIPPED
          </div>

          <h1 className={styles.heroTitle}>
            RupeTap — Tap-to-Pay on a Shopkeeper&apos;s Own Phone
          </h1>

          <p className={styles.heroSub}>
            A shopkeeper&apos;s phone becomes the payment terminal. The customer taps a phone or card, or scans a QR, and the shopkeeper gets one clear, confirmed result.
          </p>

          <p className={styles.heroAccent}>
            No card machine, no extra hardware, and no waiting for soundbox announcements.
          </p>
        </div>

        <div className={styles.metaDivider} />

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>ROLE</span>
            <span className={styles.metaValue}>Product Designer (sole designer)</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>TYPE</span>
            <span className={styles.metaValue}>Self-initiated concept (not shipped)</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>PLATFORMS</span>
            <span className={styles.metaValue}>Two mobile apps (Customer &amp; Merchant)</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>TIMELINE</span>
            <span className={styles.metaValue}>October 2026, about 2 weeks, solo</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>TOOLS &amp; PROCESS</span>
            <span className={styles.metaValue}>Stitch for screen generation, Figma for organizing, my own design decisions throughout</span>
          </div>
        </div>

        {/* Hero image container: Merchant Tap Receiving & Confirming */}
        <div className={styles.imageContainer} style={{ marginTop: "48px" }}>
          <div className={styles.imageHeader}>
            <span className={styles.imageIdBadge}>HERO_MERCHANT_TAP_RECEIVING_CONFIRMING</span>
            <span className={styles.imagePurpose}>Merchant terminal • Receiving and confirming states</span>
          </div>

          <div className={styles.imageViewport}>
            <div className={styles.mockupPhonePair}>
              <div className={styles.phoneDeviceReal} style={{ maxWidth: "270px" }}>
                <Image unoptimized src="/images/rupetap/merchant/m-03-tap-ready.png"
                  alt="Merchant Tap Receiving State"
                  width={804}
                  height={1748}
                  priority
                  className={styles.phoneScreenImg}
                />
              </div>

              <div className={styles.phoneDeviceReal} style={{ maxWidth: "270px" }}>
                <Image unoptimized src="/images/rupetap/merchant/m-04-tap-confirming.png"
                  alt="Merchant Tap Confirming State"
                  width={804}
                  height={1748}
                  priority
                  className={styles.phoneScreenImg}
                />
              </div>
            </div>
          </div>

          <div className={styles.captionBar}>
            <span className={styles.captionLabel}>Hero:</span> Merchant Tap Receiving, Confirming
          </div>
        </div>
      </div>

      {/* ── 02. THE PROBLEM ──────────────────────────────── */}
      <div className={styles.sectionWarm} id="the-problem">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>02. THE PROBLEM</div>
          <h2 className={styles.h2}>Merchant confidence, not speed.</h2>

          <p className={styles.lead}>
            QR payments in India are already fast. For low-footfall neighborhood shops, there are rarely long queues. Speed was never the real problem. Confidence was.
          </p>

          <div className={styles.body}>
            <p>
              With QR, the customer opens an app, scans the code, types the amount, and enters a PIN. The shopkeeper has to step back and wait.
            </p>
            <p>
              They listen for an audio voice alert from a separate soundbox or wait for an SMS. If the connection lags or the speaker is drowned out by street traffic, the counter freezes. Mistyped amounts, customers asking &ldquo;did it go through?&rdquo;, and fake payment screenshot scams all live in this gap.
            </p>
            <p>
              There is also a second friction. Some customers cannot pay by QR at that exact moment. Their banking app might be down, mobile signal might drop inside the shop, or they simply prefer tapping a physical debit or credit card.
            </p>
          </div>

          <div className={styles.scopeBox}>
            <div className={styles.scopeLabel}>Scope Boundary</div>
            <div className={styles.scopeText}>
              RupeTap is designed for small neighborhood shops without a card machine. Supermarkets with dedicated POS hardware and established QR-only shops are not the target.
            </div>
          </div>
        </div>
      </div>

      {/* ── 03. CONSTRAINTS THAT SHAPED IT ────────────────── */}
      <div className={styles.sectionWhite} id="constraints">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>03. CONSTRAINTS THAT SHAPED IT</div>
          <h2 className={styles.h2}>Four hard realities of payments and hardware in India.</h2>

          <div className={styles.constraintsGrid}>
            <div className={styles.constraintCard}>
              <div className={styles.constraintNum}>CONSTRAINT 01</div>
              <div className={styles.constraintTitle}>Certified acceptance is non-negotiable</div>
              <div className={styles.constraintDesc}>
                Cards and phones cannot be accepted on an ordinary phone without certification. Rather than attempting a workaround, the product bets on certified phone-based acceptance from day one.
              </div>
            </div>

            <div className={styles.constraintCard}>
              <div className={styles.constraintNum}>CONSTRAINT 02</div>
              <div className={styles.constraintTitle}>Not every phone has NFC</div>
              <div className={styles.constraintDesc}>
                A significant portion of affordable smartphones in India lack NFC chips. The product cannot assume contactless tap is universally possible on every shopkeeper&apos;s device.
              </div>
            </div>

            <div className={styles.constraintCard}>
              <div className={styles.constraintNum}>CONSTRAINT 03</div>
              <div className={styles.constraintTitle}>Contactless is disabled by default</div>
              <div className={styles.constraintDesc}>
                Even when a customer holds a contactless card, Indian banks keep tap toggled off until the customer manually turns it on. The bank controls the toggle, not the app.
              </div>
            </div>

            <div className={styles.constraintCard}>
              <div className={styles.constraintNum}>CONSTRAINT 04</div>
              <div className={styles.constraintTitle}>The SIM leaves with a lost phone</div>
              <div className={styles.constraintDesc}>
                In India, physical SIM cards remain standard. When a shopkeeper loses their phone, their phone number and SMS OTP leave with it. Recovery cannot depend on SMS OTP.
              </div>
            </div>
          </div>

          <div style={{ marginTop: "36px" }}>
            <h3 className={styles.h3}>Context, as of October 2026</h3>
            <div className={styles.body}>
              <p>
                Apple Pay launched in India on September 29 with Axis Bank cards only, and works only at terminals enabled for it. NPCI announced UPI Tap &amp; Pay on September 14, which pairs an NFC phone with an NFC-enabled POS terminal, so a merchant still needs dedicated hardware today. A 0.4% fee on larger UPI merchant payments has been postponed to after Diwali, and small merchants under ₹1 lakh a month stay exempt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 04. PRODUCT SHAPE ────────────────────────────── */}
      <div className={styles.sectionWarm} id="product-shape">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>04. PRODUCT SHAPE</div>
          <h2 className={styles.h2}>QR is the baseline. Tap is added when needed.</h2>

          <div className={styles.body}>
            <p>
              I split the product into two focused mobile applications rather than building one bloated tool:
            </p>
          </div>

          <div className={styles.productShapeRow}>
            <div className={styles.appShapeCard}>
              <span className={styles.appShapeBadge}>APP 01</span>
              <h3 className={styles.appShapeTitle}>Customer App</h3>
              <p className={styles.appShapeDesc}>
                A full UPI-style app with Tap to Pay as the hero. It retains familiar QR scanning and bank account links, but promotes tapping first whenever supported.
              </p>
            </div>

            <div className={styles.appShapeCard}>
              <span className={styles.appShapeBadge}>APP 02</span>
              <h3 className={styles.appShapeTitle}>Merchant App</h3>
              <p className={styles.appShapeDesc}>
                A payment rail only. Deliberately stripped of inventory, staff rosters, and complex analytics. It does one job: receive payments and confirm them clearly.
              </p>
            </div>
          </div>

          {/* 4 Customer Flows Diagram */}
          <div className={styles.flowsDiagram}>
            <div className={styles.flowsDiagramHeader}>
              <div className={styles.flowsDiagramTitle}>The Four Customer Flows</div>
              <div className={styles.flowsDiagramSubtitle}>
                Structured paths covering setup, normal use, network disruption, and failure resolution.
              </div>
            </div>

            <div className={styles.flowRow}>
              {/* Flow 1: Onboarding */}
              <div className={styles.flowTrack}>
                <div className={styles.flowTrackTop}>
                  <strong style={{ fontSize: "14px", color: "#111827" }}>1. Onboarding</strong>
                  <span className={`${styles.flowTrackBadge} ${styles.badgeOnboarding}`}>First-Time Setup</span>
                </div>
                <div className={styles.flowTrackNodes}>
                  <span className={styles.flowNode}>App Launch</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Bank Discovery</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Hardware NFC Check</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Add Card</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Contactless Bank Check</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Ready to Tap</span>
                </div>
              </div>

              {/* Flow 2: Happy path */}
              <div className={styles.flowTrack}>
                <div className={styles.flowTrackTop}>
                  <strong style={{ fontSize: "14px", color: "#111827" }}>2. Happy Path</strong>
                  <span className={`${styles.flowTrackBadge} ${styles.badgeHappy}`}>Standard Tap</span>
                </div>
                <div className={styles.flowTrackNodes}>
                  <span className={styles.flowNode}>Home (Tap Hero)</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Floating Tap Overlay</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Phone / Card Tap</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Instant Haptic Confirm</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Full Success + Verified Badge</span>
                </div>
              </div>

              {/* Flow 3: Critical path */}
              <div className={styles.flowTrack}>
                <div className={styles.flowTrackTop}>
                  <strong style={{ fontSize: "14px", color: "#111827" }}>3. Critical Path</strong>
                  <span className={`${styles.flowTrackBadge} ${styles.badgeCritical}`}>Network Drop Mid-Tap</span>
                </div>
                <div className={styles.flowTrackNodes}>
                  <span className={styles.flowNode}>Tap Registered</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode} style={{ borderColor: "#f59e0b", color: "#b45309" }}>Connection Drops</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>&ldquo;Checking, don&apos;t tap again&rdquo;</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode} style={{ borderColor: "#ef4444" }}>Card Switching Locked</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Background Poll Resolves</span>
                </div>
              </div>

              {/* Flow 4: Unhappy path */}
              <div className={styles.flowTrack}>
                <div className={styles.flowTrackTop}>
                  <strong style={{ fontSize: "14px", color: "#111827" }}>4. Unhappy Path</strong>
                  <span className={`${styles.flowTrackBadge} ${styles.badgeUnhappy}`}>Declined / Failed</span>
                </div>
                <div className={styles.flowTrackNodes}>
                  <span className={styles.flowNode}>Tap Processed</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode} style={{ borderColor: "#ef4444", color: "#b91c1c" }}>Bank Decline</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Specific Reason Displayed</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Account Safe Notice</span>
                  <span className={styles.flowArrow}>→</span>
                  <span className={styles.flowNode}>Inline &ldquo;Switch Card&rdquo; Active</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "12px", fontSize: "13.5px", color: "#64748b" }}>
            <strong>Flows:</strong> Four customer paths covering setup, normal use, network disruption, and failure resolution.
          </div>
        </div>
      </div>

      {/* ── 05. DESIGN DECISIONS (THE CORE) ──────────────── */}
      <div className={styles.sectionWhite} id="design-decisions">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>05. DESIGN DECISIONS</div>
          <h2 className={styles.h2}>The trade-offs that defined the product.</h2>
          <p className={styles.lead}>
            Each decision follows a strict four-part block: the real problem, what I chose, what I deliberately rejected, and what that choice costs.
          </p>

          <div className={styles.decisionsContainer}>
            {/* Decision A */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION A</span>
                <h3 className={styles.decisionTitle}>
                  Floating overlay for in-progress states, full page for outcomes.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    The wait during tapping should feel brief and immediate, but the final confirmation must feel unshakeable and final.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    A floating bottom overlay for active states (&ldquo;Hold near terminal&rdquo;, &ldquo;Confirming&rdquo;). Once confirmed, it transitions into a dedicated full page for the outcome.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    Full pages for every intermediate waiting state.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    Overlays hide background context and require careful dimming so customers do not accidentally dismiss them during transit.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_A_OVERLAY_VS_PAGE</span>
                    <span className={styles.imagePurpose}>In-progress sheet vs final result screen</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhonePair}>
                      <div className={styles.phoneDeviceReal} style={{ maxWidth: "260px" }}>
                        <Image unoptimized src="/images/rupetap/customer/c-06-tap-ready-overlay.png"
                          alt="Floating bottom overlay during active tap"
                          width={804}
                          height={1748}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                      <div className={styles.phoneDeviceReal} style={{ maxWidth: "260px" }}>
                        <Image unoptimized src="/images/rupetap/customer/c-07-payment-success.png"
                          alt="Full-page final outcome confirmation"
                          width={804}
                          height={1776}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision a:</span> Floating overlay keeps the cart context while confirming, full page settles the result.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision B */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION B</span>
                <h3 className={styles.decisionTitle}>
                  &ldquo;Checking your transaction, don&apos;t tap again&rdquo; after a network drop.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    Switching cards or retrying while the first tap is still resolving risks double-charging the customer.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    A locked &ldquo;Checking your transaction, don&apos;t tap again&rdquo; state with no card switching until the bank outcome is confirmed.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    Offering an instant retry button immediately after signal drops.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    The customer must wait a few seconds at the counter with no interactive action.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_B_NETWORK_DROP_LOCK</span>
                    <span className={styles.imagePurpose}>Mid-tap network interruption safeguard</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhoneSingle}>
                      <div className={styles.phoneDeviceReal}>
                        <Image unoptimized src="/images/rupetap/customer/c-10-checking-transaction.png"
                          alt="Checking your transaction screen"
                          width={804}
                          height={1748}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision b:</span> Locked state prevents double-charging while the network resolves the first attempt.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision C */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION C</span>
                <h3 className={styles.decisionTitle}>
                  Specific failure reasons with one next step, and Switch Card inline.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    Ambiguous payment errors at the shop counter create awkwardness and confusion between customer and shopkeeper.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    Specific failure reasons with one next step, plus an inline &ldquo;Switch card&rdquo; button enabled only after confirmed failure.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    A generic &ldquo;Payment failed&rdquo; screen.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    Requires designing, copywriting, and maintaining many distinct failure states.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_C_INLINE_FAILURE_RECOVERY</span>
                    <span className={styles.imagePurpose}>Actionable decline explanation with inline card switch</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhoneSingle}>
                      <div className={styles.phoneDeviceReal}>
                        <Image unoptimized src="/images/rupetap/customer/c-08-payment-not-completed.png"
                          alt="Payment declined with specific reason and inline card switch"
                          width={804}
                          height={1664}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision c:</span> Specific failure reason with one next step and inline card switch.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision D */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION D</span>
                <h3 className={styles.decisionTitle}>
                  &ldquo;Verified merchant&rdquo; badge on customer confirmation.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    Customers cannot see physical trust cues when tapping against an ordinary phone.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    A prominent &ldquo;Verified merchant&rdquo; badge with legal trade name, directly populated from the merchant&apos;s onboarding verification.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    Generic &ldquo;secured&rdquo; badges and regulatory stamp labels (my first Stitch pass was cluttered with them).
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    It only works if merchant verification is real and strict during onboarding.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_D_VERIFIED_MERCHANT_BADGE</span>
                    <span className={styles.imagePurpose}>Customer confirmation trust signifier</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhoneSingle}>
                      <div className={styles.phoneDeviceReal}>
                        <Image unoptimized src="/images/rupetap/customer/c-07-payment-success.png"
                          alt="Payment successful with Verified merchant badge"
                          width={804}
                          height={1776}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision d:</span> Verified merchant badge on customer confirmation directly reflects onboarding checks.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision E */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION E</span>
                <h3 className={styles.decisionTitle}>
                  Conditional home screen based on card setup status.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    Showing tap as primary to customers without contactless cards creates frustration, but hiding it hurts adoption for tap users.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    A conditional home layout: &ldquo;Tap to Pay&rdquo; is the top hero when a card is linked; &ldquo;Scan QR&rdquo; is top when skipped, with an empty-state illustration.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    User-customizable button reordering and draggable tiles.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    Two distinct home state layouts to design, QA, and maintain.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_E_ADAPTIVE_HOME_STATES</span>
                    <span className={styles.imagePurpose}>Card linked home vs card skipped home</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhonePair}>
                      <div className={styles.phoneDeviceReal} style={{ maxWidth: "260px" }}>
                        <Image unoptimized src="/images/rupetap/customer/c-04-home-card-linked.png"
                          alt="Home screen with card linked (Tap to Pay hero)"
                          width={804}
                          height={2140}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                      <div className={styles.phoneDeviceReal} style={{ maxWidth: "260px" }}>
                        <Image unoptimized src="/images/rupetap/customer/c-05-home-card-skipped.png"
                          alt="Home screen with card skipped (Scan QR hero)"
                          width={804}
                          height={2704}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision e:</span> Conditional home screen prioritizes tap when a card is linked, QR when skipped.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision F */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION F</span>
                <h3 className={styles.decisionTitle}>
                  Contactless-per-card check with honest guidance.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    In India, banks control whether contactless tap is enabled on each card. The app cannot turn this toggle on directly.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    Add the card anyway, tag it &ldquo;Contactless not enabled,&rdquo; and give plain step-by-step guidance on how to enable it in their bank&apos;s app.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    Blocking card addition or silently failing later at the checkout counter.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    Users can add cards to their wallet that won&apos;t tap until they update their bank settings.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_F_CARD_CONTACTLESS_CHECK</span>
                    <span className={styles.imagePurpose}>Per-card contactless tag and guidance</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhoneSingle}>
                      <div className={styles.phoneDeviceReal}>
                        <Image unoptimized src="/images/rupetap/customer/c-03-add-card.png"
                          alt="Contactless not enabled tag on added card"
                          width={804}
                          height={1748}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision f:</span> Contactless-per-card check tags disabled cards with bank guidance instead of failing silently.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision G */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION G</span>
                <h3 className={styles.decisionTitle}>
                  Merchant app is a payment rail only.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    Adding catalogs, inventory, and staff rosters clutters the counter screen when a shopkeeper simply needs to take a payment.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    Strict payment-rail focus: Enter amount, receive tap or show QR, confirm, check settlements. No inventory or rosters.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    Inventory management, staff shifts, itemized billing, and business analytics charts.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    Fewer auxiliary features to sell, but creates an uncluttered and faster product.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_G_PAYMENT_RAIL_KEYPAD</span>
                    <span className={styles.imagePurpose}>Zero-bloat merchant collection terminal</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhoneSingle}>
                      <div className={styles.phoneDeviceReal}>
                        <Image unoptimized src="/images/rupetap/merchant/m-02-home-amount-entered.png"
                          alt="Zero bloat merchant payment rail keypad"
                          width={804}
                          height={1748}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision g:</span> Merchant app is a payment rail only, stripped of inventory, staff, and analytics bloat.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision H */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION H</span>
                <h3 className={styles.decisionTitle}>
                  No-NFC phones get QR plus one small dismissible note.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    Many entry-level phones lack NFC, yet pushing external hardware aggressively damages the promise of a pure phone terminal.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    Default to QR payment mode and show a single, small, dismissible card about an external pocket NFC reader.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    A full promotional splash screen or aggressive hardware upsell flow.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    Lower hardware accessory conversion, but preserves trust in the &ldquo;no extra hardware&rdquo; proposition.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_H_NO_NFC_FALLBACK</span>
                    <span className={styles.imagePurpose}>Graceful degradation to QR with hardware note</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhoneSingle}>
                      <div className={styles.phoneDeviceReal}>
                        <Image unoptimized src="/images/rupetap/merchant/m-01-no-nfc-phone.png"
                          alt="No NFC phone defaults to QR with pocket reader card"
                          width={804}
                          height={1748}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision h:</span> No-NFC phones get QR plus one small dismissible card about an NFC reader.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision I */}
            <div className={styles.decisionItem}>
              <div className={styles.decisionHeader}>
                <span className={styles.decisionLetter}>DECISION I</span>
                <h3 className={styles.decisionTitle}>
                  Lost-phone recovery that doesn&apos;t depend on OTP.
                </h3>
              </div>

              <div className={styles.fourPartGrid}>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardProblem}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelProblem}`}>PROBLEM</span>
                  <p className={styles.fourPartText}>
                    In India, physical SIM cards stay inside lost phones. If recovery requires an SMS OTP, the merchant is locked out entirely.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardChose}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelChose}`}>WHAT I CHOSE</span>
                  <p className={styles.fourPartText}>
                    A second paired device that can remotely deactivate the lost phone, plus recovery with PAN, bank last-4, backup contact, and DigiLocker. Money always settles to the verified bank account.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardRejected}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelRejected}`}>WHAT I REJECTED</span>
                  <p className={styles.fourPartText}>
                    OTP-only recovery workflows.
                  </p>
                </div>
                <div className={`${styles.fourPartCard} ${styles.fourPartCardCost}`}>
                  <span className={`${styles.fourPartLabel} ${styles.labelCost}`}>WHAT IT COSTS</span>
                  <p className={styles.fourPartText}>
                    A slower recovery flow for shopkeepers who have not set up a backup device in advance.
                  </p>
                </div>
              </div>

              <div className={styles.decisionVisualWrap}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageHeader}>
                    <span className={styles.imageIdBadge}>DECISION_I_SIM_INDEPENDENT_RECOVERY</span>
                    <span className={styles.imagePurpose}>Remote deactivation and identity recovery</span>
                  </div>
                  <div className={styles.imageViewport}>
                    <div className={styles.mockupPhoneSingle}>
                      <div className={styles.phoneDeviceReal}>
                        <Image unoptimized src="/images/rupetap/merchant/m-10-lost-phone-turned-off.png"
                          alt="Lost phone turned off confirmation"
                          width={804}
                          height={1748}
                          className={styles.phoneScreenImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.captionBar}>
                    <span className={styles.captionLabel}>Decision i:</span> Lost-phone recovery doesn&apos;t depend on OTP; remote deactivation and multi-factor bank identity secure funds.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 06. THE SCREENS ──────────────────────────────── */}
      <div className={styles.sectionWarm} id="the-screens">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>06. THE SCREENS</div>
          <h2 className={styles.h2}>The twenty hero screens across both apps.</h2>
          <p className={styles.lead}>
            Ten customer screens and ten merchant screens. Each screen reflects a specific product decision made to establish clarity at the checkout counter.
          </p>

          <div className={styles.galleryControlBar}>
            <div className={styles.galleryTabs}>
              <button
                type="button"
                className={`${styles.galleryTabBtn} ${activeGalleryTab === "customer" ? styles.galleryTabBtnActive : ""}`}
                onClick={() => setActiveGalleryTab("customer")}
              >
                Customer App (10 Screens)
              </button>
              <button
                type="button"
                className={`${styles.galleryTabBtn} ${activeGalleryTab === "merchant" ? styles.galleryTabBtnActive : ""}`}
                onClick={() => setActiveGalleryTab("merchant")}
              >
                Merchant App (10 Screens)
              </button>
            </div>

            <button
              type="button"
              className={styles.galleryActionLink}
              onClick={() => setIsAllScreensModalOpen(true)}
              style={{ background: "none", border: "none" }}
            >
              <Layers size={15} /> View all screens in full gallery
            </button>
          </div>

          {/* Customer Screens Grid (10 Screens) */}
          {activeGalleryTab === "customer" && (
            <div className={styles.screensGrid}>
              {CUSTOMER_SCREENS.map((screen) => (
                <div key={screen.num} className={styles.screenCard}>
                  <div className={styles.screenPreviewWrap}>
                    <div className={styles.phoneDeviceRealCompact}>
                      <Image unoptimized src={screen.image}
                        alt={screen.title}
                        width={screen.width}
                        height={screen.height}
                        className={styles.phoneScreenImg}
                      />
                    </div>
                  </div>
                  <div className={styles.screenCardFooter}>
                    <span className={styles.screenOrderBadge}>SCREEN {screen.num}</span>
                    <span className={styles.screenCaptionText}>
                      <strong>{screen.caption.split(":")[0]}:</strong>{screen.caption.split(":")[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Merchant Screens Grid (10 Screens) */}
          {activeGalleryTab === "merchant" && (
            <div className={styles.screensGrid}>
              {MERCHANT_SCREENS.map((screen) => (
                <div key={screen.num} className={styles.screenCard}>
                  <div className={styles.screenPreviewWrap}>
                    <div className={styles.phoneDeviceRealCompact}>
                      <Image unoptimized src={screen.image}
                        alt={screen.title}
                        width={screen.width}
                        height={screen.height}
                        className={styles.phoneScreenImg}
                      />
                    </div>
                  </div>
                  <div className={styles.screenCardFooter}>
                    <span className={styles.screenOrderBadge}>SCREEN {screen.num}</span>
                    <span className={styles.screenCaptionText}>
                      <strong>{screen.caption.split(":")[0]}:</strong>{screen.caption.split(":")[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── 07. WHAT I HAVEN'T VALIDATED ─────────────────── */}
      <div className={styles.sectionWhite} id="validation">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>07. WHAT I HAVEN&apos;T VALIDATED</div>
          <h2 className={styles.h2}>Honest boundaries and untested assumptions.</h2>

          <div className={styles.body}>
            <p>
              I believe in documenting exactly what has and has not been tested. Because this is a self-initiated concept, no live testing with real users has occurred yet.
            </p>
          </div>

          <div className={styles.validationSection}>
            <ul className={styles.unvalidatedList}>
              <li className={styles.unvalidatedItem}>
                <span className={styles.unvalidatedDot} />
                <span>
                  <strong>No live merchant or customer testing:</strong> I have not tested this concept in real retail environments with actual shopkeepers or shoppers.
                </span>
              </li>
              <li className={styles.unvalidatedItem}>
                <span className={styles.unvalidatedDot} />
                <span>
                  <strong>Reasoned step-count advantage:</strong> The step-count and speed advantages over QR are reasoned through flow analysis, not measured through empirical time trials.
                </span>
              </li>
              <li className={styles.unvalidatedItem}>
                <span className={styles.unvalidatedDot} />
                <span>
                  <strong>Certification and fee assumptions:</strong> Technical certification timelines and merchant transaction fee assumptions must be validated with an active payments infrastructure partner.
                </span>
              </li>
              <li className={styles.unvalidatedItem}>
                <span className={styles.unvalidatedDot} />
                <span>
                  <strong>Physical SIM behavior:</strong> The lost-phone recovery flow assumes common physical SIM card removal patterns across tier-2 and tier-3 Indian retail environments.
                </span>
              </li>
            </ul>

            <div className={styles.testNextBox}>
              <div className={styles.testNextHeading}>What I&apos;d Test Next</div>
              <ul className={styles.testNextList}>
                <li className={styles.testNextItem}>
                  <span className={styles.testNextNumber}>1</span>
                  <span>
                    <strong>4 to 5 shopkeeper contextual interviews:</strong> Shadow small retailers during peak hours to catalog real-world payment failures, soundbox delay tolerances, and counterfeit screenshot encounters.
                  </span>
                </li>
                <li className={styles.testNextItem}>
                  <span className={styles.testNextNumber}>2</span>
                  <span>
                    <strong>Confirming and still-checking task tests:</strong> Run interactive prototype tests to measure customer and cashier anxiety during simulated 4-second network drop delays.
                  </span>
                </li>
                <li className={styles.testNextItem}>
                  <span className={styles.testNextNumber}>3</span>
                  <span>
                    <strong>Simulated lost-device recovery walkthrough:</strong> Test remote deactivation and PAN/DigiLocker account recovery with merchants using an unfamiliar backup phone.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── 08. WHAT I'D DO DIFFERENTLY / REFLECTION ──────── */}
      <div className={styles.sectionWarm} id="reflection">
        <div className={styles.inner}>
          <div className={styles.sectionLabel}>08. REFLECTION</div>
          <h2 className={styles.h2}>What I&apos;d do differently.</h2>

          <p className={styles.lead}>
            I started with speed as the pitch. Then I saw that QR is already fast, and the real problem is the shopkeeper&apos;s confidence that a payment landed. Looking back, here is what I&apos;d change in how I worked:
          </p>

          <div className={styles.body}>
            <p>
              <strong>Design the unclear moment first.</strong> I built the happy path first and added the &ldquo;checking your transaction&rdquo; state after the flow showed a gap. That state is the whole point of the product, so I&apos;d design it first and build the rest around it.
            </p>
            <p>
              <strong>Design the two apps as one timeline.</strong> I designed the customer app first and the merchant app second, but a payment is one event seen from both sides. The customer&apos;s &ldquo;checking&rdquo; and the merchant&apos;s &ldquo;confirming&rdquo; are the same moment, and I&apos;d lay them side by side from the start so the wording and timing match.
            </p>
            <p>
              <strong>Fix the scope before Designing screens.</strong> The merchant app grew from about 24 screens to 41 as I added device management and lost-phone recovery. Recovery was worth designing, but I&apos;d decide earlier what belongs in a first version and what belongs in a second.
            </p>
            <p>
              <strong>Write the content rules before the first Screen.</strong> My first generated screens were crowded with security and compliance badges, and I had to strip them back to one quiet trust signal per screen. A short rulebook (plain words, no compliance labels, one trust signal) written up front would have saved a full round of cleanup.
            </p>
          </div>
        </div>
      </div>

      {/* ── ALL SCREENS FULL GALLERY MODAL ───────────────── */}
      {isAllScreensModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsAllScreensModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>All 20 RupeTap Hero Screens</div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setIsAllScreensModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalSectionTitle}>
                Customer App Screens (10)
              </div>
              {CUSTOMER_SCREENS.map((screen) => (
                <div key={"modal-c-" + screen.num} className={styles.modalCard}>
                  <div className={styles.modalCardPreview}>
                    <div className={styles.phoneDeviceRealCompact} style={{ maxWidth: "160px" }}>
                      <Image unoptimized src={screen.image}
                        alt={screen.title}
                        width={screen.width}
                        height={screen.height}
                        className={styles.phoneScreenImg}
                      />
                    </div>
                  </div>
                  <div className={styles.modalCardInfo}>
                    <span className={styles.screenOrderBadge}>SCREEN {screen.num}</span>
                    <strong style={{ fontSize: "14px", color: "#0f172a" }}>{screen.title}</strong>
                    <span style={{ fontSize: "12px", color: "#475569", lineHeight: "1.4" }}>
                      {screen.caption.split(":")[1]}
                    </span>
                  </div>
                </div>
              ))}

              <div className={styles.modalSectionTitle}>
                Merchant App Screens (10)
              </div>
              {MERCHANT_SCREENS.map((screen) => (
                <div key={"modal-m-" + screen.num} className={styles.modalCard}>
                  <div className={styles.modalCardPreview}>
                    <div className={styles.phoneDeviceRealCompact} style={{ maxWidth: "160px" }}>
                      <Image unoptimized src={screen.image}
                        alt={screen.title}
                        width={screen.width}
                        height={screen.height}
                        className={styles.phoneScreenImg}
                      />
                    </div>
                  </div>
                  <div className={styles.modalCardInfo}>
                    <span className={styles.screenOrderBadge}>SCREEN {screen.num}</span>
                    <strong style={{ fontSize: "14px", color: "#0f172a" }}>{screen.title}</strong>
                    <span style={{ fontSize: "12px", color: "#475569", lineHeight: "1.4" }}>
                      {screen.caption.split(":")[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── PROJECT PAGINATION ───────────────────────────── */}
      <ProjectPagination />

      {/* ── FOOTER ───────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
