"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Layers,
  Sparkles,
  Laptop,
  Smartphone,
  Lightbulb,
  HelpCircle,
  BookOpen,
  Headphones,
  Coffee,
  Camera,
  Frame,
  PenTool,
  Code,
  Bot,
  Terminal,
  Zap,
  Send,
  CheckCircle2,
  Tv,
  Music as MusicIcon,
  Globe,
  ExternalLink,
  ChevronDown,
  Monitor,
  Smartphone as PhoneIcon,
  MousePointer,
  Cpu,
  Workflow,
  Feather,
  Award,
  Heart
} from "lucide-react";
import Footer from "@/components/Footer";
import { useModal } from "@/context/ModalContext";
import styles from "./page.module.css";

// ── Rotating Status Pill items ──
const STATUS_PILLS = [
  "Open to Work",
  "Product Designer",
  "Design Systems",
  "B2B SaaS Specialization"
];

// ── Journey Milestones ──
interface JourneyItem {
  id: string;
  number: string;
  stage: string;
  year: string;
  summary: string;
  detail: string;
  isTurningPoint?: boolean;
  isActiveCurrent?: boolean;
  icon: React.ReactNode;
}

const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: "kid",
    number: "01",
    stage: "Curious Kid",
    year: "2012",
    summary: "I grew up fascinated by computers, mobile phones, and how technology worked. I naturally became the person people came to when they needed help understanding or choosing technology.",
    detail: "An early curiosity about software interfaces and hardware mechanics that sparked a lifelong interest in tech.",
    icon: <Sparkles size={18} />
  },
  {
    id: "visual",
    number: "02",
    stage: "Visual Communication",
    year: "2019",
    summary: "I chose Visual Communication because of my interest in photography, design, and visual storytelling — learning how visual structure can shape the way people understand information.",
    detail: "Studied spatial hierarchy, layout systems, typography contrast, and visual storytelling fundamentals.",
    icon: <PenTool size={18} />
  },
  {
    id: "ux",
    number: "03",
    stage: "Discovered UX",
    year: "2023",
    summary: "This was the turning point. I discovered UI/UX and realized it brought together everything I had been drawn to: technology, design, usability, and understanding how people experience digital products.",
    detail: "Pivotal realization: framing digital interfaces around human cognitive load, clarity, and intentional interaction.",
    isTurningPoint: true,
    icon: <Compass size={18} />
  },
  {
    id: "product",
    number: "04",
    stage: "Product Designer",
    year: "Sep 2024 – Dec 2025",
    summary: "Product Designer at Linarc. Worked on real-world enterprise products and complex workflows, learning how to turn operational problems into structured, usable product experiences.",
    detail: "Focusing on systems thinking, multi-role workflow engines, token-driven design systems, and real-world field constraints.",
    icon: <Layers size={18} />
  },
  {
    id: "present",
    number: "05",
    stage: "Still Exploring",
    year: "Present",
    summary: "I’m continuing to deepen my understanding of AI and exploring how it can change the way products are designed, built, and experienced. Alongside design, I also work closely with my dad’s business, which keeps me connected to real-world operations, customers, and the practical side of building a business.",
    detail: "Connecting emerging AI workflows with practical operational insights from real-world business environments.",
    isActiveCurrent: true,
    icon: <Zap size={18} />
  }
];

// ── Bento Grid Interests & Featured Story Panel ──
interface BentoItem {
  id: string;
  title: string;
  tagline: string;
  reflection: string;
  media: string;
  mediaType: "image" | "video";
  icon: React.ReactNode;
}

