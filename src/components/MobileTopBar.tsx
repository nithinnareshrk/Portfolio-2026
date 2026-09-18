"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Mail, ArrowUpRight, Sparkles, LayoutGrid, Folder, User } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import styles from "./MobileTopBar.module.css";

export default function MobileTopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const { openResume, openContact } = useModal();

  // Track scroll progress for compact indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close drawer on route change or ESC
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.topBar}>
        <Link href="/" className={styles.brandGroup}>
          <div className={styles.avatarMini}>
            <Image
              src="/images/photo.jpg"
              alt="Nithinnaresh"
              width={36}
              height={36}
              className={styles.avatarImg}
              priority
            />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Nithinnaresh</span>
            <span className={styles.brandRole}>Product Designer</span>
          </div>
        </Link>

        <div className={styles.topRight}>
          <button
            type="button"
            className={`${styles.menuBtn} ${isOpen ? styles.menuBtnOpen : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <Menu size={20} strokeWidth={2.4} />
          </button>
        </div>

        {/* Compact Sticky Progress Bar Indicator */}
        <div className={styles.scrollProgressTrack} aria-hidden="true">
          <div
            className={styles.scrollProgressBar}
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {isOpen && (
        <div className={styles.drawerBackdrop} onClick={() => setIsOpen(false)}>
          <div className={styles.drawerCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <div className={styles.drawerProfileRow}>
                <div className={styles.drawerAvatar}>
                  <Image
                    src="/images/photo.jpg"
                    alt="Nithinnaresh"
                    width={48}
                    height={48}
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.drawerTitleGroup}>
                  <h3 className={styles.drawerTitle}>Nithinnaresh</h3>
                  <span className={styles.drawerRole}>Product Designer • Chennai, India</span>
                </div>
              </div>
              <button
                type="button"
                className={styles.drawerCloseBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close drawer"
              >
                <X size={20} strokeWidth={2.4} />
              </button>
            </div>

            {/* Quick Navigation Links */}
            <nav className={styles.drawerNav}>
              <Link
                href="/"
                className={`${styles.drawerNavLink} ${pathname === "/" ? styles.drawerNavActive : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <LayoutGrid size={18} />
                <span>Overview</span>
              </Link>
              <Link
                href="/works"
                className={`${styles.drawerNavLink} ${pathname.startsWith("/works") ? styles.drawerNavActive : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <Folder size={18} />
                <span>Works</span>
              </Link>
              <Link
                href="/about"
                className={`${styles.drawerNavLink} ${pathname === "/about" ? styles.drawerNavActive : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <User size={18} />
                <span>About Me</span>
              </Link>
            </nav>

            <div className={styles.drawerActions}>
              <button
                type="button"
                className={styles.actionPrimary}
                onClick={() => {
                  setIsOpen(false);
                  openResume();
                }}
              >
                <div className={styles.actionIconWrap}>
                  <FileText size={18} color="#2563eb" />
                </div>
                <div className={styles.actionText}>
                  <span className={styles.actionTitle}>View Resume</span>
                  <span className={styles.actionSub}>Preview & Download PDF</span>
                </div>
                <ArrowUpRight size={16} className={styles.actionArrow} />
              </button>

              <button
                type="button"
                className={styles.actionSecondary}
                onClick={() => {
                  setIsOpen(false);
                  openContact();
                }}
              >
                <div className={styles.actionIconWrap}>
                  <Mail size={18} color="#059669" />
                </div>
                <div className={styles.actionText}>
                  <span className={styles.actionTitle}>Get in Touch</span>
                  <span className={styles.actionSub}>nithinnareshrk@gmail.com</span>
                </div>
                <ArrowUpRight size={16} className={styles.actionArrow} />
              </button>
            </div>

            <div className={styles.drawerSocials}>
              <span className={styles.socialsLabel}>CONNECT</span>
              <div className={styles.socialsGrid}>
                <Link
                  href="https://www.linkedin.com/in/nithinnaresh-r-k-55a553274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </Link>
                <Link
                  href="https://www.behance.net/nithinnareshrk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <span>Behance</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            <div className={styles.drawerFooter}>
              <Sparkles size={14} color="#2563eb" />
              <span>Available for Full-time & Enterprise SaaS Roles</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