const BENTO_INTERESTS: BentoItem[] = [
  {
    id: "aquascaping",
    title: "Aquascaping",
    tagline: "Patience. Balance. Ecosystems.",
    reflection: "Aquascaping taught me patience. Things don't come together instantly — you observe, adjust, and let the ecosystem settle.",
    media: "/images/about/interests/aquascaping.jpeg",
    mediaType: "image",
    icon: <Feather size={18} />
  },
  {
    id: "f1",
    title: "Formula 1",
    tagline: "Teamwork, strategy & precision.",
    reflection: "Formula 1 isn't just about the fastest car. I love how teamwork, strategy, and mechanics make tiny improvements add up.",
    media: "/images/about/interests/formula1.png",
    mediaType: "image",
    icon: <Zap size={18} />
  },
  {
    id: "photography",
    title: "Photography",
    tagline: "Observing composition & light.",
    reflection: "Photography taught me to pay attention. Composition, light, and knowing what to leave out completely changes what someone notices first.",
    media: "/images/about/interests/photography.jpg",
    mediaType: "image",
    icon: <Camera size={18} />
  },
  {
    id: "technology",
    title: "Technology",
    tagline: "Deconstructing how things work.",
    reflection: "Technology fueled my curiosity early on. I still love mentally taking things apart to see how they work and if they can be better.",
    media: "/images/about/interests/technology.png",
    mediaType: "image",
    icon: <Laptop size={18} />
  },
  {
    id: "gaming",
    title: "Gaming",
    tagline: "Instant clarity & feedback loops.",
    reflection: "Gaming showed me how important feedback is. You do something, it responds, and you immediately get that satisfying feeling of clarity.",
    media: "/images/about/interests/gaming.jpg",
    mediaType: "image",
    icon: <Tv size={18} />
  },
  {
    id: "scale-models",
    title: "Scale Models",
    tagline: "Slowing down & caring for details.",
    reflection: "Building scale models taught me to slow down and care for the little details. A tiny adjustment makes all the difference — patience over rushing.",
    media: "/images/about/interests/scale-models.mp4",
    mediaType: "video",
    icon: <Layers size={18} />
  },
  {
    id: "cars",
    title: "Cars & Automotives",
    tagline: "Form following function.",
    reflection: "Cars made me appreciate form and function. I love when something looks good because of what it needs to do, not from added decoration.",
    media: "/images/about/interests/cars.mp4",
    mediaType: "video",
    icon: <Award size={18} />
  },
  {
    id: "music",
    title: "Music & Sound",
    tagline: "Rhythm, pacing & flow.",
    reflection: "Music made me aware of rhythm and pacing — how things build up, pause, and resolve. It naturally shapes how I feel flow and timing.",
    media: "/images/about/interests/music.webp",
    mediaType: "image",
    icon: <MusicIcon size={18} />
  }
];

// ── Interactive Workspace Hotspots ──
interface Hotspot {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  why: string;
  how: string;
  icon: React.ReactNode;
}

const WORKSPACE_HOTSPOTS: Hotspot[] = [
  {
    id: "laptop",
    name: "MacBook Pro",
    x: 48,
    y: 52,
    why: "My primary engine for high-fidelity UI, design token systems, and rapid prototyping.",
    how: "Running Figma, Cursor, and Next.js dev server side-by-side to bridge design and code in real time.",
    icon: <Laptop size={18} />
  },
  {
    id: "notebook",
    name: "Dot Grid Journal",
    x: 24,
    y: 65,
    why: "Where raw thoughts, operational flows, and initial wireframe sketches originate.",
    how: "Mapping edge cases and sketching information architecture before opening design software.",
    icon: <BookOpen size={18} />
  },
  {
    id: "headphones",
    name: "ANC Headphones",
    x: 72,
    y: 35,
    why: "Fosters deep focus zones required for untangling complex enterprise architecture.",
    how: "Paired with instrumental synthwave or lo-fi playlists during intense 4-hour design sprints.",
    icon: <Headphones size={18} />
  },
  {
    id: "coffee",
    name: "Filter Coffee",
    x: 82,
    y: 68,
    why: "Fueling morning clarity and late-night problem-solving momentum.",
    how: "A daily ritual that resets focus between high-context design iterations.",
    icon: <Coffee size={18} />
  },
  {
    id: "camera",
    name: "Mirrorless Camera",
    x: 18,
    y: 32,
    why: "Trains my eye to capture real-world lighting, perspective, and micro-framing.",
    how: "Documenting texture, contrast, and visual balance off the digital screen.",
    icon: <Camera size={18} />
  }
];

// ── Tools & Workflow ──
interface ToolItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  tags: string[];
}

const TOOLS_LIST: ToolItem[] = [
  {
    id: "figma",
    name: "Figma",
    icon: <PenTool size={18} color="#f24e1e" />,
    tags: ["Design Systems", "Component Libraries", "Variables", "Prototypes", "Developer Handoff"]
  },
  {
    id: "figjam",
    name: "FigJam",
    icon: <Compass size={18} color="#ffc700" />,
    tags: ["User Journey Mapping", "Affinity Diagrams", "Workflow Brainstorming", "Workshop Sprints"]
  },
  {
    id: "framer",
    name: "Framer",
    icon: <Frame size={18} color="#0055ff" />,
    tags: ["Interactive Prototypes", "Production Animations", "Responsive Web Layouts", "Micro-interactions"]
  },
  {
    id: "photoshop",
    name: "Photoshop",
    icon: <Sparkles size={18} color="#31a8ff" />,
    tags: ["Image Editing", "Asset Processing", "Visual Effects", "Texture & Lighting Mockups"]
  },
  {
    id: "illustrator",
    name: "Illustrator",
    icon: <Feather size={18} color="#ff9a00" />,
    tags: ["Vector System Icons", "Diagram Illustrations", "Brand Mark Scaling", "Custom Assets"]
  },
  {
    id: "premiere",
    name: "Premiere Pro",
    icon: <Tv size={18} color="#ea77ff" />,
    tags: ["Product Showcase Reels", "UX Motion Demos", "Walkthrough Videos", "Prototype Captures"]
  },
  {
    id: "cursor",
    name: "Cursor AI",
    icon: <Code size={18} color="#000000" />,
    tags: ["Next.js App Building", "CSS Modules", "Tailwind Integration", "AI Pair Programming"]
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: <Bot size={18} color="#10a37f" />,
    tags: ["Prompt Architecture", "UX Writing", "Content Structuring", "User Persona Synthesis"]
  },
  {
    id: "claude",
    name: "Claude",
    icon: <Terminal size={18} color="#d97757" />,
    tags: ["Complex Logic Parsing", "Technical Spec Analysis", "Strategic Copy Iteration"]
  }
];

// ── Inspiration Domains ──
interface InspirationItem {
  id: string;
  title: string;
  reflection: string;
  image: string;
}

const INSPIRATIONS: InspirationItem[] = [
  {
    id: "nature",
    title: "Nature",
    reflection: "Unforced hierarchy, organic balance, and harmonious natural color palettes.",
    image: "/images/overview/gear-guru-portrait.png"
  },
  {
    id: "architecture",
    title: "Architecture",
    reflection: "Spatial structure, load-bearing grid foundations, and proportional balance.",
    image: "/images/overview/Frame 2.jpg"
  },
  {
    id: "automotive",
    title: "Automotive",
    reflection: "High-performance ergonomic controls and aerodynamic, functional forms.",
    image: "/images/works/Gear Guru thumbnail.jpg"
  },
  {
    id: "consumer",
    title: "Consumer Products",
    reflection: "Tactile feedback, intuitive touchpoints, and uncompromised functional delight.",
    image: "/images/works/Safty thumbnail.jpg"
  },
  {
    id: "movies",
    title: "Movies & Cinema",
    reflection: "Visual storytelling, narrative pacing, and emotional scene lighting.",
    image: "/images/overview/Rehab Cover Photo (v).jpg"
  },
  {
    id: "industrial",
    title: "Industrial Design",
    reflection: "Durability, repairability, and uncompromised utility built for heavy usage.",
    image: "/images/works/Single Object thumbnail.jpg"
  }
];

// ── Rapid Fire Questions ──
interface RapidFireCard {
  question: string;
  answer: string;
  category: string;
}

const RAPID_FIRE_CARDS: RapidFireCard[] = [
  {
    question: "First Love",
    answer: "Technology — obviously.",
    category: "ORIGIN"
  },
  {
    question: "Plot Twist",
    answer: "Photography",
    category: "PIVOT"
  },
  {
    question: "Side Quest",
    answer: "Watches, diecast hunting, food, and—believe it or not—gym",
    category: "PURSUITS"
  },
  {
    question: "On Repeat",
    answer: "Aquariums",
    category: "RHYTHM"
  },
  {
    question: "Instant Mood",
    answer: "Did someone say trip or party!?",
    category: "VIBE"
  },
  {
    question: "Unpopular Take",
    answer: "No such thing as a harmless opinion. I’m not giving you topics.",
    category: "PERSPECTIVE"
  },
  {
    question: "If Not Design",
    answer: "Become a nepo kid, obviously.",
    category: "ALTERNATE"
  },
  {
    question: "Eventually",
    answer: "Depends on the timeline—and the story.",
    category: "HORIZON"
  }
];

// ── The questions I kept asking (Origin Curiosity Interaction) ──
interface CuriosityQuestion {
  id: string;
  number: string;
  question: string;
  hint: string;
  answer: string;
}

const CURIOSITY_QUESTIONS: CuriosityQuestion[] = [
  {
    id: "how-it-works",
    number: "01",
    question: "How does it work?",
    hint: "Curiosity beneath the surface",
    answer: "I was always interested in what happened beneath the surface — how phones, software, and interfaces worked together."
  },
  {
    id: "feel-better",
    number: "02",
    question: "Why does this feel better?",
    hint: "Intuition & product experience",
    answer: "I started paying attention not just to what technology could do, but why certain products felt easier and more intuitive to use."
  },
  {
    id: "simpler",
    number: "03",
    question: "Can it be simpler?",
    hint: "Clarity & usability decisions",
    answer: "That curiosity eventually shaped how I think about clarity, usability, and product decisions."
  }
];

export default function AboutPage() {
  const { openResume, openContact } = useModal();
  // Hero Ambient Glow State (anchored to Tier 1 "Curiosity")
  const heroRef = useRef<HTMLDivElement>(null);
  const curiosityRef = useRef<HTMLDivElement>(null);
  const [glowState, setGlowState] = useState<{
    x: number;
    y: number;
    opacity: number;
    radius: number;
  }>({
    x: 20,
    y: 22,
    opacity: 0.035,
    radius: 780
  });

  // ── The questions I kept asking (Origin Curiosity State) ──
  const [activeQuestionId, setActiveQuestionId] = useState<string>("how-it-works");

  // Rotating Status Pill Index
  const [statusIndex, setStatusIndex] = useState<number>(0);

  // Journey Active Milestone
  const [activeJourneyId, setActiveJourneyId] = useState<string>("ux");

  // Bento Active Interest
  const [activeBentoId, setActiveBentoId] = useState<string>("aquascaping");
  const activeBento = BENTO_INTERESTS.find((b) => b.id === activeBentoId) || BENTO_INTERESTS[0];

  // Selected Tool
  const [activeToolId, setActiveToolId] = useState<string>("figma");
  const activeTool = TOOLS_LIST.find((t) => t.id === activeToolId) || TOOLS_LIST[0];

  // Selected Inspiration
  const [activeInspireId, setActiveInspireId] = useState<string>("architecture");
  const activeInspire = INSPIRATIONS.find((i) => i.id === activeInspireId) || INSPIRATIONS[0];

  // Rapid Fire Flipped Cards State
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Mouse move handler for Hero Glow (weighted toward Curiosity headline)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const heroRect = heroRef.current.getBoundingClientRect();
    const cursorX = ((e.clientX - heroRect.left) / heroRect.width) * 100;
    const cursorY = ((e.clientY - heroRect.top) / heroRect.height) * 100;

    let anchorX = 20;
    let anchorY = 22;
    if (curiosityRef.current) {
      const curRect = curiosityRef.current.getBoundingClientRect();
      anchorX = ((curRect.left + curRect.width * 0.25 - heroRect.left) / heroRect.width) * 100;
      anchorY = ((curRect.top + curRect.height / 2 - heroRect.top) / heroRect.height) * 100;
    }

    // Weight glow position toward Curiosity headline (65% anchor pull, 35% cursor tracking)
    const weight = 0.35;
    const glowX = anchorX + (cursorX - anchorX) * weight;
    const glowY = anchorY + (cursorY - anchorY) * weight;

    // Euclidean distance in % space from cursor to Curiosity line
    const dx = cursorX - anchorX;
    const dy = cursorY - anchorY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Peak at 0.05 when near Curiosity; fades to subtle ambient ~0.018 across the rest of the hero
    const maxOpacity = 0.05;
    const minOpacity = 0.018;
    const proximity = Math.max(0, 1 - dist / 70);
    const opacity = minOpacity + (maxOpacity - minOpacity) * proximity;
    const radius = Math.round(720 + (1 - proximity) * 140);

    setGlowState({
      x: Number(glowX.toFixed(2)),
      y: Number(glowY.toFixed(2)),
      opacity: Number(opacity.toFixed(3)),
      radius
    });
  };

  const handleMouseLeave = () => {
    setGlowState((prev) => ({
      ...prev,
      opacity: 0.022,
      radius: 820
    }));
  };

  // Rotating Status Pill interval
  useEffect(() => {
    const timer = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_PILLS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={styles.page}>

      {/* ─── 01 HERO SECTION ─────────────────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={styles.heroSection}
      >
        {/* Soft Ambient Cursor Glow (weighted toward Curiosity) */}
        <div
          className={styles.ambientGlow}
          style={{
            background: `radial-gradient(${glowState.radius}px circle at ${glowState.x}% ${glowState.y}%, rgba(37, 99, 235, ${glowState.opacity}), transparent 65%)`
          }}
          aria-hidden="true"
        />

        <div className={styles.heroLeft}>
          {/* Three-Tier Staircase Headline */}
          <h1 className={styles.editorialHeadline}>
            <div ref={curiosityRef} className={styles.tier1Row}>
              <span className={styles.tier1Headline}>Curiosity</span>
              <span className={styles.tier1Subtext}>is what brought me here.</span>
            </div>

            <div className={styles.tier2Row}>
              <span className={styles.tier2Headline}>People</span>
              <span className={styles.tier2Subtext}>are why I stayed.</span>
            </div>

            <div className={styles.tier3Row}>
              <span className={styles.tier3Headline}>Designing products</span>
              <span className={styles.tier3Subtext}>is what I do.</span>
            </div>
          </h1>

          {/* Meaningful Secondary Supporting Block */}
          <div className={styles.heroSupportingBlock}>
            <span className={styles.heroEyebrow}>DESIGNING FOR CLARITY</span>
            <p className={styles.heroSupportingStatement}>
              Making complex products easier to understand, navigate, and use.
            </p>
          </div>
        </div>

        {/* Right Column Editorial Portrait */}
        <div className={styles.heroRight}>
          <div className={styles.portraitFrame}>
            <Image
              src="/images/about-editorial-portrait.jpg"
              alt="Nithinnaresh"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 1024px) 100vw, 360px"
              priority
              className={styles.editorialPortraitImg}
            />

            {/* Floating Status Badge (Editorial Annotation) */}
            <div className={styles.floatingStatusBadge}>
              <span className={styles.statusDot} />
              <span key={statusIndex} className={styles.statusTextFade}>
                {STATUS_PILLS[statusIndex]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 ORIGIN SECTION ─────────────────────────────────── */}
      <section className={styles.originSection}>
        <div className={styles.container}>
          <div className={styles.originGrid}>
            {/* Left Column Story */}
            <div className={`${styles.originLeft} ${styles.originContent}`}>
              <span className={styles.sectionLabel}>ORIGIN</span>
              <h2 className={styles.originHeadline}>
                Where curiosity began.
              </h2>

              <div className={`${styles.storyBlock} ${styles.storyParagraphs}`}>
                <p className={styles.storyParagraph}>
                  When I was around 13, I was lucky enough to grow up with computers and early smartphones. My dad's HTC — one of the first Android phones — fascinated me, and I started becoming curious about how technology actually worked.
                </p>

                <p className={styles.storyParagraph}>
                  I became the person people came to when they were choosing a phone or computer. I didn't just compare hardware or specifications — I cared about the software, how intuitive it felt, and what using it would actually be like.
                </p>

                <p className={styles.storyParagraph}>
                  That curiosity eventually led me to Visual Communication through my interest in photography and design. Then I discovered UI/UX, and it suddenly clicked: I wasn't just fascinated by technology. I was fascinated by how people experienced it.
                </p>
              </div>

              {/* Strongest Typographic Emphasis Final Statement */}
              <div className={styles.originEmphasisBlock}>
                <p className={styles.emphasisText}>
                  UX felt like the place where all of that curiosity finally came together.
                </p>
              </div>
            </div>

            {/* Right Column: "The questions I kept asking" Lightweight Interactive Component */}
            <div className={styles.originRight}>
              <div className={styles.questionsWidget}>
                <div className={styles.questionsHeader}>
                  <h3 className={styles.questionsTitle}>The questions I kept asking</h3>
                </div>

                <div className={styles.questionsList} role="region" aria-label="The questions I kept asking">
                  {CURIOSITY_QUESTIONS.map((item) => {
                    const isExpanded = activeQuestionId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`${styles.questionRow} ${isExpanded ? styles.questionRowActive : ""}`}
                      >
                        <button
                          type="button"
                          className={styles.questionTrigger}
                          onClick={() => setActiveQuestionId(isExpanded ? "" : item.id)}
                          aria-expanded={isExpanded}
                          aria-controls={`answer-${item.id}`}
                        >
                          <div className={styles.questionTriggerMain}>
                            <span className={styles.questionNumber}>{item.number}</span>
                            <div className={styles.questionLabelWrap}>
                              <span className={styles.questionLabel}>{item.question}</span>
                              <span className={styles.questionHint}>{item.hint}</span>
                            </div>
                          </div>
                          <span className={styles.questionChevron} aria-hidden="true">
                            <ChevronDown
                              size={16}
                              className={isExpanded ? styles.chevronRotated : ""}
                            />
                          </span>
                        </button>

                        <div
                          id={`answer-${item.id}`}
                          className={`${styles.questionAnswerBox} ${isExpanded ? styles.answerExpanded : ""}`}
                          aria-hidden={!isExpanded}
                        >
                          <div className={styles.questionAnswerInner}>
                            <p className={styles.questionAnswerText}>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 03 MY JOURNEY SECTION (Unified Vertical Timeline Across Story Cards) ──────── */}
      <section className={styles.journeySection}>
        <div className={styles.container}>
          <div className={styles.journeyHeader}>
            <span className={styles.sectionLabel}>MY JOURNEY</span>
            <h2 className={styles.sectionHeading}>Evolution of a Designer</h2>
          </div>

          {/* Continuous Vertical Timeline with Icon on Left and Years Inside Card */}
          <div className={styles.verticalTimeline}>
            {JOURNEY_ITEMS.map((item, idx) => {
              const isLast = idx === JOURNEY_ITEMS.length - 1;
              return (
                <div
                  key={item.id}
                  className={`${styles.timelinePhaseRow} ${
                    item.isTurningPoint ? styles.phaseTurningPoint : ""
                  } ${item.isActiveCurrent ? styles.phaseCurrent : ""}`}
                >
                  {/* Vertical Timeline Spine & Node on the Left */}
                  <div className={styles.timelineRail}>
                    <div
                      className={`${styles.timelineNode} ${
                        item.isTurningPoint ? styles.nodeTurningPoint : ""
                      } ${item.isActiveCurrent ? styles.nodeCurrent : ""}`}
                    >
                      {item.icon}
                    </div>
                    {!isLast && <div className={styles.timelineSpine} />}
                  </div>

                  {/* Phase Story Card on the Right with Years Inside */}
                  <div
                    className={`${styles.timelineCard} ${
                      item.isTurningPoint ? styles.cardTurningPoint : ""
                    } ${item.isActiveCurrent ? styles.cardCurrent : ""}`}
                  >
                    <div className={styles.cardContentCol}>
                      <div className={styles.cardHeaderRow}>
                        <span className={styles.cardNumber}>{item.number}</span>
                        <h3 className={styles.cardStageTitle}>{item.stage}</h3>
                        <span className={styles.cardYearPill}>{item.year}</span>
                        {item.isTurningPoint && (
                          <span className={styles.turningPointTag}>Crucial Realization</span>
                        )}
                        {item.isActiveCurrent && (
                          <span className={styles.currentActiveTag}>
                            <span className={styles.activeDot} />
                            Present Focus
                          </span>
                        )}
                      </div>
                      <p className={styles.cardSummary}>{item.summary}</p>
                    </div>

                    <div className={styles.cardTakeawayCol}>
                      <div className={styles.takeawayCallout}>
                        <span className={styles.takeawayLabel}>KEY TAKEAWAY</span>
                        <p className={styles.takeawayText}>{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 04 PERSONAL FOOTNOTE — THINGS THAT SHAPE MY THINKING ─── */}
      <section className={styles.interestsFootnoteSection}>
        <div className={styles.container}>
          <div className={styles.interestsFootnoteHeader}>
            <span className={styles.sectionLabel}>THINGS THAT SHAPE MY THINKING</span>
            <p className={styles.interestsFootnoteDesc}>
              Personal pursuits and observations that quietly inform my patience, composition, and systems perspective outside digital work.
            </p>
          </div>

          {/* Compact Footnote Micro-Grid (4 columns) */}
          <div className={styles.footnoteGrid}>
            {BENTO_INTERESTS.map((item) => {
              const isSelected = activeBentoId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveBentoId((prev) => (prev === item.id ? "" : item.id))}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") {
                      setActiveBentoId(item.id);
                    }
                  }}
                  className={`${styles.footnoteTile} ${
                    isSelected ? styles.footnoteTileActive : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveBentoId((prev) => (prev === item.id ? "" : item.id));
                    }
                  }}
                >
                  <div className={styles.footnoteTileThumb}>
                    {item.mediaType === "video" ? (
                      <video
                        src={item.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.footnoteThumbVideo}
                      />
                    ) : (
                      <Image
                        src={item.media}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="160px"
                      />
                    )}
                  </div>
                  <div className={styles.footnoteTileContent}>
                    <div className={styles.footnoteTileTop}>
                      <span className={styles.footnoteTileIcon}>{item.icon}</span>
                      <span className={styles.footnoteTileTitle}>{item.title}</span>
                    </div>
                    <p className={styles.footnoteTileTagline}>{item.tagline}</p>
                    {/* Mobile-only observation accordion displayed directly under the card */}
                    <div
                      className={`${styles.footnoteMobileObservationWrapper} ${
                        isSelected ? styles.obsOpen : ""
                      }`}
                      aria-hidden={!isSelected}
                    >
                      <div className={styles.footnoteMobileObservationInner}>
                        <div className={styles.footnoteMobileObservation}>
                          <span className={styles.footnoteMobileObsLabel}>Observation</span>
                          <p className={styles.footnoteMobileObsText}>“{item.reflection}”</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quiet Footnote Reflection Strip */}
          <div className={styles.footnoteReflectionCard}>
            <div key={activeBento.id} className={styles.footnoteQuoteGroup}>
              <span className={styles.footnoteQuoteAuthor}>OBSERVATION • {activeBento.title.toUpperCase()}</span>
              <p className={styles.footnoteReflectionQuote}>“{activeBento.reflection}”</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 05 TOOLS I DESIGN WITH SECTION ───────────────────── */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>TOOLS I DESIGN WITH</span>
          <h2 className={styles.sectionHeading}>Real-World Tooling & Stack</h2>

          {/* Interactive Tool Pills */}
          <div className={styles.toolsPillBar}>
            {TOOLS_LIST.map((tool) => {
              const isSelected = activeToolId === tool.id;
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => setActiveToolId(tool.id)}
                  className={`${styles.toolPill} ${
                    isSelected ? styles.toolPillActive : ""
                  }`}
                >
                  <span className={styles.toolIcon}>{tool.icon}</span>
                  <span>{tool.name}</span>
                </button>
              );
            })}
          </div>

          {/* Tool Real-World Usage Showcase */}
          <div className={styles.toolDetailCard}>
            <div key={activeTool.id} className={styles.fadeAnimation}>
              <div className={styles.toolHeaderRow}>
                <div className={styles.toolTitleGroup}>
                  <span className={styles.toolIconLarge}>{activeTool.icon}</span>
                  <h3 className={styles.toolName}>{activeTool.name}</h3>
                </div>
                <span className={styles.toolUsageLabel}>REAL-WORLD APPLICATION</span>
              </div>

              <div className={styles.tagsGrid}>
                {activeTool.tags.map((tag, idx) => (
                  <div key={idx} className={styles.usageTag}>
                    <CheckCircle2 size={14} color="#2563eb" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 08 RAPID FIRE SECTION ───────────────────────────── */}
      <section className={styles.rapidSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>RAPID FIRE</span>
          <h2 className={styles.sectionHeading}>Get to Know Me Quickly</h2>

          <div className={styles.rapidGrid}>
            {RAPID_FIRE_CARDS.map((card, idx) => {
              const isFlipped = !!flippedCards[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleFlip(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFlip(idx);
                    }
                  }}
                  className={`${styles.rapidCard} ${
                    isFlipped ? styles.rapidCardFlipped : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isFlipped}
                  aria-label={isFlipped ? `${card.question}: ${card.answer}. Click to flip back.` : `${card.question}. Click to reveal answer.`}
                >
                  <div className={styles.rapidCardInner}>
                    {/* Front */}
                    <div className={styles.rapidFront}>
                      <span className={styles.rapidCategory}>{card.category}</span>
                      <h4 className={styles.rapidQuestion}>{card.question}</h4>
                      <span className={styles.flipHint}>Click to reveal</span>
                    </div>

                    {/* Back */}
                    <div className={styles.rapidBack}>
                      <span className={styles.rapidCategory}>{card.category}</span>
                      <h4 className={styles.rapidAnswer}>{card.answer}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 09 FOOTER CTA SECTION ───────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} aria-hidden="true" />
        
        <div className={styles.container}>
          <div className={styles.ctaHeader}>
            <span className={styles.ctaLabel}>LET'S COLLABORATE</span>
            <h2 className={styles.ctaTitle}>
              Let&apos;s build products <br />
              <span className={styles.ctaHighlight}>people remember.</span>
            </h2>
            <p className={styles.ctaSubtext}>
              Currently open to new opportunities, enterprise SaaS consultations, and scalable design system partnerships.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <button 
              type="button" 
              onClick={openContact} 
              className={styles.btnPrimary}
              style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}
            >
              <span>Get in Touch</span>
              <Send size={16} className={styles.planeIcon} />
            </button>
            <button 
              type="button" 
              onClick={openResume} 
              className={styles.btnSecondary}
              style={{ cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <span>View Resume</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
